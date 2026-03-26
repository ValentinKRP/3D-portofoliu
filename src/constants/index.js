import { gitproject } from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [];
const technologies = [];
const experiences = [];
const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    name: "Nexus Platform",
    description:
      "Full-stack operations platform for catalog, warehouse, vehicle, order, return, and channel-management workflows.",
    role: "Backend API, admin tooling, frontend dashboard",
    stack: "Laravel 12, Next.js 16, React 19, MariaDB",
    useCase: "Internal operations hub for marketplace teams",
    highlights: [
      "Built Laravel APIs, Filament admin resources, and a Next.js dashboard with localized routing for day-to-day operations work.",
      "Delivered product, category, warehouse, vehicle, order, invoice, return, subscription, and feature-flag workflows in one platform.",
      "Integrated marketplace channels such as OLX, eBay, Ovoko, and Pieseauto in a Dockerized multi-service environment.",
      "Implemented session-aware authentication between the frontend and backend for admin and operations users.",
      "Maintained supporting infrastructure including reverse proxy routing, HTTPS automation, PhpMyAdmin, Mailhog, and debug-friendly Docker services.",
    ],
    images: [
      withBase("projects/nexus/2.png?v=20260326a"),
      withBase("projects/nexus/3.png"),
      withBase("projects/nexus/4.png"),
      withBase("projects/nexus/5.png"),
      withBase("projects/nexus/6.png"),
      withBase("projects/nexus/7.png"),
      withBase("projects/nexus/8.png"),
      withBase("projects/nexus/9.png"),
    ],
    tags: [
      { name: "Laravel 12", color: "blue-text-gradient" },
      { name: "Next.js 16", color: "green-text-gradient" },
      { name: "React 19", color: "pink-text-gradient" },
      { name: "Filament", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    source_code_link: "",
  },
  {
    name: "CodeIgniter Marketplace",
    description:
      "Marketplace application combining storefront, seller operations, checkout, messaging, and admin workflows in one system.",
    role: "Full marketplace application and integrations",
    stack: "CodeIgniter 4, PHP 8.3, Apache, MariaDB",
    useCase: "Public marketplace plus seller workspace",
    highlights: [
      "Delivered public marketplace browsing, seller dashboards, carts, checkout flows, order lifecycles, and internal messaging.",
      "Ran the application in Docker with Apache, Mailhog, Stripe-based payment flows, JWT usage, and external system bridges.",
      "Worked in a hybrid architecture that combines CodeIgniter with Illuminate components and legacy-compatible runtime choices such as ionCube.",
      "Supported seller inventory management, subscriptions, notifications, part requests, and company profile workflows in the same application.",
      "Exposed integration-oriented APIs and sync flows for products, vehicles, users, returns, and webhook-driven business processes.",
    ],
    images: [
      withBase("projects/autozon/1.png"),
      withBase("projects/autozon/2.png"),
      withBase("projects/autozon/4.png"),
      withBase("projects/autozon/5.png"),
      withBase("projects/autozon/6.png"),
      withBase("projects/autozon/7.png"),
      withBase("projects/autozon/8.png"),
      withBase("projects/autozon/9.png"),
      withBase("projects/autozon/10.png"),
      withBase("projects/autozon/11.png"),
      withBase("projects/autozon/12.png"),
      withBase("projects/autozon/13.png"),
      withBase("projects/autozon/14.png"),
      withBase("projects/autozon/15.png"),
    ],
    tags: [
      { name: "CodeIgniter 4", color: "blue-text-gradient" },
      { name: "PHP 8.3", color: "green-text-gradient" },
      { name: "MariaDB", color: "pink-text-gradient" },
      { name: "Stripe", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    source_code_link: "",
  },
  {
    name: "PartsLinker Operations Platform",
    description:
      "Custom operations platform for dismantlers and used-parts sellers, centered on stock, donor vehicles, warehouse activity, order intake, and channel synchronization.",
    role: "Multi-tenant seller and admin platform",
    stack: "Custom PHP, Twig, MySQL / MariaDB, jQuery",
    useCase: "Operations system for dismantlers",
    highlights: [
      "Built on a heavily customized OpenCart-style MVC core with server-rendered Twig templates and route-based permissions.",
      "Delivered inventory, donor vehicle, warehouse label, imported order, invoice, subscription, support, and partner/mobile API workflows.",
      "Worked across AI-assisted product drafting, background removal, feed exports, and a large codebase with hundreds of routes and templates.",
      "Supported multi-tenant seller, employee, and admin contexts through operational dashboards and permission-based internal workspaces.",
      "Integrated marketplace, courier, billing, search, and partner services so businesses can manage stock, sales, and fulfillment from one system.",
    ],
    images: [
      withBase("projects/PL/1.png"),
      withBase("projects/PL/2.png"),
      withBase("projects/PL/3.png"),
      withBase("projects/PL/4.png"),
      withBase("projects/PL/5.png"),
      withBase("projects/PL/6.png"),
      withBase("projects/PL/7.png"),
      withBase("projects/PL/8.png"),
    ],
    tags: [
      { name: "Custom PHP", color: "blue-text-gradient" },
      { name: "Twig", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "OpenCart-style MVC", color: "green-text-gradient" },
    ],
    source_code_link: "",
  },
  {
    name: "Fitness Calorie Tracking App",
    description:
      "Bachelor degree project built in Flutter to help users track calories, monitor daily activity, and follow personal fitness progress through a mobile interface.",
    role: "Mobile app project",
    stack: "Flutter",
    useCase: "Calories and personal progress tracking",
    highlights: [
      "Built as a bachelor degree project focused on a mobile-first fitness experience.",
      "Tracked calorie intake, daily activity, and personal progress in a simple journal-style flow.",
      "Used a REST API to search foods and support day-to-day nutrition logging.",
    ],
    images: [
      withBase("projects/fitness/1.png"),
      withBase("projects/fitness/2.png"),
      withBase("projects/fitness/3.png"),
      withBase("projects/fitness/4.png"),
      withBase("projects/fitness/5.png"),
      withBase("projects/fitness/6.png"),
      withBase("projects/fitness/7.png"),
    ],
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Mobile App", color: "green-text-gradient" },
      { name: "REST API", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/ValentinKRP/FitNutritionLicenta",
  },
  {
    name: "Minimal Shop Application",
    description:
      "Personal learning project built with vanilla PHP and vanilla JavaScript, without frameworks, to strengthen core web development fundamentals through a small shop application.",
    role: "Learning project",
    stack: "Vanilla PHP, JavaScript, HTML, CSS",
    useCase: "Core web development fundamentals",
    highlights: [
      "Built without frameworks to better understand routing, rendering, forms, and request handling at a lower level.",
      "Used a minimalist shop concept to practice product display, user interactions, and basic application structure.",
      "Served as an early project for strengthening core backend and frontend web development skills.",
    ],
    images: [gitproject],
    tags: [
      { name: "Vanilla PHP", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "HTML/CSS", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/ValentinKRP/PHP-shopApp-backend",
  },
];

export { services, technologies, experiences, projects };
