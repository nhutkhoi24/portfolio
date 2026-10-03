document.addEventListener("DOMContentLoaded", () => {
  const worksGrid = document.getElementById("works-grid");
  if (!worksGrid || !window.cvData) return;

  worksGrid.innerHTML = cvData.projects.map((project, index) => `
    <article class="work-card">
      <div class="work-thumb" aria-hidden="true"><span class="work-number">0${index + 1}</span></div>
      <div class="work-meta">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">View project ↗</a>
      </div>
    </article>
  `).join("");

  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".main-nav a")];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-35% 0px -55% 0px", threshold: [0, .25, .6] });
  sections.forEach((section) => observer.observe(section));
});
