"use client"
import React, { useEffect, useState } from 'react';
import Model from './component/Knot';
import localFont from 'next/font/local';

const myFont = localFont({ src: './font.otf' });

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

    return `${minutes}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  };

  const handleclick = () => {
    if (navigator.vibrate) {
        navigator.vibrate([100,300,100]);
    }
    alert(
      `Made it in a hurry, Hope You liked it!😌 \nCheck joelkgeorge.vercel.app or joelkgeorge.tech to see my portfolio`
    );
  };

  return (
    <main>
      <div className="filler3"></div>
      <div className="filler4"></div>
      <nav>
        <h1>TechNova</h1>
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
        <Model/>
        <div className="timer"> {formatTime(timer)}</div>
      </div>
      <button className={myFont.className} id="Register" onClick={handleclick}>
        Register
      </button>
      <footer>
        <p>
          Made by{' '}
          <a
            href="https://joelkgeorge.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joel K George
          </a>
        </p>
      </footer>
    </main>
  );
}
