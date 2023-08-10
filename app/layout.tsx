import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const myFont = localFont({ src: './font.otf' })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}
      <div className="filler2"></div>
      <div className="filler1"></div>
      </body>
    </html>
  )
}