"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Hero intro
      gsap.from(".hero-copy > *", { y: 36, opacity: 0, duration: 1.1, stagger: 0.1, ease: "power3.out", delay: 0.1 });
      gsap.from(".hero-art .art", { y: 60, opacity: 0, duration: 1.3, stagger: 0.15, ease: "power3.out", delay: 0.2 });

      // Hero parallax: layers move at different speeds while scrolling (scrubbed, reversible)
      const heroST = { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 };
      gsap.set(".art-1 img", { scale: 1.15 });
      gsap.to(".art-1 img", { yPercent: 9, ease: "none", scrollTrigger: heroST });
      gsap.to(".art-2", { yPercent: -22, ease: "none", scrollTrigger: heroST });
      gsap.to(".art-3", { yPercent: -45, ease: "none", scrollTrigger: heroST });
      gsap.to(".mandala", { rotation: 50, ease: "none", scrollTrigger: heroST });
      gsap.to(".hero-copy", { yPercent: -8, ease: "none", scrollTrigger: heroST });

      // Page progress line in the header
      gsap.to(".progress", {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true },
      });

      // Section reveals
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 44, opacity: 0, duration: 0.95, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", toggleActions: "play none none reverse" },
        });
      });
      ScrollTrigger.batch(".pick", {
        start: "top 88%",
        onEnter: (els) => gsap.fromTo(els, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out", overwrite: true }),
        onLeaveBack: (els) => gsap.set(els, { opacity: 0, y: 50 }),
      });
      gsap.set(".pick", { opacity: 0, y: 50 });

      // About image parallax
      gsap.set(".about-img img", { scale: 1.18 });
      gsap.fromTo(".about-img img", { yPercent: -7 }, {
        yPercent: 7, ease: "none",
        scrollTrigger: { trigger: ".about-img", start: "top bottom", end: "bottom top", scrub: true },
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    });
    return () => ctx.revert();
  }, []);
  return null;
}
