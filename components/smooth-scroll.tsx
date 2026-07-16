"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export let lenis: Lenis | null = null

export default function SmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({ duration: 1.2 })
    function raf(time: number) {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return null
}
