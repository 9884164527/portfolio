  // window.onscroll = () =>
  //           document.querySelector("header").classList.toggle('scrolled', window.scrollY > 0);

  window.onscroll = () => {
  const header = document.querySelector("header");

  if (window.innerWidth > 768) {
    // Only apply scroll effect on larger screens
    header.classList.toggle('scrolled', window.scrollY > 0);
  } else {
    // On mobile, always keep white background (remove scrolled class if any)
    header.classList.remove('scrolled');
  }
};

   
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 70) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sec.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".slide-left, .slide-right").forEach((el) => {
    observer.observe(el);
  });
});


  const scrollTopBtn = document.getElementById("scrollTopBtn");

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    // Show only after scrolling down a bit
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Initially hide the button
  scrollTopBtn.style.display = "none";

function openMenu() {
    const currentDisplay = menus.style.display
    menus.style.display = currentDisplay === "none" ? "block" : "none";
}



