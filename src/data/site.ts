import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  meta: {
    title: "Amit Kumar Gandhi — WooCommerce & WordPress Specialist",
    description:
      "WordPress specialist with 5+ years building WooCommerce stores, automation workflows, custom post types, and third-party integrations that help businesses scale.",
    author: "Amit Kumar Gandhi",
    jobTitle: "WooCommerce Specialist | WordPress Automation & Custom Workflows",
  },
  hero: {
    avatar: {
      src: "/Amit_pfp.jpg",
      alt: "Amit Kumar Gandhi",
      objectPosition: "center 30%",
    },
    name: "Amit Kumar Gandhi",
    role: "WooCommerce Specialist | WordPress Automation & Custom Workflows",
    tags: [
      "WooCommerce Specialist",
      "WordPress Automation",
      "Gravity Forms",
      "PODS & CPT Architecture",
      "Web Scraping & Data Sync",
    ],
    summary:
      "WordPress specialist with 5+ years of experience building and optimising WooCommerce stores, automation workflows, and scalable WordPress systems. Skilled in PODS/CPT architecture, Gravity Forms integrations, web scraping, and third-party API connections — focused on faster websites, cleaner workflows, and automated operations that support real business growth.",
    resume: {
      href: "/Amit Kumar Gandhi - Resume.pdf",
      label: "Download resume",
      fileName: "Amit Kumar Gandhi - Resume.pdf",
    },
  },
  social: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iamitgandhi",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/iamitgandhi",
    },
    {
      id: "x",
      label: "X",
      href: "https://x.com/i_amitgandhi",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/iamitgandhi/",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/iamitgandhi",
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:contact@amitkumargandhi.com",
    },
  ],
  experience: [
    {
      company: "vSplash Techlabs Private Limited",
      role: "WordPress Integrator II → Sr. WordPress Integrator I",
      location: "Hyderabad, Telangana",
      period: "Jan 2024 — May 2026",
      highlights: [
        "Built and maintained WordPress websites using WooCommerce, Gravity Forms, and PODS to deliver robust content management and e-commerce solutions.",
        "Developed custom web scraping tools for automated data collection and cross-platform integration, enabling real-time data sync workflows.",
        "Automated business workflows by integrating diverse website functionalities — cutting manual processes and improving operational efficiency for clients.",
        "Collaborated on UI/UX design in Figma, translating mockups into responsive, accessible web applications with HTML, CSS, and JavaScript.",
        "Leading WordPress integration projects end-to-end, owning architecture decisions for WooCommerce stores and custom workflow systems on production environments.",
        "Designing PODS/CPT data models and Gravity Forms pipelines to automate complex business operations and reduce manual overhead.",
        "Handling plugin conflict resolution, payment gateway integrations, and performance tuning on high-traffic WooCommerce stores.",
      ],
    },
    {
      company: "AffinityX",
      role: "Junior Associate — Website Developer",
      location: "Pune, Maharashtra",
      period: "Jan 2023 — Dec 2023",
      highlights: [
        "Delivered website development services as a vendor partner for GoDaddy, building functional and visually polished WordPress sites to GoDaddy's production standards.",
        "Implemented responsive design principles ensuring seamless cross-device compatibility, with a strong focus on page load speed and performance optimisation.",
        "Maintained high UI/UX standards across all delivered sites, prioritising engaging and accessible browsing experiences.",
      ],
    },
    {
      company: "Initiators Media",
      role: "WordPress Developer",
      location: "Greater Noida",
      period: "Jul 2022 — Dec 2022",
      highlights: [
        "Set up and configured WordPress environments from scratch, building visually appealing websites combining creativity with technical precision.",
        "Applied responsive design and performance optimisation practices — page load speed, device adaptability, and seamless UX were core deliverables on every project.",
      ],
    },
  ],
  skillGroups: [
    {
      title: "CMS & E-commerce",
      items: [
        { icon: "wordpress", label: "WordPress" },
        { icon: "woocommerce", label: "WooCommerce" },
        { icon: "gravityforms", label: "Gravity Forms" },
        { icon: "pods", label: "PODS / CPT" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { icon: "javascript", label: "JavaScript" },
        { icon: "html5", label: "HTML5" },
        { icon: "css3", label: "CSS3" },
      ],
    },
    {
      title: "Design & Tooling",
      items: [
        { icon: "figma", label: "Figma" },
        { icon: "php", label: "PHP" },
        { icon: "git", label: "Git" },
      ],
    },
    {
      title: "Automation & Data",
      items: [
        { icon: "webscraping", label: "Web Scraping" },
        { icon: "rest", label: "REST APIs" },
        { icon: "mysql", label: "MySQL" },
      ],
    },
  ],
openSource: [
  {
    role: "Founder & Freelance Developer",
    project: "BAD Design Media",
    description:
      "Running a full-time freelance agency focused on WordPress and WooCommerce development. Built custom websites, automated business workflows, and streamlined client onboarding and service delivery systems for businesses.",
    repoHref: "https://baddesignmedia.com/",
    links: [
      {
        label: "Visit site → baddesignmedia.com",
        href: "https://baddesignmedia.com/",
      },
    ],
    tags: ["WordPress", "WooCommerce", "Business Automation"],
  },
  {
    role: "Co-Founder",
    project: "Initiators Media Pvt. Ltd.",
    description:
      "Co-founded a collaborative digital agency delivering modern web solutions and digital services for clients. Contributing to development, technical strategy, workflow systems, and project execution alongside the founding team.",
    repoHref: "https://initiatorsmedia.com/",
    links: [
      {
        label: "Visit site → initiatorsmedia.com",
        href: "https://initiatorsmedia.com/",
      },
    ],
    tags: ["Web Development", "Branding", "Digital Solutions"],
  },
],
  projects: [
    {
      title: "KSR & Associates",
      description:
        "Professional website for a financial consultancy firm — built with WordPress featuring clean service pages, lead generation forms, and SEO-optimised content structure to drive enquiries.",
      href: "https://ksrmassociates.com/",
      tags: ["WordPress", "Lead Generation", "SEO", "Custom Theme"],
    },
    {
      title: "Avinash Singh — Founder Portfolio",
      description:
        "Personal branding and founder portfolio site — designed to communicate authority and credibility, with a clean layout, sharp typography, and CTA-focused sections.",
      href: "https://avinashsinghfounder.com/",
      tags: ["Express", "Node.js", "Personal Brand", "Custom Design"],
    },
    {
      title: "Filthy Forty",
      description:
        "Lifestyle and events website with a bold visual identity — featuring dynamic content sections, event highlights, and a fully responsive design that reflects the brand personality.",
      href: "https://filthyforty.com/",
      tags: ["WordPress", "Events", "Custom Theme", "UI/UX"],
    },
    {
      title: "Manish Kumar Singh",
      description:
        "Professional portfolio for a business leader — built with a minimal, executive aesthetic to showcase achievements, media coverage, and thought leadership content.",
      href: "https://manishkumarsingh.com/",
      tags: ["Next.js", "React", "Express", "Node.js", "Personal Brand"],
    },
  ],

  education: {
    school: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    location: "New Delhi, India",
    period: "Aug 2018 — Jun 2022",
  },
  contact: {
    intro:
      "Open to WooCommerce projects, WordPress automation work, or a quick chat about your next build — reach out by email.",
    email: "contact@amitkumargandhi.com",
    phone: "+91-999-006-5605",
  },
  footerQuote: {
    text: "If you don't take risks, you can't create a future.",
    author: "Monkey D. Luffy",
  },
};
