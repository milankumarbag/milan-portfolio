export const portfolioData = {
  personal: {
    name: "Milan Kumar Bag",
    roleTitle: "Software Test Engineer | QA Automation | SDET",
    targetRoles: [
      "Software Test Engineer",
      "QA Automation Engineer",
      "SDET",
      "Automation Test Engineer"
    ],
    tagline: "Building reliable software through intelligent test automation, quality engineering, and AI-assisted testing.",
    summary: "Software Test Engineer with hands-on experience in Manual Testing, QA Automation, API Testing (Postman), and AI-assisted test automation. Experienced in Selenium WebDriver, Java, TestNG, SQL, Playwright, JavaScript, Postman, POM, and Data-Driven Testing (DDT). Skilled in designing and executing test scenarios, validating application, API, and database behavior, analyzing failures, and refining automation scripts. Also experienced with Git/GitHub and MERN stack development, with a focus on building reliable, maintainable, and quality-driven software.",
    email: "mbag7309@gmail.com",
    phone: "8918480883",
    location: "Kolkata, West Bengal, India",
    linkedin: "https://www.linkedin.com/in/milan-kumar-bag-sdet/",
    github: "https://github.com/milankumarbag",
    resumeUrl: "/Milan_Kumar_Bag_Resume.pdf",
    photoUrl: "/milan-photo.jpg",
    openToWork: true,
    statusText: "Available for SDET & QA Automation Roles",
  },

  // 10-second recruiter summary highlights
  recruiterGlance: [
    {
      label: "Core Specialization",
      value: "QA Automation, SDET & Manual Testing",
      detail: "Selenium WebDriver, Playwright, Postman API Testing, Java, JS, TestNG"
    },
    {
      label: "Key Differentiator",
      value: "AI-Assisted Test Automation",
      detail: "Prompting, reviewing & debugging AI-generated Playwright test suites"
    },
    {
      label: "Internship Experience",
      value: "2 QA Internships",
      detail: "QASolve AI (Remote) & QSpiders (Kolkata)"
    },
    {
      label: "Education",
      value: "B.Tech in CSE (CGPA: 7.6)",
      detail: "Hooghly Engineering & Technology College (2023–2026)"
    }
  ],

  experiences: [
    {
      id: "qasolve-ai",
      role: "QA Automation Engineer Intern",
      company: "QASolve AI",
      location: "Remote",
      duration: "August 2026 – September 2026",
      type: "Internship",
      mode: "Remote",
      highlight: "Pioneered AI-assisted test generation workflows with Playwright & JavaScript",
      responsibilities: [
        "Worked on AI-assisted web test automation by providing natural-language instructions to an AI tool to generate JavaScript and Playwright automation code.",
        "Reviewed, executed, modified, and debugged AI-generated Playwright scripts to validate application workflows and improve test reliability.",
        "Created and executed automated test scenarios, analyzed failures and test results, and refined generated scripts based on application behavior.",
        "Gained practical experience applying AI-assisted code generation to accelerate and improve modern QA automation workflows."
      ],
      skills: [
        "AI-Assisted Testing",
        "Playwright",
        "JavaScript",
        "Natural-Language Prompts",
        "Script Debugging",
        "Test Execution",
        "Workflow Validation"
      ]
    },
    {
      id: "qspiders",
      role: "Software Test Engineer Intern",
      company: "QSpiders – Software Testing Training Institute",
      location: "Kolkata, West Bengal, India",
      duration: "January 2026 – July 2026",
      type: "Internship",
      mode: "On-site",
      highlight: "End-to-end Manual & Selenium WebDriver automation with Java & TestNG",
      responsibilities: [
        "Performed Manual Testing including functional, UI, and regression testing; designed, executed, and maintained test cases and reported defects.",
        "Developed and executed Selenium WebDriver automation scripts using Java and TestNG for web application testing.",
        "Implemented Page Object Model (POM) to create reusable and maintainable automation components.",
        "Applied Data-Driven Testing (DDT) to execute test scenarios with multiple sets of test data.",
        "Used SQL for database validation and backend data verification, and analyzed test results to support defect identification and retesting."
      ],
      skills: [
        "Manual Testing",
        "Selenium WebDriver",
        "Java",
        "TestNG",
        "POM",
        "Data-Driven Testing (DDT)",
        "SQL",
        "Regression Testing",
        "Defect Reporting"
      ]
    }
  ],

  skillsByCategory: [
    {
      category: "Testing & QA",
      icon: "CheckCircle2",
      description: "Core test methodologies, test analysis & defect management",
      skills: [
        "Manual Testing",
        "API Testing",
        "Functional Testing",
        "Regression Testing",
        "UI Testing",
        "Test Case Design",
        "Defect Reporting",
        "STLC"
      ]
    },
    {
      category: "Automation",
      icon: "Cpu",
      description: "Automated test frameworks & intelligent test engineering",
      skills: [
        "Selenium WebDriver",
        "Playwright",
        "TestNG",
        "Page Object Model (POM)",
        "Data-Driven Testing (DDT)",
        "AI-Assisted Test Automation"
      ]
    },
    {
      category: "Languages & Database",
      icon: "Database",
      description: "Programming logic, data querying & backend verification",
      skills: [
        "Java",
        "JavaScript",
        "SQL",
        "MongoDB"
      ]
    },
    {
      category: "Tools & Version Control",
      icon: "GitBranch",
      description: "Source code collaboration, API testing & version control",
      skills: [
        "Postman",
        "Git",
        "GitHub"
      ]
    },
    {
      category: "Web & Development",
      icon: "Layers",
      description: "Full-stack web architecture foundation for deep QA insights",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MERN Stack"
      ]
    }
  ],

  // Dual QA Workflow Models
  workflows: [
    {
      id: "ai-playwright",
      title: "AI-Assisted Playwright Automation Workflow",
      subtitle: "Accelerated modern test engineering through AI code synthesis and verification",
      badge: "Modern QA Engineering",
      steps: [
        {
          stepNumber: "01",
          title: "Test Scenario Definition",
          description: "Analyze web application workflows and user journeys to establish clear, deterministic test criteria."
        },
        {
          stepNumber: "02",
          title: "Natural Language Instructions",
          description: "Author precise, structured natural-language prompts specifying actions, selectors, assertions, and edge conditions."
        },
        {
          stepNumber: "03",
          title: "AI-Assisted Code Generation",
          description: "Leverage AI automation tools to generate structured JavaScript and Playwright test automation scripts."
        },
        {
          stepNumber: "04",
          title: "Playwright / JavaScript Implementation",
          description: "Integrate scripts into the test suite using modern asynchronous Playwright syntax and best practices."
        },
        {
          stepNumber: "05",
          title: "Test Execution & Validation",
          description: "Execute automated tests across headless/headed browsers, monitoring execution time and stability."
        },
        {
          stepNumber: "06",
          title: "Result Analysis",
          description: "Inspect execution reports, failure logs, and UI snapshots to evaluate pass/fail criteria accurately."
        },
        {
          stepNumber: "07",
          title: "Debugging & Refinement",
          description: "Modify locators, handle dynamic waits, fix flaky assertions, and optimize code for maintainability."
        }
      ]
    },
    {
      id: "selenium-testng",
      title: "Traditional Selenium & TestNG Automation Framework",
      subtitle: "Robust, modular, and maintainable enterprise test framework architecture",
      badge: "Enterprise Test Framework",
      steps: [
        {
          stepNumber: "01",
          title: "Test Case Design",
          description: "Formulate comprehensive manual and automated test cases covering functional, negative, and edge scenarios."
        },
        {
          stepNumber: "02",
          title: "Java Programming",
          description: "Write clean object-oriented code utilizing OOP principles (Encapsulation, Inheritance, Polymorphism)."
        },
        {
          stepNumber: "03",
          title: "Selenium WebDriver",
          description: "Drive browser interactions, locator strategies (XPath, CSS selectors), and dynamic synchronization."
        },
        {
          stepNumber: "04",
          title: "TestNG Framework",
          description: "Structure test execution using TestNG annotations (@Test, @BeforeMethod), assertions, and test suites (testng.xml)."
        },
        {
          stepNumber: "05",
          title: "POM & DDT Architecture",
          description: "Implement Page Object Model for separation of UI locators from test logic, paired with Data-Driven Testing."
        },
        {
          stepNumber: "06",
          title: "Execution & DB Validation (SQL)",
          description: "Execute test suites and run backend SQL queries to verify database consistency and state persistence."
        },
        {
          stepNumber: "07",
          title: "Defect Analysis & Reporting",
          description: "Analyze failures, isolate root causes, log structured defect reports with reproduction steps, and conduct retesting."
        }
      ]
    }
  ],

  projects: [
    {
      id: "portfolio-project",
      title: "Personal Portfolio Website",
      category: "Web & QA Profile",
      description: "Responsive front-end portfolio website showcasing my professional profile, technical skills, projects, and experience.",
      details: [
        "Architected with React, clean component structure, and modern responsive styling.",
        "Highlights QA engineering credentials, testing workflows, and recruiter-focused metrics.",
        "Features dark/light mode, mobile drawer navigation, and accessible UX."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite"],
      links: {
        live: "#",
        github: "https://github.com/milankumarbag"
      },
      tag: "Featured"
    },
    {
      id: "student-performance",
      title: "Student Performance Analysis",
      category: "Academic Data-Mining Project",
      description: "Academic data-mining project featuring Admin, Teacher, and Student modules for analyzing student performance.",
      details: [
        "Built a multi-user system with role-based access control for Admins, Teachers, and Students.",
        "Applied data-mining techniques to identify academic trends, performance gaps, and subject insights.",
        "Structured relational data models and validation queries for reliable academic analytics."
      ],
      technologies: ["Data Mining", "SQL", "Database Design", "Web Technologies"],
      links: {
        live: null,
        github: "https://github.com/milankumarbag"
      },
      tag: "Data Mining"
    },
    {
      id: "weather-app",
      title: "Weather Application",
      category: "API & Frontend Project",
      description: "Web application that displays real-time weather information using external APIs.",
      details: [
        "Integrated external RESTful weather APIs to fetch dynamic meteorological data.",
        "Implemented error handling, edge-case API responses, and dynamic UI rendering.",
        "Responsive interface displaying temperature, humidity, wind speed, and atmospheric conditions."
      ],
      technologies: ["JavaScript", "External REST APIs", "HTML5", "CSS3"],
      links: {
        live: null,
        github: "https://github.com/milankumarbag"
      },
      tag: "REST APIs"
    },
    {
      id: "simon-says",
      title: "Simon Says Game",
      category: "Interactive JavaScript",
      description: "JavaScript-based pattern memory game built using JavaScript logic and DOM events.",
      details: [
        "Implemented sequential pattern generation and user response validation in JavaScript.",
        "Handled event listeners, active visual states, audio feedback, and score progression.",
        "Designed deterministic game state handling and reset logic."
      ],
      technologies: ["JavaScript", "DOM Events", "CSS3 Animations", "HTML5"],
      links: {
        live: null,
        github: "https://github.com/milankumarbag"
      },
      tag: "DOM Logic"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Hooghly Engineering & Technology College",
      duration: "2023 – 2026",
      score: "CGPA: 7.6",
      type: "Graduation",
      location: "West Bengal, India",
      highlights: [
        "Specialized in Computer Science fundamentals, Software Engineering, Database Management Systems, and Web Technologies.",
        "Developed solid foundation in Object-Oriented Programming (Java), Data Structures, and Software Development Life Cycle (SDLC/STLC)."
      ]
    },
    {
      degree: "Higher Secondary (Intermediate)",
      institution: "Shyampur High School",
      duration: "Completed",
      score: "77.8%",
      type: "Higher Secondary",
      location: "West Bengal, India",
      highlights: [
        "Strong foundation in Science and Mathematics, fostering analytical and problem-solving capabilities."
      ]
    }
  ]
};
