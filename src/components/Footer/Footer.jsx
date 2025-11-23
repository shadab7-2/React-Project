import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container'>

        {/* LEFT SIDE */}
        <div className='flexColStart f-left'>
          <img src='./logo2.png' alt='footer-logo' width={120} className="f-logo"/>

          <p className='secondaryText f-desc'>
            Our vision is to make all people<br />
            the best place to live for them.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className='flexColStart f-right'>
          <span className='primaryText f-title'>Information</span>
          <span className='secondaryText f-address'>
            145 New York, FL 4571 USA
          </span>

          <div className='flexCenter f-menu'>
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

      </div>

      <div className="f-bottom">
        <p>© 2024 RealEstate — All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
