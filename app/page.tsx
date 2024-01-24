"use client";
import React, { useEffect, useState, useRef } from "react";
import Model from "./component/Knot";
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "framer-motion";

const myFont = localFont({ src: "./font.otf" });

export default function Home() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 100); // Increment by 100 milliseconds
    }, 100);

    return () => clearInterval(interval);
  }, []);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${minutes}:${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(3, "0")}`;
  };

  const handleclick = () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 300, 100]);
    }
    window.open("https://www.linkedin.com/in/joel-k-george/");
  };
  const container1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container1,
    offset: ["start end", "end start"],
  });

  const container2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2, // Updated the target ref
    offset: ["start end", "end end"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x = useTransform(scrollYProgress2, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress2, [0, 1], [-500, 0]);
  const height = useTransform(scrollYProgress, [0, 0.9], [30, 0]);
  const rotate = useTransform(scrollYProgress2, [0, 1], [120, 90]);

  return (
    <main ref={container1}>
      <div className="filler1"></div>
      <div className="filler3"></div>
      <div className="filler4"></div>
      <nav>
        <h1>designHero</h1>
      </nav>
      <div className="lander">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="record">
          <div className="recording-circle"></div>
          <div className="recording-text">Recording</div>
        </div>
        <Model />
        <div className="timer"> {formatTime(timer)}</div>
      </div>
      <button className={myFont.className} id="Register" onClick={handleclick}>
        Contact Us
      </button>
      <section className="about">
        <h2>Why designHero?</h2>
        <p>
          We are a team of passionate designers and developers, we grew up
          admiring the works featured on <a href="awwwards.com">awwwards.com</a>
          . We decided to bring the same level of quality to Indian businesses.
        </p>
      </section>
      <section className="pricing">
        <h2>Pricing</h2>
        <div className="price-card">
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="essentials"></div>
              <h3 className="pricing-card1 ">Landing page</h3>
              <div className="pricinginfo">
                <p className="price">₹2999</p>
                <p className="month">₹4999</p>
              </div>

              <p className="pricing-card1">
                For businesses who wants to go online
              </p>
            </div>
            <div className="pricing-card">
              <div className="pro"></div>
              <h3 className="pricing-card2">Landing + 2 pages</h3>
              <div className="pricinginfo">
                <p className="price">₹4999</p>
                <p className="month">₹9999</p>
              </div>
              <p className="pricing-card2">For businesses who works hybrid</p>
            </div>
            <div className="pricing-card">
              <div className="enterprise"></div>
              <h3 className="pricing-card3">Enterprise</h3>
              <div className="pricinginfo">
                <p className="price">Let&abpos;s talk</p>
                <p className="month"></p>
              </div>
              <p className="pricing-card3">For serious online businesses</p>
            </div>
          </div>
          <div className="countdown">
            <div className="countdown-text">Early bird Offer ends in</div>
            <div className="countdown-timer">12:00:00:00</div>
          </div>
        </div>
      </section>
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
      <motion.div style={{ y }} ref={container2} className="contact">
        <div className="title">
          <h2 className="text-white text-6xl text-center font-semibold flex">
            Let&apos;s Connect
          </h2>
          <motion.div style={{ x }} className="buttonContainer">
            <button className="button">Contact Us</button>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            className="contactSvg"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="info">
          <a href="mailto:joelk9895@gmail.com" className="mail">
            joelk9895@gmail.com
          </a>
          <a href="tel:+919895473464" className="mail">
            9895473464
          </a>
        </div>
      </motion.div>
    </main>
  );
}
