// Get all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      
      // Remove active from all links first
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active to matching link
      const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});
// Get all sections
const allSections = document.querySelectorAll("section");

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

// Watch every section
allSections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
