import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    interview,
  collab,
  chatapp,
    threejs,
    aws,
    bootstrap,
    java,
    jwt,
    microservices,
    mssql,
    mui,
    mysql,
    nextjs,
    postgresql,
    spring,
    springboot,
    websocket,
    mars,
    portfolio
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "aws",
    //   icon: aws,
    // },
    // {
    //   name: "bootstrap",
    //   icon: bootstrap,
    // },
    // {
    //   name: "jwt",
    //   icon: jwt,
    // },
    // {
    //   name: "microservices",
    //   icon: microservices,
    // },
    {
      name: "mssql",
      icon: mssql,
    },
    // {
    //   name: "mui",
    //   icon: mui,
    // },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
    {
      name: "spring",
      icon: spring,
    },
    {
      name: "springboot",
      icon: springboot,
    },
    // {
    //   name: "websocket",
    //   icon: websocket,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer (Intern)",
      company_name: "Mars Track Technologies Pvt Ltd",
      icon: mars,
      iconBg: "#E6DEDD",
      date: "March 2023 - July 2023",
      points: [
        "Contributed to building and integrating scalable full-stack applications, enhancing project development timelines by 40%.",
        "Created responsive and user-friendly interfaces, ensuring compatibility across major browsers and devices, leading to a 20% increase in user engagement.",
        // "Identified and resolved critical bugs, improving website loading speeds by 35% and overall application reliability.",
        "Worked closely with mentors and cross-functional teams, implementing feedback to ensure high-quality deliverables and enhance team synergy.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Mars Track Technologies Pvt Ltd",
      icon: mars,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Spearheaded the creation of high-performance full-stack applications, driving a 60% increase in development efficiency.",
        "Delivered seven responsive and robust applications, achieving 100% client satisfaction while reducing post-launch maintenance requirements by 30%.",
        "Engineered and optimized RESTful APIs, significantly reducing response times by 40%, ensuring seamless integration with MySQL and SQL Server databases",
        "Led code reviews and version control processes on GitHub, leveraging Git workflows to reduce deployment issues by 20% and maintain top-notch code quality.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Interview Mocker",
      description:
        "Built an AI-driven mock interview platform offering real-time feedback and tailored question sets to enhance interview preparation.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Postgresql",
          color: "pink-text-gradient",
        },
        {
          name: "Gemini AI",
          color: "blue-text-gradient",
        },
      ],
      image: interview,
      source_code_link: "https://github.com/Usman972002/AI_Interview_Mocker",
      live_demo_link:"https://ai-interview-mocker-sigma.vercel.app/",
    },
    {
      name: "Real-Time Collaboration Platform",
      description:
        "Created a collaborative document editor supporting multi-user editing with instant updates and real-time synchronization.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "MongoDb",
          color: "pink-text-gradient",
        },
        {
          name: "STOMP.js",
          color: "blue-text-gradient",
        },
        {
          name: "WebSockets",
          color: "green-text-gradient",
        },
        {
          name: "Quill",
          color: "pink-text-gradient",
        },
      ],
      image: collab,
      source_code_link: "https://github.com/Usman972002/Real_Time_Collaboration_Platform_Frontend_React",
      live_demo_link:"https://candid-croquembouche-55d2d2.netlify.app/",
    },
    {
      name: "Chat App",
      description:
        "Developed a chat application enabling instant messaging, real-time notifications, and a seamless user experience.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDb",
          color: "pink-text-gradient",
        },
        {
          name: "WebSockets",
          color: "green-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Usman972002/chat-app",
      live_demo_link:"https://usmans-chat-app.onrender.com/",
    },
    {
      name: "3D Portfolio",
      description:
        "Designed an interactive 3D portfolio website showcasing projects and skills with engaging visuals and dynamic user interactions.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Usman972002/3dportfolio",
      live_demo_link:"https://usman972002.github.io/3dportfolio/",
    },
  ];
  
  export {navLinks, services, technologies, experiences, testimonials, projects};