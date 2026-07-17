import type { Metadata } from "next"
import { montserrat, archivoNarrow, spaceMono } from "@/lib/fonts"
import Navbar from "@/components/navbar"
import SmoothScroll from "@/components/smooth-scroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Breaking digital boundaries with high-contrast UI and structural honesty. A neobrutalist portfolio showcasing raw creative output.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${archivoNarrow.variable} ${spaceMono.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md antialiased">
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
