import { Project, SkillItem, Certification, EducationItem, InternshipItem } from '../types';

import currencyImg from '../assets/images/project_currency_converter_1790604822602.jpg';
import attendlyImg from '../assets/images/project_attendly_1790604837370.jpg';
import faceRecImg from '../assets/images/project_face_recognition_1790604850544.jpg';

export const PERSONAL_INFO = {
  name: "Chandrashekhar S",
  heroName: "Chandrashekhar S",
  role: "Full-Stack Web Developer / Aspiring Software Developer",
  kicker: "BCA Graduate • Software Developer",
  location: "Bengaluru, India",
  pinCode: "560064",
  // Placeholders as requested, with quick replace instructions
  emailPlaceholder: "chandrashekhars17102005@gmail.com",
  actualEmail: "chandrashekhars17102005@gmail.com",
  githubUrl: "https://github.com/Chandrashekhar2005",
  linkedinPlaceholder: "http://www.linkedin.com/in/chanrdu17",
  actualLinkedin: "http://www.linkedin.com/in/chanrdu17",
  resumePath: "/resume.pdf",
};

export const HERO_DATA = {
  headline: "Building digital experiences that solve real problems.",
  supportingText: "Hi, I'm Chandrashekhar S, a BCA graduate, web developer and aspiring software developer passionate about building practical applications, learning modern technologies and solving real-world problems through code.",
  badge: "BCA Graduate • Web Developer",
};

export const ABOUT_DATA = {
  heading: "Turning curiosity into code.",
  paragraphs: [
    "I'm a BCA graduate with a strong interest in software development and modern web technologies.",
    "I enjoy building practical applications, experimenting with new technologies and continuously improving my programming and problem-solving skills.",
    "My goal is to begin my career in the software industry, contribute to real-world projects and grow into a strong full-stack developer."
  ],
  stats: [
    { label: "Degree", value: "BCA", detail: "Bengaluru City University" },
    { label: "Academic CGPA", value: "8.77 / 10", detail: "Strong foundation" },
    { label: "Completed Projects", value: "3+", detail: "Full-stack & AI/ML" },
    { label: "Certifications", value: "6", detail: "Web, AI & Data" },
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  { name: "Python", category: "languages", description: "Scripting, Flask backend, Data processing & Computer Vision" },
  { name: "JavaScript", category: "languages", description: "ES6+, DOM manipulation, asynchronous programming, APIs" },
  { name: "TypeScript", category: "languages", description: "Type safety, robust interfaces, and modern React development" },
  { name: "SQL", category: "languages", description: "Relational queries, joins, indexing, and schema design" },

  // Frontend
  { name: "React", category: "frontend", description: "Component architecture, hooks, state management, SPA" },
  { name: "HTML5", category: "frontend", description: "Semantic markup, accessibility, modern web standards" },
  { name: "CSS3", category: "frontend", description: "Flexbox, Grid, responsive layouts, subtle animations" },
  { name: "Bootstrap", category: "frontend", description: "Rapid UI prototyping and grid system" },

  // Backend
  { name: "Flask", category: "backend", description: "RESTful endpoints, routing, authentication, Python microservices" },

  // Database
  { name: "MySQL", category: "database", description: "Relational tables, foreign keys, stored data persistence" },
  { name: "PostgreSQL", category: "database", description: "Structured querying and robust data models" },

  // Tools & Technologies
  { name: "Git", category: "tools", description: "Version control, branching, committing, and team collaboration" },
  { name: "GitHub", category: "tools", description: "Repository hosting, open-source workflow, project showcases" },
  { name: "VS Code", category: "tools", description: "Daily IDE environment, extensions, debugging setup" },
  { name: "Microsoft Power BI", category: "tools", description: "Data visualization dashboards and metrics reporting" },

  // Core Concepts
  { name: "Data Structures & Algorithms (DSA)", category: "concepts", description: "Arrays, lists, searching, sorting, and problem solving" },
  { name: "Object-Oriented Programming (OOP)", category: "concepts", description: "Classes, inheritance, encapsulation, modular design" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "currency-converter",
    name: "Live Currency Converter",
    tagline: "Deployed Production Web App",
    description: "A responsive currency conversion web application that uses live exchange-rate data to calculate and display currency values.",
    technologies: ["React", "TypeScript", "Python", "API", "Vercel", "HTML5", "CSS3"],
    liveDemoUrl: "https://currency-converter2-zipd.vercel.app/",
    githubUrl: "https://github.com/Chandrashekhar2005",
    image: currencyImg,
    featured: true,
    highlights: [
      "Integrated third-party exchange-rate API to fetch real-time conversion rates with sub-second response times.",
      "Engineered dynamic calculation engine with instant conversions across multiple world currencies.",
      "Designed a responsive, touch-friendly UI optimized for both desktop and mobile devices.",
      "Deployed on Vercel with automated build workflows and production reliability."
    ]
  },
  {
    id: "attendly",
    name: "Attendly",
    tagline: "Attendance Management Application",
    description: "A student attendance management project designed to simplify attendance tracking and provide an organized user experience.",
    technologies: ["Python", "Flask", "MySQL", "JavaScript", "HTML5", "CSS3", "Git"],
    liveDemoUrl: "https://silver-salamander-75985d.netlify.app/",
    githubUrl: "https://github.com/Chandrashekhar2005",
    image: attendlyImg,
    featured: false,
    highlights: [
      "Attendance management system tailored for educational institutions and classroom monitoring.",
      "Implemented secure user login, authentication, and session control.",
      "Engineered a fully responsive front-end interface using modern CSS Flexbox and JavaScript.",
      "Generated structured attendance reports and maintained persistent records via MySQL database."
    ]
  },
  {
    id: "face-recognition",
    name: "Face Recognition & Detection",
    tagline: "Computer Vision & Machine Learning",
    description: "A computer vision project focused on detecting and recognizing faces using image-processing and machine-learning concepts.",
    technologies: ["Python", "Computer Vision", "Machine Learning", "AI/ML"],
    liveDemoUrl: null, // As specified: "Do not invent a live demo URL"
    githubUrl: "https://github.com/Chandrashekhar2005",
    image: faceRecImg,
    featured: false,
    highlights: [
      "Constructed during a 3-month AI & Machine Learning internship at Mifratech Pvt Ltd.",
      "Applied computer vision algorithms for facial landmark localization and expression detection.",
      "Utilized Python machine learning libraries to analyze feature patterns and classify expressions.",
      "Built structured pipeline from webcam/image input to feature extraction and detection output."
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Bengaluru City University",
  location: "Bengaluru, India",
  period: "August 2023 - July 2026",
  score: "CGPA: 8.77 / 10",
  description: "BCA graduate with a focus on computer applications, programming, software development and information technology.",
  coursework: [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms (DSA)",
    "Database Management Systems (DBMS / SQL)",
    "Web Technologies & Scripting",
    "Software Engineering Principles",
    "Operating Systems & Computer Networks"
  ]
};

export const INTERNSHIP_DATA: InternshipItem = {
  role: "Artificial Intelligence and Machine Learning Intern",
  company: "Mifratech Pvt Ltd",
  duration: "3 Months",
  description: "Internship program focused on core concepts of AI and Machine Learning. Built the Facial Expression Detection System Project applying computer vision and machine learning algorithms using Python.",
  technologies: ["Python", "Machine Learning", "Computer Vision", "Image Processing"]
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "cert-fullstack",
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    category: "Web Development",
    verificationUrl: null, // Configurable placeholder
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node / Backend Concepts"]
  },
  {
    id: "cert-oracle",
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    category: "Artificial Intelligence",
    verificationUrl: null,
    skills: ["Agentic AI", "AI Architecture", "Foundations of AI Agents"]
  },
  {
    id: "cert-cisco",
    title: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    category: "Data Science",
    verificationUrl: null,
    skills: ["Python", "Data Analysis", "Data Manipulation", "Foundations of Data Science"]
  },
  {
    id: "cert-aws",
    title: "Foundation of Prompt Engineering",
    issuer: "AWS",
    category: "Cloud & AI",
    verificationUrl: null,
    skills: ["Prompt Engineering", "Large Language Models", "Generative AI Fundamentals"]
  },
  {
    id: "cert-powerbi",
    title: "Power BI",
    issuer: "Microsoft / Simplilearn",
    category: "Business Intelligence",
    verificationUrl: null,
    skills: ["Data Visualization", "Dashboards", "Business Analytics", "Reporting"]
  },
  {
    id: "cert-sql",
    title: "SQL and Relational Databases",
    issuer: "CognitiveClass.ai",
    category: "Databases",
    verificationUrl: null,
    skills: ["SQL", "Relational Schema Design", "Data Modeling", "Queries & Joins"]
  }
];
