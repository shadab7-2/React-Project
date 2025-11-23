import React from "react";
import "./Companies.css";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
  }),
};

const Companies = () => {
  const logos = [
    "./prologis.png",
    "./tower.png",
    "./equinix.png",
    "./realty.png",
  ];

  return (
    <section className="c-wrapper">
      <h2 className="companies-heading">Our Trusted Partners</h2>

      <div className="padding innerWidth flexCenter c-container">
        {logos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            custom={i}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            alt="company-logo"
            className="company-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Companies;
