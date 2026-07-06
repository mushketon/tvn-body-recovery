const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const revealNodes = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const navMoreToggle = document.querySelector(".nav-more-toggle");
const headerActions = document.querySelector(".header-actions");

const socialLinks = [
  {
    label: "WhatsApp",
    href:
      "https://wa.me/77058650607?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20TVN%20Body%20Recovery",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.8 9.8 0 0 0 3.6 16.7L2.5 21.5l4.9-1.2A9.8 9.8 0 0 0 21.8 12a9.7 9.7 0 0 0-2.7-7.1Z"/><path d="M8.8 7.5c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.2.2 2.2 3.5 5.4 4.7 2.7 1 3.2.8 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.3-2.2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.4-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.4 0-.6l-1-2.1Z"/></svg>'
  },
  {
    label: "Telegram",
    href: "https://t.me/MushketonX",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 4.2 18.3 19c-.2 1-.8 1.2-1.6.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-.9.5l.3-4.9 8.9-8c.4-.4-.1-.6-.6-.3L6.3 12.7 1.6 11.2c-1-.3-1-1 .2-1.5l18.4-7.1c.9-.3 1.7.2 1.3 1.6Z"/></svg>'
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_mushketonx_?igsh=NDNieTMxMm44eWhn",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5"/><circle cx="12" cy="12" r="3.7"/><circle cx="17.2" cy="6.9" r=".8"/></svg>'
  }
];

const closeMobileMenu = () => {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const setActiveNavigation = () => {
  const normalizePath = (path) => path.replace(/\/$/, "") || "/";
  const currentPath = normalizePath(window.location.pathname);
  const currentHash = window.location.hash;

  document.querySelectorAll(".site-nav a, .mobile-menu a, .footer-col a").forEach((link) => {
    const linkUrl = new URL(link.href, window.location.href);
    const linkPath = normalizePath(linkUrl.pathname);
    const linkHash = linkUrl.hash;
    const isCurrentPage = linkPath === currentPath && !linkHash && !currentHash;
    const isCurrentAnchor = linkPath === currentPath && linkHash && linkHash === currentHash;

    if (isCurrentPage || isCurrentAnchor) {
      link.setAttribute("aria-current", "page");
    }
  });
};

const renderSocialIcon = (link) =>
  `<a class="social-icon social-icon-${link.label.toLowerCase()}" href="${link.href}" target="_blank" rel="noreferrer" aria-label="${link.label}">${link.icon}</a>`;

if (headerActions && !headerActions.querySelector(".header-socials")) {
  headerActions.insertAdjacentHTML(
    "afterbegin",
    `<div class="header-socials" aria-label="Социальные сети">${socialLinks.map(renderSocialIcon).join("")}</div>`
  );
}

if (mobileMenu && !mobileMenu.querySelector(".mobile-socials")) {
  mobileMenu.insertAdjacentHTML(
    "afterbegin",
    `<div class="mobile-socials" aria-label="Социальные сети">${socialLinks.map(renderSocialIcon).join("")}</div>`
  );
}

document.querySelectorAll(".icon-link").forEach((link) => {
  const socialLink = socialLinks.find((item) => link.textContent.trim().toLowerCase().includes(item.label.toLowerCase()));

  if (socialLink && !link.querySelector("svg")) {
    link.insertAdjacentHTML("afterbegin", socialLink.icon);
  }
});

document.querySelectorAll(".ambient-image").forEach((image) => {
  image.setAttribute("loading", "lazy");
  image.setAttribute("decoding", "async");
});

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
      navMoreToggle?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.classList.contains("is-open")) return;

    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMobileMenu();
    }
  });
}

if (navMoreToggle) {
  navMoreToggle.setAttribute("aria-label", "Открыть дополнительные ссылки");
  navMoreToggle.addEventListener("click", () => {
    const isExpanded = navMoreToggle.getAttribute("aria-expanded") === "true";
    navMoreToggle.setAttribute("aria-expanded", (!isExpanded).toString());
  });
  navMoreToggle.addEventListener("focus", () => navMoreToggle.setAttribute("aria-expanded", "true"));
  navMoreToggle.addEventListener("blur", () => navMoreToggle.setAttribute("aria-expanded", "false"));
}

setActiveNavigation();

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
