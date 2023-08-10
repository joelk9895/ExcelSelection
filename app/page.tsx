import Model, { } from "./component/Knot"
import localFont from 'next/font/local'


const myFont = localFont({ src: './font.otf' })

export default function Home() {
  return (
    <main>
      <div className="filler3"></div>
      <div className="filler4"></div>
      <nav><h1>TechNova</h1></nav>
      <div className="lander">
        <Model />
      </div>
      <button className={myFont.className} id="Register">Register</button>
    </main>
  )
}
