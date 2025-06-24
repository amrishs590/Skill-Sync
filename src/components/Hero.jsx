import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-text"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Exchange Skills. Grow Together.</h2>
        <p>Find a peer who can teach you what you want to learn — and teach them something in return.</p>
        <button className="cta-btn">Get Started</button>
      </motion.div>
    </section>
  );
};

export default Hero;
