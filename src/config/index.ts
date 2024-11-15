import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Daniel Pombo — Software Developer",
  author: "Daniel Pombo Ortega",
  description:
    "Software Developer with 5 years of experience in designing, developing, and maintaining robust web applications",
  lang: "en",
  siteLogo: "/dev-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/daniel-pombo-63a434194/" },
    { text: "Github", href: "https://github.com/pombodaniel10" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Daniel Pombo",
    specialty: "Web Developer",
    summary:
      "Developer based in Cartagena, Colombia. I specialize in web application design, development and maintenance.",
    email: "pombodaniel10@gmail.com",
  },
  experience: [
    {
      company: "Propelus",
      position: "Fullstack developer",
      startDate: "Mar 2020",
      endDate: "Jun 2024",
      summary: [
        "Built new components and functionalities on the platform's website using Reacts, component-based architecture to modularize and optimize frontend codebase, facilitating easier maintenance and scalability.",
        "Improved core platform features using Node.js, including new functionalities into APIs, developed workers to manage multiple services efficiently and integrated with databases for data management",
        "Migrated legacy services to implement aws services to streamline server management and improve scalability, ensuring seamless transition of applications and data while optimizing performance and cost-efficiency.",
      ],
    },
    {
      company: "University of Cartagena",
      position: "Research Developer",
      startDate: "Feb 2019",
      endDate: "Feb 2020",
      summary: [
        "Led the development of servers for data management, persistence and visualization for embedded devices using MEAN stack, with focus on the internet of things.",
      ],
    },
    {
      company: "Caiman Labs",
      position: "CEO",
      startDate: "Jun 2018",
      endDate: "",
      summary:
        "Development of embedded systems for research groups using devices like esp8266 and arduino. Applying OOP through C++ to make software that connect sensors to the development board and share the data collected to Internet using MQTT.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Daniel Pombo, a highly skilled and versatile Fullstack Developer with experience in designing, developing, and maintaining robust web applications. 
      Proficient in a wide array of technologies and frameworks, with a strong emphasis on creating seamless and efficient user experiences. 

      Over the years, I've building a deep understanding of both client-side and server-side development, ensuring optimal performance and scalability of applications.
    `,
    image: "/dev-big.png",
  },
};

// #5755ff
