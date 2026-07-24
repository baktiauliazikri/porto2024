import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { FiSun, FiMoon, FiDownload } from "react-icons/fi";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PORTOFOLIO", to: "/portofolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleCloseMenu = () => {
    setToggleIcon(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={handleCloseMenu}>
          BAZ<span className="navbar__logo__dot">.</span>
        </Link>

        <ul className={`navbar__menu ${toggleIcon ? "active" : ""}`}>
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={index} className="navbar__menu__item">
                <Link
                  className={`navbar__menu__link ${isActive ? "active" : ""}`}
                  to={item.to}
                  onClick={handleCloseMenu}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          <li className="navbar__menu__item mobile-only">
            <a
              href="/logo/CV_BAKTI AULIA ZIKRI_IT BA.pdf"
              download="CV_BAKTI AULIA ZIKRI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cv-btn"
              onClick={handleCloseMenu}
            >
              <FiDownload size={14} /> Download CV
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a
            href="/logo/CV_BAKTI AULIA ZIKRI_IT BA.pdf"
            download="CV_BAKTI AULIA ZIKRI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cv-btn desktop-only"
          >
            <FiDownload size={14} /> CV
          </a>

          <div className="nav-icon" onClick={handleToggleIcon} aria-label="Toggle navigation">
            {toggleIcon ? <HiX size={26} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>
      {toggleIcon && <div className="navbar__backdrop" onClick={handleCloseMenu} />}
    </header>
  );
};

export default Navbar;
