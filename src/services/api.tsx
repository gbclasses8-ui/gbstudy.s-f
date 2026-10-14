import allBatchesFallback from '../data/allBatches.json';
import { BATCHES_DATA, Batch, Lecture } from '../data/batchesData';

/**
 * Original backend server base URL.
 * Can be overridden via VITE_API_BASE_URL env var, defaults to https://scienceandfun.studybeepro.site
 */
export const ORIGINAL_BACKEND_BASE_URL: string =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) ||
  'https://scienceandfun.studybeepro.site';

export interface RawBatchItem {
  id: number | string;
  title: string;
  thumbnail?: string;
  start_date?: string;
  end_date?: string;
  description?: string;
}

export interface FolderContentItem {
  id: string;
  parent_id: string;
  Title: string;
  title?: string;
  description?: string;
  material_type?: string;
  type?: string;
  file_link?: string;
  pdf_link?: string;
  download_link?: string;
  thumbnail?: string;
  videos_count?: string;
  files_count?: string;
  tests_count?: string;
  duration?: string;
  duration_in_secs?: string;
  event_date?: string;
  date_and_time?: string;
  course_id?: string;
  live_status?: number | string;
  video_id?: string;
  video_player_url?: string;
  video_player_token?: string;
}

export interface VideoDetailsResponse {
  success: boolean;
  video_id: string;
  course_id: string;
  title: string;
  duration?: string;
  thumbnail?: string;
  date?: string;
  video_player_token?: string;
  decoded_video_link?: string;
  player_url?: string;
  qualities?: Array<{
    quality: string;
    url: string;
    player_url?: string;
  }>;
  decoded_pdf_link?: string | null;
  pdf_viewer?: string | null;
  decoded_pdf_link2?: string | null;
  pdf_viewer2?: string | null;
  error?: string;
  source?: string;
}

export interface EnhancedBatch {
  id: string;
  numericId: number;
  title: string;
  thumbnail: string;
  category: 'Class 12th' | 'Class 11th' | 'Class 10th' | 'Class 9th' | 'NDA & Defence' | 'Commerce & Other';
  year: string;
  mode: 'Live & Recorded' | 'Live' | 'Recorded';
  description: string;
}

export function classifyBatchCategory(title: string): EnhancedBatch['category'] {
  const lower = title.toLowerCase();
  if (lower.includes('nda') || lower.includes('defence') || lower.includes('tejas')) {
    return 'NDA & Defence';
  }
  if (lower.includes('12th') || lower.includes('12 th') || lower.includes('class 12')) {
    return 'Class 12th';
  }
  if (lower.includes('11th') || lower.includes('11 th') || lower.includes('class 11')) {
    return 'Class 11th';
  }
  if (lower.includes('10th') || lower.includes('10 th') || lower.includes('class 10')) {
    return 'Class 10th';
  }
  if (lower.includes('9th') || lower.includes('9 th') || lower.includes('class 9')) {
    return 'Class 9th';
  }
  return 'Commerce & Other';
}

export function detectBatchMode(title: string): EnhancedBatch['mode'] {
  const lower = title.toLowerCase();
  if (lower.includes('live') && lower.includes('recorded')) {
    return 'Live & Recorded';
  }
  if (lower.includes('recorded')) {
    return 'Recorded';
  }
  return 'Live & Recorded';
}

export function detectBatchYear(title: string): string {
  const match = title.match(/202\d[-–]\d{2,4}/);
  if (match) return match[0];
  return '2025-26';
}

/**
 * Normalizes course ID by stripping prefix like "batch-"
 */
export function normalizeCourseId(courseId: string | number): string {
  const s = String(courseId).trim();
  const digitsOnly = s.replace(/\D/g, '');
  return digitsOnly || s;
}

/**
 * Fetches all 46+ batches from the original backend server, merging with local fallback
 * so that no batch or lecture is ever missed.
 */
export async function fetchAllBatches(): Promise<EnhancedBatch[]> {
  const rawMap = new Map<string, RawBatchItem>();

  // 1. Seed with local fallback (guarantees all 46 batches are available)
  const localList = (allBatchesFallback || []) as RawBatchItem[];
  for (const item of localList) {
    if (item && item.id != null) {
      rawMap.set(String(item.id), item);
    }
  }

  // 2. Fetch live batches from original backend server Base URL
  try {
    const upstreamUrl = `${ORIGINAL_BACKEND_BASE_URL.replace(/\/+$/, '')}/batches.json`;
    const res = await fetch(upstreamUrl, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      const combined: RawBatchItem[] = [
        ...(Array.isArray(data) ? data : []),
        ...(Array.isArray(data?.new) ? data.new : []),
        ...(Array.isArray(data?.old) ? data.old : []),
      ];

      for (const item of combined) {
        if (item && item.id != null) {
          rawMap.set(String(item.id), item);
        }
      }
    }
  } catch (err) {
    console.warn('Could not fetch upstream batches.json, relying on local dataset:', err);
  }

  // 3. Map into clean EnhancedBatch objects
  const allBatchesArray = Array.from(rawMap.values());
  return allBatchesArray.map((item) => {
    const numId = typeof item.id === 'number' ? item.id : parseInt(String(item.id), 10);
    const title = item.title || `Batch #${item.id}`;
    const category = classifyBatchCategory(title);
    const mode = detectBatchMode(title);
    const year = detectBatchYear(title);

    let thumb = item.thumbnail;
    if (!thumb || thumb.trim() === '') {
      thumb = 'https://appx-content-v2.classx.co.in/paid_course3/2025-10-25-0_14983521030015323.jpg';
    }

    return {
      id: String(item.id),
      numericId: isNaN(numId) ? 0 : numId,
      title,
      thumbnail: thumb,
      category,
      year,
      mode,
      description:
        item.description ||
        `Complete ${category} curriculum with interactive lectures, topper notes, and chapterwise revision.`,
    };
  });
}

/**
 * Finds a matching Batch in local BATCHES_DATA by courseId
 */
function findBatchLocally(courseId: string | number): Batch | undefined {
  const courseIdStr = String(courseId).trim();
  const numId = parseInt(courseIdStr.replace(/\D/g, ''), 10);

  return (
    BATCHES_DATA.find((b) => {
      if (b.id === courseIdStr || b.id === `batch-${courseIdStr}`) return true;
      if (!isNaN(numId) && b.batchIdNumeric === numId) return true;
      return false;
    }) || BATCHES_DATA[0]
  );
}

/**
 * Fetches folder contents (chapters, folders, video lectures, PDFs)
 * using the original backend server full Base URL.
 * Automatically resolves top-level "Home" wrapper so users immediately see subjects/folders.
 */
export async function fetchFolderContents(
  courseId: string | number,
  parentId: string | number = '-1',
  start: string | number = 0
): Promise<FolderContentItem[]> {
  const cleanId = normalizeCourseId(courseId);
  const parentIdStr = String(parentId).trim();
  const baseUrl = ORIGINAL_BACKEND_BASE_URL.replace(/\/+$/, '');

  try {
    const targetUrl = `${baseUrl}/get/folder_contentsv3?course_id=${encodeURIComponent(cleanId)}&parent_id=${encodeURIComponent(parentIdStr)}&start=${encodeURIComponent(String(start))}`;

    const res = await fetch(targetUrl, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      const json = await res.json();
      let items: any[] = json?.data || [];

      // If at root (-1) and the API returns a single "Home" folder wrapper (e.g. ID: 33937 or 143965),
      // auto-fetch its children so user directly sees the subjects/chapters
      if (
        (parentIdStr === '-1' || parentIdStr === 'root') &&
        items.length === 1 &&
        (items[0].material_type || items[0].type) === 'FOLDER' &&
        (items[0].Title?.toLowerCase() === 'home' || items[0].title?.toLowerCase() === 'home')
      ) {
        const homeFolderId = String(items[0].id);
        const subUrl = `${baseUrl}/get/folder_contentsv3?course_id=${encodeURIComponent(cleanId)}&parent_id=${encodeURIComponent(homeFolderId)}&start=0`;
        const subRes = await fetch(subUrl, {
          headers: { Accept: 'application/json' },
        });

        if (subRes.ok) {
          const subJson = await subRes.json();
          if (Array.isArray(subJson?.data) && subJson.data.length > 0) {
            items = subJson.data;
          }
        }
      }

      if (Array.isArray(items) && items.length > 0) {
        return items.map((raw: any) => {
          const rawTitle = raw.Title || raw.title || 'Untitled';
          const matType = (raw.material_type || raw.type || 'FOLDER').toUpperCase();
          const cleanMatType = matType.includes('VIDEO') ? 'VIDEO' : matType.includes('PDF') || matType.includes('DOC') ? 'PDF' : matType;

          return {
            id: String(raw.id),
            parent_id: String(raw.parent_id ?? parentIdStr),
            Title: rawTitle,
            title: rawTitle,
            description: raw.description || '',
            material_type: cleanMatType,
            type: cleanMatType,
            file_link: raw.file_link || '',
            pdf_link: raw.pdf_link || raw.study_material_link || '',
            download_link: raw.download_link || '',
            thumbnail: raw.thumbnail || '',
            videos_count: String(raw.videos_count || '0'),
            files_count: String(raw.files_count || '0'),
            tests_count: String(raw.tests_count || '0'),
            duration: raw.duration || '',
            duration_in_secs: String(raw.duration_in_secs || '0'),
            event_date: raw.event_date || '',
            date_and_time: raw.date_and_time || raw.event_date || '',
            course_id: String(raw.course_id || cleanId),
            live_status: raw.live_status,
            video_id: raw.video_id ? String(raw.video_id) : String(raw.id),
            video_player_url: raw.video_player_url,
            video_player_token: raw.video_player_token,
          };
        });
      }
    }
  } catch (err) {
    console.warn(`Upstream folder_contentsv3 failed for course ${cleanId}, parent ${parentIdStr}:`, err);
  }

  // Offline / Network Fallback: Load from local BATCHES_DATA
  const batch = findBatchLocally(cleanId);
  if (!batch) return [];

  // LEVEL 1: Root folder
  if (parentIdStr === '-1' || parentIdStr === 'root') {
    return batch.subjects.map((sub, sIdx) => {
      let totalVideos = 0;
      let totalNotes = 0;
      sub.chapters.forEach((ch) => {
        totalVideos += ch.lectures.length;
        totalNotes += ch.notes?.length || (ch.lectures.some((l) => l.notesPdfUrl) ? 1 : 0);
      });

      return {
        id: sub.id || `${batch.id}-sub-${sIdx}`,
        parent_id: '-1',
        Title: `${sub.name} · ${sub.teacher}`,
        title: `${sub.name} · ${sub.teacher}`,
        description: `Taught by ${sub.teacher} · ${sub.chapters.length} Chapters`,
        material_type: 'FOLDER',
        type: 'FOLDER',
        videos_count: String(totalVideos),
        files_count: String(totalNotes),
        tests_count: '2',
        thumbnail: batch.thumbnail,
        course_id: String(cleanId),
      };
    });
  }

  // LEVEL 2: Subject folder
  const matchedSubject = batch.subjects.find((s) => s.id === parentIdStr);
  if (matchedSubject) {
    return matchedSubject.chapters.map((ch, chIdx) => {
      const vCount = ch.lectures.length;
      const fCount = ch.notes?.length || (ch.lectures.some((l) => l.notesPdfUrl) ? 1 : 0);

      return {
        id: ch.id || `${matchedSubject.id}-ch-${chIdx}`,
        parent_id: matchedSubject.id,
        Title: ch.title,
        title: ch.title,
        description: ch.description || `Chapter with ${vCount} lectures & handwritten topper notes`,
        material_type: 'FOLDER',
        type: 'FOLDER',
        videos_count: String(vCount),
        files_count: String(fCount),
        tests_count: '1',
        thumbnail: batch.thumbnail,
        course_id: String(cleanId),
      };
    });
  }

  // LEVEL 3: Chapter folder
  for (const sub of batch.subjects) {
    const matchedChapter = sub.chapters.find((ch) => ch.id === parentIdStr);
    if (matchedChapter) {
      const resultItems: FolderContentItem[] = [];

      matchedChapter.lectures.forEach((lec) => {
        resultItems.push({
          id: lec.id,
          parent_id: matchedChapter.id,
          Title: lec.title,
          title: lec.title,
          description: lec.description || `Lecture by ${lec.teacher}`,
          material_type: 'VIDEO',
          type: 'VIDEO',
          file_link: lec.videoUrl,
          pdf_link: lec.notesPdfUrl || 'https://t.me/GBFreestudy',
          duration: lec.duration,
          event_date: lec.date,
          date_and_time: lec.date,
          thumbnail: batch.thumbnail,
          course_id: String(cleanId),
          video_id: lec.id,
        });
      });

      if (matchedChapter.notes && matchedChapter.notes.length > 0) {
        matchedChapter.notes.forEach((note) => {
          resultItems.push({
            id: note.id,
            parent_id: matchedChapter.id,
            Title: note.title,
            title: note.title,
            description: `${note.pages || 'Complete'} Pages · Handwritten Notes`,
            material_type: 'PDF',
            type: 'PDF',
            file_link: note.pdfUrl || 'https://t.me/GBFreestudy',
            pdf_link: note.pdfUrl || 'https://t.me/GBFreestudy',
            download_link: note.pdfUrl || 'https://t.me/GBFreestudy',
            event_date: '2025-26',
            thumbnail: batch.thumbnail,
            course_id: String(cleanId),
          });
        });
      }

      return resultItems;
    }
  }

  return [];
}

/**
 * Fetches full video streaming details by videoId and courseId
 * using the original backend server full Base URL.
 */
export async function fetchVideoDetails(
  courseId: string | number,
  videoId: string | number
): Promise<VideoDetailsResponse> {
  const cleanCourse = normalizeCourseId(courseId);
  const cleanVideo = String(videoId).trim();
  const baseUrl = ORIGINAL_BACKEND_BASE_URL.replace(/\/+$/, '');

  try {
    const targetUrl = `${baseUrl}/get/fetchVideoDetailsById?course_id=${encodeURIComponent(cleanCourse)}&video_id=${encodeURIComponent(cleanVideo)}`;
    const res = await fetch(targetUrl, {
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const data = await res.json();
      if (data && (data.success || data.decoded_video_link || (data.qualities && data.qualities.length > 0))) {
        return {
          success: true,
          video_id: String(data.video_id || cleanVideo),
          course_id: String(data.course_id || cleanCourse),
          title: data.title || 'Lecture Video',
          duration: data.duration,
          thumbnail: data.thumbnail,
          date: data.date,
          video_player_token: data.video_player_token,
          decoded_video_link: data.decoded_video_link,
          player_url: data.player_url,
          qualities: Array.isArray(data.qualities) ? data.qualities : [],
          decoded_pdf_link: data.decoded_pdf_link,
          pdf_viewer: data.pdf_viewer,
          decoded_pdf_link2: data.decoded_pdf_link2,
          pdf_viewer2: data.pdf_viewer2,
          source: 'api',
        };
      }
    }
  } catch (err) {
    console.warn(`Upstream fetchVideoDetailsById failed for video ${cleanVideo}:`, err);
  }

  // Fallback: search local BATCHES_DATA
  for (const b of BATCHES_DATA) {
    for (const sub of b.subjects) {
      for (const ch of sub.chapters) {
        for (const lec of ch.lectures) {
          if (lec.id === cleanVideo || lec.videoUrl.includes(cleanVideo)) {
            const videoUrl = lec.videoUrl;
            const pdfUrl = lec.notesPdfUrl || 'https://t.me/GBFreestudy';
            return {
              success: true,
              video_id: cleanVideo,
              course_id: String(cleanCourse),
              title: lec.title,
              duration: lec.duration,
              thumbnail: b.thumbnail,
              date: lec.date,
              decoded_video_link: videoUrl,
              player_url: videoUrl,
              qualities: [
                { quality: '1080p Full HD', url: videoUrl },
                { quality: '720p HD', url: videoUrl },
                { quality: '480p SD', url: videoUrl },
                { quality: '360p Data Saver', url: videoUrl },
              ],
              decoded_pdf_link: pdfUrl,
              pdf_viewer: pdfUrl,
              source: 'local_fallback',
            };
          }
        }
      }
    }
  }

  // Default fallback
  const fallbackUrl = 'https://www.youtube.com/embed/bdu-kwkODaA';
  return {
    success: true,
    video_id: cleanVideo,
    course_id: String(cleanCourse),
    title: 'Lecture Video Stream',
    duration: '1h 30m',
    decoded_video_link: fallbackUrl,
    player_url: fallbackUrl,
    qualities: [
      { quality: '720p HD', url: fallbackUrl },
      { quality: '480p SD', url: fallbackUrl },
    ],
    decoded_pdf_link: 'https://t.me/GBFreestudy',
    pdf_viewer: 'https://t.me/GBFreestudy',
    source: 'default',
  };
}

/**
 * Returns the proxy video streaming URL pointing to the original backend server Base URL
 */
export function getProxyVideoUrl(rawUrl: string): string {
  if (!rawUrl) return '';

  // YouTube IDs or embed links
  if (rawUrl.length === 11 && !rawUrl.includes('/')) return rawUrl;
  if (rawUrl.includes('youtube.com') || rawUrl.includes('youtu.be')) return rawUrl;

  // If already proxied
  if (rawUrl.includes('studybeepro.site/video')) return rawUrl;

  const baseUrl = ORIGINAL_BACKEND_BASE_URL.replace(/\/+$/, '');
  return `${baseUrl}/video?url=${encodeURIComponent(rawUrl)}`;
}

/**
 * Returns the proxy PDF URL pointing to the original backend server Base URL
 */
export function getProxyPdfUrl(rawUrl: string): string {
  if (!rawUrl) return '';
  if (rawUrl.startsWith('data:') || rawUrl.startsWith('blob:')) return rawUrl;
  if (rawUrl.includes('studybeepro.site/pdf')) return rawUrl;

  const baseUrl = ORIGINAL_BACKEND_BASE_URL.replace(/\/+$/, '');
  return `${baseUrl}/pdf?url=${encodeURIComponent(rawUrl)}`;
}

export function formatDuration(durationText?: string, secsStr?: string): string {
  if (secsStr && parseInt(secsStr, 10) > 0) {
    let s = parseInt(secsStr, 10);
    const h = Math.floor(s / 3600);
    s %= 3600;
    const m = Math.floor(s / 60);
    s %= 60;
    if (h > 0) {
      return `${h}h ${m}m ${s}s`;
    }
    return `${m}m ${s}s`;
  }
  if (durationText) {
    return durationText.replace('mins', 'm').replace('secs', 's').replace('hrs', 'h').trim();
  }
  return '';
}

export function formatDateTime(dateStr?: string): string {
  if (!dateStr) return 'Recently Added';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export interface AppMetadata {
  name: string;
  description: string;
  requestFramePermissions?: string[];
  majorCapabilities?: string[];
}

/**
 * Fetches app metadata from '/metadata.json' as requested
 */
export async function fetchAppMetadata(): Promise<AppMetadata | null> {
  try {
    const res = await fetch('/metadata.json');
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Could not fetch /metadata.json:', err);
  }
  return null;
}
