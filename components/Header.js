"use client";
import { useState } from "react";
import Logo from "./Logo";
import { waLink } from "../app/menuData";

const links = [["Home", "#home"], ["Menu", "#menu"], ["About Us", "#about"], ["Visit", "#visit"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="hdr-in">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <Logo className="brand-logo" />
          <span>Krishna Garden</span>
        </a>
        <nav className={`links ${open ? "open" : ""}`} aria-label="Main">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>
          ))}
        </nav>
        <a className="hdr-cta" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <i /><i />
        </button>
      </div>
      <div className="progress" />
    </header>
  );
}
