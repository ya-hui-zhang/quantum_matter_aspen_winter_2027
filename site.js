// Aspen 2027 site — subtle interactions
document.addEventListener("DOMContentLoaded", function () {
  // 1. Reveal-on-scroll for key blocks
  var targets = document.querySelectorAll(
    "section h2, section .rule, .spk, .info-box, .quick-card, .glance, .note, section p, .pillar h3, .tba, .btn"
  );
  targets.forEach(function (el, i) {
    el.setAttribute("data-reveal", "");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    // tiny stagger within each grid for a nicer cascade
    targets.forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 60 + "ms";
      io.observe(el);
    });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }

  // 2. Nav shadow once scrolled
  var nav = document.querySelector("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
