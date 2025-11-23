import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

import Residencies from "../Residencies/Residencies";
import Value from "../Value/Value";
import Contact from "../Contact/Contact";
import GetStarted from "../GetStarted/GetStarted";

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add sticky + scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMenuStyles = () => {
    if (window.innerWidth <= 800) {
      return {
        right: menuOpened ? "0" : "-100%",
        opacity: menuOpened ? "1" : "0",
        pointerEvents: menuOpened ? "auto" : "none",
      };
    }
    return {};
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setMenuOpened(false);
  };

  const renderSection = () => {
    const sections = {
      residencies: <Residencies />,
      ourvalue: <Value />,
      contactus: <Contact />,
      getstarted: <GetStarted />,
    };
    return sections[activeSection] || null;
  };

  return (
    <>
      {/* NAVBAR */}
      <header className={`h-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <div className="innerWidth h-container">
          {/* Logo */}
          <img src="./logo.png" alt="logo" width={100} className="logo" />

          {/* MENU */}
          <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
            <div className="h-menu" style={getMenuStyles()}>
              <button onClick={() => handleSectionClick("residencies")}>
                Residencies
              </button>

              <button onClick={() => handleSectionClick("ourvalue")}>
                Our Value
              </button>

              <button onClick={() => handleSectionClick("contactus")}>
                Contact Us
              </button>

              <button onClick={() => handleSectionClick("getstarted")}>
                Get Started
              </button>

              <a className="contact-btn" href="mailto:sandabansari972@gmail.com">
                Contact
              </a>
            </div>
          </OutsideClickHandler>

          {/* TOGGLE BUTTON */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </header>

      {/* CONTENT BELOW HEADER */}
      {renderSection()}
    </>
  );
};

export default Header;
