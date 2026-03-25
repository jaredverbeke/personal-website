"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitch from "@/components/panel/ThemeSwitch";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Work · AI" },
  { href: "/portfolio", label: "Fun · AI" },
  { href: "/interests", label: "Interests" },
  { href: "/blog", label: "Accomplishments" },
  { href: "/contact", label: "Resume" },
  {
    href: "/apple-photos-agent-whitepaper",
    label: "Photos whitepaper",
  },
];

function navIsActive(pathUrl: string, href: string) {
  if (href === "/") return pathUrl === "/";
  return pathUrl === href || pathUrl.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathUrl = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathUrl]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Link href="/" className="site-header__brand">
          Jared Verbeke
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navIsActive(pathUrl, href) ? "is-active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-header__end">
          <ThemeSwitch />
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="site-header__menu-icon" data-open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div
        id="site-nav-drawer"
        className={`site-header__drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="site-header__drawer-nav" aria-label="Mobile">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navIsActive(pathUrl, href) ? "is-active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
