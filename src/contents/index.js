import { telesto,c20 } from "../assets/images";
import {
    c,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nodejs,
    react,
    tailwindcss,
    java
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/RajKumar-Developer',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rajkumarr28/',
    }
];

export const experiences = [
    {
        title: "Ui/Ux and Frontend Developer",
        company_name: "Telesto Energy",
        icon: telesto,
        iconBg: "#accbe1",
        date: "September 2023 - April 2024",
        points: [
            "Developing and maintaining web applications using HTML,CSS and other related technologies.",
            "Collaborating with cross-functional teams including Backend Developers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Working with the team to create and maintain a design system.",],
    },
    {
        title: "C20 Million Lights",
        company_name: "Amrita vishwa Vidyapeetham ,Coimbatore",
        icon: c20,
        iconBg: "#accbe1",
        date: " May 2023",
        points: [
            "Developed and maintained web applications using HTML, CSS,PHP and related technologies.",
            "Collaborated with other department students and faculty to ensure smooth planning and execution of the event.",
            "Designed and implemented a responsive user interface for the website, ensuring ease of use and accessibility.",
            "Acted as the primary coordinator for a two-member team, managing tasks and ensuring timely delivery.",],
    },
];

export const projects = [
    {
        iconUrl: nodejs,
        theme: 'btn-back-green',
        name: 'Nex-Init',
        description: 'Developed a project that used to set up the nodejs backend project for your project.',
        link: 'https://github.com/RajKumar-Developer/nex-init',
    },
    {
        iconUrl: c20,
        theme: 'btn-back-blue',
        name: 'C20-Million Lights',
        description: 'Developed a project for organizing a large-scale logo formation event, utilizing a website to manage and coordinate the process effectively.',
        link: 'https://github.com/RajKumar-Developer/C20MillionLights',
    },
    {
        iconUrl: java, 
        theme: 'btn-back-red',
        name: 'University Management System (UMS)',
        description: 'Developed a Java-based student management system with a user-friendly JavaX Swing frontend and SQL database integration, enabling efficient handling of student admissions, attendance, fees, and more.',
        link: 'https://github.com/RajKumar-Developer/JAVA_Frontend', 
    },
    {
        iconUrl: c, 
        theme: 'btn-back-white',
        name: 'Friend Finder',
        description: 'Developed a command-line application that allows users to find and connect with like-minded people by storing and retrieving user data using a file management system and linear search.',
        link: 'https://github.com/RajKumar-Developer/C_Projects/blob/main/CProject/FriendFinder.c',
    }
    
];