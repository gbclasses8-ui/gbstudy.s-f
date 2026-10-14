export interface Lecture {
  id: string;
  title: string;
  lectureNumber: number;
  duration: string;
  videoUrl: string;
  description: string;
  teacher: string;
  date: string;
  notesTitle?: string;
  notesPages?: string;
  notesPdfUrl?: string;
}

export interface NoteDoc {
  id: string;
  title: string;
  chapterTitle: string;
  subjectName: string;
  className: string;
  batchTitle: string;
  type: 'Handwritten Notes' | 'Formula Sheet' | 'DPP & Solutions' | 'NCERT Solutions' | 'Question Bank';
  pages: number;
  fileSize: string;
  date: string;
  previewPoints: string[];
  pdfUrl: string;
}

export interface Chapter {
  id: string;
  title: string;
  order: number;
  description: string;
  lectures: Lecture[];
  notes: NoteDoc[];
}

export interface Subject {
  id: string;
  name: string;
  teacher: string;
  iconName: string;
  chapters: Chapter[];
}

export interface Batch {
  id: string;
  batchIdNumeric: number;
  title: string;
  subtitle: string;
  classCategory: 'Class 12th' | 'Class 11th' | 'Class 10th' | 'Class 9th' | 'NDA & Defence' | 'Commerce & CA' | 'JEE & CUET';
  academicYear: string;
  tag: string;
  thumbnail: string;
  bannerGradient: string;
  description: string;
  features: string[];
  subjects: Subject[];
}

export const BRAND_ASSETS = {
  logo: 'https://i.ibb.co/0R7qc34v/1093.jpg',
  brandName: 'GB STUDY',
  telegramUrl: 'https://t.me/GBFreestudy',
  tagline: 'All Batches, Real Lectures & Handwritten Notes · 100% Free',
};

export const BATCHES_DATA: Batch[] = [
{
  "id": "batch-141",
  "batchIdNumeric": 141,
  "title": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2025-26",
  "tag": "Crash Course",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-10-25-0_14983521030015323.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-141-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-141-phy-ch1",
          "title": "Laws of Motion & Friction",
          "order": 1,
          "description": "Newton's 3 Laws, Free Body Diagrams, Pulley-Block, Friction & Banking of Roads",
          "lectures": [
            {
              "id": "batch-141-phy-ch1-l1",
              "title": "L-01: Laws of Motion & Friction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/bdu-kwkODaA",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Laws of Motion & Friction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-141-phy-ch1-l2",
              "title": "L-02: Laws of Motion & Friction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/TVttS4KL7Vg",
              "description": "Master problem-solving session for Laws of Motion & Friction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-141-phy-ch1-1",
              "title": "Laws of Motion & Friction - Complete Handwritten Master Notes",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Laws of Motion & Friction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-141-phy-ch1-2",
              "title": "Laws of Motion & Friction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Laws of Motion & Friction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-141-phy-ch2",
          "title": "Motion in a Straight Line & Plane",
          "order": 2,
          "description": "Calculus Derivations for Equations of Motion, Projectile Motion Derivations",
          "lectures": [
            {
              "id": "batch-141-phy-ch2-l1",
              "title": "L-01: Motion in a Straight Line & Plane - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion in a Straight Line & Plane with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-141-phy-ch2-l2",
              "title": "L-02: Motion in a Straight Line & Plane - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion in a Straight Line & Plane: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-141-phy-ch2-1",
              "title": "Motion in a Straight Line & Plane - Complete Handwritten Master Notes",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion in a Straight Line & Plane",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-141-phy-ch2-2",
              "title": "Motion in a Straight Line & Plane - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion in a Straight Line & Plane",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-141-phy-ch3",
          "title": "Gravitation",
          "order": 3,
          "description": "Kepler's Laws, Variation of g, Gravitational Potential, Escape & Orbital Velocity",
          "lectures": [
            {
              "id": "batch-141-phy-ch3-l1",
              "title": "L-01: Gravitation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-141-phy-ch3-l2",
              "title": "L-02: Gravitation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-141-phy-ch3-1",
              "title": "Gravitation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-141-phy-ch3-2",
              "title": "Gravitation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-141-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-141-che-ch1",
          "title": "Some Basic Concepts of Chemistry",
          "order": 1,
          "description": "Mole Concept, Stoichiometry, Empirical & Molecular Formula, Limiting Reagent",
          "lectures": [
            {
              "id": "batch-141-che-ch1-l1",
              "title": "L-01: Some Basic Concepts of Chemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Some Basic Concepts of Chemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-141-che-ch1-l2",
              "title": "L-02: Some Basic Concepts of Chemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Master problem-solving session for Some Basic Concepts of Chemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-141-che-ch1-1",
              "title": "Some Basic Concepts of Chemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Some Basic Concepts of Chemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-141-che-ch1-2",
              "title": "Some Basic Concepts of Chemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Some Basic Concepts of Chemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-141-che-ch2",
          "title": "Chemical Thermodynamics",
          "order": 2,
          "description": "First & Second Law, Enthalpy of Reactions, Hess's Law, Entropy, Gibbs Free Energy",
          "lectures": [
            {
              "id": "batch-141-che-ch2-l1",
              "title": "L-01: Chemical Thermodynamics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Thermodynamics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-141-che-ch2-l2",
              "title": "L-02: Chemical Thermodynamics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Chemical Thermodynamics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-141-che-ch2-1",
              "title": "Chemical Thermodynamics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Thermodynamics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-141-che-ch2-2",
              "title": "Chemical Thermodynamics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Thermodynamics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-140",
  "batchIdNumeric": 140,
  "title": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-06-28-0_8328474112187058.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-140-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-140-phy-ch1",
          "title": "Laws of Motion & Friction",
          "order": 1,
          "description": "Newton's 3 Laws, Free Body Diagrams, Pulley-Block, Friction & Banking of Roads",
          "lectures": [
            {
              "id": "batch-140-phy-ch1-l1",
              "title": "L-01: Laws of Motion & Friction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/bdu-kwkODaA",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Laws of Motion & Friction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-140-phy-ch1-l2",
              "title": "L-02: Laws of Motion & Friction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/TVttS4KL7Vg",
              "description": "Master problem-solving session for Laws of Motion & Friction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-140-phy-ch1-1",
              "title": "Laws of Motion & Friction - Complete Handwritten Master Notes",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Laws of Motion & Friction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-140-phy-ch1-2",
              "title": "Laws of Motion & Friction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Laws of Motion & Friction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-140-phy-ch2",
          "title": "Motion in a Straight Line & Plane",
          "order": 2,
          "description": "Calculus Derivations for Equations of Motion, Projectile Motion Derivations",
          "lectures": [
            {
              "id": "batch-140-phy-ch2-l1",
              "title": "L-01: Motion in a Straight Line & Plane - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion in a Straight Line & Plane with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-140-phy-ch2-l2",
              "title": "L-02: Motion in a Straight Line & Plane - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion in a Straight Line & Plane: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-140-phy-ch2-1",
              "title": "Motion in a Straight Line & Plane - Complete Handwritten Master Notes",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion in a Straight Line & Plane",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-140-phy-ch2-2",
              "title": "Motion in a Straight Line & Plane - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion in a Straight Line & Plane",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-140-phy-ch3",
          "title": "Gravitation",
          "order": 3,
          "description": "Kepler's Laws, Variation of g, Gravitational Potential, Escape & Orbital Velocity",
          "lectures": [
            {
              "id": "batch-140-phy-ch3-l1",
              "title": "L-01: Gravitation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-140-phy-ch3-l2",
              "title": "L-02: Gravitation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-140-phy-ch3-1",
              "title": "Gravitation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-140-phy-ch3-2",
              "title": "Gravitation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-140-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-140-che-ch1",
          "title": "Some Basic Concepts of Chemistry",
          "order": 1,
          "description": "Mole Concept, Stoichiometry, Empirical & Molecular Formula, Limiting Reagent",
          "lectures": [
            {
              "id": "batch-140-che-ch1-l1",
              "title": "L-01: Some Basic Concepts of Chemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Some Basic Concepts of Chemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-140-che-ch1-l2",
              "title": "L-02: Some Basic Concepts of Chemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Master problem-solving session for Some Basic Concepts of Chemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-140-che-ch1-1",
              "title": "Some Basic Concepts of Chemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Some Basic Concepts of Chemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-140-che-ch1-2",
              "title": "Some Basic Concepts of Chemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Some Basic Concepts of Chemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-140-che-ch2",
          "title": "Chemical Thermodynamics",
          "order": 2,
          "description": "First & Second Law, Enthalpy of Reactions, Hess's Law, Entropy, Gibbs Free Energy",
          "lectures": [
            {
              "id": "batch-140-che-ch2-l1",
              "title": "L-01: Chemical Thermodynamics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Thermodynamics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-140-che-ch2-l2",
              "title": "L-02: Chemical Thermodynamics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Chemical Thermodynamics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-140-che-ch2-1",
              "title": "Chemical Thermodynamics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Thermodynamics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-140-che-ch2-2",
              "title": "Chemical Thermodynamics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Thermodynamics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-139",
  "batchIdNumeric": 139,
  "title": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-02-26-0.5812886158447033.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-139-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-139-phy-ch1",
          "title": "Laws of Motion & Friction",
          "order": 1,
          "description": "Newton's 3 Laws, Free Body Diagrams, Pulley-Block, Friction & Banking of Roads",
          "lectures": [
            {
              "id": "batch-139-phy-ch1-l1",
              "title": "L-01: Laws of Motion & Friction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/bdu-kwkODaA",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Laws of Motion & Friction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-139-phy-ch1-l2",
              "title": "L-02: Laws of Motion & Friction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/TVttS4KL7Vg",
              "description": "Master problem-solving session for Laws of Motion & Friction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-139-phy-ch1-1",
              "title": "Laws of Motion & Friction - Complete Handwritten Master Notes",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Laws of Motion & Friction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-139-phy-ch1-2",
              "title": "Laws of Motion & Friction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Laws of Motion & Friction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-139-phy-ch2",
          "title": "Motion in a Straight Line & Plane",
          "order": 2,
          "description": "Calculus Derivations for Equations of Motion, Projectile Motion Derivations",
          "lectures": [
            {
              "id": "batch-139-phy-ch2-l1",
              "title": "L-01: Motion in a Straight Line & Plane - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion in a Straight Line & Plane with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-139-phy-ch2-l2",
              "title": "L-02: Motion in a Straight Line & Plane - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion in a Straight Line & Plane: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-139-phy-ch2-1",
              "title": "Motion in a Straight Line & Plane - Complete Handwritten Master Notes",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion in a Straight Line & Plane",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-139-phy-ch2-2",
              "title": "Motion in a Straight Line & Plane - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion in a Straight Line & Plane",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-139-phy-ch3",
          "title": "Gravitation",
          "order": 3,
          "description": "Kepler's Laws, Variation of g, Gravitational Potential, Escape & Orbital Velocity",
          "lectures": [
            {
              "id": "batch-139-phy-ch3-l1",
              "title": "L-01: Gravitation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-139-phy-ch3-l2",
              "title": "L-02: Gravitation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-139-phy-ch3-1",
              "title": "Gravitation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-139-phy-ch3-2",
              "title": "Gravitation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-139-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-139-che-ch1",
          "title": "Some Basic Concepts of Chemistry",
          "order": 1,
          "description": "Mole Concept, Stoichiometry, Empirical & Molecular Formula, Limiting Reagent",
          "lectures": [
            {
              "id": "batch-139-che-ch1-l1",
              "title": "L-01: Some Basic Concepts of Chemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Some Basic Concepts of Chemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-139-che-ch1-l2",
              "title": "L-02: Some Basic Concepts of Chemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Master problem-solving session for Some Basic Concepts of Chemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-139-che-ch1-1",
              "title": "Some Basic Concepts of Chemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Some Basic Concepts of Chemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-139-che-ch1-2",
              "title": "Some Basic Concepts of Chemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Some Basic Concepts of Chemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-139-che-ch2",
          "title": "Chemical Thermodynamics",
          "order": 2,
          "description": "First & Second Law, Enthalpy of Reactions, Hess's Law, Entropy, Gibbs Free Energy",
          "lectures": [
            {
              "id": "batch-139-che-ch2-l1",
              "title": "L-01: Chemical Thermodynamics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Thermodynamics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-139-che-ch2-l2",
              "title": "L-02: Chemical Thermodynamics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Chemical Thermodynamics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-139-che-ch2-1",
              "title": "Chemical Thermodynamics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Thermodynamics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-139-che-ch2-2",
              "title": "Chemical Thermodynamics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Thermodynamics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-364",
  "batchIdNumeric": 364,
  "title": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-09-17-0_6612155530323691.jpeg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-364-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-364-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-364-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-364-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-364-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-364-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-364-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-364-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-364-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-364-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-364-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-364-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-364-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-364-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-364-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-364-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-364-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-364-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-364-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-364-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-364-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-364-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-364-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-342",
  "batchIdNumeric": 342,
  "title": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-06-20-0_24425931329838868.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-342-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-342-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-342-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-342-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-342-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-342-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-342-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-342-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-342-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-342-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-342-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-342-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-342-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-342-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-342-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-342-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-342-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-342-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-342-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-342-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-342-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-342-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-342-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-276",
  "batchIdNumeric": 276,
  "title": "Class 12th Science Recorded batch 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2025-26",
  "tag": "Recorded VOD",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-21-0_28427127403808294.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-276-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-276-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-276-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-276-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-276-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-276-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-276-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-276-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-276-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-276-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-276-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-276-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-276-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-276-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-276-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-276-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-276-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-276-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-276-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-276-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-276-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-276-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-276-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-253",
  "batchIdNumeric": 253,
  "title": "Class 12th Science (Ranker Batch) 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-20-0_9651131924081328.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-253-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-253-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-253-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-253-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-253-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-253-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-253-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-253-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-253-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-253-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-253-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-253-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-253-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-253-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-253-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-253-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-253-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-253-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-253-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-253-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-253-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-253-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-253-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th Science (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-262",
  "batchIdNumeric": 262,
  "title": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "NDA & Defence",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-03-07-0_40974571851521613.jpeg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-262-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-262-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-262-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-262-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-262-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-262-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-262-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-262-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-262-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-262-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-262-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-262-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-262-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-262-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-262-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-262-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-262-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-262-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-262-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-262-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-262-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-262-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 3.0 Only NDA for Class 11th with LWS Kit(2 Year) Course",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-331",
  "batchIdNumeric": 331,
  "title": "Class 9th (Newton 2.0 Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 9th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-06-20-0_8798076719327129.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-331-sci",
      "name": "Science (Physics, Chem, Bio)",
      "teacher": "Ashu Sir",
      "iconName": "Atom",
      "chapters": [
        {
          "id": "batch-331-sci-ch1",
          "title": "Gravitation & Floatation",
          "order": 1,
          "description": "Universal Law of Gravitation, Free Fall, Mass vs Weight, Archimedes' Principle",
          "lectures": [
            {
              "id": "batch-331-sci-ch1-l1",
              "title": "L-01: Gravitation & Floatation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation & Floatation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-331-sci-ch1-l2",
              "title": "L-02: Gravitation & Floatation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation & Floatation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-331-sci-ch1-1",
              "title": "Gravitation & Floatation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 2.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation & Floatation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-331-sci-ch1-2",
              "title": "Gravitation & Floatation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 2.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation & Floatation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-331-sci-ch2",
          "title": "Force and Laws of Motion",
          "order": 2,
          "description": "Newton's 3 Laws of Motion, Momentum, Inertia, Recoil of Gun",
          "lectures": [
            {
              "id": "batch-331-sci-ch2-l1",
              "title": "L-01: Force and Laws of Motion - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Force and Laws of Motion with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-331-sci-ch2-l2",
              "title": "L-02: Force and Laws of Motion - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Master problem-solving session for Force and Laws of Motion: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-331-sci-ch2-1",
              "title": "Force and Laws of Motion - Complete Handwritten Master Notes",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 2.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Force and Laws of Motion",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-331-sci-ch2-2",
              "title": "Force and Laws of Motion - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 2.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Force and Laws of Motion",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-331-sci-ch3",
          "title": "Motion & Graphical Analysis",
          "order": 3,
          "description": "Distance vs Displacement, 3 Equations of Motion, v-t Graphs",
          "lectures": [
            {
              "id": "batch-331-sci-ch3-l1",
              "title": "L-01: Motion & Graphical Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion & Graphical Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-331-sci-ch3-l2",
              "title": "L-02: Motion & Graphical Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion & Graphical Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-331-sci-ch3-1",
              "title": "Motion & Graphical Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 2.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion & Graphical Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-331-sci-ch3-2",
              "title": "Motion & Graphical Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 2.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion & Graphical Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-216",
  "batchIdNumeric": 216,
  "title": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "NDA & Defence",
  "academicYear": "2026-27",
  "tag": "Foundation",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-06-27-0_9293467249880442.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-216-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-216-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-216-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-216-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-216-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-216-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-216-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-216-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-216-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-216-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-216-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-216-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-216-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-216-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-216-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-216-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-216-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-216-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-216-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-216-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-216-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-216-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Plus Foundation Batch NDA II 2026 Class 11th",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-336",
  "batchIdNumeric": 336,
  "title": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-06-20-0_09055196097774265.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-336-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-336-phy-ch1",
          "title": "Laws of Motion & Friction",
          "order": 1,
          "description": "Newton's 3 Laws, Free Body Diagrams, Pulley-Block, Friction & Banking of Roads",
          "lectures": [
            {
              "id": "batch-336-phy-ch1-l1",
              "title": "L-01: Laws of Motion & Friction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/bdu-kwkODaA",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Laws of Motion & Friction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-336-phy-ch1-l2",
              "title": "L-02: Laws of Motion & Friction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/TVttS4KL7Vg",
              "description": "Master problem-solving session for Laws of Motion & Friction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-336-phy-ch1-1",
              "title": "Laws of Motion & Friction - Complete Handwritten Master Notes",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Laws of Motion & Friction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-336-phy-ch1-2",
              "title": "Laws of Motion & Friction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Laws of Motion & Friction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-336-phy-ch2",
          "title": "Motion in a Straight Line & Plane",
          "order": 2,
          "description": "Calculus Derivations for Equations of Motion, Projectile Motion Derivations",
          "lectures": [
            {
              "id": "batch-336-phy-ch2-l1",
              "title": "L-01: Motion in a Straight Line & Plane - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion in a Straight Line & Plane with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-336-phy-ch2-l2",
              "title": "L-02: Motion in a Straight Line & Plane - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion in a Straight Line & Plane: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-336-phy-ch2-1",
              "title": "Motion in a Straight Line & Plane - Complete Handwritten Master Notes",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion in a Straight Line & Plane",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-336-phy-ch2-2",
              "title": "Motion in a Straight Line & Plane - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion in a Straight Line & Plane",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-336-phy-ch3",
          "title": "Gravitation",
          "order": 3,
          "description": "Kepler's Laws, Variation of g, Gravitational Potential, Escape & Orbital Velocity",
          "lectures": [
            {
              "id": "batch-336-phy-ch3-l1",
              "title": "L-01: Gravitation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-336-phy-ch3-l2",
              "title": "L-02: Gravitation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-336-phy-ch3-1",
              "title": "Gravitation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-336-phy-ch3-2",
              "title": "Gravitation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-336-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-336-che-ch1",
          "title": "Some Basic Concepts of Chemistry",
          "order": 1,
          "description": "Mole Concept, Stoichiometry, Empirical & Molecular Formula, Limiting Reagent",
          "lectures": [
            {
              "id": "batch-336-che-ch1-l1",
              "title": "L-01: Some Basic Concepts of Chemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Some Basic Concepts of Chemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-336-che-ch1-l2",
              "title": "L-02: Some Basic Concepts of Chemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Master problem-solving session for Some Basic Concepts of Chemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-336-che-ch1-1",
              "title": "Some Basic Concepts of Chemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Some Basic Concepts of Chemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-336-che-ch1-2",
              "title": "Some Basic Concepts of Chemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Some Basic Concepts of Chemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-336-che-ch2",
          "title": "Chemical Thermodynamics",
          "order": 2,
          "description": "First & Second Law, Enthalpy of Reactions, Hess's Law, Entropy, Gibbs Free Energy",
          "lectures": [
            {
              "id": "batch-336-che-ch2-l1",
              "title": "L-01: Chemical Thermodynamics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Thermodynamics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-336-che-ch2-l2",
              "title": "L-02: Chemical Thermodynamics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Chemical Thermodynamics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-336-che-ch2-1",
              "title": "Chemical Thermodynamics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Thermodynamics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-336-che-ch2-2",
              "title": "Chemical Thermodynamics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Thermodynamics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-274",
  "batchIdNumeric": 274,
  "title": "Class 11th Science Recorded batch 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2025-26",
  "tag": "Recorded VOD",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-21-0_602038418755309.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-274-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-274-phy-ch1",
          "title": "Laws of Motion & Friction",
          "order": 1,
          "description": "Newton's 3 Laws, Free Body Diagrams, Pulley-Block, Friction & Banking of Roads",
          "lectures": [
            {
              "id": "batch-274-phy-ch1-l1",
              "title": "L-01: Laws of Motion & Friction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/bdu-kwkODaA",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Laws of Motion & Friction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-274-phy-ch1-l2",
              "title": "L-02: Laws of Motion & Friction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/TVttS4KL7Vg",
              "description": "Master problem-solving session for Laws of Motion & Friction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-274-phy-ch1-1",
              "title": "Laws of Motion & Friction - Complete Handwritten Master Notes",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Laws of Motion & Friction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-274-phy-ch1-2",
              "title": "Laws of Motion & Friction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Laws of Motion & Friction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-274-phy-ch2",
          "title": "Motion in a Straight Line & Plane",
          "order": 2,
          "description": "Calculus Derivations for Equations of Motion, Projectile Motion Derivations",
          "lectures": [
            {
              "id": "batch-274-phy-ch2-l1",
              "title": "L-01: Motion in a Straight Line & Plane - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion in a Straight Line & Plane with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-274-phy-ch2-l2",
              "title": "L-02: Motion in a Straight Line & Plane - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion in a Straight Line & Plane: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-274-phy-ch2-1",
              "title": "Motion in a Straight Line & Plane - Complete Handwritten Master Notes",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion in a Straight Line & Plane",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-274-phy-ch2-2",
              "title": "Motion in a Straight Line & Plane - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion in a Straight Line & Plane",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-274-phy-ch3",
          "title": "Gravitation",
          "order": 3,
          "description": "Kepler's Laws, Variation of g, Gravitational Potential, Escape & Orbital Velocity",
          "lectures": [
            {
              "id": "batch-274-phy-ch3-l1",
              "title": "L-01: Gravitation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-274-phy-ch3-l2",
              "title": "L-02: Gravitation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-274-phy-ch3-1",
              "title": "Gravitation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-274-phy-ch3-2",
              "title": "Gravitation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-274-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-274-che-ch1",
          "title": "Some Basic Concepts of Chemistry",
          "order": 1,
          "description": "Mole Concept, Stoichiometry, Empirical & Molecular Formula, Limiting Reagent",
          "lectures": [
            {
              "id": "batch-274-che-ch1-l1",
              "title": "L-01: Some Basic Concepts of Chemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Some Basic Concepts of Chemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-274-che-ch1-l2",
              "title": "L-02: Some Basic Concepts of Chemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Master problem-solving session for Some Basic Concepts of Chemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-274-che-ch1-1",
              "title": "Some Basic Concepts of Chemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Some Basic Concepts of Chemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-274-che-ch1-2",
              "title": "Some Basic Concepts of Chemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Some Basic Concepts of Chemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-274-che-ch2",
          "title": "Chemical Thermodynamics",
          "order": 2,
          "description": "First & Second Law, Enthalpy of Reactions, Hess's Law, Entropy, Gibbs Free Energy",
          "lectures": [
            {
              "id": "batch-274-che-ch2-l1",
              "title": "L-01: Chemical Thermodynamics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Thermodynamics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-274-che-ch2-l2",
              "title": "L-02: Chemical Thermodynamics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Chemical Thermodynamics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-274-che-ch2-1",
              "title": "Chemical Thermodynamics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Thermodynamics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-274-che-ch2-2",
              "title": "Chemical Thermodynamics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Thermodynamics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-339",
  "batchIdNumeric": 339,
  "title": "Class 12th (Ranker 2.0 Commerce Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-06-20-0_4724361240184607.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-339-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-339-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-339-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-339-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-339-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-339-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-339-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-339-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-339-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-339-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-339-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-339-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-339-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-339-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-339-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-339-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-339-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Ranker 2.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-193",
  "batchIdNumeric": 193,
  "title": "Class 12th (Science) Recorded batch 2024-25",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2024-25",
  "tag": "Recorded VOD",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-03-12-0.22793587027611428.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-193-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-193-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-193-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-193-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-193-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-193-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-193-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-193-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-193-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-193-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-193-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-193-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-193-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-193-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-193-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-193-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-193-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-193-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-193-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-193-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-193-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-193-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-193-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Science) Recorded batch 2024-25",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-122",
  "batchIdNumeric": 122,
  "title": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2025-26",
  "tag": "Crash Course",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-10-25-0_6282934801127082.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-122-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-122-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-122-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-122-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-122-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-122-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-122-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-122-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-122-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-122-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-122-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-122-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-122-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-122-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-122-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-122-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-122-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-122-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-122-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-122-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-122-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-122-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-122-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker CRASH COURSE SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-121",
  "batchIdNumeric": 121,
  "title": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-06-28-0_20123484654034274.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-121-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-121-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-121-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-121-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-121-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-121-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-121-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-121-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-121-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-121-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-121-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-121-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-121-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-121-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-121-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-121-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-121-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-121-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-121-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-121-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-121-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-121-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-121-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-80",
  "batchIdNumeric": 80,
  "title": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-02-26-0.8937829945384954.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-80-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-80-phy-ch1",
          "title": "Electric Charges and Fields",
          "order": 1,
          "description": "Coulomb's Law, Electric Dipole, Gauss Theorem & 3 Derivations",
          "lectures": [
            {
              "id": "batch-80-phy-ch1-l1",
              "title": "L-01: Electric Charges and Fields - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electric Charges and Fields with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-phy-ch1-l2",
              "title": "L-02: Electric Charges and Fields - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for Electric Charges and Fields: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electric Charges and Fields Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-phy-ch1-1",
              "title": "Electric Charges and Fields - Complete Handwritten Master Notes",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electric Charges and Fields",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-phy-ch1-2",
              "title": "Electric Charges and Fields - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electric Charges and Fields",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electric Charges and Fields",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-80-phy-ch2",
          "title": "Current Electricity & Circuits",
          "order": 2,
          "description": "Drift Velocity, Ohm's Law, Kirchhoff's Rules, Wheatstone Bridge",
          "lectures": [
            {
              "id": "batch-80-phy-ch2-l1",
              "title": "L-01: Current Electricity & Circuits - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Current Electricity & Circuits with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-phy-ch2-l2",
              "title": "L-02: Current Electricity & Circuits - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Current Electricity & Circuits: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Current Electricity & Circuits Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-phy-ch2-1",
              "title": "Current Electricity & Circuits - Complete Handwritten Master Notes",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Current Electricity & Circuits",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-phy-ch2-2",
              "title": "Current Electricity & Circuits - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Current Electricity & Circuits",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Current Electricity & Circuits",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-80-phy-ch3",
          "title": "Moving Charges and Magnetism",
          "order": 3,
          "description": "Biot-Savart Law, Ampere's Law, Solenoid, Magnetic Dipole",
          "lectures": [
            {
              "id": "batch-80-phy-ch3-l1",
              "title": "L-01: Moving Charges and Magnetism - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/MS6MtjQMWuU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Moving Charges and Magnetism with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-phy-ch3-l2",
              "title": "L-02: Moving Charges and Magnetism - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Moving Charges and Magnetism: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Moving Charges and Magnetism Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-phy-ch3-1",
              "title": "Moving Charges and Magnetism - Complete Handwritten Master Notes",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Moving Charges and Magnetism",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-phy-ch3-2",
              "title": "Moving Charges and Magnetism - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Moving Charges and Magnetism",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Moving Charges and Magnetism",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-80-phy-ch4",
          "title": "Ray Optics and Optical Instruments",
          "order": 4,
          "description": "Refraction, Lens Maker Formula, Prism Formula, Telescope & Microscope",
          "lectures": [
            {
              "id": "batch-80-phy-ch4-l1",
              "title": "L-01: Ray Optics and Optical Instruments - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/OK7Tlssm3UM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Ray Optics and Optical Instruments with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-phy-ch4-l2",
              "title": "L-02: Ray Optics and Optical Instruments - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/mpbZfBYpVs4",
              "description": "Master problem-solving session for Ray Optics and Optical Instruments: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Ray Optics and Optical Instruments Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-phy-ch4-1",
              "title": "Ray Optics and Optical Instruments - Complete Handwritten Master Notes",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Ray Optics and Optical Instruments",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-phy-ch4-2",
              "title": "Ray Optics and Optical Instruments - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Ray Optics and Optical Instruments",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Ray Optics and Optical Instruments",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-80-phy-ch5",
          "title": "Wave Optics & Semiconductors",
          "order": 5,
          "description": "Huygens Principle, Interference, YDSE, p-n Junction Diode, Rectifiers",
          "lectures": [
            {
              "id": "batch-80-phy-ch5-l1",
              "title": "L-01: Wave Optics & Semiconductors - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Y2BrCETu9EU",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Wave Optics & Semiconductors with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-phy-ch5-l2",
              "title": "L-02: Wave Optics & Semiconductors - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Master problem-solving session for Wave Optics & Semiconductors: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Wave Optics & Semiconductors Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-phy-ch5-1",
              "title": "Wave Optics & Semiconductors - Complete Handwritten Master Notes",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 28,
              "fileSize": "5.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Wave Optics & Semiconductors",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-phy-ch5-2",
              "title": "Wave Optics & Semiconductors - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Wave Optics & Semiconductors",
              "subjectName": "Physics",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "3.8 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Wave Optics & Semiconductors",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-80-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-80-che-ch1",
          "title": "Solutions",
          "order": 1,
          "description": "Raoult's Law, Colligative Properties, Van't Hoff Factor, Henry's Law",
          "lectures": [
            {
              "id": "batch-80-che-ch1-l1",
              "title": "L-01: Solutions - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Solutions with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-che-ch1-l2",
              "title": "L-02: Solutions - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/xw3C6_ZDDBo",
              "description": "Master problem-solving session for Solutions: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Solutions Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-che-ch1-1",
              "title": "Solutions - Complete Handwritten Master Notes",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Solutions",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-che-ch1-2",
              "title": "Solutions - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Solutions",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Solutions",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-80-che-ch2",
          "title": "Electrochemistry",
          "order": 2,
          "description": "Nernst Equation, Kohlrausch's Law, Galvanic Cells, Fuel Cells, Batteries",
          "lectures": [
            {
              "id": "batch-80-che-ch2-l1",
              "title": "L-01: Electrochemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Electrochemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-che-ch2-l2",
              "title": "L-02: Electrochemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/nPQ-mvIl_bQ",
              "description": "Master problem-solving session for Electrochemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electrochemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-che-ch2-1",
              "title": "Electrochemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electrochemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-che-ch2-2",
              "title": "Electrochemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electrochemistry",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electrochemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-80-che-ch3",
          "title": "Chemical Kinetics",
          "order": 3,
          "description": "Rate of Reaction, Order & Molecularity, Integrated Rate Equations, Arrhenius Theory",
          "lectures": [
            {
              "id": "batch-80-che-ch3-l1",
              "title": "L-01: Chemical Kinetics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Kinetics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-che-ch3-l2",
              "title": "L-02: Chemical Kinetics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/WuARVOxfRNQ",
              "description": "Master problem-solving session for Chemical Kinetics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Kinetics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-che-ch3-1",
              "title": "Chemical Kinetics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Kinetics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-che-ch3-2",
              "title": "Chemical Kinetics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Kinetics",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Kinetics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-80-che-ch4",
          "title": "Organic Reactions & Mechanisms",
          "order": 4,
          "description": "Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids, Amines",
          "lectures": [
            {
              "id": "batch-80-che-ch4-l1",
              "title": "L-01: Organic Reactions & Mechanisms - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Organic Reactions & Mechanisms with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-80-che-ch4-l2",
              "title": "L-02: Organic Reactions & Mechanisms - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Organic Reactions & Mechanisms: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Organic Reactions & Mechanisms Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-80-che-ch4-1",
              "title": "Organic Reactions & Mechanisms - Complete Handwritten Master Notes",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Organic Reactions & Mechanisms",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-80-che-ch4-2",
              "title": "Organic Reactions & Mechanisms - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Organic Reactions & Mechanisms",
              "subjectName": "Chemistry",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker SCIENCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Organic Reactions & Mechanisms",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-361",
  "batchIdNumeric": 361,
  "title": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 10th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-09-17-0_5598848456680443.jpeg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-361-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-361-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-361-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-361-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-361-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-361-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-361-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-361-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-361-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-361-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-361-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-361-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-361-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-361-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-361-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-361-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-361-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-361-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-361-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-361-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-361-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-361-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 3.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-261",
  "batchIdNumeric": 261,
  "title": "CUET 2027 Exam (GAT with Language English)",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "JEE & CUET",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-20-0_8957545527545566.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-261-core",
      "name": "Target Exam Core Curriculum",
      "teacher": "Senior Faculty",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-261-tar-ch1",
          "title": "High Yield Exam Topics & PYQs",
          "order": 1,
          "description": "Top 100 questions, elimination techniques, speed shortcuts",
          "lectures": [
            {
              "id": "batch-261-tar-ch1-l1",
              "title": "L-01: High Yield Exam Topics & PYQs - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Senior Faculty. Deep conceptual explanation of High Yield Exam Topics & PYQs with real demonstrations, derivations, and board question patterns.",
              "teacher": "Senior Faculty",
              "date": "Full Session VOD",
              "notesTitle": "High Yield Exam Topics & PYQs Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-261-tar-ch1-l2",
              "title": "L-02: High Yield Exam Topics & PYQs - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for High Yield Exam Topics & PYQs: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Senior Faculty.",
              "teacher": "Senior Faculty",
              "date": "Full Session VOD",
              "notesTitle": "High Yield Exam Topics & PYQs Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-261-tar-ch1-1",
              "title": "High Yield Exam Topics & PYQs - Complete Handwritten Master Notes",
              "chapterTitle": "High Yield Exam Topics & PYQs",
              "subjectName": "Target Curriculum",
              "className": "JEE & CUET",
              "batchTitle": "CUET 2027 Exam (GAT with Language English)",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for High Yield Exam Topics & PYQs",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-261-tar-ch1-2",
              "title": "High Yield Exam Topics & PYQs - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "High Yield Exam Topics & PYQs",
              "subjectName": "Target Curriculum",
              "className": "JEE & CUET",
              "batchTitle": "CUET 2027 Exam (GAT with Language English)",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for High Yield Exam Topics & PYQs",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-243",
  "batchIdNumeric": 243,
  "title": "Class 12th (RANKER CRASH COURSE COMMERCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2025-26",
  "tag": "Crash Course",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-11-04-0_5533736509505744.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-243-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-243-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-243-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-243-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-243-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (RANKER CRASH COURSE COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-243-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (RANKER CRASH COURSE COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-243-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-243-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-243-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-243-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (RANKER CRASH COURSE COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-243-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (RANKER CRASH COURSE COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-243-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-243-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-243-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-243-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-243-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (RANKER CRASH COURSE COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-243-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (RANKER CRASH COURSE COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-125",
  "batchIdNumeric": 125,
  "title": "Class 12th (Board Ranker 2.0 COMMERCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-06-28-0_16760147439375483.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-125-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-125-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-125-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-125-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-125-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-125-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-125-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-125-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-125-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-125-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-125-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-125-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-125-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-125-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-125-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-125-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-125-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker 2.0 COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-119",
  "batchIdNumeric": 119,
  "title": "Class 12th (Board Ranker COMMERCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-02-26-0.5864015383646155.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-119-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-119-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-119-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-119-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-119-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-119-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-119-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-119-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-119-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-119-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-119-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-119-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-119-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-119-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-119-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-119-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-119-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th (Board Ranker COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-247",
  "batchIdNumeric": 247,
  "title": "Class 10th (Foundation Batch) 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 10th",
  "academicYear": "2026-27",
  "tag": "Foundation",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-20-0_6040230161451233.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-247-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-247-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-247-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-247-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-247-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-247-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-247-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-247-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-247-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-247-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-247-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-247-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-247-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-247-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-247-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-247-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-247-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-247-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-247-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-247-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-247-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-247-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-263",
  "batchIdNumeric": 263,
  "title": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "NDA & Defence",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-03-07-0_7274619151482027.jpeg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-263-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-263-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-263-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-263-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-263-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-263-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-263-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-263-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-263-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-263-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-263-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-263-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-263-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-263-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-263-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-263-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-263-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-263-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-263-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-263-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-263-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-263-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Udaan 4.0 NDA for Class 12th with LWS Kit (1 Year) Course 2026-2027",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-245",
  "batchIdNumeric": 245,
  "title": "Class 9th (Newton Batch) 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 9th",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-20-0_03513664482559742.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-245-sci",
      "name": "Science (Physics, Chem, Bio)",
      "teacher": "Ashu Sir",
      "iconName": "Atom",
      "chapters": [
        {
          "id": "batch-245-sci-ch1",
          "title": "Gravitation & Floatation",
          "order": 1,
          "description": "Universal Law of Gravitation, Free Fall, Mass vs Weight, Archimedes' Principle",
          "lectures": [
            {
              "id": "batch-245-sci-ch1-l1",
              "title": "L-01: Gravitation & Floatation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation & Floatation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-245-sci-ch1-l2",
              "title": "L-02: Gravitation & Floatation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation & Floatation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-245-sci-ch1-1",
              "title": "Gravitation & Floatation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation & Floatation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-245-sci-ch1-2",
              "title": "Gravitation & Floatation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation & Floatation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-245-sci-ch2",
          "title": "Force and Laws of Motion",
          "order": 2,
          "description": "Newton's 3 Laws of Motion, Momentum, Inertia, Recoil of Gun",
          "lectures": [
            {
              "id": "batch-245-sci-ch2-l1",
              "title": "L-01: Force and Laws of Motion - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Force and Laws of Motion with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-245-sci-ch2-l2",
              "title": "L-02: Force and Laws of Motion - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Master problem-solving session for Force and Laws of Motion: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-245-sci-ch2-1",
              "title": "Force and Laws of Motion - Complete Handwritten Master Notes",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Force and Laws of Motion",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-245-sci-ch2-2",
              "title": "Force and Laws of Motion - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Force and Laws of Motion",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-245-sci-ch3",
          "title": "Motion & Graphical Analysis",
          "order": 3,
          "description": "Distance vs Displacement, 3 Equations of Motion, v-t Graphs",
          "lectures": [
            {
              "id": "batch-245-sci-ch3-l1",
              "title": "L-01: Motion & Graphical Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion & Graphical Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-245-sci-ch3-l2",
              "title": "L-02: Motion & Graphical Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion & Graphical Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-245-sci-ch3-1",
              "title": "Motion & Graphical Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion & Graphical Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-245-sci-ch3-2",
              "title": "Motion & Graphical Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion & Graphical Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-333",
  "batchIdNumeric": 333,
  "title": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 10th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-06-20-0_22424866077479488.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-333-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-333-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-333-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-333-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-333-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-333-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-333-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-333-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-333-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-333-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-333-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-333-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-333-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-333-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-333-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-333-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-333-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-333-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-333-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-333-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-333-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-333-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Foundation 2.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-273",
  "batchIdNumeric": 273,
  "title": "Class 10th Recorded batch 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 10th",
  "academicYear": "2025-26",
  "tag": "Recorded VOD",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-21-0_3744365192617919.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-273-sci",
      "name": "Science (Physics, Chem, Bio)",
      "teacher": "Ashu Sir",
      "iconName": "Atom",
      "chapters": [
        {
          "id": "batch-273-sci-ch1",
          "title": "Chemical Reactions and Equations",
          "order": 1,
          "description": "Balancing Equations, 5 Reaction Types, Oxidation & Reduction, Corrosion",
          "lectures": [
            {
              "id": "batch-273-sci-ch1-l1",
              "title": "L-01: Chemical Reactions and Equations - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Chemical Reactions and Equations with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Reactions and Equations Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-273-sci-ch1-l2",
              "title": "L-02: Chemical Reactions and Equations - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/9wnZPOfOd_Q",
              "description": "Master problem-solving session for Chemical Reactions and Equations: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Reactions and Equations Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-273-sci-ch1-1",
              "title": "Chemical Reactions and Equations - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Reactions and Equations",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Reactions and Equations",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-273-sci-ch1-2",
              "title": "Chemical Reactions and Equations - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Reactions and Equations",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Reactions and Equations",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-273-sci-ch2",
          "title": "Carbon and its Compounds",
          "order": 2,
          "description": "Covalent Bonding, Versatile Nature of Carbon, Homologous Series, Functional Groups",
          "lectures": [
            {
              "id": "batch-273-sci-ch2-l1",
              "title": "L-01: Carbon and its Compounds - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/QaquxG7xflE",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Carbon and its Compounds with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Carbon and its Compounds Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-273-sci-ch2-l2",
              "title": "L-02: Carbon and its Compounds - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/QaquxG7xflE",
              "description": "Master problem-solving session for Carbon and its Compounds: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Carbon and its Compounds Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-273-sci-ch2-1",
              "title": "Carbon and its Compounds - Complete Handwritten Master Notes",
              "chapterTitle": "Carbon and its Compounds",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Carbon and its Compounds",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-273-sci-ch2-2",
              "title": "Carbon and its Compounds - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Carbon and its Compounds",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Carbon and its Compounds",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-273-sci-ch3",
          "title": "Electricity",
          "order": 3,
          "description": "Ohm's Law, Resistance in Series & Parallel, Joule's Heating Effect, Electric Power",
          "lectures": [
            {
              "id": "batch-273-sci-ch3-l1",
              "title": "L-01: Electricity - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Electricity with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electricity Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-273-sci-ch3-l2",
              "title": "L-02: Electricity - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/8fjzhnYpEwU",
              "description": "Master problem-solving session for Electricity: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Electricity Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-273-sci-ch3-1",
              "title": "Electricity - Complete Handwritten Master Notes",
              "chapterTitle": "Electricity",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Electricity",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-273-sci-ch3-2",
              "title": "Electricity - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Electricity",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Electricity",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-273-sci-ch4",
          "title": "Light: Reflection and Refraction",
          "order": 4,
          "description": "Mirror Formula, Lens Formula, Ray Diagrams, Power of Lens",
          "lectures": [
            {
              "id": "batch-273-sci-ch4-l1",
              "title": "L-01: Light: Reflection and Refraction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/q00yFn5WOaI",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Light: Reflection and Refraction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Light: Reflection and Refraction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-273-sci-ch4-l2",
              "title": "L-02: Light: Reflection and Refraction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/q00yFn5WOaI",
              "description": "Master problem-solving session for Light: Reflection and Refraction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Light: Reflection and Refraction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-273-sci-ch4-1",
              "title": "Light: Reflection and Refraction - Complete Handwritten Master Notes",
              "chapterTitle": "Light: Reflection and Refraction",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 27,
              "fileSize": "5.4 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Light: Reflection and Refraction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-273-sci-ch4-2",
              "title": "Light: Reflection and Refraction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Light: Reflection and Refraction",
              "subjectName": "Science",
              "className": "Class 10th",
              "batchTitle": "Class 10th Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 13,
              "fileSize": "3.5 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Light: Reflection and Refraction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-249",
  "batchIdNumeric": 249,
  "title": "Class 11th Science (Topper Batch) 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-20-0_4762703906260731.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-249-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-249-phy-ch1",
          "title": "Laws of Motion & Friction",
          "order": 1,
          "description": "Newton's 3 Laws, Free Body Diagrams, Pulley-Block, Friction & Banking of Roads",
          "lectures": [
            {
              "id": "batch-249-phy-ch1-l1",
              "title": "L-01: Laws of Motion & Friction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/bdu-kwkODaA",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Laws of Motion & Friction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-249-phy-ch1-l2",
              "title": "L-02: Laws of Motion & Friction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/TVttS4KL7Vg",
              "description": "Master problem-solving session for Laws of Motion & Friction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-249-phy-ch1-1",
              "title": "Laws of Motion & Friction - Complete Handwritten Master Notes",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Laws of Motion & Friction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-249-phy-ch1-2",
              "title": "Laws of Motion & Friction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Laws of Motion & Friction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-249-phy-ch2",
          "title": "Motion in a Straight Line & Plane",
          "order": 2,
          "description": "Calculus Derivations for Equations of Motion, Projectile Motion Derivations",
          "lectures": [
            {
              "id": "batch-249-phy-ch2-l1",
              "title": "L-01: Motion in a Straight Line & Plane - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion in a Straight Line & Plane with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-249-phy-ch2-l2",
              "title": "L-02: Motion in a Straight Line & Plane - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion in a Straight Line & Plane: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-249-phy-ch2-1",
              "title": "Motion in a Straight Line & Plane - Complete Handwritten Master Notes",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion in a Straight Line & Plane",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-249-phy-ch2-2",
              "title": "Motion in a Straight Line & Plane - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion in a Straight Line & Plane",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-249-phy-ch3",
          "title": "Gravitation",
          "order": 3,
          "description": "Kepler's Laws, Variation of g, Gravitational Potential, Escape & Orbital Velocity",
          "lectures": [
            {
              "id": "batch-249-phy-ch3-l1",
              "title": "L-01: Gravitation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-249-phy-ch3-l2",
              "title": "L-02: Gravitation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-249-phy-ch3-1",
              "title": "Gravitation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-249-phy-ch3-2",
              "title": "Gravitation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-249-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-249-che-ch1",
          "title": "Some Basic Concepts of Chemistry",
          "order": 1,
          "description": "Mole Concept, Stoichiometry, Empirical & Molecular Formula, Limiting Reagent",
          "lectures": [
            {
              "id": "batch-249-che-ch1-l1",
              "title": "L-01: Some Basic Concepts of Chemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Some Basic Concepts of Chemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-249-che-ch1-l2",
              "title": "L-02: Some Basic Concepts of Chemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Master problem-solving session for Some Basic Concepts of Chemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-249-che-ch1-1",
              "title": "Some Basic Concepts of Chemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Some Basic Concepts of Chemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-249-che-ch1-2",
              "title": "Some Basic Concepts of Chemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Some Basic Concepts of Chemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-249-che-ch2",
          "title": "Chemical Thermodynamics",
          "order": 2,
          "description": "First & Second Law, Enthalpy of Reactions, Hess's Law, Entropy, Gibbs Free Energy",
          "lectures": [
            {
              "id": "batch-249-che-ch2-l1",
              "title": "L-01: Chemical Thermodynamics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Thermodynamics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-249-che-ch2-l2",
              "title": "L-02: Chemical Thermodynamics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Chemical Thermodynamics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-249-che-ch2-1",
              "title": "Chemical Thermodynamics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Thermodynamics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-249-che-ch2-2",
              "title": "Chemical Thermodynamics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th Science (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Thermodynamics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-123",
  "batchIdNumeric": 123,
  "title": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "NDA & Defence",
  "academicYear": "2026-27",
  "tag": "Foundation",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-02-14-0.27518883215599566.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-123-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-123-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-123-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-123-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-123-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-123-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-123-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-123-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-123-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-123-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-123-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-123-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-123-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-123-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-123-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-123-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-123-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-123-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-123-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-123-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-123-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-123-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Tejas 2.0 Foundation Batch NDA II 2025-27 Class 11th",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-255",
  "batchIdNumeric": 255,
  "title": "Class 12th Commerce (Ranker Batch) 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 12th",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-20-0_5743234366078371.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-255-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-255-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-255-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-255-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-255-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th Commerce (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-255-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th Commerce (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-255-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-255-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-255-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-255-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th Commerce (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-255-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 12th",
              "batchTitle": "Class 12th Commerce (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-255-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-255-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-255-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-255-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-255-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th Commerce (Ranker Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-255-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 12th",
              "batchTitle": "Class 12th Commerce (Ranker Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-363",
  "batchIdNumeric": 363,
  "title": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-09-17-0_8447646261156883.jpeg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-363-phy",
      "name": "Physics",
      "teacher": "Ashu Sir",
      "iconName": "Zap",
      "chapters": [
        {
          "id": "batch-363-phy-ch1",
          "title": "Laws of Motion & Friction",
          "order": 1,
          "description": "Newton's 3 Laws, Free Body Diagrams, Pulley-Block, Friction & Banking of Roads",
          "lectures": [
            {
              "id": "batch-363-phy-ch1-l1",
              "title": "L-01: Laws of Motion & Friction - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/bdu-kwkODaA",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Laws of Motion & Friction with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-363-phy-ch1-l2",
              "title": "L-02: Laws of Motion & Friction - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/TVttS4KL7Vg",
              "description": "Master problem-solving session for Laws of Motion & Friction: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Laws of Motion & Friction Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-363-phy-ch1-1",
              "title": "Laws of Motion & Friction - Complete Handwritten Master Notes",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Laws of Motion & Friction",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-363-phy-ch1-2",
              "title": "Laws of Motion & Friction - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Laws of Motion & Friction",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Laws of Motion & Friction",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-363-phy-ch2",
          "title": "Motion in a Straight Line & Plane",
          "order": 2,
          "description": "Calculus Derivations for Equations of Motion, Projectile Motion Derivations",
          "lectures": [
            {
              "id": "batch-363-phy-ch2-l1",
              "title": "L-01: Motion in a Straight Line & Plane - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion in a Straight Line & Plane with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-363-phy-ch2-l2",
              "title": "L-02: Motion in a Straight Line & Plane - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion in a Straight Line & Plane: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion in a Straight Line & Plane Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-363-phy-ch2-1",
              "title": "Motion in a Straight Line & Plane - Complete Handwritten Master Notes",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion in a Straight Line & Plane",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-363-phy-ch2-2",
              "title": "Motion in a Straight Line & Plane - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion in a Straight Line & Plane",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion in a Straight Line & Plane",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-363-phy-ch3",
          "title": "Gravitation",
          "order": 3,
          "description": "Kepler's Laws, Variation of g, Gravitational Potential, Escape & Orbital Velocity",
          "lectures": [
            {
              "id": "batch-363-phy-ch3-l1",
              "title": "L-01: Gravitation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-363-phy-ch3-l2",
              "title": "L-02: Gravitation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-363-phy-ch3-1",
              "title": "Gravitation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-363-phy-ch3-2",
              "title": "Gravitation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation",
              "subjectName": "Physics",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-363-chem",
      "name": "Chemistry",
      "teacher": "Ashu Sir & Ujjwal Sir",
      "iconName": "FlaskConical",
      "chapters": [
        {
          "id": "batch-363-che-ch1",
          "title": "Some Basic Concepts of Chemistry",
          "order": 1,
          "description": "Mole Concept, Stoichiometry, Empirical & Molecular Formula, Limiting Reagent",
          "lectures": [
            {
              "id": "batch-363-che-ch1-l1",
              "title": "L-01: Some Basic Concepts of Chemistry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Some Basic Concepts of Chemistry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-363-che-ch1-l2",
              "title": "L-02: Some Basic Concepts of Chemistry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/1AAdCJC4IzQ",
              "description": "Master problem-solving session for Some Basic Concepts of Chemistry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Some Basic Concepts of Chemistry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-363-che-ch1-1",
              "title": "Some Basic Concepts of Chemistry - Complete Handwritten Master Notes",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Some Basic Concepts of Chemistry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-363-che-ch1-2",
              "title": "Some Basic Concepts of Chemistry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Some Basic Concepts of Chemistry",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Some Basic Concepts of Chemistry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-363-che-ch2",
          "title": "Chemical Thermodynamics",
          "order": 2,
          "description": "First & Second Law, Enthalpy of Reactions, Hess's Law, Entropy, Gibbs Free Energy",
          "lectures": [
            {
              "id": "batch-363-che-ch2-l1",
              "title": "L-01: Chemical Thermodynamics - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Official Science and Fun lecture by Ashu Sir & Ujjwal Sir. Deep conceptual explanation of Chemical Thermodynamics with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-363-che-ch2-l2",
              "title": "L-02: Chemical Thermodynamics - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/0dn9DPWsgmY",
              "description": "Master problem-solving session for Chemical Thermodynamics: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir & Ujjwal Sir.",
              "teacher": "Ashu Sir & Ujjwal Sir",
              "date": "Full Session VOD",
              "notesTitle": "Chemical Thermodynamics Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-363-che-ch2-1",
              "title": "Chemical Thermodynamics - Complete Handwritten Master Notes",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Chemical Thermodynamics",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-363-che-ch2-2",
              "title": "Chemical Thermodynamics - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Chemical Thermodynamics",
              "subjectName": "Chemistry",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Science Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Chemical Thermodynamics",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-130",
  "batchIdNumeric": 130,
  "title": "UDAAN Batch Only NDA II 2025 Class 12th",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "NDA & Defence",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-02-26-0.8266245088159119.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-130-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-130-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-130-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-130-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-130-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-130-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-130-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-130-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-130-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-130-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-130-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-130-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-130-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-130-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-130-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-130-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-130-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-130-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-130-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-130-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-130-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-130-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "UDAAN Batch Only NDA II 2025 Class 12th",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-310",
  "batchIdNumeric": 310,
  "title": "Class 11th Only JEE (SAMARPAN Batch) 2028",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "JEE & CUET",
  "academicYear": "2027-28",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-05-09-0_9938120836129696.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-310-core",
      "name": "Target Exam Core Curriculum",
      "teacher": "Senior Faculty",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-310-tar-ch1",
          "title": "High Yield Exam Topics & PYQs",
          "order": 1,
          "description": "Top 100 questions, elimination techniques, speed shortcuts",
          "lectures": [
            {
              "id": "batch-310-tar-ch1-l1",
              "title": "L-01: High Yield Exam Topics & PYQs - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Senior Faculty. Deep conceptual explanation of High Yield Exam Topics & PYQs with real demonstrations, derivations, and board question patterns.",
              "teacher": "Senior Faculty",
              "date": "Full Session VOD",
              "notesTitle": "High Yield Exam Topics & PYQs Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-310-tar-ch1-l2",
              "title": "L-02: High Yield Exam Topics & PYQs - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for High Yield Exam Topics & PYQs: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Senior Faculty.",
              "teacher": "Senior Faculty",
              "date": "Full Session VOD",
              "notesTitle": "High Yield Exam Topics & PYQs Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-310-tar-ch1-1",
              "title": "High Yield Exam Topics & PYQs - Complete Handwritten Master Notes",
              "chapterTitle": "High Yield Exam Topics & PYQs",
              "subjectName": "Target Curriculum",
              "className": "JEE & CUET",
              "batchTitle": "Class 11th Only JEE (SAMARPAN Batch) 2028",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for High Yield Exam Topics & PYQs",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-310-tar-ch1-2",
              "title": "High Yield Exam Topics & PYQs - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "High Yield Exam Topics & PYQs",
              "subjectName": "Target Curriculum",
              "className": "JEE & CUET",
              "batchTitle": "Class 11th Only JEE (SAMARPAN Batch) 2028",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for High Yield Exam Topics & PYQs",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-142",
  "batchIdNumeric": 142,
  "title": "Class 11th (TOPPER COMMERCE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-02-26-0.8759028150877417.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-142-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-142-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-142-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-142-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-142-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-142-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-142-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-142-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-142-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-142-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-142-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-142-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-142-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-142-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-142-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-142-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER COMMERCE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-142-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th (TOPPER COMMERCE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-129",
  "batchIdNumeric": 129,
  "title": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 10th",
  "academicYear": "2025-26",
  "tag": "Crash Course",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-10-25-0_991683478134986.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-129-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-129-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-129-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-129-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-129-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-129-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-129-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-129-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-129-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-129-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-129-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-129-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-129-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-129-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-129-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-129-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-129-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-129-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-129-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-129-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-129-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-129-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation CRASH COURSE Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-128",
  "batchIdNumeric": 128,
  "title": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 10th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-06-28-0_901952210217486.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-128-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-128-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-128-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-128-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-128-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-128-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-128-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-128-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-128-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-128-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-128-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-128-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-128-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-128-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-128-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-128-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-128-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-128-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-128-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-128-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-128-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-128-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation 2.0 Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-126",
  "batchIdNumeric": 126,
  "title": "Class 10th (Board Foundation Batch) Live 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 10th",
  "academicYear": "2025-26",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2025-02-26-0.5955475734869313.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-126-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-126-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-126-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-126-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-126-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-126-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-126-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-126-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-126-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-126-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-126-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-126-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-126-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-126-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-126-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-126-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-126-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-126-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-126-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-126-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-126-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-126-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "Class 10th (Board Foundation Batch) Live 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-283",
  "batchIdNumeric": 283,
  "title": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Commerce & CA",
  "academicYear": "2026-27",
  "tag": "Foundation",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-03-06-0_5264528143991845.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-283-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-283-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-283-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-283-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-283-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-283-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-283-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-283-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-283-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-283-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-283-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-283-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-283-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-283-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-283-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-283-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-283-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-283-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-283-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-283-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-283-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-283-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2026 (BUNIYAAD Batch) Sept Attempt",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-362",
  "batchIdNumeric": 362,
  "title": "Class 11th (Topper 3.0 Commerce Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-09-25-0_9226418603645354.png",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-362-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-362-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-362-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-362-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-362-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-362-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-362-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-362-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-362-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-362-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-362-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-362-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-362-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-362-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-362-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-362-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-362-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 3.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-335",
  "batchIdNumeric": 335,
  "title": "Class 11th (Topper 2.0 Commerce Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-06-20-0_2641932699174643.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-335-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-335-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-335-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-335-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-335-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-335-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-335-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-335-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-335-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-335-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-335-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-335-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-335-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-335-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-335-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-335-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Commerce Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-335-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th (Topper 2.0 Commerce Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-275",
  "batchIdNumeric": 275,
  "title": "Class 11th Commerce Recorded batch 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2025-26",
  "tag": "Recorded VOD",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-21-0_02117897749837494.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-275-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-275-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-275-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-275-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-275-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-275-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-275-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-275-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-275-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-275-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-275-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-275-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-275-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-275-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-275-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-275-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-275-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-251",
  "batchIdNumeric": 251,
  "title": "Class 11th Commerce (Topper Batch) 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 11th",
  "academicYear": "2026-27",
  "tag": "Full Batch",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-20-0_4931425344908401.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-251-acc",
      "name": "Accountancy",
      "teacher": "Expert CA Faculty",
      "iconName": "FileSpreadsheet",
      "chapters": [
        {
          "id": "batch-251-acc-ch1",
          "title": "Partnership Accounts & Share Capital",
          "order": 1,
          "description": "P&L appropriation, Goodwill valuation, Issue & forfeiture of shares",
          "lectures": [
            {
              "id": "batch-251-acc-ch1-l1",
              "title": "L-01: Partnership Accounts & Share Capital - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Partnership Accounts & Share Capital with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-251-acc-ch1-l2",
              "title": "L-02: Partnership Accounts & Share Capital - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Partnership Accounts & Share Capital: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Partnership Accounts & Share Capital Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-251-acc-ch1-1",
              "title": "Partnership Accounts & Share Capital - Complete Handwritten Master Notes",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Partnership Accounts & Share Capital",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-251-acc-ch1-2",
              "title": "Partnership Accounts & Share Capital - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Partnership Accounts & Share Capital",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Partnership Accounts & Share Capital",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-251-acc-ch2",
          "title": "Cash Flow Statement & Ratio Analysis",
          "order": 2,
          "description": "Operating, Investing, Financing activities, Accounting ratios",
          "lectures": [
            {
              "id": "batch-251-acc-ch2-l1",
              "title": "L-01: Cash Flow Statement & Ratio Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by CA Faculty. Deep conceptual explanation of Cash Flow Statement & Ratio Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-251-acc-ch2-l2",
              "title": "L-02: Cash Flow Statement & Ratio Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Cash Flow Statement & Ratio Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by CA Faculty.",
              "teacher": "CA Faculty",
              "date": "Full Session VOD",
              "notesTitle": "Cash Flow Statement & Ratio Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-251-acc-ch2-1",
              "title": "Cash Flow Statement & Ratio Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Cash Flow Statement & Ratio Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-251-acc-ch2-2",
              "title": "Cash Flow Statement & Ratio Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Cash Flow Statement & Ratio Analysis",
              "subjectName": "Accountancy",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Cash Flow Statement & Ratio Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-251-bst",
      "name": "Business Studies & Economics",
      "teacher": "Top Commerce Mentors",
      "iconName": "TrendingUp",
      "chapters": [
        {
          "id": "batch-251-bus-ch1",
          "title": "Principles of Management & National Income",
          "order": 1,
          "description": "Fayol's 14 principles, Scientific management, GDP, NDP, GNP aggregates",
          "lectures": [
            {
              "id": "batch-251-bus-ch1-l1",
              "title": "L-01: Principles of Management & National Income - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Commerce Mentor. Deep conceptual explanation of Principles of Management & National Income with real demonstrations, derivations, and board question patterns.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-251-bus-ch1-l2",
              "title": "L-02: Principles of Management & National Income - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for Principles of Management & National Income: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Commerce Mentor.",
              "teacher": "Commerce Mentor",
              "date": "Full Session VOD",
              "notesTitle": "Principles of Management & National Income Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-251-bus-ch1-1",
              "title": "Principles of Management & National Income - Complete Handwritten Master Notes",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce (Topper Batch) 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Principles of Management & National Income",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-251-bus-ch1-2",
              "title": "Principles of Management & National Income - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Principles of Management & National Income",
              "subjectName": "Business Studies",
              "className": "Class 11th",
              "batchTitle": "Class 11th Commerce (Topper Batch) 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Principles of Management & National Income",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-330",
  "batchIdNumeric": 330,
  "title": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Commerce & CA",
  "academicYear": "2026-27",
  "tag": "Foundation",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-06-04-0_8090950198315955.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-330-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-330-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-330-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-330-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-330-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-330-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-330-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-330-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-330-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-330-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-330-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-330-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-330-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-330-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-330-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-330-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-330-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-330-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-330-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-330-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-330-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-330-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) Jan Attempt",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-284",
  "batchIdNumeric": 284,
  "title": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Commerce & CA",
  "academicYear": "2026-27",
  "tag": "Foundation",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-03-06-0_45323468956052204.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-284-math",
      "name": "NDA Mathematics (LWS Kit)",
      "teacher": "Sumit Sir & Team",
      "iconName": "Shield",
      "chapters": [
        {
          "id": "batch-284-nda-ch1",
          "title": "Trigonometry & Calculus Speed Shortcuts",
          "order": 1,
          "description": "Value-putting shortcuts, 30-second solving tricks for NDA 1 & 2",
          "lectures": [
            {
              "id": "batch-284-nda-ch1-l1",
              "title": "L-01: Trigonometry & Calculus Speed Shortcuts - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/kJQP7kiw5Fk",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Trigonometry & Calculus Speed Shortcuts with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-284-nda-ch1-l2",
              "title": "L-02: Trigonometry & Calculus Speed Shortcuts - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
              "description": "Master problem-solving session for Trigonometry & Calculus Speed Shortcuts: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Trigonometry & Calculus Speed Shortcuts Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-284-nda-ch1-1",
              "title": "Trigonometry & Calculus Speed Shortcuts - Complete Handwritten Master Notes",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Trigonometry & Calculus Speed Shortcuts",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-284-nda-ch1-2",
              "title": "Trigonometry & Calculus Speed Shortcuts - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Trigonometry & Calculus Speed Shortcuts",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Trigonometry & Calculus Speed Shortcuts",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-284-nda-ch2",
          "title": "Algebra, Matrices & Coordinate Geometry",
          "order": 2,
          "description": "Matrix inverse tricks, Conic sections, Binomial theorem for NDA",
          "lectures": [
            {
              "id": "batch-284-nda-ch2-l1",
              "title": "L-01: Algebra, Matrices & Coordinate Geometry - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3JZ_D3ELwOQ",
              "description": "Official Science and Fun lecture by Sumit Sir. Deep conceptual explanation of Algebra, Matrices & Coordinate Geometry with real demonstrations, derivations, and board question patterns.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-284-nda-ch2-l2",
              "title": "L-02: Algebra, Matrices & Coordinate Geometry - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/L_LUpnjgPso",
              "description": "Master problem-solving session for Algebra, Matrices & Coordinate Geometry: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Sumit Sir.",
              "teacher": "Sumit Sir",
              "date": "Full Session VOD",
              "notesTitle": "Algebra, Matrices & Coordinate Geometry Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-284-nda-ch2-1",
              "title": "Algebra, Matrices & Coordinate Geometry - Complete Handwritten Master Notes",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Algebra, Matrices & Coordinate Geometry",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-284-nda-ch2-2",
              "title": "Algebra, Matrices & Coordinate Geometry - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Algebra, Matrices & Coordinate Geometry",
              "subjectName": "NDA Mathematics",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Algebra, Matrices & Coordinate Geometry",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    },
    {
      "id": "batch-284-gat",
      "name": "General Ability Test (GAT)",
      "teacher": "Defence Expert Team",
      "iconName": "Award",
      "chapters": [
        {
          "id": "batch-284-gen-ch1",
          "title": "English Grammar & Vocabulary (200 Marks)",
          "order": 1,
          "description": "Spotting errors, prepositions, idioms, phrases, and sentence ordering",
          "lectures": [
            {
              "id": "batch-284-gen-ch1-l1",
              "title": "L-01: English Grammar & Vocabulary (200 Marks) - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/RJF5LrP8eSw",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of English Grammar & Vocabulary (200 Marks) with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-284-gen-ch1-l2",
              "title": "L-02: English Grammar & Vocabulary (200 Marks) - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/Ra8qrXcM0Zw",
              "description": "Master problem-solving session for English Grammar & Vocabulary (200 Marks): previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "English Grammar & Vocabulary (200 Marks) Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-284-gen-ch1-1",
              "title": "English Grammar & Vocabulary (200 Marks) - Complete Handwritten Master Notes",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for English Grammar & Vocabulary (200 Marks)",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-284-gen-ch1-2",
              "title": "English Grammar & Vocabulary (200 Marks) - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "English Grammar & Vocabulary (200 Marks)",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for English Grammar & Vocabulary (200 Marks)",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-284-gen-ch2",
          "title": "General Science: Physics, Chemistry & Biology",
          "order": 2,
          "description": "Optics, electricity, mechanics, and everyday chemistry for NDA GAT",
          "lectures": [
            {
              "id": "batch-284-gen-ch2-l1",
              "title": "L-01: General Science: Physics, Chemistry & Biology - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/3jAz3HyCdTM",
              "description": "Official Science and Fun lecture by Defence Faculty. Deep conceptual explanation of General Science: Physics, Chemistry & Biology with real demonstrations, derivations, and board question patterns.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-284-gen-ch2-l2",
              "title": "L-02: General Science: Physics, Chemistry & Biology - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/ak4S4YlyBTE",
              "description": "Master problem-solving session for General Science: Physics, Chemistry & Biology: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Defence Faculty.",
              "teacher": "Defence Faculty",
              "date": "Full Session VOD",
              "notesTitle": "General Science: Physics, Chemistry & Biology Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-284-gen-ch2-1",
              "title": "General Science: Physics, Chemistry & Biology - Complete Handwritten Master Notes",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for General Science: Physics, Chemistry & Biology",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-284-gen-ch2-2",
              "title": "General Science: Physics, Chemistry & Biology - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "General Science: Physics, Chemistry & Biology",
              "subjectName": "General Ability Test",
              "className": "NDA & Defence",
              "batchTitle": "CA Foundation 2027 (BUNIYAAD Batch) May Attempt",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for General Science: Physics, Chemistry & Biology",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-360",
  "batchIdNumeric": 360,
  "title": "Class 9th (Newton 3.0 Batch) - Live 2026-27",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 9th",
  "academicYear": "2026-27",
  "tag": "Live & Recorded",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-09-17-0_6245009775617485.jpeg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-360-sci",
      "name": "Science (Physics, Chem, Bio)",
      "teacher": "Ashu Sir",
      "iconName": "Atom",
      "chapters": [
        {
          "id": "batch-360-sci-ch1",
          "title": "Gravitation & Floatation",
          "order": 1,
          "description": "Universal Law of Gravitation, Free Fall, Mass vs Weight, Archimedes' Principle",
          "lectures": [
            {
              "id": "batch-360-sci-ch1-l1",
              "title": "L-01: Gravitation & Floatation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation & Floatation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-360-sci-ch1-l2",
              "title": "L-02: Gravitation & Floatation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation & Floatation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-360-sci-ch1-1",
              "title": "Gravitation & Floatation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 3.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation & Floatation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-360-sci-ch1-2",
              "title": "Gravitation & Floatation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 3.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation & Floatation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-360-sci-ch2",
          "title": "Force and Laws of Motion",
          "order": 2,
          "description": "Newton's 3 Laws of Motion, Momentum, Inertia, Recoil of Gun",
          "lectures": [
            {
              "id": "batch-360-sci-ch2-l1",
              "title": "L-01: Force and Laws of Motion - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Force and Laws of Motion with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-360-sci-ch2-l2",
              "title": "L-02: Force and Laws of Motion - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Master problem-solving session for Force and Laws of Motion: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-360-sci-ch2-1",
              "title": "Force and Laws of Motion - Complete Handwritten Master Notes",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 3.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Force and Laws of Motion",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-360-sci-ch2-2",
              "title": "Force and Laws of Motion - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 3.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Force and Laws of Motion",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-360-sci-ch3",
          "title": "Motion & Graphical Analysis",
          "order": 3,
          "description": "Distance vs Displacement, 3 Equations of Motion, v-t Graphs",
          "lectures": [
            {
              "id": "batch-360-sci-ch3-l1",
              "title": "L-01: Motion & Graphical Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion & Graphical Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-360-sci-ch3-l2",
              "title": "L-02: Motion & Graphical Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion & Graphical Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-360-sci-ch3-1",
              "title": "Motion & Graphical Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 3.0 Batch) - Live 2026-27",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion & Graphical Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-360-sci-ch3-2",
              "title": "Motion & Graphical Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th (Newton 3.0 Batch) - Live 2026-27",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion & Graphical Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "batch-272",
  "batchIdNumeric": 272,
  "title": "Class 9th Recorded batch 2025-26",
  "subtitle": "Full syllabus preparation, video lectures, and chapterwise handwritten notes.",
  "classCategory": "Class 9th",
  "academicYear": "2025-26",
  "tag": "Recorded VOD",
  "thumbnail": "https://appx-content-v2.classx.co.in/paid_course3/2026-01-21-0_03476743511957925.jpg",
  "bannerGradient": "from-pink-900 via-rose-950 to-slate-950",
  "description": "Complete syllabus coverage taught by top educators with practical experiments, clear concepts, downloadable handwritten topper notes, and test preparation.",
  "features": [
    "Comprehensive syllabus coverage (Live + Recorded VOD)",
    "Chapterwise Handwritten Topper Notes & Formula PDFs",
    "Daily Practice Problem (DPP) Sheets & Solutions",
    "Previous 10 Years Exam Questions (PYQs)",
    "100% Free on GB STUDY with No Login"
  ],
  "subjects": [
    {
      "id": "batch-272-sci",
      "name": "Science (Physics, Chem, Bio)",
      "teacher": "Ashu Sir",
      "iconName": "Atom",
      "chapters": [
        {
          "id": "batch-272-sci-ch1",
          "title": "Gravitation & Floatation",
          "order": 1,
          "description": "Universal Law of Gravitation, Free Fall, Mass vs Weight, Archimedes' Principle",
          "lectures": [
            {
              "id": "batch-272-sci-ch1-l1",
              "title": "L-01: Gravitation & Floatation - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/0w3FjQPy8Vk",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Gravitation & Floatation with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-272-sci-ch1-l2",
              "title": "L-02: Gravitation & Floatation - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/MwDnfa3puhA",
              "description": "Master problem-solving session for Gravitation & Floatation: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Gravitation & Floatation Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-272-sci-ch1-1",
              "title": "Gravitation & Floatation - Complete Handwritten Master Notes",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 24,
              "fileSize": "4.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Gravitation & Floatation",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-272-sci-ch1-2",
              "title": "Gravitation & Floatation - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Gravitation & Floatation",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 10,
              "fileSize": "2.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Gravitation & Floatation",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-272-sci-ch2",
          "title": "Force and Laws of Motion",
          "order": 2,
          "description": "Newton's 3 Laws of Motion, Momentum, Inertia, Recoil of Gun",
          "lectures": [
            {
              "id": "batch-272-sci-ch2-l1",
              "title": "L-01: Force and Laws of Motion - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Force and Laws of Motion with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-272-sci-ch2-l2",
              "title": "L-02: Force and Laws of Motion - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/4g8XjDc4c_Y",
              "description": "Master problem-solving session for Force and Laws of Motion: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Force and Laws of Motion Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-272-sci-ch2-1",
              "title": "Force and Laws of Motion - Complete Handwritten Master Notes",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 25,
              "fileSize": "4.6 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Force and Laws of Motion",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-272-sci-ch2-2",
              "title": "Force and Laws of Motion - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Force and Laws of Motion",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 11,
              "fileSize": "2.9 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Force and Laws of Motion",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        },
        {
          "id": "batch-272-sci-ch3",
          "title": "Motion & Graphical Analysis",
          "order": 3,
          "description": "Distance vs Displacement, 3 Equations of Motion, v-t Graphs",
          "lectures": [
            {
              "id": "batch-272-sci-ch3-l1",
              "title": "L-01: Motion & Graphical Analysis - Complete Concept Breakdown & Live Experiments",
              "lectureNumber": 1,
              "duration": "1h 24m",
              "videoUrl": "https://www.youtube.com/embed/cxErr93eiVg",
              "description": "Official Science and Fun lecture by Ashu Sir. Deep conceptual explanation of Motion & Graphical Analysis with real demonstrations, derivations, and board question patterns.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Complete Handwritten Notes",
              "notesPages": "24 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "batch-272-sci-ch3-l2",
              "title": "L-02: Motion & Graphical Analysis - High-Yield Board Questions, Numericals & PYQs",
              "lectureNumber": 2,
              "duration": "1h 18m",
              "videoUrl": "https://www.youtube.com/embed/OLVKsuF9oYk",
              "description": "Master problem-solving session for Motion & Graphical Analysis: previous 10 years board questions, exemplar numericals, and step-by-step marking tricks by Ashu Sir.",
              "teacher": "Ashu Sir",
              "date": "Full Session VOD",
              "notesTitle": "Motion & Graphical Analysis Solved DPP & Derivation Sheet",
              "notesPages": "18 Pages",
              "notesPdfUrl": "https://t.me/GBFreestudy"
            }
          ],
          "notes": [
            {
              "id": "n-batch-272-sci-ch3-1",
              "title": "Motion & Graphical Analysis - Complete Handwritten Master Notes",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th Recorded batch 2025-26",
              "type": "Handwritten Notes",
              "pages": 26,
              "fileSize": "5.0 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Comprehensive textbook theory, master derivations, and illustrated diagrams for Motion & Graphical Analysis",
                "NCERT line-by-line decoding and concept definitions explained simply",
                "Top 20 high-frequency board questions with step-by-step solutions",
                "Quick revision mindmap and memory hacks by Ashu Sir & team"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            },
            {
              "id": "n-batch-272-sci-ch3-2",
              "title": "Motion & Graphical Analysis - Formula Sheet, SI Units & Derivations",
              "chapterTitle": "Motion & Graphical Analysis",
              "subjectName": "Science",
              "className": "Class 9th",
              "batchTitle": "Class 9th Recorded batch 2025-26",
              "type": "Formula Sheet",
              "pages": 12,
              "fileSize": "3.2 MB",
              "date": "Updated Session",
              "previewPoints": [
                "Consolidated table of all master formulas, dimensions, and physical constants for Motion & Graphical Analysis",
                "Guaranteed 5-mark derivation proofs formatted for full marks in board exams"
              ],
              "pdfUrl": "https://t.me/GBFreestudy"
            }
          ]
        }
      ]
    }
  ]
},

];

export function getAllNotes(): NoteDoc[] {
  const allNotes: NoteDoc[] = [];
  BATCHES_DATA.forEach(batch => {
    batch.subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        chapter.notes.forEach(note => {
          allNotes.push(note);
        });
      });
    });
  });
  return allNotes;
}

export function getPlatformStats() {
  let totalLectures = 0;
  let totalNotes = 0;
  let totalChapters = 0;

  BATCHES_DATA.forEach(batch => {
    batch.subjects.forEach(subject => {
      totalChapters += subject.chapters.length;
      subject.chapters.forEach(chapter => {
        totalLectures += chapter.lectures.length;
        totalNotes += chapter.notes.length;
      });
    });
  });

  return {
    totalBatches: BATCHES_DATA.length,
    totalLectures,
    totalNotes,
    totalChapters,
  };
}
