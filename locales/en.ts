const en = {
  name: "Liza Blomdahl-Olsevskaja – My CV",
  codeLanguages: "Code Languages",
  downloadCv: "Download CV",
  heroSection: {
    title: "Full Stack Developer",
    description:
      "A dedicated Full Stack Developer with a frontend focus and 5+ years of experience, proficient in JavaScript, " +
      "React, TypeScript, and MongoDB. I have contributed to more than 30 projects, including those in the fintech " +
      "sector.",
    photoAlt: "Photo of Liza Blomdahl, a Full Stack Developer",
  },
  contact: {
    title: "Contact",
    phone: "Call me",
    email: "Send an email",
    linkedin: "Connect on LinkedIn",
    github: "Follow me on GitHub",
  },
  images: {
    logoAlt: "Personal logo representing professionalism",
  },
  skillsSection: {
    title: "Skills",
    categories: {
      skills: "Skills",
      codeLanguages: "Programming Languages",
      tools: "Tools & Frameworks",
      databases: "Databases",
    },
  },
  workExperience: {
    title: "Work experience",
    experiences: [
      {
        jobTitle: "Full Stack Developer",
        companyTitle: "Purple Technology – Brno, Czech Republic & Remote",
        date: "2022-04–2024-09",
        highlights:
          "- Contributed significantly to the development of an internal CRM system as a Full Stack Developer.\n" +
          "- Involved in the entire development lifecycle, from technical analysis and estimation to backend and " +
          "frontend integration.\n" +
          "- Participated in the design and implementation of new features.\n" +
          "- Followed structured development phases including unit testing and final testing.\n" +
          "- Worked with CI/CD pipelines to ensure quality and efficiency.\n" +
          "- Contributed to the development of a client portal, similar to internet banking experience (forex).\n" +
          "- Focused on improving the portal's capabilities through the migration from GraphQL to tRPC.\n",
        description: "All the stuff",
        internalProjectNotes: {
          // 2024-08 to 2024-09
          CRMCalculatorTool:
            "As a Full-Stack Developer making an internal CRM Calculator tool for processing complex SQL queries and analyzing financial data.\n" +
            "Designed to generate transaction summaries based on individual clients and specific transaction types (e.g., card transactions for the last 10 month),\n" +
            "with customizable filters. Built using PostgreSQL, MongoDB, React, TS and tRPC. Collaborated with another developer and the project manager to define product specifications and ensure accurate financial reporting.",
          // 2024-02 to 2024-03
          AppConfigProjectInMyAxiory:
            "Participation of development an internal AppConfig for client portal,\n" +
            "allowing seamless feature flag management to introduce new features gradually.\n" +
            "This ensured smooth transitions between different versions for introducing the new features, improving deployment flexibility and reducing risks.",
          // 2024-01 to 2024-08
          MyAxioryProject:
            "Worked on MyAxiory as a website Frontend Developer, a FinTech trading platform that helps users manage their accounts, track financial data, and access trading tools.\n" +
            "Collaborated closely with backend, iOS, Android, and QA teams to develop and maintain customer-facing features.\n" +
            "Built reusable components using React, TypeScript, Styled Components, and integrated GraphQL (Apollo, tRPC) and SQL (Postico).\n" +
            "Contributed to a scalable and efficient frontend architecture in a pure Agile environment.",
          // 2023-06 to 2023-12
          DepositTool:
            "Full-Stack Development of the Deposit Tool, a key financial feature in the CRM.\n" +
            "Designed and developed the solution using tRPC, React, Postico (SQL), and MongoDB, handling financial calculations and integrating deposit processes into the platform.\n" +
            "Ensured high-quality implementation by writing and maintaining Jest tests in a pure Agile environment",
          // 2022-10 and ongoing
          MigrationTotRPC:
            "Contributed to transforming the CRM from read-only to an interactive, editable system, enabling internal teams to manage customer data more efficiently.\n" +
            "Helped migrate GraphQL queries to tRPC, improving performance and maintainability.",
          // 2022-04 to 2022-06
          AdvancedSearchForCRM:
            "As a Full-Stack Developer built a powerful search tool for FitTech trading platform internal CRM," +
            "making it easier to track users, transactions, and accounts." +
            "Developed an autocomplete search that fetches real-time data from MongoDB Atlas and highlights results dynamically." +
            "Integrated the solution using React, TypeScript, GraphQL, Jest and AtlasSearch, improving efficiency and usability for internal teams.",
          // 2022-04 to 2024-09
          SystemArchitecture:
            "Worked with AWS Lambda, Cognito, and Amazon S3, optimizing system performance and scalability.\n" +
            "Collaborated with developers to design a robust and efficient architecture that supports high-traffic operations.",
        },
      },
      {
        jobTitle: "Front-end Developer",
        companyTitle: "Accenture – Remote",
        date: "2021-10–2022-02",
        highlights:
          "- Primarily focused on developing reusable components for integration into Storybook.\n" +
          "- Designed and implemented components to enhance UI consistency.\n",
        description:
          "Worked as a React & TypeScript developer on a project for Škoda, focusing on reusable component development for the auto product constructor.\n" +
          "Designed and implemented components to ensure UI consistency and integrated them into Storybook for a scalable and maintainable design system.",
      },
      {
        jobTitle: "Front-end Developer",
        companyTitle: "iQuest s.r.o. – Prague, Czech Republic",
        date: "2019-06–2021-10",
        highlights:
          "- Specialized in front-end development at a software company, with additional experience in back-end development.\n" +
          "- Developed responsive styling for web and mobile projects.\n" +
          "- Worked on diverse projects using various programming languages and libraries.\n",
        description: "All the stuff.",
        internalProjectNotes: {
          // 2021-04 to 2021-10
          adminApplication:
            "Developed both the frontend and backend for an admin panel, integrating Firebase as the backend service.\n" +
            "Designed and implemented features for saving, retrieving, and organizing structured data within Firebase, ensuring efficient data handling and real-time updates.\n" +
            "Implemented user authentication using Firebase Authentication with Google Sign-In, ensuring secure access control.\n" +
            "Handled authentication, database interactions, and synchronization between frontend components and Firebase services.\n" +
            "Ensured seamless communication between the user interface and backend logic to provide a smooth user experience.\n" +
            "Technologies: JavaScript, Firebase (Firestore, Realtime Database), Git.",
          // 2020-12 to 2021-03
          iQuestWeb:
            "Participating in updating the design while refactoring the styling code for iQuest on both web and mobile screens.\n" +
            "Rewriting CSS into SCSS to improve code reusability and maintainability.\n" +
            "Removing unused code and adding nesting for better readability.\n" +
            "Improving and ensuring consistent class naming.\n" +
            "Organizing the positioning of containers and wrappers throughout the application.\n" +
            "Enhancing parameters such as Performance, Accessibility, and SEO.\n" +
            "Replacing jQuery with vanilla JavaScript.\n" +
            "Adding various CSS animations.\n" +
            "Developing new pages.\n" +
            "HTML, GIT, SCSS, JavaScript, Ruby.\n",
          // 2020-09 to 2020-12
          pharmacyCompany:
            "Pharmacy Platform:\n" +
            "The frontend development for a pharmacy company’s platform.\n" +
            "Implemented and customized Bootstrap, rewriting variables and applying a custom theme for a unique UI.\n" +
            "Ensured responsiveness and improved user experience across devices.\n" +
            "Worked in constant collaboration with backend developers and designer to align functionality and aesthetics.\n" +
            "Technologies: Bootstrap, JavaScript, CSS, GIT.\n",
          // 2020-06 to 2020-09
          groceryWebProject:
            "Grocery Web Platform:\n" +
            "Built a Jekyll-based website for a grocery brand to showcase products.\n" +
            "Included product descriptions, images, and adjusted recipes tailored to specific products.\n" +
            "Ensured a responsive and user-friendly design to enhance the shopping experience.\n" +
            "Technologies: Jekyll, HTML, CSS, JavaScript, GIT.\n",
          // 2020-02 to 2020-06
          MeduHelp:
            "Implementing of design for custom video player for an educational platform focused on first aid training.\n" +
            "Challenges included creating custom UI controls.\n" +
            "Optimized performance, improved accessibility, and implemented interactive quizzes.\n" +
            "Technologies: HTML5 Video API, JavaScript, CSS.\n",
          // 2019-09 to 2020-02
          groceryShopProject:
            "Developed the frontend of a React Native mobile app for a grocery store.\n" +
            "Helped customers view sales and accumulate bonuses.\n" +
            "Using Android Studio for testing and debugging.\n" +
            "Worked closely with backend developers to ensure smooth integration and user experience.\n" +
            "Technologies: React Native, JavaScript, Android Studio, GIT.\n",
          // 2019-06 to 2019-09
          doosanProject:
            "Full implementation of the design for the Doosan desktop application for offline access to a large number of files.\n" +
            "Development from scratch till completion.\n" +
            "Interesting frontend features:\n" +
            "- Progress bar with the state of the currently downloaded files.\n" +
            "- Numerous subcategories and adding a search.\n" +
            "- Some details required me to create the design myself.\n" +
            "Technologies: React, GIT, CSS.\n",
        },
      },
    ],
  },
  education: {
    title: "Education",
    degrees: [
      {
        jobTitle: "BSc in Software Development",
        companyTitle: "Unicorn University – Prague, Czech Republic",
        date: "2020–2024",
        highlights:
          "- Earned a Bachelor's in Software Development.\n" +
          "- Mastered cloud technologies and modern programming stacks, including JavaScript, Python, React, and " +
          "NodeJS.\n" +
          "- Prepared for advanced software roles through hands-on projects.\n" +
          "- Project management and collaboration" +
          "- Understanding of UML Diagrams" +
          "- Authentication and security implementation" +
          "- Gained practical experience from hackathons and industry internships.\n" +
          "- Thesis focused on optimizing MongoDB queries and enhancing application performance with advanced " +
          "sorting, searching, and filtering techniques. Thesis available " +
          "[**here**](https://theses.unicornuniversity.net/olsevskaja-jelizaveta).\n",
        internalProjectNotes: {
          studentPortalProject:
            "Student Portal Project - A comprehensive university portal for managing student information, study results, subjects, and literature\n" +
            "The project underwent a complete development cycle, from the initial idea to the final product.\n" +
            "including the vision design with UML diagrams, implementation with project management and regular meetings, and testing of the application.\n" +
            "The application was also properly documented at all stages of development, beginning with the high-level abstraction and ending with the detailed code documentation.\n" +
            "The application was built using React, with a backend in NodeJS and MongoDB, RESTful APIs, OAuth, JWT, other used tools: Insomnia, MongoDB Atlas.\n",
          internetOfThingsProject:
            "IoT-Based Environmental Monitoring\n" +
            "Developed an IoT system with a team of five to monitor humidity and temperature for a future flower shop using Arduino and Raspberry Pi.\n" +
            "Designed and built the front-end application, enabling users to visualize real-time data with selectable time intervals (10 min, 1 hour, 1 day, 1 week).\n" +
            "Focused on data visualization, responsive UI, and REST API integration, ensuring an intuitive and efficient user experience.",
          cookbookProject:
            "Built a cookbook app with a team of four as part of the Cloud Application Architecture course at Unicorn University.\n" +
            "Worked on both the frontend (React) and backend (Node.js, MongoDB),\n" +
            "focusing on recipe search, API design, and database integration.\n" +
            "Gained hands-on experience in full-stack development, cloud architecture, and teamwork.",
        },
      },
      {
        jobTitle: "Applied Informatics",
        companyTitle: "Prague University of Economics and Business – Prague, Czech Republic",
        date: "2014–2016",
        highlights:
          "- Studied Applied Informatics with a focus on business applications.\n" +
          "- Gained foundational IT skills and a deep understanding of micro- and macroeconomics, business " +
          "processes, and statistics.\n" +
          "- Completed an intensive 1.5 years of study, equipping me with critical abilities in data processing, " +
          "Java coding, and economic analysis.\n" +
          "- Prepared for diverse roles in tech and business sectors.\n" +
          "- Acquired practical insights into designing information systems and analyzing databases.\n" +
          "- Drove business development through effective data-supported solutions.\n",
      },
    ],
  },
  languagesSection: {
    title: "Languages",
    languages: [
      {
        name: "Swedish",
        level: "Intermediate (B2)",
      },
      {
        name: "English",
        level: "Advanced (C1)",
      },
      {
        name: "Russian",
        level: "Advanced (C1)",
      },
      {
        name: "Czech",
        level: "Proficient (C2)",
      },
    ],
  },
};

export default en;
