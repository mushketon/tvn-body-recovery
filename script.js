const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const reviews = [
  {
    name: "Алина",
    city: "Алматы",
    rating: 5.0,
    text:
      "Очень спокойный и внимательный формат. После встречи ушло ощущение зажатости в плечах, а рекомендации помогли лучше распределять нагрузку в течение недели."
  },
  {
    name: "Дамир",
    city: "Алматы",
    rating: 4.9,
    text:
      "Понравилось, что здесь нет спешки и лишних обещаний. Все объясняется понятным языком, а работа ощущается точной и собранной."
  },
  {
    name: "Мария",
    city: "Астана",
    rating: 4.8,
    text:
      "Пришла с общей усталостью после тренировочного периода. После сеанса стало легче двигаться, а тело ощущалось более собранным и свободным."
  },
  {
    name: "Руслан",
    city: "Алматы",
    rating: 4.7,
    text:
      "Для меня было важно индивидуальное внимание. Никита спокойно выслушал запрос, ничего не навязывал и подобрал комфортный темп работы."
  },
  {
    name: "Екатерина",
    city: "Алматы",
    rating: 5.0,
    text:
      "Очень аккуратная работа и приятная атмосфера. Особенно ценно, что после встречи остались понятные рекомендации, которые реально легко внедрить."
  },
  {
    name: "Тимур",
    city: "Караганда",
    rating: 4.9,
    text:
      "После долгой дороги и плотного графика хотелось просто вернуть ощущение легкости. Встреча помогла выдохнуть, разгрузиться и почувствовать больше комфорта в теле."
  }
];

const reviewsGrid = document.querySelector("[data-reviews-grid]");

const renderStars = (rating) => {
  const rounded = Math.round(rating);

  return Array.from({ length: 5 }, (_, index) =>
    `<span class="review-star${index < rounded ? " is-filled" : ""}" aria-hidden="true">★</span>`
  ).join("");
};

const renderReviews = () => {
  if (!reviewsGrid) return;

  reviewsGrid.innerHTML = reviews
    .map(
      (review, index) => `
        <article class="review-card reveal${index % 3 === 1 ? " delay-1" : ""}${index % 3 === 2 ? " delay-2" : ""}">
          <div class="review-card-top">
            <div>
              <h3 class="review-name">${review.name}</h3>
              <p class="review-city">${review.city}</p>
            </div>
            <div class="review-rating-wrap" aria-label="Рейтинг ${review.rating.toFixed(1)} из 5">
              <strong class="review-rating">${review.rating.toFixed(1)}</strong>
              <div class="review-stars">${renderStars(review.rating)}</div>
            </div>
          </div>
          <p class="review-text">${review.text}</p>
        </article>`
    )
    .join("");
};

renderReviews();

const revealNodes = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const navMoreToggle = document.querySelector(".nav-more-toggle");
const headerActions = document.querySelector(".header-actions");

const contactLinks = [
  {
    label: "Позвонить",
    shortLabel: "Телефон",
    href: "tel:+77058650607",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 4.8h2.8l1.4 3.9-1.7 1.9a14.6 14.6 0 0 0 4.3 4.3l1.9-1.7 3.9 1.4v2.8c0 .7-.5 1.2-1.2 1.2A14.8 14.8 0 0 1 5.4 6c0-.7.5-1.2 1.2-1.2Z"/><path d="M14.4 5.8a4.2 4.2 0 0 1 3.8 3.8"/><path d="M14.4 2.8a7.2 7.2 0 0 1 6.8 6.8"/></svg>'
  },
  {
    label: "WhatsApp",
    shortLabel: "WhatsApp",
    href:
      "https://wa.me/77058650607?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20TVN%20Body%20Recovery",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.8 9.8 0 0 0 3.6 16.7L2.5 21.5l4.9-1.2A9.8 9.8 0 0 0 21.8 12a9.7 9.7 0 0 0-2.7-7.1Z"/><path d="M8.8 7.5c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.2.2 2.2 3.5 5.4 4.7 2.7 1 3.2.8 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.3-2.2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.4-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.4 0-.6l-1-2.1Z"/></svg>'
  },
  {
    label: "Telegram",
    shortLabel: "Telegram",
    href: "https://t.me/+9gfBf-mJgD02ZDky",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 4.2 18.3 19c-.2 1-.8 1.2-1.6.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-.9.5l.3-4.9 8.9-8c.4-.4-.1-.6-.6-.3L6.3 12.7 1.6 11.2c-1-.3-1-1 .2-1.5l18.4-7.1c.9-.3 1.7.2 1.3 1.6Z"/></svg>'
  },
  {
    label: "Instagram",
    shortLabel: "Instagram",
    href: "https://www.instagram.com/tvn_body.recovery?igsh=MW9yMmFsZzNxNWdnbQ==",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5"/><circle cx="12" cy="12" r="3.7"/><circle cx="17.2" cy="6.9" r=".8"/></svg>'
  }
];

const socialLinks = contactLinks.filter((link) => link.label !== "Позвонить");

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

const renderContactAction = (link, label, className = "icon-link") =>
  `<a class="${className}" href="${link.href}"${link.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${link.icon}${label}</a>`;

const servicesCatalogs = Array.from(document.querySelectorAll(".services-catalog"));
const mobileServicesMedia = window.matchMedia("(max-width: 720px)");

const mountMobileServicesCarousel = (catalog) => {
  if (catalog.dataset.carouselMounted === "true") return;

  const cards = Array.from(catalog.querySelectorAll(":scope > .service-card"));

  if (cards.length <= 3) return;

  const fragment = document.createDocumentFragment();

  for (let index = 0; index < cards.length; index += 3) {
    const page = document.createElement("div");
    page.className = "services-carousel-page";
    page.setAttribute("role", "group");
    page.setAttribute("aria-label", `Карточки услуг ${index + 1}-${Math.min(index + 3, cards.length)}`);
    cards.slice(index, index + 3).forEach((card) => page.appendChild(card));
    fragment.appendChild(page);
  }

  catalog.innerHTML = "";
  catalog.appendChild(fragment);
  catalog.classList.add("is-mobile-carousel");
  catalog.dataset.carouselMounted = "true";
};

const unmountMobileServicesCarousel = (catalog) => {
  if (catalog.dataset.carouselMounted !== "true") return;

  const cards = Array.from(catalog.querySelectorAll(".service-card"));
  catalog.innerHTML = "";
  cards.forEach((card) => catalog.appendChild(card));
  catalog.classList.remove("is-mobile-carousel");
  delete catalog.dataset.carouselMounted;
};

const syncServicesCarousel = () => {
  servicesCatalogs.forEach((catalog) => {
    if (mobileServicesMedia.matches) {
      mountMobileServicesCarousel(catalog);
      return;
    }

    unmountMobileServicesCarousel(catalog);
  });
};

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
  const socialLink = contactLinks.find((item) =>
    link.textContent.trim().toLowerCase().includes(item.shortLabel.toLowerCase())
  );

  if (socialLink && !link.querySelector("svg")) {
    link.insertAdjacentHTML("afterbegin", socialLink.icon);
  }
});

document.querySelectorAll(".contact-actions-grid").forEach((grid) => {
  grid.innerHTML = contactLinks
    .map((link) => renderContactAction(link, link.label === "Позвонить" ? "Позвонить" : `Записаться в ${link.shortLabel}`))
    .join("");
});

document.querySelectorAll(".stacked-actions").forEach((stack) => {
  stack.innerHTML = contactLinks
    .map((link) =>
      renderContactAction(
        link,
        link.label === "Позвонить" ? "Позвонить" : `Записаться в ${link.shortLabel}`,
        "stacked-contact-link"
      )
    )
    .join("");
});

document.querySelectorAll(".cta-panel").forEach((panel) => {
  const description = Array.from(panel.querySelectorAll("p")).find((node) => !node.classList.contains("eyebrow"));

  if (description) {
    description.textContent = "Выберите удобный способ связи: звонок, WhatsApp, Telegram или Instagram.";
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
syncServicesCarousel();

if (typeof mobileServicesMedia.addEventListener === "function") {
  mobileServicesMedia.addEventListener("change", syncServicesCarousel);
} else if (typeof mobileServicesMedia.addListener === "function") {
  mobileServicesMedia.addListener(syncServicesCarousel);
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
