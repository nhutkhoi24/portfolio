// ===== DATA.JS =====
const cvData = {
  personal: {
    name: "Hà Nhựt Khôi",
    title: "Information Assurance Student & Aspiring SOC Analyst",
    subtitle: "I turn security threats into actionable defenses.",
    bio: "Xin chào, mình là Hà Nhựt Khôi — sinh viên chuyên ngành An toàn thông tin tại FPT University Can Tho, tập trung vào malware analysis, reverse engineering, network defense, pentest automation và system administration.",
    email: "khoihn.ce190080@gmail.com",
    phone: "079-257-7603",
    location: "Can Tho & Ca Mau, Vietnam",
    github: "https://github.com/nhutkhoi24",
    profileImage: "image/nhutkhoi.png",
    profileImage2: "image/nhutkhoi2.jpg",
  },
  education: [
    {
      school: "FPT University, Can Tho",
      major: "Information Assurance",
      status: "Student",
      date: "09/2023 - Present",
      description: "Tập trung vào An toàn thông tin, Phân tích mã độc, Quản trị hệ thống & Mạng phòng thủ."
    },
  ],
  workExperience: [
    {
      role: "Chief Technology Officer",
      organization: "UniForge",
      date: "05/09/2026 - Present",
      description: "Dẫn dắt định hướng kỹ thuật, xây dựng nền tảng và triển khai giải pháp công nghệ cho các dự án khởi nghiệp sinh viên FPT.",
      link: "https://uniforge-platform.vercel.app",
      current: true,
    },
    {
      role: "Internship — Digital Transformation Center",
      organization: "Trung tâm Chuyển đổi số · Sở Khoa học và Công nghệ tỉnh Cà Mau",
      date: "05/01/2026 - 11/04/2026",
      description: "Tham gia triển khai và hỗ trợ các giải pháp chuyển đổi số, an toàn dữ liệu cơ quan hành chính nhà nước.",
    },
    {
      role: "Information Assurance Student",
      organization: "FPT University, Can Tho Campus",
      date: "09/2023 - Present",
      description: "Nghiên cứu an toàn mạng, thực hành pentest automation, dịch ngược mã độc và tham gia các cuộc thi CTF/Secathon.",
    },
  ],
  certificates: [
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
        { name: "English (Intermediate)", level: "Professional" },
        { name: "Japanese (Beginner)", level: "Learning" },
        { name: "Problem Solving", level: "Analytical" },
        { name: "Team Leadership", level: "CTO Experience" },
      ],
    },
  ],
  achievements: [
    {
      title: "Giải Triển Vọng – Chung kết Khởi nghiệp NEX26",
      event: "Cuộc thi Khởi nghiệp Cà Mau · 31/10/2026",
      description: 'Cùng nhóm sinh viên An toàn thông tin FPT University giành Giải Triển Vọng tại Vòng Chung kết NEX26 với dự án "Sổ Ơi – Trợ lý bán hàng bằng tiếng Việt dành cho hộ kinh doanh nhỏ".',
      featured: true,
      tag: "Startup Award",
      images: {
        award: "image/nex26-award.jpg",
        cert: "image/nex26-cert.jpg",
        team: "image/nex26-team.jpg",
      },
    },
    {
      title: "Third Prize – F Hacker",
      event: "FPT University · 2025",
      description: "Đạt Giải Ba cuộc thi an toàn thông tin & hacking F Hacker tại Đại học FPT.",
      tag: "Security Competition",
    },
    {
      title: "Cybersecurity Student Contest — Top 120",
      event: "Toàn quốc · 2026",
      description: "Lọt vào Top 120 thí sinh xuất sắc trong cuộc thi Sinh viên với An toàn thông tin 2026.",
      tag: "National Contest",
    },
    {
      title: "Member of F-Sec",
      event: "FPT University Can Tho Campus · 2025",
      description: "Thành viên tích cực câu lạc bộ An toàn thông tin F-Sec, tham gia huấn luyện CTF và workshop bảo mật.",
      tag: "Security Club",
    },
    {
      title: "Secathon Participant",
      event: "FPT University · 2025",
      description: "Tham gia tranh tài thử thách Secathon về an toàn thông tin và phòng thủ hệ thống.",
      tag: "Hackathon",
    },
    {
      title: "F Hacker Participant",
      event: "FPT University · 2025",
      description: "Tham gia giải đấu kỹ năng tấn công và bảo vệ hệ thống F Hacker 2025.",
      tag: "Competition",
    },
  ],
  projects: [
    {
      id: "so-oi",
      title: "Sổ Ơi – Trợ lý bán hàng bằng tiếng Việt",
      awardBadge: "GIẢI TRIỂN VỌNG · NEX26",
      description: "Dự án công nghệ hỗ trợ các hộ kinh doanh nhỏ tại Việt Nam bán hàng thông minh qua tương tác giọng nói tiếng Việt, quản lý sổ sách, đơn hàng và kho bãi một cách tự động.",
      tags: ["Startup", "Voice AI", "Retail Tech", "NEX26 Cà Mau"],
      link: "https://sooi.vercel.app",
      linkText: "Xem chi tiết dự án & giải thưởng ↘",
      featured: true,
      image: "image/nex26-team.jpg"
    },
    {
      id: "uniforge",
      title: "UniForge Startup Platform",
      awardBadge: "CTO ROLE",
      description: "Nền tảng kết nối, hỗ trợ ươm tạo và phát triển các dự án khởi nghiệp tiềm năng từ sinh viên Đại học FPT, phục vụ định hướng Trải nghiệm Khởi nghiệp.",
      tags: ["CTO", "Next.js", "Vercel", "Platform Architecture"],
      link: "https://uniforge-platform.vercel.app",
      linkText: "Visit uniforge-platform.vercel.app ↗",
      featured: false,
    },
    {
      id: "malware-analysis",
      title: "Malware Analysis and Reverse Engineering",
      awardBadge: "RESEARCH SERIES",
      description: "Chuỗi phân tích chuyên sâu cấu trúc mã độc thực tế, sử dụng IDA Pro, Ghidra và kỹ thuật dịch ngược (Reverse Engineering) để phân tích hành vi và chủ động xây dựng giải pháp phòng thủ.",
      tags: ["Reverse Engineering", "IDA Pro", "Malware Defense", "Security Lab"],
      link: "https://youtube.com/playlist?list=PLmktKq-DnS-luAPI__yBFt4IEnRJUoHZv&si=hZnmMUylPk4ySVTQ",
      linkText: "Watch Playlist on YouTube ↗",
      featured: false,
    },
    {
      id: "linux-network",
      title: "Open Source Platform & Network Administration",
      awardBadge: "SYSTEM HARDENING",
      description: "Quản trị mạng Linux & bảo mật nền tảng mã nguồn mở: Từ nhận diện mối đe dọa, cấu hình tường lửa, phân quyền tối thiểu đến giám sát và giảm thiểu rủi ro bảo mật hệ thống.",
      tags: ["Linux Admin", "Network Defense", "Open Source", "IDS/IPS"],
      link: "https://youtube.com/playlist?list=PLmktKq-DnS-mrJJOWt8q1-i5ZVUTrfBxi&si=EQ6gAVIbxTlcHECi",
      linkText: "Watch Playlist on YouTube ↗",
      featured: false,
    },
    {
      id: "attack-simulation",
      title: "Attack Simulation System & Common Cyber Attacks",
      awardBadge: "OFFENSIVE SIMULATION",
      description: "Hệ thống mô phỏng kịch bản tấn công mạng phổ biến hiện nay, giúp đội ngũ SOC nhận biết dấu hiệu xâm nhập, xây dựng rule phát hiện và rèn luyện phản ứng sự cố.",
      tags: ["Kali Linux", "Burp Suite", "Attack Simulation", "SOC Training"],
      link: "https://youtube.com/playlist?list=PLmktKq-DnS-kgUVWEdMnJlx8fc_sLFnRF&si=3-IWzEMHNOgRG34E",
      linkText: "Watch Playlist on YouTube ↗",
      featured: false,
    },
  ],
  nex26Details: {
    eventTitle: "Vòng Chung Kết Cuộc Thi Khởi Nghiệp NEX26 Cà Mau",
    eventSubtitle: "Next Entrepreneur Experience 2026 · 30–31/10/2026",
    teamName: "Nhóm Sổ Ơi — Đại học FPT Cần Thơ",
    mentor: "Thầy Nguyễn Võ Thông Thái & Chị Mai Kiều Oanh",
    members: [
      { name: "Nguyễn Công Thịnh", role: "Team Member" },
      { name: "Lê Gia Bảo", role: "Team Member" },
      { name: "Trần Nguyễn Tiêu Phụng", role: "Team Member" },
      { name: "Trần Nguyễn Thùy Linh", role: "Team Member" },
      { name: "Hà Nhựt Khôi", role: "Information Assurance / Tech", highlight: true },
    ],
    prizes: [
      { name: "Giải Triển Vọng Vòng Chung kết NEX26", value: "3.000.000 ₫" },
      { name: "Gói thiết kế Website chuyên nghiệp (Như Ý)", value: "10.000.000 ₫" },
      { name: "Gói đào tạo & tài trợ từ NICE EDU", value: "6.000.000 ₫" },
      { name: "Gói vận chuyển TIPA Express (Tín Phát)", value: "3.000.000 ₫" },
      { name: "Gói du lịch & trải nghiệm NICE TOURIST", value: "2.000.000 ₫" },
    ],
    images: [
      { src: "image/nex26-team.jpg", caption: "Đội ngũ Sổ Ơi tại Chung kết Khởi nghiệp NEX26 Cà Mau" },
      { src: "image/nex26-cert.jpg", caption: "Chứng nhận Giải Triển Vọng từ Sở KH&CN tỉnh Cà Mau" },
      { src: "image/nex26-award.jpg", caption: "Các giải thưởng và gói bảo trợ khởi nghiệp trao tặng" },
    ]
  }
};

if (typeof window !== "undefined") {
  window.cvData = cvData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
