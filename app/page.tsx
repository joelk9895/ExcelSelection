"use client"
import Model, { } from "./component/Knot"
import localFont from 'next/font/local'


const myFont = localFont({ src: './font.otf' })

export default function Home() {
  const handleclick = () => {
    alert("Made it in a hurry, Hope You liked it!😌 \n" + "Check joelkgeorge.vercel.app or joelkgeorge.tech to see my portfolio")
  }
  return (
    <main>
      <div className="filler3"></div>
      <div className="filler4"></div>
      <nav><h1>TechNova</h1></nav>
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
      </div>
      <button className={myFont.className} id="Register" onClick={handleclick}>Register</button>
      <footer>
        <p>Made by <a href="https://joelkgeorge.tech"
          target="_blank" rel="noopener noreferrer"
        >Joel K George</a></p>
      </footer>
    </main>
  )
}
