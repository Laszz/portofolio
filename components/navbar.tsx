"use client"

import { useState } from "react"
import { SITE } from "@/data/site"
import { lenis } from "./smooth-scroll"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function scrollTo(id: string) {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 })
      } else {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b-4 border-on-background h-20 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
      <button onClick={() => scrollTo("home")} className="font-headline-md text-headline-md font-black text-on-background tracking-tighter uppercase">
        {SITE.name}
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-stack-md">
        {SITE.nav.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href.replace("#", ""))}
            className="text-on-background font-bold hover:bg-primary-container hover:text-on-primary-container transition-all duration-100 px-4 py-2"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
        <span className="material-symbols-outlined text-3xl">{open ? "close" : "menu"}</span>
      </button>

      {/* HIRE ME desktop */}
      <button
        onClick={() => scrollTo("contact")}
        className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2 border-4 border-on-background neobrutal-shadow font-headline-md text-sm uppercase transition-all btn-press"
      >
        HIRE ME
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-background border-b-4 border-on-background md:hidden flex flex-col items-center gap-2 py-6">
          {SITE.nav.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href.replace("#", ""))}
              className="text-on-background font-bold text-xl py-3 w-full text-center hover:bg-primary-container transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-primary-container text-on-primary-container px-8 py-3 border-4 border-on-background neobrutal-shadow font-headline-md uppercase transition-all btn-press mt-2"
          >
            HIRE ME
          </button>
        </div>
      )}
    </nav>
  )
}
