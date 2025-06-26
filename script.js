document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const menus = document.getElementById("menus");
  const toggleBtn = document.getElementById("menuToggleBtn"); 

  // Scroll behavior
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    header.classList.toggle("scrolled", scrollY > 0);
    scrollTopBtn.style.display = scrollY > 300 ? "block" : "none";

    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 70) {
        links.forEach(link =>
          link.classList.toggle("active", link.getAttribute("href") === `#${sec.id}`)
        );
      }
    });
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Intersection animation
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry =>
        entry.target.classList.toggle("in-view", entry.isIntersecting)
      );
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".slide-left, .slide-right").forEach(el => observer.observe(el));

  // Mobile menu toggle
  window.openMenu = () => {
    menus.style.display = menus.style.display === "block" ? "none" : "block";
  };

  // Hide menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      menus.style.display === "block" &&
      !menus.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      menus.style.display = "none";
    }
  });

  scrollTopBtn.style.display = "none";
});


