import { useEffect } from "react";

export function useScrollFX(dep) {
  useEffect(() => {
    // Reveal on scroll
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    // Navbar shadow + progress bar
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 6);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      const bar = document.querySelector(".scroll-progress__bar");
      if (bar) bar.style.width = p + "%";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [dep]);
}
