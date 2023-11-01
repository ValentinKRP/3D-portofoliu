import {
  mobile,
  backend,
  creator,
  web,
  gitproject,
  javascript,
  typescript,
  html,
  bootstrap,
  laravel,
  flutter,
  php,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
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
  threejs,
  fii,
  p3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Bootstrap",
    icon: bootstrap,
  },

  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences = [
  {
    title: "FII Student",
    company_name: "FII",
    icon: fii,
    iconBg: "#383E56",
    date: "October 2019 - July 2022",
    points: [
      "Learning diffrent concepts of computer science",
      "Developing programming skills",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "P3 Hotel Software",
    icon: p3,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Present",
    points: [
      "Developing and maintaining hotel booking engines for hotels using Laravel and other related technologies.",
    ],
  },
];

const projects = [
  {
    name: "Shop app",
    description: "A simple shop app usign React framework",
    tags: [
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/ValentinKRP/my-shop",
  },
  {
    name: "FitNutrition",
    description:
      "My degree project, a fitness mobile app to track your calorie to help you achieve your objective.I used Flutter framework and work with a REST API  to search for specific food that user want to search and add to his daily journal.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
    ],
    image: gitproject,
    source_code_link: "https://github.com/ValentinKRP/FitNutritionLicenta",
  },

  {
    name: "To Do List",
    description: "A simple to do list app using React framework",
    tags: [
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gitproject,
    source_code_link: "https://github.com/ValentinKRP/react-to-do-list",
  },
  {
    name: "Backend-Shop Laravel",
    description:
      "A shop application focused on the backend functionality using Laravel",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: gitproject,
    source_code_link: "https://github.com/ValentinKRP/Laravel-shopApp-backend",
  },
  {
    name: "Backend-Shop PHP",
    description:
      "A shop application focused on the backend functionality using only php",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: gitproject,
    source_code_link: "https://github.com/ValentinKRP/PHP-shopApp-backend",
  },
  {
    name: "Bike Service",
    description:
      "Web-based platform that allows users to appoint for a a problem with his bike in a service",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gitproject,
    source_code_link: "https://github.com/ValentinKRP/TW",
  },
  {
    name: "3D personal website",
    description: "A portofolio using react 3d libraries",
    tags: [
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gitproject,
    source_code_link: "https://github.com/ValentinKRP/3D-portofoliu",
  },
];

export { services, technologies, experiences, projects };
