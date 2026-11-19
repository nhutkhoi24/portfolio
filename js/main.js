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

  // ── 7. SLOW-MOTION WHITE SHOOTING STARS CANVAS (60FPS) ────────
  const canvas = document.getElementById("hero-particles");
  const heroSection = document.getElementById("about");
  if (canvas && heroSection && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let isHeroVisible = true;

    const resizeCanvas = () => {
      if (!canvas || !heroSection) return;
      width = heroSection.offsetWidth;
      height = heroSection.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // 1. Ambient Background Twinkling White Stars
    const starCount = Math.min(65, Math.floor(width / 20));
    const staticStars = [];
    for (let i = 0; i < starCount; i++) {
      staticStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.9,
        baseAlpha: Math.random() * 0.4 + 0.25,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        phase: Math.random() * Math.PI * 2,
        isCross: Math.random() < 0.25
      });
    }

    // 2. White Stardust Sparks Pool
    const sparks = [];

    // 3. Slow-Motion White Shooting Star (Sao Băng Trắng Bay Chậm)
    class ShootingStar {
      constructor(initRandom = false) {
        this.reset(initRandom);
      }

      reset(initRandom = false) {
        // Trajectory angle: ~35-42 degrees (gentle diagonal down-right)
        this.angle = (35 + Math.random() * 7) * (Math.PI / 180);
        this.cos = Math.cos(this.angle);
        this.sin = Math.sin(this.angle);

        // SLOW & GRACEFUL SPEED: 1.6 to 2.8 px/frame (dreamy slow glide)
        this.speed = 1.6 + Math.random() * 1.3;
        this.length = 160 + Math.random() * 180; // Long elegant tail
        this.thickness = 1.6 + Math.random() * 1.2;

        // Position: staggered along top or left bounds
        if (initRandom) {
          this.x = Math.random() * (width + 200) - 100;
          this.y = Math.random() * (height + 200) - 100;
        } else {
          if (Math.random() < 0.65) {
            this.x = Math.random() * (width * 1.1) - 120;
            this.y = -60;
          } else {
            this.x = -80;
            this.y = Math.random() * (height * 0.6) - 40;
          }
        }

        this.progress = 0;
        // Extended lifetime for slow drift (approx 3.5 - 6 seconds)
        this.lifetime = 190 + Math.random() * 160;
        this.maxOpacity = 0.85 + Math.random() * 0.15;
        this.opacity = 0;
        this.delay = initRandom ? Math.floor(Math.random() * 120) : Math.floor(Math.random() * 160);
        this.active = initRandom ? Math.random() < 0.65 : false;
      }

      update() {
        if (!this.active) {
          this.delay--;
          if (this.delay <= 0) {
            this.active = true;
          }
          return;
        }

        this.x += this.cos * this.speed;
        this.y += this.sin * this.speed;
        this.progress++;

        const ratio = this.progress / this.lifetime;
        if (ratio < 0.2) {
          this.opacity = (ratio / 0.2) * this.maxOpacity;
        } else if (ratio > 0.7) {
          this.opacity = (1 - (ratio - 0.7) / 0.3) * this.maxOpacity;
        } else {
          this.opacity = this.maxOpacity;
        }

        // Spawn occasional slow floating white spark
        if (this.opacity > 0.45 && Math.random() < 0.18 && sparks.length < 55) {
          sparks.push({
            x: this.x - this.cos * (Math.random() * 25),
            y: this.y - this.sin * (Math.random() * 25),
            vx: (Math.random() - 0.5) * 0.4,
            vy: Math.random() * 0.3 + 0.1,
            alpha: this.opacity * 0.8,
            size: Math.random() * 1.5 + 0.8
          });
        }

        if (this.progress >= this.lifetime || this.x > width + 300 || this.y > height + 300) {
          this.reset(false);
        }
      }

      draw() {
        if (!this.active || this.opacity <= 0.01) return;

        const tailX = this.x - this.cos * this.length;
        const tailY = this.y - this.sin * this.length;

        ctx.save();

        // 1. Subtle soft ambient shadow for contrast against #f7f5f1 background
        const outerGrad = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        outerGrad.addColorStop(0, `rgba(47, 53, 92, ${this.opacity * 0.25})`);
        outerGrad.addColorStop(0.35, `rgba(47, 53, 92, ${this.opacity * 0.1})`);
        outerGrad.addColorStop(1, `rgba(47, 53, 92, 0)`);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = outerGrad;
        ctx.lineWidth = this.thickness + 2.4;
        ctx.lineCap = "round";
        ctx.stroke();

        // 2. Pure luminous white streak
        const whiteGrad = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        whiteGrad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        whiteGrad.addColorStop(0.25, `rgba(255, 255, 255, ${this.opacity * 0.85})`);
        whiteGrad.addColorStop(0.6, `rgba(255, 255, 255, ${this.opacity * 0.4})`);
        whiteGrad.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = whiteGrad;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = "round";
        ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity * 0.9})`;
        ctx.shadowBlur = 6;
        ctx.stroke();

        // 3. Glowing White Meteor Head
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.thickness * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, this.opacity * 1.4)})`;
        ctx.shadowColor = "rgba(255, 255, 255, 1)";
        ctx.shadowBlur = 10;
        ctx.fill();

        // 4. Ethereal 4-point cross glint on the head
        if (this.opacity > 0.35) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.95})`;
          ctx.lineWidth = 0.9;
          const glint = this.thickness * 2.8;
          ctx.beginPath();
          ctx.moveTo(this.x - glint, this.y);
          ctx.lineTo(this.x + glint, this.y);
          ctx.moveTo(this.x, this.y - glint);
          ctx.lineTo(this.x, this.y + glint);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Pool of 5-6 slow gliding white shooting stars
    const shootingStars = Array.from({ length: 5 }, () => new ShootingStar(true));

    // Interactive Trigger: Cursor drops slow floating white sparkles; click triggers a slow white star
    let lastSpawnTime = 0;
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const now = performance.now();
      if (now - lastSpawnTime > 85 && sparks.length < 50) {
        lastSpawnTime = now;
        sparks.push({
          x: mouseX + (Math.random() - 0.5) * 12,
          y: mouseY + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.4 + 0.15,
          alpha: 0.75,
          size: Math.random() * 1.6 + 1
        });
      }
    });

    // Click on Hero triggers a slow, bright white shooting star
    heroSection.addEventListener("click", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const star = shootingStars[Math.floor(Math.random() * shootingStars.length)];
      star.speed = 2.2; // Slow and serene
      star.length = 240;
      star.x = clickX - 120;
      star.y = clickY - 120;
      star.active = true;
      star.delay = 0;
      star.progress = 0;
      star.lifetime = 260;
      star.maxOpacity = 1;
    });

    // Animation Loop (60 FPS)
    const animateMeteors = () => {
      if (!isHeroVisible) {
        requestAnimationFrame(animateMeteors);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Twinkling Background White Stars
      for (let i = 0; i < staticStars.length; i++) {
        const star = staticStars[i];
        star.phase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.phase) * (star.baseAlpha * 0.65);

        ctx.save();
        // Subtle soft shadow so white star pops on #f7f5f1
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius + 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(47, 53, 92, ${currentAlpha * 0.18})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, currentAlpha * 1.3)})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.85)";
        ctx.shadowBlur = 4;
        ctx.fill();

        // 4-ray glint on brighter stars
        if (star.isCross && currentAlpha > 0.45) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.85})`;
          ctx.lineWidth = 0.7;
          const glintLen = star.radius * 2.6;
          ctx.beginPath();
          ctx.moveTo(star.x - glintLen, star.y);
          ctx.lineTo(star.x + glintLen, star.y);
          ctx.moveTo(star.x, star.y - glintLen);
          ctx.lineTo(star.x, star.y + glintLen);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 2. Draw & Update White Stardust Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.012; // Slow fade

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.shadowColor = `rgba(47, 53, 92, ${s.alpha * 0.3})`;
        ctx.shadowBlur = 3;
        ctx.fill();
        ctx.restore();
      }

      // 3. Draw & Update Slow-Motion White Shooting Stars
      for (let i = 0; i < shootingStars.length; i++) {
        const star = shootingStars[i];
        star.update();
        star.draw();
      }

      requestAnimationFrame(animateMeteors);
    };

    const heroObserver = new IntersectionObserver(([entry]) => {
      isHeroVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);

    animateMeteors();
  }

    // Animation Loop (60 FPS)
    const animateMeteors = () => {
      if (!isHeroVisible) {
        requestAnimationFrame(animateMeteors);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Twinkling Background White Stars
      for (let i = 0; i < staticStars.length; i++) {
        const star = staticStars[i];
        star.phase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.phase) * (star.baseAlpha * 0.65);

        ctx.save();
        // Subtle soft shadow so white star pops on #f7f5f1
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius + 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(47, 53, 92, ${currentAlpha * 0.18})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, currentAlpha * 1.3)})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.85)";
        ctx.shadowBlur = 4;
        ctx.fill();

        // 4-ray glint on brighter stars
        if (star.isCross && currentAlpha > 0.45) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.85})`;
          ctx.lineWidth = 0.7;
          const glintLen = star.radius * 2.6;
          ctx.beginPath();
          ctx.moveTo(star.x - glintLen, star.y);
          ctx.lineTo(star.x + glintLen, star.y);
          ctx.moveTo(star.x, star.y - glintLen);
          ctx.lineTo(star.x, star.y + glintLen);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 2. Draw & Update White Stardust Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.012; // Slow fade

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.shadowColor = `rgba(47, 53, 92, ${s.alpha * 0.3})`;
        ctx.shadowBlur = 3;
        ctx.fill();
        ctx.restore();
      }

      // 3. Draw & Update Slow-Motion White Shooting Stars
      for (let i = 0; i < shootingStars.length; i++) {
        const star = shootingStars[i];
        star.update();
        star.draw();
      }

      requestAnimationFrame(animateMeteors);
    };

    const heroObserver = new IntersectionObserver(([entry]) => {
      isHeroVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);

    animateMeteors();
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
        ).catch(() => { });
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
