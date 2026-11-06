"use client";
import { useState } from "react";

export default function Logo({ className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`logo-fallback ${className}`} aria-hidden="true">K</div>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt="Krishna Garden Da Nang logo" width="504" height="444" className={className} onError={() => setFailed(true)} />
  );
}
