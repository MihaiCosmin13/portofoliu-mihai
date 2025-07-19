// Schimbare temă și pictogramă
function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.dataset.theme === "light";
  html.dataset.theme = isLight ? "dark" : "light";

  const btn = document.getElementById("themeToggleBtn");
  btn.textContent = isLight ? "☀️" : "🌙";
}

// Funcție pentru scroll reveal
function handleScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;
    if (isVisible) {
      element.classList.add("visible");
    }
  });
}

// Inițializare când DOM-ul e gata
window.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggleBtn");
  btn.textContent = html.dataset.theme === "light" ? "🌙" : "☀️";

  // Fade-in la încărcare
  document.body.classList.add("fade-in");
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");

    // Scroll lin pentru linkuri interne
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });

    // Scroll reveal la încărcare
    handleScrollReveal();
  });
});

// Animații la scroll
window.addEventListener("scroll", handleScrollReveal);

const fadeCards = document.querySelectorAll(".fade-in-card");

  function revealCardsOnScroll() {
    fadeCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 150); // efect staggered
      }
    });
  }

  window.addEventListener("scroll", revealCardsOnScroll);
  window.addEventListener("load", revealCardsOnScroll);

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".project-card");

  function handleScrollReveal() {
    reveals.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 50;

      if (isVisible) {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 150); // efect "staggered"
      }
    });
  }

  window.addEventListener("scroll", handleScrollReveal);
  window.addEventListener("load", handleScrollReveal);
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('scrollProgress').style.width = `${scrolled}%`;
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


 const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // o singură dată
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });