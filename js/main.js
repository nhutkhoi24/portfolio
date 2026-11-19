// ===== MAIN.JS =====
// Portfolio Logic & High-Performance Micro-Animations
// Inspired by Tim Gesemann (tim-gesemann.dev) with Cybersecurity Polish

document.addEventListener("DOMContentLoaded", () => {
  if (typeof cvData === "undefined") {
    console.error("cvData is not loaded!");
    return;
  }

  // ── 1. RENDER SKILLS ("I'M GOOD AT THIS") ─────────────────────
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer && cvData.skills) {
    const categoryIcons = {
      "Operating System & Toolkits": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
      "Security Practice": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      "Programming & Scripting": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      "Networking & Protocols": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      "Languages & Soft Skills": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
    };

    skillsContainer.innerHTML = cvData.skills.map((category, idx) => `
      <div class="skill-category-card card-spotlight reveal-init delay-${(idx % 4) + 1}">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${categoryIcons[category.category] || "✦"}</div>
          <h3 class="skill-cat-title">${category.category}</h3>
        </div>
        <ul class="skill-items-list">
          ${category.items.map((skill) => `
            <li class="skill-pill">
              <span>${skill.name}</span>
              ${skill.level ? `<span class="skill-level-tag">· ${skill.level}</span>` : ""}
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");
  }

  // ── 2. RENDER PROJECTS ("THINGS, I WORKED ON") ────────────────
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer && cvData.projects) {
    projectsContainer.innerHTML = cvData.projects.map((project, idx) => `
      <div class="work-item reveal-init delay-${(idx % 3) + 1}">
        <div class="work-item-card card-spotlight">
          ${project.awardBadge ? `<span class="work-badge">${project.awardBadge}</span>` : ""}
          <h3 class="work-item-title">${project.title}</h3>
          <p class="work-item-description">${project.description}</p>
          <div class="work-meta-container">
            <ul class="work-tags-list">
              ${(project.tags || []).map((tag) => `
                <li class="work-tag-item">${tag}</li>
              `).join("")}
            </ul>
            <a href="${project.link}" ${project.link.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="work-link-icon-btn" aria-label="Open ${project.title}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 19L19 5M19 5H7M19 5V17"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `).join("");
  }

  // ── 3. RENDER EXPERIENCE TIMELINE ────────────────────────────
  const experienceContainer = document.getElementById("experience-container");
  if (experienceContainer && cvData.workExperience) {
    experienceContainer.innerHTML = cvData.workExperience.map((exp, idx) => `
      <div class="timeline-item${exp.current ? " current" : ""} reveal-init delay-${(idx % 3) + 1}">
        <div class="timeline-node"></div>
        <div class="timeline-card card-spotlight">
          <div class="timeline-header">
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-date">${exp.date}</span>
          </div>
          <p class="timeline-org">${exp.organization}</p>
          <p class="timeline-desc">${exp.description}</p>
          ${exp.link ? `
            <a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="timeline-link">
              <span>${exp.link.replace("https://", "")}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          ` : ""}
        </div>
      </div>
    `).join("");
  }

  // ── 4. RENDER CERTIFICATES ───────────────────────────────────
  const certificatesContainer = document.getElementById("certificates-container");
  if (certificatesContainer && cvData.certificates) {
    certificatesContainer.innerHTML = cvData.certificates.map((cert, idx) => `
      <article class="proof-card card-spotlight reveal-init delay-${(idx % 3) + 1}">
        <div class="proof-card-info">
          <h4>${cert.title}</h4>
          <p>${cert.organization} · ${cert.date}</p>
        </div>
        <div class="proof-card-actions">
          ${cert.image ? `
            <button class="proof-action-btn view-photo-btn" data-img="${cert.image}" data-caption="${cert.title} · ${cert.organization} (${cert.date})">
              Photo ↗
            </button>
          ` : ""}
          <a class="proof-action-btn" href="${cert.link}" target="_blank" rel="noopener noreferrer">
            Verify ↗
          </a>
        </div>
      </article>
    `).join("");
  }

  // ── 5. RENDER ACTIVITIES & AWARDS ─────────────────────────────
  const activitiesContainer = document.getElementById("activities-container");
  if (activitiesContainer && cvData.achievements) {
    activitiesContainer.innerHTML = cvData.achievements.map((ach, idx) => `
      <article class="proof-card card-spotlight${ach.featured ? " featured" : ""} reveal-init delay-${(idx % 3) + 1}">
        <div class="proof-card-info">
          <h4>${ach.title}</h4>
          <p>${ach.event}</p>
        </div>
        ${ach.images ? `
          <button class="proof-action-btn view-photo-btn" data-img="${ach.images.team || ach.images.award}" data-caption="${ach.title} · ${ach.event}">
            Photo ↗
          </button>
        ` : (ach.link ? `
          <a class="proof-action-btn" href="${ach.link}" target="_blank" rel="noopener noreferrer">
            View ↗
          </a>
        ` : `
          <span class="proof-action-btn" style="background-color: transparent; color: var(--color-secondary);">
            ${ach.tag || "Activity"}
          </span>
        `)}
      </article>
    `).join("");
  }

  // ── 6. HERO DYNAMIC TYPEWRITER EFFECT ─────────────────────────
  const typewriterText = document.getElementById("typewriter-text");
  if (typewriterText) {
    const phrases = [
      "Find the signal in the noise.",
      "Prospective Master's Researcher in Cybersecurity.",
      "Targeting Global Korea Scholarship (GKS-G).",
      "Malware Analysis & Reverse Engineering.",
      "SOC Operations & Threat Hunting.",
      "Resilient Network Defense & Cryptography."
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = true;
    let typeDelay = 2200;

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
        typewriterText.textContent = currentPhrase.substring(0, charIndex);
        typeDelay = 28;
      } else {
        charIndex++;
        typewriterText.textContent = currentPhrase.substring(0, charIndex);
        typeDelay = 60 + Math.random() * 35;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeDelay = 2400;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeDelay = 350;
      }

      setTimeout(typeLoop, typeDelay);
    };

    setTimeout(typeLoop, typeDelay);
  }

  // ── 7. AMBIENT CYBER PARTICLES CANVAS (60FPS) ─────────────────
  const canvas = document.getElementById("hero-particles");
  const heroSection = document.getElementById("about");
  if (canvas && heroSection && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = heroSection.offsetWidth);
    let height = (canvas.height = heroSection.offsetHeight);
    let isHeroVisible = true;

    const mouse = { x: null, y: null, radius: 140 };

    const handleResize = () => {
      if (!canvas || !heroSection) return;
      width = canvas.width = heroSection.offsetWidth;
      height = canvas.height = heroSection.offsetHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    heroSection.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle pool
    const particleCount = Math.min(42, Math.floor(width / 26));
    const particles = [];
    const colors = [
      "rgba(47, 53, 92, 0.32)",  // Navy primary
      "rgba(231, 71, 43, 0.32)", // Coral secondary
      "rgba(5, 150, 105, 0.30)"  // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animateParticles = () => {
      if (!isHeroVisible) {
        requestAnimationFrame(animateParticles);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse attraction/repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p1.x -= (dx / dist) * force * 1.4;
            p1.y -= (dy / dist) * force * 1.4;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(231, 71, 43, ${0.16 * (1 - dist / mouse.radius)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        // Connect with nearby neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(47, 53, 92, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    };

    const heroObserver = new IntersectionObserver(([entry]) => {
      isHeroVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);

    animateParticles();
  }

  // ── 8. HERO PORTRAIT 3D MOUSE PARALLAX TILT ───────────────────
  const heroProfileImg = document.getElementById("hero-profile-img");
  if (heroSection && heroProfileImg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let isHovering = false;

    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetRotateY = x * 8; // max 4deg
      targetRotateX = -y * 6; // max 3deg
      isHovering = true;
    });

    heroSection.addEventListener("mouseleave", () => {
      targetRotateX = 0;
      targetRotateY = 0;
      isHovering = false;
    });

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const renderHeroParallax = () => {
      currentRotateX = lerp(currentRotateX, targetRotateX, 0.08);
      currentRotateY = lerp(currentRotateY, targetRotateY, 0.08);

      if (Math.abs(currentRotateX) > 0.01 || Math.abs(currentRotateY) > 0.01 || isHovering) {
        heroProfileImg.style.transform = `rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg)`;
      } else {
        heroProfileImg.style.transform = "rotateX(0deg) rotateY(0deg)";
      }

      requestAnimationFrame(renderHeroParallax);
    };

    requestAnimationFrame(renderHeroParallax);
  }

  // ── 9. DYNAMIC 3D CARD TILT + CURSOR SPOTLIGHT GLARE ──────────
  document.querySelectorAll(".nex26-feature-card").forEach((card) => {
    card.classList.add("card-spotlight");
  });

  const spotlightCards = document.querySelectorAll(".card-spotlight");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    spotlightCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.setProperty("--spotlight-opacity", "1");

        const normX = (x / rect.width - 0.5) * 2;
        const normY = (y / rect.height - 0.5) * 2;
        const tiltX = -normY * 4;
        const tiltY = normX * 4;

        card.style.transform = `perspective(850px) rotateX(${tiltX.toFixed(1)}deg) rotateY(${tiltY.toFixed(1)}deg) translateY(-5px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--spotlight-opacity", "0");
        card.style.transform = "";
      });
    });
  }

  // ── 10. SCROLL REVEAL (INTERSECTION OBSERVER) ─────────────────
  document.querySelectorAll(".section-kicker, .section-title, .section-subtitle, .nex26-feature-card, .contact-item, .contact-box, .academic-overview-card, .pillar-card, .hero-stats-bar").forEach((el) => {
    el.classList.add("reveal-init");
  });

  const revealElements = document.querySelectorAll(".reveal-init");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.08
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("reveal-active"));
  }

  // ── 11. FLOATING BACK TO TOP + CIRCULAR SCROLL PROGRESS ───────
  const backToTopBtn = document.getElementById("back-to-top");
  const progressCircle = document.getElementById("progress-circle");
  const circumference = 2 * Math.PI * 19; // ~119.38

  if (backToTopBtn && progressCircle) {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      if (scrollTop > 280) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }

      const offset = circumference - progress * circumference;
      progressCircle.style.strokeDashoffset = Math.max(0, offset);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── 12. MOBILE NAVIGATION TOGGLE ─────────────────────────────
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // ── 13. ACTIVE LINK SCROLL SPY ───────────────────────────────
  const sections = document.querySelectorAll("section[id]");
  const navAnchorElements = document.querySelectorAll(".nav-link");

  const spyObserver = new IntersectionObserver((entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    navAnchorElements.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      anchor.classList.toggle("active", href === `#${visibleSection.target.id}`);
    });
  }, { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.2, 0.5] });

  sections.forEach((s) => spyObserver.observe(s));

  // ── 14. LIGHTBOX MODAL FOR GALLERY IMAGES ────────────────────
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");

  const openLightbox = (src, caption) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || "";
    lightboxModal.classList.add("open");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("open");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal && lightboxModal.classList.contains("open")) {
      closeLightbox();
    }
  });

  document.querySelectorAll(".nex26-gallery-main img, .nex26-gallery-thumb img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  document.querySelectorAll(".view-photo-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openLightbox(btn.dataset.img, btn.dataset.caption);
    });
  });

  // ── 15. TOAST NOTIFICATION FOR COPY ACTIONS ───────────────────
  const toast = document.getElementById("toast-notification");
  const toastMessage = document.getElementById("toast-message");
  let toastTimer = null;

  const showToast = (message) => {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  };

  // ── 16. CONTACT FORM & EMAIL ACTION ENGINE ────────────────────
  const recipientEmail = "khoihn.ce190080@gmail.com";
  const contactForm = document.getElementById("contact-form");
  const contactStatusMsg = document.getElementById("contact-status-msg");
  const openGmailBtn = document.getElementById("open-gmail-btn");
  const copyEmailBtn = document.getElementById("copy-email-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const subjectInput = document.getElementById("contact-subject");
      const messageInput = document.getElementById("contact-message");

      const name = nameInput ? nameInput.value.trim() : "";
      const senderEmail = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput && subjectInput.value.trim()
        ? subjectInput.value.trim()
        : `[Portfolio Inquiry] Message from ${name || "Visitor"}`;
      const message = messageInput ? messageInput.value.trim() : "";

      // Build structured email body
      const bodyLines = [];
      if (message) {
        bodyLines.push(message);
        bodyLines.push("");
      }
      bodyLines.push("──────────");
      bodyLines.push(`Sender: ${name || "(Name not provided)"}`);
      if (senderEmail) bodyLines.push(`Contact Email: ${senderEmail}`);
      bodyLines.push("Sent via Hà Nhựt Khôi's Portfolio Website");

      const fullBody = bodyLines.join("\n");

      // 1. Direct Web Gmail Compose URL (100% reliable on Chrome, Edge, Safari, Firefox)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;

      // 2. Native mailto link for desktop clients
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;

      // Auto-copy full draft to clipboard as backup
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(
          `To: ${recipientEmail}\nSubject: ${subject}\n\n${fullBody}`
        ).catch(() => {});
      }

      // Try opening Gmail Web compose
      const newTab = window.open(gmailUrl, "_blank");
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        // If popup blocked, fallback to mailto:
        window.location.href = mailtoUrl;
      }

      // Display clean success status on the form
      if (contactStatusMsg) {
        contactStatusMsg.className = "contact-status-msg success";
        contactStatusMsg.innerHTML = `✓ Opened email composer to <strong>${recipientEmail}</strong> (message draft has also been copied to your clipboard)!`;
      }

      showToast("✓ Opening Gmail compose to " + recipientEmail);
    });
  }

  // Quick Action 1: Open Gmail Web directly
  if (openGmailBtn) {
    openGmailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const defaultSubject = "[Portfolio Inquiry] Academic & Professional Collaboration";
      const defaultBody = "Dear Hà Nhựt Khôi,\n\nI am contacting you through your portfolio website regarding:\n";
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultBody)}`;
      window.open(gmailUrl, "_blank");
      showToast("✓ Opening Gmail Web to " + recipientEmail);
    });
  }

  // Quick Action 2: 1-click Copy Email
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(recipientEmail).then(() => {
          showToast("✓ Email copied to clipboard: " + recipientEmail);
        });
      } else {
        showToast("Email: " + recipientEmail);
      }
    });
  }

  // General mailto handler: right-click to copy, click copies + notifies
  document.querySelectorAll('a[href^="mailto:"]').forEach((mailLink) => {
    mailLink.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const email = mailLink.getAttribute("href").replace("mailto:", "").split("?")[0];
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast("✓ Email copied to clipboard: " + email);
        });
      }
    });
  });
});
