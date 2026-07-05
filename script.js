const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const revealNodes = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const navMoreToggle = document.querySelector(".nav-more-toggle");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (navMoreToggle) {
  navMoreToggle.addEventListener("focus", () => navMoreToggle.setAttribute("aria-expanded", "true"));
  navMoreToggle.addEventListener("blur", () => navMoreToggle.setAttribute("aria-expanded", "false"));
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
