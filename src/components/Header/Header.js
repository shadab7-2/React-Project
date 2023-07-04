import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import Residencies from "../Residencies/Residencies";
import Value from "../Value/Value";
import Contact from "../Contact/Contact";
import GetStarted from "../GetStarted/GetStarted"

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  const HandleSectionClick = (section) => {
    setActiveSection(section);
    setMenuOpened(false);
  };
  const renderSection = () => {
    switch (activeSection) {
      case "residencies":
        return <Residencies />;
      case "ourvalue":
        return <Value/>;
      case "contactus":
        return <Contact />;
      case "getstarted":
        return <GetStarted/>;
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter padding innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a
              href="#"
              onClick={() => {
                HandleSectionClick("residencies");
              }}
            >
              Residencies
            </a>
            <a
              href="#"
              onClick={() => {
                HandleSectionClick("ourvalue");
              }}
            >
              Our Value
            </a>
            <a
              href="#"
              onClick={() => {
                HandleSectionClick("contactus");
              }}
            >
              Contact Us
            </a>
            <a
              href="#"
              onClick={() => {
                HandleSectionClick("getstarted");
              }}
            >
              Get Started
            </a>
            <a className="button" href="mailto:sandabansari972@gmail.com">
              Contact
            </a>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
      {renderSection()}
    </section>
  );
};

export default Header;
