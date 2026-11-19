// ===== DATA.JS =====
const cvData = {
  personal: {
    name: "Hà Nhựt Khôi",
    title: "Information Assurance",
    subtitle: "I turn security threats into actionable defenses.",
    bio: "Hà Nhựt Khôi — Information Assurance undergraduate at FPT University Can Tho (GPA 3.25 / 4.0). Prospective Master's researcher specializing in AI for Threat Detection, Malware Reverse Engineering, Autonomous SOC Operations, and Resilient Defense Networks in South Korea (Global Korea Scholarship - GKS-G Candidate).",
    email: "khoihn.ce190080@gmail.com",
    phone: "079-257-7603",
    location: "Can Tho & Ca Mau, Vietnam",
    gpa: "3.25 / 4.0",
    targetDegree: "Master of Science (M.S.) in Cybersecurity",
    scholarshipTarget: "Global Korea Scholarship (GKS-G)",
    github: "https://github.com/nhutkhoi24",
    linkedin: "https://www.linkedin.com/in/nh%E1%BB%B1t-kh%C3%B4i-h%C3%A0-769003403/",
    profileImage: "image/nhutkhoi.png",
    profileImage2: "image/nhutkhoi2.jpg",
  },
  education: [
    {
      school: "FPT University, Can Tho Campus",
      major: "Information Assurance (Cybersecurity)",
      status: "Bachelor Candidate (GPA: 7.722/10 · B+ / ~3.25/4.0)",
      date: "09/2023 - 2027 (Expected)",
      description: "Major in Information Assurance. Core research focus: Malware Reverse Engineering, Applied Cryptography, Resilient Network Administration & Defense Systems (Cisco CCNA certified), and Penetration Testing Automation."
    },
  ],
  workExperience: [
    {
      role: "Chief Technology Officer",
      organization: "UniForge",
      date: "05/09/2026 - Present",
      description: "Leading technical strategy, engineering platform architecture, and overseeing deployment solutions for student startup ventures at FPT University.",
      link: "https://uniforge-platform.vercel.app",
      current: true,
    },
    {
      role: "Internship — Digital Transformation Center",
      organization: "Center for Digital Transformation · Ca Mau Provincial Department of Science and Technology",
      date: "05/01/2026 - 11/04/2026",
      description: "Contributed to implementing and securing digital transformation solutions, data protection workflows, and administrative information systems for governmental agencies.",
    },
    {
      role: "Information Assurance Researcher & Student",
      organization: "FPT University, Can Tho Campus",
      date: "09/2023 - Present",
      description: "Conducting hands-on network defense research, penetration testing automation, malware reverse engineering, and representing the university in national CTF and Secathon competitions.",
    },
  ],
  certificates: [
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      organization: "Cisco Networking Academy · FPT University Can Tho",
      date: "11/2026",
      link: "https://www.netacad.com/recognitions/verify/01ce01e9-a185-46aa-b0b5-2878f8242576",
      badge: "Cisco Certified (CCNA)",
      image: "image/cert-cisco-ccna.jpg"
    },
    {
      title: "Microsoft Python Development Professional Certificate",
      organization: "Microsoft",
      date: "10/2026",
      link: "https://coursera.org/share/e29501fa7b0581b2602c274d654a4e3e",
      badge: "Professional Certificate (6 Courses)",
      image: "image/cert-microsoft-python.jpg"
    },
    {
      title: "CertNexus Certified Ethical Emerging Technologist",
      organization: "CertNexus",
      date: "09/2025",
      link: "https://coursera.org/share/9c38d4b6e6661c552eb014f7940153e1",
      badge: "Emerging Tech & Ethics"
    },
    {
      title: "Data Analysis and Visualization with Python",
      organization: "Microsoft",
      date: "05/2025",
      link: "https://coursera.org/share/e2986fb7a32f5237c4008e2697031878",
      badge: "Python & Analytics"
    },
    {
      title: "Applied Cryptography",
      organization: "University of Colorado System",
      date: "09/2023 - Present",
      link: "https://coursera.org/share/e71d06fa3e2bf14e82e8c44a2c272b6f",
      badge: "Cryptography"
    },
    {
      title: "Kali Linux",
      organization: "Board Infinity",
      date: "05/2025",
      link: "https://coursera.org/share/afcc71ed157d3e066225f21e695ce4fb",
      badge: "Offensive Security"
    },
  ],
  skills: [
    {
      category: "Operating System & Toolkits",
      items: [
        { name: "Kali Linux", level: "Advanced" },
        { name: "Wireshark", level: "Network Analysis" },
        { name: "Burp Suite", level: "Web Pentesting" },
        { name: "IDA Pro", level: "Reverse Engineering" },
        { name: "Hydra", level: "Auth Auditing" },
        { name: "Autopsy", level: "Digital Forensics" },
      ],
    },
    {
      category: "Security Practice",
      items: [
        { name: "Malware Analysis", level: "Core" },
        { name: "Reverse Engineering", level: "Core" },
        { name: "Database Security", level: "Practice" },
        { name: "Pentest Automation", level: "Workflow" },
        { name: "System Administration", level: "Hardening" },
        { name: "Network Defense", level: "SOC Operations" },
      ],
    },
    {
      category: "Programming & Scripting",
      items: [
        { name: "Python", level: "Primary" },
        { name: "C", level: "Low-level" },
        { name: "Java", level: "Application" },
        { name: "Bash / Shell", level: "Automation" },
      ],
    },
    {
      category: "Networking & Protocols",
      items: [
        { name: "TCP/IP & OSI", level: "Deep Knowledge" },
        { name: "IDS / IPS", level: "Monitoring" },
        { name: "Firewall & Routing", level: "Hardening" },
        { name: "Packet Inspection", level: "Traffic Analysis" },
      ],
    },
    {
      category: "Languages & Soft Skills",
      items: [
        { name: "English (Professional Working)", level: "CEFR B2 Target" },
        { name: "Korean (Elementary)", level: "TOPIK Preparation" },
        { name: "Analytical Problem Solving", level: "Applied" },
        { name: "Technical Leadership", level: "CTO Experience" },
      ],
    },
  ],
  achievements: [
    {
      title: "Promising Venture Award – NEX26 Startup Grand Finale",
      event: "Ca Mau Startup Competition · Oct 31, 2026",
      description: 'Collaborated as Technical & Security Lead with FPT University teammates to earn the Promising Venture Award at the NEX26 Grand Finale for "Sổ Ơi – Smart Voice AI Sales Assistant for Retailers".',
      featured: true,
      tag: "Startup Award",
      images: {
        award: "image/nex26-award.jpg",
        cert: "image/nex26-cert.jpg",
        team: "image/nex26-team.jpg",
      },
    },
    {
      title: "Third Prize – F-Hacker CTF Competition",
      event: "FPT University · 2025",
      description: "Won Third Prize (Bracket B) in the collegiate cybersecurity & hacking championship F-Hacker 2025 with team D0ub3 Cl1ck!, solving challenges in Web, Reverse Engineering, Pwn, Crypto, and Forensics.",
      tag: "CTF Competition",
    },
    {
      title: "National Student Cyber Contest — Top 120",
      event: "National Level, Vietnam · 2026",
      description: "Ranked among the Top 120 outstanding competitors nationwide in the Vietnam National Student Information Security Contest 2026.",
      tag: "National Contest",
    },
    {
      title: "Active Member of F-Sec Cybersecurity Club",
      event: "FPT University Can Tho Campus · 2025 - Present",
      description: "Active core member in the F-Sec Information Security Club; participating in weekly CTF training, vulnerability research, and security workshops.",
      tag: "Security Club",
    },
    {
      title: "Secathon Hackathon Participant",
      event: "FPT University · 2025",
      description: "Competed in high-intensity Secathon cybersecurity challenges focusing on secure software development, incident triage, and system hardening.",
      tag: "Secathon",
    },
    {
      title: "F-Hacker Security Contestant",
      event: "FPT University · 2025",
      description: "Engaged in adversarial attack simulation and live defensive response challenges during F-Hacker 2025.",
      tag: "Competition",
    },
  ],
  projects: [
    {
      id: "so-oi",
      title: "Sổ Ơi – Smart Vietnamese Voice AI Sales Assistant",
      awardBadge: "PROMISING VENTURE · NEX26",
      description: "An AI-powered commercial solution empowering Vietnamese micro-merchants to manage daily sales through natural Vietnamese voice recognition, automated ledger bookkeeping, and smart inventory synchronization.",
      tags: ["Startup", "Voice AI", "Retail Tech", "NEX26 Ca Mau"],
      link: "https://sooi.vercel.app",
      linkText: "View Project & Honors ↘",
      featured: true,
      image: "image/nex26-team.jpg"
    },
    {
      id: "uniforge",
      title: "UniForge Startup Platform",
      awardBadge: "CTO ROLE",
      description: "A centralized platform designed to incubate, accelerate, and showcase student-led startup initiatives at FPT University, facilitating entrepreneurship experiences and resource sharing.",
      tags: ["CTO", "Next.js", "Vercel", "Platform Architecture"],
      link: "https://uniforge-platform.vercel.app",
      linkText: "Visit uniforge-platform.vercel.app ↗",
      featured: false,
    },
    {
      id: "malware-analysis",
      title: "Malware Analysis and Reverse Engineering",
      awardBadge: "RESEARCH SERIES",
      description: "In-depth research series dissecting real-world malware samples using IDA Pro, Ghidra, and binary static/dynamic analysis to extract indicators of compromise (IOCs) and build proactive defense models.",
      tags: ["Reverse Engineering", "IDA Pro", "Malware Defense", "Security Lab"],
      link: "https://youtube.com/playlist?list=PLmktKq-DnS-luAPI__yBFt4IEnRJUoHZv&si=hZnmMUylPk4ySVTQ",
      linkText: "Watch Playlist on YouTube ↗",
      featured: false,
    },
    {
      id: "linux-network",
      title: "Open Source Platform & Network Administration",
      awardBadge: "SYSTEM HARDENING",
      description: "Enterprise Linux administration and open-source infrastructure defense: from threat detection, iptables/firewall policy enforcement, and least privilege access to IDS/IPS deployment and log telemetry.",
      tags: ["Linux Admin", "Network Defense", "Open Source", "IDS/IPS"],
      link: "https://youtube.com/playlist?list=PLmktKq-DnS-mrJJOWt8q1-i5ZVUTrfBxi&si=EQ6gAVIbxTlcHECi",
      linkText: "Watch Playlist on YouTube ↗",
      featured: false,
    },
    {
      id: "attack-simulation",
      title: "Attack Simulation System & Cyber Threat Scenarios",
      awardBadge: "OFFENSIVE SIMULATION",
      description: "Engineered attack simulation testbed modeling common adversary tactics (MITRE ATT&CK), enabling SOC teams to validate correlation rules, benchmark telemetry, and practice rapid incident response.",
      tags: ["Kali Linux", "Burp Suite", "Attack Simulation", "SOC Training"],
      link: "https://youtube.com/playlist?list=PLmktKq-DnS-kgUVWEdMnJlx8fc_sLFnRF&si=3-IWzEMHNOgRG34E",
      linkText: "Watch Playlist on YouTube ↗",
      featured: false,
    },
  ],
  nex26Details: {
    eventTitle: "NEX26 Ca Mau Startup Grand Finale",
    eventSubtitle: "Next Entrepreneur Experience 2026 · Oct 30–31, 2026",
    teamName: "Team Sổ Ơi — FPT University Can Tho",
    mentor: "Advisors: Mr. Nguyen Vo Thong Thai & Ms. Mai Kieu Oanh",
    members: [
      { name: "Nguyen Cong Thinh", role: "Team Member" },
      { name: "Le Gia Bao", role: "Team Member" },
      { name: "Tran Nguyen Tieu Phung", role: "Team Member" },
      { name: "Tran Nguyen Thuy Linh", role: "Team Member" },
      { name: "Ha Nhut Khoi", role: "Information Assurance / Tech Lead", highlight: true },
    ],
    prizes: [
      { name: "Promising Venture Award — NEX26 Grand Finale", value: "Official Honor" },
      { name: "Enterprise Web Architecture & Development Package (Nhu Y)", value: "Incubation" },
      { name: "Entrepreneurship & Business Training Grant (NICE EDU)", value: "Sponsorship" },
      { name: "Nationwide Logistics & Delivery Grant (TIPA Express)", value: "Sponsorship" },
      { name: "Innovation Experience & Networking Award (NICE TOURIST)", value: "Sponsorship" },
    ],
    images: [
      { src: "image/nex26-team.jpg", caption: "Team Sổ Ơi at the NEX26 Ca Mau Grand Finale" },
      { src: "image/nex26-cert.jpg", caption: "Official Certificate of Promising Award from Ca Mau Dept of Science & Technology" },
      { src: "image/nex26-award.jpg", caption: "Awards and enterprise startup sponsorship packages" },
    ]
  }
};

if (typeof window !== "undefined") {
  window.cvData = cvData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
