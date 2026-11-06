import { site, waLink, mapsLink } from "./menuData";
import Header from "../components/Header";
import HomeEffects from "../components/HomeEffects";
import MenuExplorer from "../components/MenuExplorer";
import WhatsAppButton from "../components/WhatsAppButton";
import Logo from "../components/Logo";
import { Pin, WhatsApp, socialIcons } from "../components/Icons";

function Mandala() {
  return (
    <svg className="mandala" viewBox="-100 -100 200 200" fill="none" stroke="currentColor" strokeWidth="0.35" aria-hidden="true">
      {Array.from({ length: 16 }, (_, i) => (
        <ellipse key={i} cx="0" cy="-58" rx="11" ry="34" transform={`rotate(${i * 22.5})`} />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse key={`b${i}`} cx="0" cy="-30" rx="6" ry="16" transform={`rotate(${i * 45 + 22.5})`} />
      ))}
      <circle r="18" /><circle r="46" /><circle r="94" /><circle r="98" />
    </svg>
  );
}

const picks = [
  ["tandoor-starters", "Tandoor Starters", "Khai vị tandoor", "/img/tandoor-starters.jpg"],
  ["paneer-kofta", "Gourmet Mains", "Paneer & Kofta", "/img/paneer-kofta.jpg"],
  ["south-indian", "Southern Flavors", "Hương vị miền Nam", "/img/south-indian.jpg"],
  ["desserts", "Sweets & Desserts", "Món ngọt", "/img/desserts.jpg"],
];

const strip = ["Pure Jain & Vegetarian", "Fresh from the Tandoor", "Slow-cooked Dals", "South Indian Dosas", "Indo-Chinese Favourites", "Indian Sweets"];

function Socials({ className = "" }) {
  return (
    <div className={`socials ${className}`}>
      {site.socials.map((s) => {
        const Icon = socialIcons[s.id];
        return (
          <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <HomeEffects />
      <Header />

      {/* ---------- HOME ---------- */}
      <section id="home" className="hero">
        <Mandala />
        <div className="hero-grid">
          <div className="hero-copy">
            <Logo className="hero-logo" />
            <p className="eyebrow">{site.tagline}</p>
            <h1>Krishna<br />Garden</h1>
            <p className="lede">
              Pure Jain and vegetarian Indian cooking in Da Nang. Browse the full menu in English and Vietnamese.
            </p>
            <div className="cta-row">
              <a className="btn solid" href="#menu">View the menu</a>
              <a className="btn ghost" href="#about">About us</a>
            </div>
            <p className="place">{site.place}</p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-ring" />
            <div className="art art-1">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/img/paneer-kofta.jpg" alt="" width="1376" height="768" style={{ objectPosition: "62% 50%" }} /></div>
            <div className="art art-2">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/img/flatbreads.jpg" alt="" width="1376" height="768" style={{ objectPosition: "40% 70%" }} /></div>
            <div className="art art-3">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/img/desserts.jpg" alt="" width="1376" height="768" style={{ objectPosition: "45% 55%" }} /></div>
          </div>
        </div>
        <a className="scroll-cue" href="#picks" aria-label="Scroll down"><span>Scroll</span><i /></a>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[0, 1].map((n) => (
            <div className="strip-set" key={n}>
              {strip.map((t) => (<span key={t}>{t}<b className="dot" /></span>))}
            </div>
          ))}
        </div>
      </div>

      <section id="picks" className="picks wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">From our kitchen · Từ căn bếp của chúng tôi</p>
          <h2>A taste of the menu</h2>
        </div>
        <div className="pick-grid">
          {picks.map(([id, t, vi, img]) => (
            <a key={id} href="#menu" data-cat={id} className="pick">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" width="1376" height="768" loading="lazy" decoding="async" />
              <span className="pick-shade" />
              <span className="pick-txt"><strong>{t}</strong><em>{vi}</em></span>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section id="menu" className="menu-sec">
        <div className="wrap sec-head reveal">
          <p className="eyebrow">Menu · Thực đơn</p>
          <h2>Explore our full menu</h2>
          <p className="sub">{site.vat} · {site.vatVi}</p>
        </div>
        <MenuExplorer />
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="about">
        <div className="wrap about-grid">
          <div className="about-img reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/rice.jpg" alt="Brass handi of biryani by candlelight" width="1376" height="768" loading="lazy" decoding="async" />
            <span className="about-badge">Pure Jain &amp; Vegetarian</span>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">About us · Về chúng tôi</p>
            <h2>{site.about.title}</h2>
            {site.about.paragraphs.map((p) => (<p key={p} className="body">{p}</p>))}
            <ul className="points">
              {site.about.points.map(([t, d], i) => (
                <li key={t}><span>{String(i + 1).padStart(2, "0")}</span><div><strong>{t}</strong><p>{d}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="visit wrap">
        <div className="visit-card reveal">
          <p className="eyebrow">Visit us · Ghé thăm</p>
          <h2>Find Krishna Garden</h2>
          <p className="body"><Pin className="inline-ic" /> {site.addressLine}</p>
          <p className="body soft">Message us on WhatsApp for opening hours and reservations.</p>
          <div className="cta-row">
            <a className="btn solid" href={mapsLink()} target="_blank" rel="noopener noreferrer"><Pin /> Open in Google Maps</a>
            <a className="btn wa-btn" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsApp /> Chat on WhatsApp</a>
          </div>
          <div className="follow"><span>Follow us</span><Socials /></div>
        </div>
        <a className="map reveal" href={mapsLink()} target="_blank" rel="noopener noreferrer" aria-label="Open Krishna Garden in Google Maps">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/soups.jpg" alt="" width="1376" height="768" loading="lazy" decoding="async" />
          <span className="map-shade" />
          <span className="map-pin"><Pin /></span>
          <span className="map-txt"><strong>Krishna Garden</strong><em>{site.addressLine}</em><b>Open in Google Maps</b></span>
        </a>
      </section>

      <footer className="foot">
        <Logo className="foot-logo" />
        <p className="foot-name">Krishna Garden</p>
        <p className="vat">{site.tagline}</p>
        <Socials className="center" />
        <p className="vat-vi">{site.vat} · {site.vatVi}</p>
        <p className="copy">© Krishna Garden · {site.place}</p>
      </footer>

      <WhatsAppButton />
    </>
  );
}
