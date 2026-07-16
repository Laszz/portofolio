"use client"

import { useEffect, useRef, useState } from "react"
import { animate, stagger } from "animejs"

export function useTypingAnimation(primaryWords: readonly string[], secondaryWords: readonly string[]) {
  const [display, setDisplay] = useState({ primary: "", secondary: "" })
  const state = useRef({
    primaryIdx: 0,
    secondaryIdx: 0,
    isDeleting: false,
    p: "",
    s: "",
  })

  useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      if (cancelled) return

      const s = state.current
      const fullP = primaryWords[s.primaryIdx] ?? ""
      const fullS = secondaryWords[s.secondaryIdx] ?? ""

      if (s.isDeleting) {
        s.p = fullP.substring(0, Math.max(0, s.p.length - 1))
        s.s = fullS.substring(0, Math.max(0, s.s.length - 1))
      } else {
        s.p = fullP.substring(0, s.p.length + 1)
        s.s = fullS.substring(0, s.s.length + 1)
      }

      setDisplay({ primary: s.p, secondary: s.s })

      let speed = s.isDeleting ? 50 : 150
      if (!s.isDeleting && s.p === fullP) {
        speed = 2000
        s.isDeleting = true
      } else if (s.isDeleting && s.p === "") {
        speed = 500
        s.isDeleting = false
        s.primaryIdx = (s.primaryIdx + 1) % primaryWords.length
        s.secondaryIdx = (s.secondaryIdx + 1) % secondaryWords.length
      }

      timer = setTimeout(tick, speed)
    }

    tick()

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [primaryWords, secondaryWords])

  return display
}

export function useAnimeReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-anime]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const type = el.dataset.anime
            if (type === "fade-up") {
              animate(el, { opacity: 1, translateY: 0, duration: 1000, easing: "easeOutCubic" })
              const items = el.querySelectorAll<HTMLElement>("[data-anime-item]")
              if (items.length) {
                animate(items, { opacity: 1, translateY: 0, duration: 800, delay: stagger(150), easing: "easeOutCubic" })
              }
            }
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export function useHeroTilt(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      el.style.transform = `perspective(1000px) rotateX(${(y - cy) / 20}deg) rotateY(${(cx - x) / 20}deg)`
    }
    function onLeave() {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [ref])
}

export function useButtonPress() {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>(
      "button, a.bg-primary-container, a.bg-tertiary-container, a.bg-secondary-container, a.bg-primary-fixed"
    )
    function down(this: HTMLElement) {
      this.style.transform = "translate(4px, 4px)"
      this.style.boxShadow = "0px 0px 0px 0px #000000"
    }
    function up(this: HTMLElement) {
      this.style.transform = ""
      this.style.boxShadow = ""
    }
    buttons.forEach((btn) => {
      btn.addEventListener("mousedown", down)
      btn.addEventListener("mouseup", up)
      btn.addEventListener("mouseleave", up)
    })
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mousedown", down)
        btn.removeEventListener("mouseup", up)
        btn.removeEventListener("mouseleave", up)
      })
    }
  }, [])
}

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".neo-shadow, .neo-shadow-sm")
    function onScroll() {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.classList.add("translate-y-0")
          el.classList.remove("translate-y-4")
        }
      })
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
}

export function useMouseShadow() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".neobrutal-shadow")
    function onMove(e: MouseEvent) {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          card.style.transform = "translate(-2px, -2px)"
          card.style.boxShadow = "10px 10px 0px 0px rgba(0,0,0,1)"
        } else {
          card.style.transform = "translate(0px, 0px)"
          card.style.boxShadow = "8px 8px 0px 0px rgba(0,0,0,1)"
        }
      })
    }
    document.addEventListener("mousemove", onMove)
    return () => document.removeEventListener("mousemove", onMove)
  }, [])
}
