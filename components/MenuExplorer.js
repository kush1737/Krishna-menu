"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories, imgPos } from "../app/menuData";
import { Search } from "./Icons";

const PRICES = [
  ["all", "Any price"],
  ["u100", "Under 100k"],
  ["m", "100–149k"],
  ["h", "150k +"],
];
const inPrice = (k, f) => f === "all" || (f === "u100" && k < 100) || (f === "m" && k >= 100 && k < 150) || (f === "h" && k >= 150);
const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase();

export default function MenuExplorer() {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [price, setPrice] = useState("all");
  const root = useRef(null);
  const top = useRef(null);

  // Cards elsewhere on the page can pre-select a category with data-cat="<id>"
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest?.("[data-cat]");
      if (el) { setCat(el.dataset.cat); setQ(""); setPrice("all"); }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const { list, total } = useMemo(() => {
    const nq = norm(q.trim());
    const list = categories
      .map((c, idx) => ({ ...c, idx }))
      .filter((c) => cat === "all" || c.id === cat)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          ([en, vi, k]) => inPrice(k, price) && (!nq || norm(en).includes(nq) || norm(vi).includes(nq))
        ),
      }))
      .filter((c) => c.items.length);
    return { list, total: list.reduce((n, c) => n + c.items.length, 0) };
  }, [cat, q, price]);

  // Banner parallax (scrubbed and reversible)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".banner").forEach((b) => {
        gsap.fromTo(b.querySelector("img"), { yPercent: -7, scale: 1.18 }, {
          yPercent: 7, ease: "none",
          scrollTrigger: { trigger: b, start: "top bottom", end: "bottom top", scrub: true },
        });
        gsap.from(b.querySelector(".banner-txt"), {
          y: 30, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: b, start: "top 80%", toggleActions: "play none none reverse" },
        });
      });
    }, root);
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [cat, q, price]);

  // Row reveal when the category or price filter changes / on first view
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.set(".row", { opacity: 0, y: 22 });
      ScrollTrigger.batch(".row", {
        start: "top 94%", once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, stagger: 0.05, duration: 0.65, ease: "power3.out", overwrite: true }),
      });
    }, root);
    return () => ctx.revert();
  }, [cat, price]);

  const pick = (id) => {
    setCat(id);
    requestAnimationFrame(() => top.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  const clear = () => { setCat("all"); setQ(""); setPrice("all"); };
  const filtered = cat !== "all" || q || price !== "all";

  return (
    <div ref={root}>
      <div className="filters wrap">
        <label className="search">
          <Search />
          <input
            type="search" value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Search dishes · Tìm món ăn" aria-label="Search dishes"
          />
        </label>
        <div className="pills" role="group" aria-label="Filter by price">
          {PRICES.map(([id, label]) => (
            <button key={id} className={`pill ${price === id ? "on" : ""}`} onClick={() => setPrice(id)} aria-pressed={price === id}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="chipbar">
        <div className="chips" role="group" aria-label="Filter by category">
          <button className={`chip ${cat === "all" ? "active" : ""}`} onClick={() => pick("all")} aria-pressed={cat === "all"}>All</button>
          {categories.map((c) => (
            <button key={c.id} className={`chip ${cat === c.id ? "active" : ""}`} onClick={() => pick(c.id)} aria-pressed={cat === c.id}>
              {c.en}
            </button>
          ))}
        </div>
      </div>

      <div ref={top} className="results-top wrap">
        <p className="meta" aria-live="polite">
          {total} {total === 1 ? "dish" : "dishes"}{filtered ? " match your filters" : " across 14 categories"}
        </p>
        {filtered && <button className="clear" onClick={clear}>Clear filters</button>}
      </div>

      {list.length === 0 && (
        <div className="empty wrap">
          <p>No dishes found · Không tìm thấy món nào</p>
          <button className="pill on" onClick={clear}>Show full menu</button>
        </div>
      )}

      {list.map((c, i) => (
        <section key={c.id} id={c.id} className="cat">
          <div className="wrap">
            <div className="banner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt="" width="1376" height="768" loading={i < 2 ? "eager" : "lazy"} decoding="async" style={{ objectPosition: imgPos[c.id] }} />
              <div className="banner-shade" />
              <span className="banner-num" aria-hidden="true">{String(c.idx + 1).padStart(2, "0")}</span>
              <div className="banner-txt">
                <h2>{c.en}</h2>
                <p className="vi-title">{c.vi}</p>
                {c.tag && <p className="tag">{c.tag}</p>}
              </div>
            </div>
            <div className="rows">
              {c.items.map(([en, vi, p, desc]) => (
                <div className="row" key={en}>
                  <div className="txt">
                    <h3 className="name">{en}</h3>
                    <p className="vi">{vi}</p>
                    {desc && <p className="desc">{desc}</p>}
                  </div>
                  <span className="price">{p}.000 VND</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
