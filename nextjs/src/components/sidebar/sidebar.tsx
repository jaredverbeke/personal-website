"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            Jared Verbeke
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" && "active"}`}
            >
              <i className="fa fa-user" /> About
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/services"
              className={`${pathUrl == "/services" && "active"}`}
            >
              <i className="fa fa-briefcase" /> Work: AI Projects
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/portfolio"
              className={`${pathUrl == "/portfolio" && "active"}`}
            >
              <i className="fa fa-gamepad" /> Fun: AI Projects
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/interests"
              className={`${pathUrl == "/interests" && "active"}`}
            >
              <i className="fa fa-leaf" /> Interests
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/blog"
              className={`${pathUrl == "/blog" && "active"}`}
            >
              <i className="fa fa-trophy" /> Accomplishments
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" && "active"}`}
            >
              <i className="fa fa-file" /> Resume
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/apple-photos-agent-whitepaper"
              className={`${
                pathUrl == "/apple-photos-agent-whitepaper" && "active"
              }`}
            >
              <i className="fa fa-file-alt" /> Apple Photos Whitepaper
            </Link>
          </li>
        </ul>
        <div className="copyright">
          © {new Date().getFullYear()} Jared Verbeke
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
