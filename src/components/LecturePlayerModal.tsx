import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  X, Play, Pause, RotateCcw, RotateCw, Maximize2, Minimize2,
  FileText, Send, Volume2, VolumeX, Settings,
  AlertTriangle, RefreshCw, Check, Clock, Calendar,
  Maximize, Monitor, Tv, ArrowLeft, ShieldCheck
} from 'lucide-react';
import Hls from 'hls.js';
import { fetchVideoDetails, getProxyVideoUrl, VideoDetailsResponse } from '../services/api';
import { BRAND_ASSETS, Lecture } from '../data/batchesData';

type VideoFitMode = 'contain' | 'cover' | 'fill';

interface LecturePlayerModalProps {
  courseId?: string;
  videoId?: string;
  title?: string;
  duration?: string;
  thumbnail?: string;
  lecture?: Lecture | null;
  onClose: () => void;
  onOpenPdf?: (pdfUrl: string, title: string) => void;
}

export const LecturePlayerModal: React.FC<LecturePlayerModalProps> = ({
  courseId,
  videoId,
  title: initialTitle,
  duration: initialDuration,
  thumbnail,
  lecture,
  onClose,
  onOpenPdf,
}) => {
  const [videoData, setVideoData] = useState<VideoDetailsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedQualityUrl, setSelectedQualityUrl] = useState<string>('');
  const [selectedQualityLabel, setSelectedQualityLabel] = useState<string>('Auto');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [durationSec, setDurationSec] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1.0);
  const [isTheater, setIsTheater] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState<boolean>(false);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  
  // Video fit mode: 'contain' (default/proportional), 'cover' (fills entire 16:9 frame, 0 black sidebars), 'fill' (stretched)
  const [fitMode, setFitMode] = useState<VideoFitMode>('contain');

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  const effectiveCourseId = courseId || '141';
  const effectiveVideoId = videoId || (lecture ? lecture.id : '');
  const displayTitle = videoData?.title || initialTitle || (lecture ? lecture.title : 'Lecture Video');

  // Load video details from backend API
  useEffect(() => {
    let isCancelled = false;

    async function loadDetails() {
      if (!effectiveVideoId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await fetchVideoDetails(effectiveCourseId, effectiveVideoId);
        if (!isCancelled) {
          setVideoData(data);

          // Select best quality URL
          if (data.qualities && data.qualities.length > 0) {
            const best = data.qualities[0];
            setSelectedQualityUrl(best.url);
            setSelectedQualityLabel(best.quality);
          } else if (data.decoded_video_link) {
            setSelectedQualityUrl(data.decoded_video_link);
            setSelectedQualityLabel('Default');
          }
          setLoading(false);
        }
      } catch (err: any) {
        if (!isCancelled) {
          console.warn('Could not fetch video details from API, using fallback:', err);
          if (lecture?.videoUrl) {
            setSelectedQualityUrl(lecture.videoUrl);
            setLoading(false);
          } else {
            setError(err?.message || 'Could not load video details. Stream link may be unavailable.');
            setLoading(false);
          }
        }
      }
    }

    loadDetails();

    return () => {
      isCancelled = true;
    };
  }, [effectiveCourseId, effectiveVideoId, lecture]);

  // Handle HLS stream mounting
  useEffect(() => {
    if (!selectedQualityUrl || !videoRef.current) return;

    // Check if it's YouTube
    const isYouTube = selectedQualityUrl.length === 11 || selectedQualityUrl.includes('youtube.com') || selectedQualityUrl.includes('youtu.be');
    if (isYouTube) return;

    const streamUrl = getProxyVideoUrl(selectedQualityUrl);
    const video = videoRef.current;
    const prevTime = video.currentTime;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        startPosition: prevTime > 0 ? prevTime : -1,
        enableWorker: true,
        lowLatencyMode: false,
      });

      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.warn('HLS Network error, recovering...');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.warn('HLS Media error, recovering...');
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      hlsRef.current = hls;
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      if (prevTime > 0) video.currentTime = prevTime;
      video.play().catch(() => {});
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [selectedQualityUrl]);

  // Sync fullscreen state with document fullscreen change events
  useEffect(() => {
    const handleFsChange = () => {
      const fsEl = document.fullscreenElement || (document as any).webkitFullscreenElement;
      setIsFullscreen(Boolean(fsEl));
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  // Auto-hide overlay controls during playback after inactivity
  const showControlsTemporarily = useCallback(() => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setControlsVisible(false);
        setShowSettingsMenu(false);
      }, 3500);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      setControlsVisible(true);
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    } else {
      showControlsTemporarily();
    }
  }, [isPlaying, showControlsTemporarily]);

  // Video element event handlers
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDurationSec(videoRef.current.duration);
      }
    }
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
    }
    showControlsTemporarily();
  };

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0, 
        Math.min(videoRef.current.duration || 99999, videoRef.current.currentTime + seconds)
      );
    }
    showControlsTemporarily();
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
    setShowSettingsMenu(false);
  };

  const handleQualityChange = (qUrl: string, qLabel: string) => {
    setSelectedQualityUrl(qUrl);
    setSelectedQualityLabel(qLabel);
    setShowSettingsMenu(false);
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleToggleFullscreen = async () => {
    try {
      const fsEl = document.fullscreenElement || (document as any).webkitFullscreenElement;
      if (!fsEl) {
        const el = containerRef.current;
        if (!el) return;
        if (el.requestFullscreen) {
          await el.requestFullscreen();
        } else if ((el as any).webkitRequestFullscreen) {
          await (el as any).webkitRequestFullscreen();
        } else if (videoRef.current && (videoRef.current as any).webkitEnterFullscreen) {
          // iOS Safari fallback
          (videoRef.current as any).webkitEnterFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen toggle failed:', err);
    }
  };

  const cycleFitMode = () => {
    setFitMode(prev => {
      if (prev === 'contain') return 'cover';
      if (prev === 'cover') return 'fill';
      return 'contain';
    });
    showControlsTemporarily();
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        handleTogglePlay();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handleSkip(-10);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleSkip(10);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsTheater(prev => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        handleToggleMute();
      } else if (e.key === 'Escape') {
        if (showSettingsMenu) {
          setShowSettingsMenu(false);
        } else if (!isFullscreen) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isFullscreen, showSettingsMenu, onClose]);

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    if (h > 0) {
      return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Check if YouTube link
  const ytMatch = selectedQualityUrl.match(/(?:embed\/|v=|vi\/|youtu\.be\/|\/v\/)([a-zA-Z0-9_-]{11})/);
  const isYouTube = Boolean(ytMatch) || (selectedQualityUrl.length === 11 && !selectedQualityUrl.includes('http'));
  const youtubeId = ytMatch ? ytMatch[1] : (isYouTube ? selectedQualityUrl : null);

  const attachedPdf = videoData?.decoded_pdf_link || videoData?.pdf_viewer;

  // Video object-fit CSS mapping
  const objectFitClass = fitMode === 'cover' 
    ? 'object-cover' 
    : fitMode === 'fill' 
      ? 'object-fill' 
      : 'object-contain';

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200 ${
        isFullscreen ? 'p-0' : 'p-0 sm:p-3 md:p-5'
      }`}
    >
      <div
        ref={containerRef}
        onMouseMove={showControlsTemporarily}
        onTouchStart={showControlsTemporarily}
        className={`w-full bg-[#12071d] flex flex-col transition-all duration-300 ${
          isFullscreen 
            ? 'fixed inset-0 w-screen h-screen max-w-none max-h-none rounded-none border-0 m-0 z-[100] bg-black' 
            : isTheater 
              ? 'max-w-[96vw] xl:max-w-[92vw] rounded-none sm:rounded-2xl border-0 sm:border border-pink-500/40 shadow-2xl shadow-pink-900/60 my-auto overflow-hidden' 
              : 'max-w-5xl rounded-none sm:rounded-2xl border-0 sm:border border-pink-500/40 shadow-2xl shadow-pink-900/60 my-auto overflow-hidden'
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar (Hidden in Fullscreen when controls are inactive) */}
        <div 
          className={`flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 bg-[#180829] border-b border-pink-500/25 transition-opacity duration-300 shrink-0 ${
            isFullscreen ? (controlsVisible ? 'opacity-100 z-30' : 'opacity-0 pointer-events-none') : 'opacity-100'
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-sm shadow-pink-500 animate-pulse shrink-0" />
            <span className="text-xs font-black text-pink-400 tracking-wider uppercase truncate">
              GB STUDY · HD Video Player
            </span>
            <span className="hidden md:inline-block text-[11px] text-slate-400 truncate max-w-md">
              · {displayTitle}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Fit Mode Toggle Button */}
            <button
              onClick={cycleFitMode}
              title={`Video Aspect Fit: ${fitMode.toUpperCase()} (Click to toggle)`}
              className="px-2.5 py-1 rounded-lg bg-[#250f3b] text-pink-300 hover:text-white border border-pink-500/30 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Monitor className="w-3.5 h-3.5 text-pink-400" />
              <span className="capitalize">{fitMode}</span>
            </button>

            {/* Attached PDF button (Tablet/Desktop) */}
            {attachedPdf && onOpenPdf && (
              <button
                onClick={() => onOpenPdf(attachedPdf, `${displayTitle} - Notes`)}
                className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 hover:text-white border border-pink-500/30 text-xs font-bold transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Notes PDF</span>
              </button>
            )}

            {/* Theater Mode Toggle (Tablet/Desktop) */}
            {!isFullscreen && (
              <button
                onClick={() => setIsTheater(!isTheater)}
                className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#250f3b] text-pink-300 hover:text-white border border-pink-500/30 transition-colors cursor-pointer"
                title="Toggle Theater Mode (T)"
              >
                <Tv className="w-3.5 h-3.5" />
                <span>{isTheater ? 'Default' : 'Theater'}</span>
              </button>
            )}

            {/* Native Fullscreen Button */}
            <button
              onClick={handleToggleFullscreen}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              title={isFullscreen ? 'Exit Fullscreen (Esc or F)' : 'Enter Fullscreen (F)'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4 text-pink-400" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-pink-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Close Player (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Canvas Container */}
        <div 
          className={`relative w-full max-w-full bg-black flex items-center justify-center overflow-hidden group select-none ${
            isFullscreen 
              ? 'flex-1 h-full aspect-auto' 
              : 'aspect-video w-full'
          }`}
          style={{ width: '100%', maxWidth: '100%' }}
        >
          {loading && (
            <div className="flex flex-col items-center justify-center gap-3 text-pink-400 p-6 text-center">
              <div className="w-12 h-12 rounded-full border-3 border-pink-500 border-t-transparent animate-spin" />
              <p className="text-xs font-bold text-white tracking-wide">Connecting HD Video Stream...</p>
              <p className="text-[11px] text-slate-400">Loading highest resolution stream</p>
            </div>
          )}

          {error && !loading && (
            <div className="flex flex-col items-center justify-center p-6 text-center max-w-md">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-3 border border-red-500/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Stream Error</h4>
              <p className="text-slate-400 text-xs mb-4">{error}</p>
              <a
                href={BRAND_ASSETS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-md shadow-pink-600/30 flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get Stream on Telegram Channel</span>
              </a>
            </div>
          )}

          {/* YouTube Player */}
          {isYouTube && youtubeId && !loading && (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={displayTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}

          {/* Direct HLS HTML5 Video Player */}
          {!isYouTube && !error && (
            <>
              <video
                ref={videoRef}
                playsInline
                webkit-playsinline="true"
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={handleTogglePlay}
                poster={thumbnail}
                className={`w-full h-full ${objectFitClass} cursor-pointer transition-all duration-200 ${
                  loading ? 'hidden' : 'block'
                }`}
                style={{ width: '100%', maxWidth: '100%' }}
              />

              {/* Big Center Play Overlay Button when paused */}
              {!isPlaying && !loading && (
                <button
                  onClick={handleTogglePlay}
                  aria-label="Play Video"
                  className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pink-600/90 hover:bg-pink-500 text-white flex items-center justify-center shadow-2xl shadow-pink-600/60 backdrop-blur-sm cursor-pointer transition-transform hover:scale-110 z-10"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-1" />
                </button>
              )}

              {/* Floating Quick Fit Hint Pill on Mobile / Tablet */}
              {fitMode !== 'contain' && !loading && (
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/75 text-[10px] font-bold text-pink-300 border border-pink-500/30 backdrop-blur-sm pointer-events-none z-10 uppercase tracking-wider">
                  Mode: {fitMode} (Zero Borders)
                </div>
              )}

              {/* Custom Overlay Controls */}
              {!loading && (
                <div 
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-2.5 sm:p-4 transition-opacity duration-300 z-20 ${
                    controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Progress Slider */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                    <input
                      type="range"
                      min={0}
                      max={durationSec || 100}
                      step={0.25}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 sm:h-2 bg-white/20 hover:bg-white/30 rounded-lg appearance-none cursor-pointer accent-pink-500 focus:outline-none"
                    />
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between text-white text-xs">
                    {/* Left Controls: Play/Pause, Rewind, Forward, Volume, Time */}
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      <button
                        onClick={handleTogglePlay}
                        className="p-1 sm:p-1.5 hover:text-pink-400 transition-colors cursor-pointer"
                        title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
                      >
                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                      </button>

                      <button
                        onClick={() => handleSkip(-10)}
                        className="p-1 hover:text-pink-400 transition-colors cursor-pointer text-slate-300"
                        title="Rewind 10s (Left Arrow)"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleSkip(10)}
                        className="p-1 hover:text-pink-400 transition-colors cursor-pointer text-slate-300"
                        title="Forward 10s (Right Arrow)"
                      >
                        <RotateCw className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5 ml-1 sm:ml-2 text-slate-300">
                        <button onClick={handleToggleMute} className="hover:text-pink-400 cursor-pointer" title="Mute (M)">
                          {isMuted ? <VolumeX className="w-4 h-4 text-pink-400" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.05}
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-12 sm:w-16 h-1 bg-white/20 rounded accent-pink-500 cursor-pointer hidden sm:block"
                        />
                      </div>

                      <div className="text-[11px] font-mono text-slate-300 ml-1">
                        <span className="text-pink-400 font-bold">{formatTime(currentTime)}</span> / <span>{formatTime(durationSec)}</span>
                      </div>
                    </div>

                    {/* Right Controls: Fit Toggle, Quality/Speed Menu, Fullscreen */}
                    <div className="flex items-center gap-1.5 sm:gap-2 relative">
                      {/* Fit Mode Toggle in Overlay */}
                      <button
                        onClick={cycleFitMode}
                        className="px-2 py-1 rounded bg-white/10 hover:bg-pink-600/30 text-[11px] font-bold text-pink-300 hover:text-white border border-pink-500/30 hidden xs:flex items-center gap-1 cursor-pointer"
                        title="Aspect Ratio: Fit / Cover / Fill"
                      >
                        <Monitor className="w-3 h-3 text-pink-400" />
                        <span className="capitalize">{fitMode}</span>
                      </button>

                      {/* Quality & Speed Menu Button */}
                      <div className="relative">
                        <button
                          onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                          className="px-2 py-1 rounded bg-white/10 hover:bg-pink-600/30 text-[11px] font-bold text-pink-300 hover:text-white border border-pink-500/30 flex items-center gap-1 cursor-pointer"
                          title="Quality & Speed Settings"
                        >
                          <Settings className="w-3 h-3" />
                          <span>{selectedQualityLabel}</span>
                          <span className="text-slate-400">·</span>
                          <span>{playbackSpeed}x</span>
                        </button>

                        {/* Settings Popup Menu */}
                        {showSettingsMenu && (
                          <div className="absolute bottom-full right-0 mb-2 w-52 rounded-xl bg-[#1c0c2e] border border-pink-500/40 p-3 shadow-2xl z-30">
                            {/* Fit Mode Selector */}
                            <div className="mb-3">
                              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block mb-1">
                                Video Fit (Remove Black Borders)
                              </span>
                              <div className="grid grid-cols-3 gap-1">
                                {(['contain', 'cover', 'fill'] as VideoFitMode[]).map((mode) => (
                                  <button
                                    key={mode}
                                    onClick={() => {
                                      setFitMode(mode);
                                      setShowSettingsMenu(false);
                                    }}
                                    className={`py-1 rounded text-center text-xs font-semibold capitalize cursor-pointer ${
                                      fitMode === mode
                                        ? 'bg-pink-600 text-white'
                                        : 'text-slate-300 hover:bg-white/10'
                                    }`}
                                  >
                                    {mode}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Qualities */}
                            {videoData?.qualities && videoData.qualities.length > 0 && (
                              <div className="mb-3">
                                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block mb-1">
                                  Video Quality
                                </span>
                                <div className="space-y-1 max-h-36 overflow-y-auto">
                                  {videoData.qualities.map((q) => (
                                    <button
                                      key={q.quality}
                                      onClick={() => handleQualityChange(q.url, q.quality)}
                                      className={`w-full flex items-center justify-between px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                                        selectedQualityLabel === q.quality
                                          ? 'bg-pink-600 text-white'
                                          : 'text-slate-300 hover:bg-white/10'
                                      }`}
                                    >
                                      <span>{q.quality}</span>
                                      {selectedQualityLabel === q.quality && <Check className="w-3 h-3" />}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Playback Speeds */}
                            <div>
                              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block mb-1">
                                Playback Speed
                              </span>
                              <div className="grid grid-cols-3 gap-1">
                                {[0.5, 0.75, 1.0, 1.25, 1.5, 2.0].map((s) => (
                                  <button
                                    key={s}
                                    onClick={() => handleSpeedChange(s)}
                                    className={`py-1 rounded text-center text-xs font-semibold cursor-pointer ${
                                      playbackSpeed === s
                                        ? 'bg-pink-600 text-white'
                                        : 'text-slate-300 hover:bg-white/10'
                                    }`}
                                  >
                                    {s}x
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Fullscreen Toggle */}
                      <button
                        onClick={handleToggleFullscreen}
                        className="p-1 hover:text-pink-400 transition-colors cursor-pointer"
                        title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                      >
                        {isFullscreen ? <Minimize2 className="w-4 h-4 text-pink-400" /> : <Maximize2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Video Info & Controls Panel (Adaptive: Mobile Stack / Tablet & Desktop Grid) */}
        {!isFullscreen && (
          <div className="p-4 sm:p-5 bg-[#170926] border-t border-pink-500/20 shrink-0">
            {/* Title & Metadata Row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1.5">
                  <span className="text-pink-400 font-extrabold uppercase tracking-wide">
                    GB STUDY Free Lecture
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-pink-400" />
                    <span>{videoData?.date || initialDuration || 'Full Length HD'}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>100% Free Access</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                  {displayTitle}
                </h3>
              </div>

              {/* Action Buttons: PDF Notes & Telegram */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                {attachedPdf && onOpenPdf && (
                  <button
                    onClick={() => onOpenPdf(attachedPdf, `${displayTitle} - Notes`)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-pink-600/30 cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Open Lecture Notes (PDF)</span>
                  </button>
                )}

                <a
                  href={BRAND_ASSETS.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#250f3b] hover:bg-pink-900/40 text-pink-300 hover:text-white border border-pink-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4 text-pink-400" />
                  <span>Join Official Telegram</span>
                </a>
              </div>
            </div>

            {/* Mobile Quick Control Chips: Speed, Fit, Quality */}
            <div className="mt-4 pt-3 border-t border-pink-500/15 flex flex-wrap items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-1 text-slate-400">
                <span className="font-semibold text-[11px]">Fit Mode:</span>
                {(['contain', 'cover', 'fill'] as VideoFitMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setFitMode(m)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold capitalize cursor-pointer transition-colors ${
                      fitMode === m 
                        ? 'bg-pink-600 text-white' 
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {m === 'contain' ? 'Fit' : m === 'cover' ? 'Fill' : 'Stretch'}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="font-semibold text-[11px]">Speed:</span>
                {[1.0, 1.25, 1.5, 2.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSpeedChange(s)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                      playbackSpeed === s
                        ? 'bg-pink-600 text-white'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
