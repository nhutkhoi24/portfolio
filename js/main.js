// ===== MAIN.JS =====
// Portfolio Logic & Dynamic Rendering inspired by Tim Gesemann

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

    skillsContainer.innerHTML = cvData.skills.map((category) => `
      <div class="skill-category-card">
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
    projectsContainer.innerHTML = cvData.projects.map((project) => `
      <div class="work-item">
        <div class="work-item-card">
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
    experienceContainer.innerHTML = cvData.workExperience.map((exp) => `
      <div class="timeline-item${exp.current ? " current" : ""}">
        <div class="timeline-node"></div>
        <div class="timeline-card">
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
    certificatesContainer.innerHTML = cvData.certificates.map((cert) => `
      <article class="proof-card">
        <div class="proof-card-info">
          <h4>${cert.title}</h4>
          <p>${cert.organization} · ${cert.date}</p>
        </div>
        <a class="proof-action-btn" href="${cert.link}" target="_blank" rel="noopener noreferrer">
          Verify ↗
        </a>
      </article>
    `).join("");
  }

  // ── 5. RENDER ACTIVITIES & AWARDS ─────────────────────────────
  const activitiesContainer = document.getElementById("activities-container");
  if (activitiesContainer && cvData.achievements) {
    activitiesContainer.innerHTML = cvData.achievements.map((ach) => `
      <article class="proof-card${ach.featured ? " featured" : ""}">
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

  // ── 6. MOBILE NAVIGATION TOGGLE ──────────────────────────────
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // ── 7. ACTIVE LINK SCROLL SPY ────────────────────────────────
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

  // ── 8. LIGHTBOX MODAL FOR GALLERY IMAGES ────────────────────
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

  // Attach click to gallery images and photo buttons
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

  // ── 9. TOAST NOTIFICATION FOR COPY ACTIONS ────────────────────
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
    }, 2500);
  };

  // Quick copy email button or click on contact email
  document.querySelectorAll('a[href^="mailto:"]').forEach((mailLink) => {
    mailLink.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const email = mailLink.getAttribute("href").replace("mailto:", "");
      navigator.clipboard.writeText(email).then(() => {
        showToast("Copied email: " + email);
      });
    });
  });
});
