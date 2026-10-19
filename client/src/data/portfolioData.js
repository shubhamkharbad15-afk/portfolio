import profileImg from "../assets/images/profile.jpg";
import skillzyImg from "../assets/images/projects/skillzy.png";
import purepicImg from "../assets/images/projects/purepic.png";
import silentshieldImg from "../assets/images/projects/silentshield.png";
import bgmitImg from "../assets/images/achievements/bgmit.jpg";
import zonalFinalsImg from "../assets/images/achievements/zonal-finals.jpg";
import inventraImg from "../assets/images/achievements/inventra.jpg";
import nptelImg from "../assets/images/certificates/nptel.png";
import udemyImg from "../assets/images/certificates/udemy.png";

export const portfolioData = {
  personal: {
    name: "Shubham Kharbad",
    title: "Computer Science Undergraduate & Full-Stack Developer",
    location: "Kolhapur, Maharashtra",
    phone: "+91 9767423638",
    email: "shubhamkharbad15@gmail.com",
    github: "https://github.com/shubhamkharbad15-afk",
    linkedin: "https://linkedin.com/in/shubham-kharbad",
    profileImage: profileImg,
    summary:
      "Computer Science undergraduate at Kolhapur Institute of Technology with a strong foundation in C/C++ and Full-Stack Development. Passionate about building scalable web applications and efficient software solutions.",
    languages: ["Hindi", "English", "Marathi"],
    stats: {
      cgpa: "8.74",
      projectsCount: "3",
      sscScore: "99.60%",
      hscScore: "81.50%"
    }
  },

  education: [
    {
      institution: "KIT's College of Engineering, Kolhapur",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – 2027",
      grade: "CGPA: 8.74",
      details: "Focusing on Core CS: Data Structures & Algorithms, OOP, Database Systems, Operating Systems, and Distributed Applications."
    },
    {
      institution: "Vaidyanath College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2022 – 2023",
      grade: "Percentage: 81.50%",
      details: "Science stream with coursework in Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      institution: "Shri Jagmitra Naga Vidyalaya",
      degree: "Secondary School Certificate (SSC)",
      period: "2020 – 2021",
      grade: "Percentage: 99.60%",
      details: "Top rank in school with academic distinction across all subjects."
    }
  ],

  projects: [
    {
      id: "skillzy",
      title: "Skillzy – AI Skill Connect Platform",
      stackString: "React.js · FastAPI · MongoDB · AI",
      category: "Full-Stack Web",
      categoryFilter: "web",
      status: "Completed",
      inProgress: false,
      image: skillzyImg,
      technologies: ["React.js", "FastAPI", "MongoDB", "Sentence-Transformers", "Cosine Similarity", "Vercel"],
      githubUrl: "https://github.com/shubhamkharbad15-afk/skillzy-new",
      liveUrl: "https://skillzy-new.vercel.app/",
      description: "AI-powered skill-sharing platform that intelligently matches users based on skills and interests.",
      bullets: [
        "Developed an AI-powered skill-sharing platform that intelligently matches users based on skills and interests.",
        "Integrated the pretrained Sentence-Transformers model (all-MiniLM-L6-v2, 384-dim embeddings) for semantic profile matching via cosine similarity over a top-50 re-ranked candidate pool, returning a normalized match score (50–98%) with a text-substring fallback.",
        "Implemented authentication, real-time communication, community features, and gamification to improve user engagement.",
        "Designed a RESTful FastAPI backend with MongoDB for scalable, low-latency data handling across matching and messaging services.",
        "Deployed the platform on Vercel ensuring seamless updates and reliable uptime."
      ]
    },
    {
      id: "purepic-pro",
      title: "PurePic Pro – AI Photo Selection and Enhancement",
      stackString: "Python · OpenCV · Machine Learning",
      category: "Machine Learning / Image Processing",
      categoryFilter: "aiml",
      status: "In Progress",
      inProgress: true,
      image: purepicImg,
      technologies: ["Python", "OpenCV", "Machine Learning", "Image Quality Assessment", "NumPy"],
      githubUrl: "https://github.com/shubhamkharbad15-afk/Purepic-pro-new",
      liveUrl: null,
      description: "Offline AI-powered photo culling and enhancement application for professional photographers.",
      bullets: [
        "Developing an offline AI-powered photo culling and enhancement application for professional photographers.",
        "Built an image quality assessment pipeline for automated scoring and classification, achieving roughly 80–85% accuracy on basic photo sorting tasks.",
        "Implemented reference-based colour grading (~70–80% match accuracy) and reference-based masking (~50–75%, still under refinement) for consistent photo editing workflows."
      ]
    },
    {
      id: "silentshield",
      title: "SilentShield – AI Toxic Content Blocker",
      stackString: "Chrome Extension · Transformers.js · JavaScript",
      category: "Browser Extension",
      categoryFilter: "extension",
      status: "In Progress",
      inProgress: true,
      image: silentshieldImg,
      technologies: ["Chrome Extension API", "Transformers.js", "DistilBERT", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/shubhamkharbad15-afk/Silentshield",
      liveUrl: null,
      description: "Chrome extension that detects and automatically blurs toxic messages, hate speech, and cyberbullying in real time.",
      bullets: [
        "Developed a Chrome extension that detects and automatically blurs toxic messages, hate speech, and cyberbullying in real time.",
        "Built a keyword-matching detection engine achieving roughly 40–60% accuracy, with a DistilBERT (Transformers.js) pipeline integrated for on-device inference in progress toward full deployment.",
        "Built an analytics dashboard to visualize safety score, threat detection statistics, and browsing history."
      ]
    }
  ],

  technicalSkills: [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "JavaScript", "Java"]
    },
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3", "React.js"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express.js", "REST APIs", "FastAPI"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "Docker", "VS Code", "Postman", "CI/CD (GitHub Actions)"]
    },
    {
      category: "Core Computer Science Concepts",
      items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems (OS)", "Computer Networks (CN)"]
    }
  ],

  certificationsAndParticipations: [
    {
      title: "Data Structures and Algorithms in Java",
      organization: "NPTEL",
      type: "Certification",
      image: nptelImg
    },
    {
      title: "Complete Web Development Bootcamp",
      organization: "Udemy",
      type: "Certification",
      image: udemyImg
    },
    {
      title: "Secured Second Runner-Up position",
      organization: "BGMIT, Mudhol",
      type: "Honor",
      image: bgmitImg
    },
    {
      title: "Qualified for Zonal Finals held in Mumbai",
      organization: "Zonal Finals",
      type: "Honor",
      image: zonalFinalsImg
    },
    {
      title: "Participated in INVENTRA 2025 Hackathon",
      organization: "KLE College of Engineering",
      type: "Participation",
      image: inventraImg
    }
  ]
};
