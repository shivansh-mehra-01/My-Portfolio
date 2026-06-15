"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { Send } from "lucide-react";
import SMMonogram from "./NexusLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    closeMenu();
    if (pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo} onClick={closeMenu}>
        <SMMonogram size={34} style={{ marginRight: 0 }} />
        <span className={styles.logoText}>
          Shivansh<span className={styles.logoSerif}>.dev</span>
        </span>
      </Link>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.navActive : ""}`}>
        <Link
          href="/"
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/")}
        >
          Home
        </Link>
        <Link
          href="/works"
          className={`${styles.link} ${isActive("/works") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/works")}
        >
          Portfolio
        </Link>
        <Link
          href="/services"
          className={`${styles.link} ${isActive("/services") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/services")}
        >
          Services
        </Link>
        <Link
          href="/about"
          className={`${styles.link} ${isActive("/about") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/about")}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/contact")}
        >
          Contact
        </Link>

        {/* Mobile CTA inside menu drawer */}
        <Link
          href="/contact"
          className={`${styles.ctaBtn} ${styles.mobileCta}`}
          style={{ display: "none" }}
          onClick={(e) => handleLinkClick(e, "/contact")}
        >
          Hire Me <Send size={14} />
        </Link>
      </nav>

      <Link href="/contact" className={styles.ctaBtn}>
        Hire Me <Send size={14} />
      </Link>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerActive : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
