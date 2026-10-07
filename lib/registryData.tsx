import { Trophy, Shield, Zap, Box } from "lucide-react";

export const registryItems = [
  {
    type: "project",
    id: "nexus-room",
    code: "PRJ-01",
    title: "Real-Time Launch Dashboard",
    subtitle: "Centralized launch ops dashboard & system metrics",
    desc: "A dashboard checking active client marketing beats, schedules, owner tasks, and live telemetry drift.",
    details: "Built for fast-scaling startups and co-marketing groups. Hooks direct analytics flows into client databases, checking asset approvals, partner marketing timelines, and live traffic metrics to prevent coordination issues.",
    tags: ["Launch Ops", "Dashboards", "FastAPI"],
    icon: <Zap size={22} />,
    color: "#e8602e",
    colorRGB: "232, 96, 46",
    metricsList: [
      { val: "100%", name: "On-Time Launch" },
      { val: "0ms", name: "Cache Latency" },
      { val: "8 Co-Agents", name: "Tracked Globally" }
    ],
    achievement: "Awarded 1st Place National Hackathon trophy for Real-Time State Monitors.",
    img: "/images/custom-project-1.png",
    bentoSpan: "span-8"
  },
  {
    type: "championship",
    id: "tic",
    code: "HACK-01",
    title: "Technocrats Innovation Challenge (TIC 2K26)",
    subtitle: "Organized by Technocrats Institute of Technology & Science, Bhopal | First Prize Winner",
    desc: (
      <span>
        Out of <strong style={{ color: "#ffffff" }}>200+ competing teams</strong> and innovators across multiple institutions, my team secured the <strong style={{ color: "var(--accent)" }}>1st Prize (₹20,000)</strong> at the prestigious Technocrats Innovation Challenge 2K26.
      </span>
    ),
    details: (
      <span>
        Through a demanding <strong style={{ color: "#ffffff" }}>36-hour innovation sprint</strong>, our team successfully advanced through multiple evaluation rounds and emerged as the overall champions with <strong style={{ color: "#ffffff" }}>SHEild AI</strong>, an AI-powered platform focused on Women Safety, Empowerment, and Social Impact.
      </span>
    ),
    tags: ["Grand Prize", "TIC 2K26", "₹20,000"],
    icon: <Trophy size={22} />,
    color: "#ffd600",
    colorRGB: "255, 214, 0",
    metricsList: [
      { val: "1st Place", name: "Rank" },
      { val: "₹20,000", name: "Grand Prize" },
      { val: "36 Hours", name: "Sprint Duration" }
    ],
    achievement: "🏆 GRAND PRIZE WINNER",
    img: "/images/hackathon_tic.jpg",
    imgs: ["/images/hackathon_tic.jpg", "/images/hackathon_tic.jpg"],
    badge: "🏆 GRAND PRIZE WINNER",
    org: "Technocrats Institute of Technology & Science, Bhopal",
    scope: (
      <span>
        Developed and deployed an intelligent assistance ecosystem integrating <strong style={{ color: "#ffffff" }}>AI-driven emergency response</strong>, <strong style={{ color: "#ffffff" }}>safety analytics</strong>, and <strong style={{ color: "#ffffff" }}>real-time support features</strong>. The solution was evaluated on <strong style={{ color: "#ffffff" }}>innovation, scalability, social impact, technical execution, and user experience</strong> under intensive hackathon conditions.
      </span>
    ),
    bentoSpan: "span-4"
  },
  {
    type: "championship",
    id: "iitg-hackathon",
    code: "HACK-03",
    title: "WattsNext EnergyAgri Nexus Hackathon",
    subtitle: "Organized by Indian Institute of Technology, Guwahati | 1st Place + ₹30,000 Cash Prize",
    desc: (
      <span>
        Competing against around <strong style={{ color: "#ffffff" }}>50 teams</strong>, my team secured the <strong style={{ color: "#00e588" }}>1st Prize (₹30,000)</strong> at the prestigious WattsNext EnergyAgri Nexus Hackathon at IIT Guwahati.
      </span>
    ),
    details: (
      <span>
        Through multiple rounds including PPT shortlisting and final project demonstration before an esteemed panel of IIT Guwahati professors, our team demonstrated exceptional innovation with <strong style={{ color: "#ffffff" }}>Agri_PV_Navigator</strong>, a farmer-centric mobile application for exploring and evaluating Agrivoltaic (Agri-PV) systems.
      </span>
    ),
    tags: ["1st Place", "IIT Guwahati", "₹30,000"],
    icon: <Trophy size={22} />,
    color: "#00e588",
    colorRGB: "0, 229, 136",
    metricsList: [
      { val: "1st Place", name: "Rank" },
      { val: "₹30,000", name: "Grand Prize" },
      { val: "50 Teams", name: "Competitors" }
    ],
    achievement: "🥇 1ST PLACE WINNER",
    img: "/images/hackathon_iitg.jpeg",
    imgs: ["/images/hackathon_iitg.jpeg", "/images/hackathon_iitg.jpeg"],
    badge: "🥇 1ST PLACE WINNER",
    org: "Indian Institute of Technology, Guwahati",
    scope: (
      <span>
        Developed a <strong style={{ color: "#ffffff" }}>farmer-centric mobile application</strong> for exploring and evaluating <strong style={{ color: "#ffffff" }}>Agrivoltaic (Agri-PV) systems</strong>. Integrates site assessment, system design, visualization, and <strong style={{ color: "#ffffff" }}>preliminary techno-economic insights</strong> into a unified platform.
      </span>
    ),
    bentoSpan: "span-6"
  },
  {
    type: "project",
    id: "sheild-ai",
    code: "PRJ-02",
    title: "SHEild AI Platform",
    subtitle: "AI-Powered Women Safety & Emergency Response System",
    desc: "An intelligent safety platform leveraging Artificial Intelligence, safe-route navigation, predictive risk detection, and automated emergency response workflows to enhance personal security and community well-being.",
    details: "Traditional safety solutions are reactive and depend heavily on manual intervention after an incident occurs. SHEild AI introduces a proactive protection framework capable of identifying potential risks, recommending safer routes, and triggering intelligent emergency workflows in real time.\n\nDeveloped and validated during multiple national-level hackathons, the platform demonstrates how AI can be leveraged to address critical social challenges while maintaining accessibility, scalability, and reliability.",
    tags: ["Flutter", "Machine Learning", "Geolocation Services", "Emergency Response Automation", "Node.js", "Firebase"],
    icon: <Shield size={22} />,
    color: "#00e5ff",
    colorRGB: "0, 229, 255",
    metricsList: [
      { val: "95%", name: "Risk Detection Accuracy" },
      { val: "<3s", name: "Emergency Response Time" },
      { val: "24/7", name: "AI Safety Monitoring" }
    ],
    achievement: "🏆 Building AI-powered safety infrastructure for a safer and more empowered society.",
    img: "/images/project2_img1.jpg",
    scrollingImages: [
      "/images/project2_img1.jpg",
      "/images/project2_img2.jpg",
      "/images/project2_img3.jpg",
      "/images/project2_img4.jpg",
      "/images/project2_img5.jpg"
    ],
    bentoSpan: "span-6"
  },
  {
    type: "championship",
    id: "bgi-hackathon",
    code: "HACK-02",
    title: "BGI Hackathon 2026",
    subtitle: "Organized by Bansal Group of Institutes & MPSEDC | National Runner-Up",
    desc: (
      <span>
        Competing against <strong style={{ color: "#ffffff" }}>600+ teams</strong> and over <strong style={{ color: "#ffffff" }}>2,800 participants</strong> from across India, my team secured the <strong style={{ color: "#00e5ff" }}>Runner-Up Position (₹12,000)</strong> at the prestigious BGI Hackathon 2026 held in Bhopal.
      </span>
    ),
    details: (
      <span>
        Through multiple rounds of technical evaluation, mentorship sessions, and final pitching, our team demonstrated exceptional innovation and execution with <strong style={{ color: "#ffffff" }}>SHEild AI</strong>, an intelligent safety platform designed to empower women and vulnerable communities.
      </span>
    ),
    tags: ["National Runner-Up", "BGI 2026", "₹12,000"],
    icon: <Trophy size={22} />,
    color: "#00e5ff",
    colorRGB: "0, 229, 255",
    metricsList: [
      { val: "2nd Place", name: "Rank" },
      { val: "₹12,000", name: "Runner-Up Prize" },
      { val: "600+ Teams", name: "Competitors" }
    ],
    achievement: "🥈 NATIONAL RUNNER-UP",
    img: "/images/hackathon_bgi.jpg",
    imgs: ["/images/hackathon_bgi.jpg", "/images/hackathon_bgi.jpg"],
    badge: "🥈 NATIONAL RUNNER-UP",
    org: "Bansal Group of Institutes & MPSEDC",
    scope: (
      <span>
        AI-driven safety ecosystem integrating <strong style={{ color: "#ffffff" }}>risk-aware navigation</strong>, <strong style={{ color: "#ffffff" }}>emergency response automation</strong>, <strong style={{ color: "#ffffff" }}>intelligent alerts</strong>, and <strong style={{ color: "#ffffff" }}>real-time assistance mechanisms</strong> validated during a <strong style={{ color: "#ffffff" }}>national-level innovation challenge</strong>.
      </span>
    ),
    bentoSpan: "span-6"
  },
  {
    type: "project",
    id: "movie-app",
    code: "PRJ-03",
    title: "Movie Social App",
    subtitle: "Movie discovery and social platform",
    desc: "A rich and modern platform for discovering movies, rating films, and connecting with other cinephiles.",
    details: "Built with a focus on immersive UI, vibrant imagery, and smooth navigation. Users can track their watchlist, explore trending movies, review films, and maintain a personalized cinema DNA score.",
    tags: ["React Native", "UI/UX", "Social App"],
    icon: <Zap size={22} />,
    color: "#ffab00",
    colorRGB: "255, 171, 0",
    metricsList: [
      { val: "4.9", name: "App Store" },
      { val: "10K+", name: "Active Users" },
      { val: "1M+", name: "Movies Rated" }
    ],
    achievement: "Top 10 Entertainment Apps of 2026",
    img: "/images/project3_img1.jpg",
    scrollingImages: [
      "/images/project3_img1.jpg",
      "/images/project3_img2.jpg",
      "/images/project3_img3.jpg",
      "/images/project3_img4.jpg",
      "/images/project3_img5.jpg"
    ],
    bentoSpan: "span-5"
  },
  {
    type: "project",
    id: "restaurant-app",
    code: "PRJ-04",
    title: "QR Menu & POS App",
    subtitle: "Offline-first restaurant menu and ordering system",
    desc: "A robust mobile application allowing restaurant staff to manage active tables, track kitchen prep states, and process split payments securely.",
    details: "High-volume restaurants required an app that wouldn't fail during spotty WiFi conditions. We implemented an offline-first caching layer where orders sync instantly the moment connectivity returns.",
    tags: ["Flutter", "Cross-Platform", "Offline-First"],
    icon: <Box size={22} />,
    color: "#d500f9",
    colorRGB: "213, 0, 249",
    metricsList: [
      { val: "1.2s", name: "App Boot Time" },
      { val: "0% Loss", name: "Offline Sync" },
      { val: "4.9", name: "App Store Rating" }
    ],
    achievement: "Top 10 B2B POS systems across App Store regional charts.",
    img: "/images/restaurant_app_ui.png",
    bentoSpan: "span-7"
  }
];
