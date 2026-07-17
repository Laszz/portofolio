"use client"

import { useRef } from "react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { lenis } from "@/components/smooth-scroll"
import { HOME } from "@/data/home"
import { WORK } from "@/data/work"
import { ABOUT } from "@/data/about"
import { CONTACT } from "@/data/contact"
import {
  useTypingAnimation,
  useHeroTilt,
  useButtonPress,
  useScrollReveal,
  useMouseShadow,
  useAnimeReveal,
} from "@/lib/interactions"
import "./home.css"

export default function HomePage() {
  const text = useTypingAnimation(HOME.primaryWords, HOME.secondaryWords)
  const imgRef = useRef<HTMLDivElement>(null!)
  const aboutImgRef = useRef<HTMLDivElement>(null!)
  useHeroTilt(imgRef)
  useHeroTilt(aboutImgRef)
  useButtonPress()
  useScrollReveal()
  useMouseShadow()
  useAnimeReveal()

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen pt-32 pb-stack-lg bg-primary-container flex flex-col items-center justify-center border-b-4 border-on-background px-margin-mobile md:px-margin-desktop grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            ["HTML5", "bg-white", "text-on-background", "top-24 left-[8%]", "rotate-12", ""],
            ["CSS3", "bg-secondary-container", "text-on-secondary-container", "bottom-40 left-[5%]", "-rotate-6", ""],
            ["JAVASCRIPT", "bg-tertiary-container", "text-on-tertiary-container", "top-1/2 left-[20%]", "rotate-3", "hidden md:block"],
            ["LARAVEL", "bg-primary-fixed", "text-on-primary-fixed", "top-44 right-[12%]", "-rotate-12", ""],
            ["TAILWIND", "bg-background", "text-on-background", "bottom-24 right-[10%]", "rotate-6", ""],
          ].map(([label, bg, color, pos, rot, hide]) => (
            <div key={label as string} className={`absolute ${pos as string} floating-icon ${bg as string} border-4 border-on-background p-4 neobrutal-shadow z-0 ${rot as string} ${hide as string}`}>
              <span className={`font-label-mono font-black ${color as string}`}>{label as string}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="md:col-span-8 flex flex-col gap-stack-md">
            <div className="inline-block bg-secondary-container border-4 border-on-background px-4 py-2 self-start neobrutal-shadow mb-4">
              <span className="font-label-mono uppercase text-on-secondary-container font-black">Portfolio Me</span>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <div className="inline-block bg-on-background text-primary-container px-6 py-4 border-4 border-on-background min-h-[1.2em] w-fit max-w-full neobrutal-shadow">
                <span className="font-display-lg-mobile md:text-display-lg uppercase cursor-blink">{text.primary}</span>
              </div>
              <div className="inline-block bg-tertiary-container text-on-tertiary-container px-6 py-4 border-4 border-on-background min-h-[1.2em] w-fit max-w-full neobrutal-shadow">
                <span className="font-display-lg-mobile md:text-display-lg uppercase">{text.secondary}</span>
              </div>
            </div>
            <p className="font-body-lg max-w-2xl text-on-background border-l-[6px] border-on-background pl-6 py-4 mt-4">{HOME.description}</p>
            <div className="flex gap-stack-sm mt-stack-md">
              <button onClick={() => lenis?.scrollTo("#project", { offset: -80 })} className="bg-on-background text-background px-10 py-5 border-4 border-on-background font-headline-md text-xl uppercase neobrutal-shadow transition-all btn-press flex items-center gap-3 hover:bg-tertiary hover:border-tertiary group">
                {HOME.cta}
              </button>
            </div>
          </div>
          <div className="md:col-span-4 mt-12 md:mt-0 relative">
            <div ref={imgRef} className="relative z-10 bg-surface border-4 border-on-background neobrutal-shadow-lg aspect-[3/4] w-full overflow-hidden group">
              {HOME.heroImage ? (
                <img alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={HOME.heroImage} />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-on-surface-variant opacity-40">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
              <div className="absolute bottom-0 w-full p-4 bg-background border-t-4 border-on-background">
                <p className="font-label-mono uppercase font-bold text-on-background">Laszz</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-tertiary-container border-4 border-on-background -z-10 animate-bounce" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-on-background -z-10 neobrutal-shadow" style={{ backgroundImage: "radial-gradient(#1b1b1b 2px, transparent 2px)", backgroundSize: "10px 10px" }} />
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="w-full bg-on-background py-6 border-b-4 border-on-background rotate-1 overflow-hidden">
        <div className="marquee-content flex gap-stack-lg items-center">
          {[...HOME.skills, ...HOME.skills].map((skill, i) => (
            <span key={`${skill}-${i}`} className="text-background font-headline-lg uppercase italic flex items-center gap-4 text-nowrap">
              {skill}
              <span className="material-symbols-outlined text-primary-container">star</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== PROJECT ===== */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop" id="project" data-anime="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg uppercase mb-stack-lg border-b-8 border-on-background inline-block">My Project</h2>
          <div className="flex flex-col gap-32">
            {WORK.projects.map((p, i) => {
              const textRight = i % 2 === 0
              return (
              <article key={p.id} className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className={`w-full md:w-1/2 ${textRight ? "order-2 md:order-1" : "md:order-2"}`}>
                  <div className={`border-l-8 ${p.border} pl-6 py-2 mb-6`}>
                    <span className="font-label-mono text-label-mono uppercase bg-on-background text-background px-2 py-1">{p.year}</span>
                    <h2 className="font-display-lg text-headline-lg md:text-display-lg-mobile uppercase mt-4 mb-4 leading-tight">{p.title}</h2>
                  </div>
                  <p className="font-body-lg text-body-lg mb-8 max-w-xl">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.tags.map((t) => (
                      <span key={t} className="border-2 border-on-background px-4 py-1 font-label-mono text-label-mono bg-white neobrutal-shadow-sm">{t}</span>
                    ))}
                  </div>
                  <Link href={p.link} className={`inline-flex items-center gap-4 font-headline-md text-headline-md uppercase ${p.color} border-4 border-on-background px-8 py-4 neobrutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group`}>
                    View Project
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                  </Link>
                </div>
                <div className={`w-full md:w-1/2 ${textRight ? "order-1 md:order-2" : "md:order-1"}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-on-background translate-x-4 translate-y-4" />
                    <div className={`relative ${p.color} border-4 border-on-background p-2 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1`}>
                      <div className="aspect-video md:aspect-square border-4 border-on-background overflow-hidden bg-white flex items-center justify-center">
                        {p.image ? (
                          <img className="w-full h-full object-cover" alt={p.title} src={p.image} />
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-on-surface-variant opacity-30">
                            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )})}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-secondary-container py-stack-lg border-y-4 border-on-background px-margin-mobile md:px-margin-desktop grid-bg" id="services" data-anime="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg uppercase text-on-secondary-container mb-stack-lg">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME.certificates.map((cert) => (
              <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-background border-4 border-on-background p-stack-md neobrutal-shadow hover:-translate-y-2 transition-all cursor-pointer block">
                <div className="w-16 h-16 bg-primary-container border-4 border-on-background flex items-center justify-center mb-6 neobrutal-shadow">
                  <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                </div>
                <h3 className="font-headline-md uppercase mb-2">{cert.title}</h3>
                <p className="font-label-mono uppercase text-on-surface-variant mb-1">{cert.issuer}</p>
                <p className="font-body-md font-bold">{cert.year}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="pt-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-stack-lg" data-anime="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mt-stack-lg">
          <div className="md:col-span-7 flex flex-col gap-stack-md order-2 md:order-1">
            <div className="bg-primary-container border-4 border-on-background neo-shadow p-stack-md -rotate-1 md:-rotate-2 max-w-fit">
              <h1 className="font-display-lg-mobile md:text-display-lg uppercase leading-tight">{ABOUT.headline}</h1>
            </div>
            <div className="bg-surface-container-highest border-4 border-on-background neo-shadow p-stack-md md:ml-12 rotate-1">
              <p className="font-body-lg">{ABOUT.bio}</p>
            </div>
            <div className="flex flex-wrap gap-stack-sm mt-4">
              {ABOUT.tags.map((tag) => (
                <span key={tag} className="bg-tertiary-container border-2 border-on-background px-4 py-2 font-label-mono text-label-mono uppercase">{tag}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 relative order-1 md:order-2">
            <div ref={aboutImgRef} style={{ transformStyle: "preserve-3d" }} className="border-4 border-on-background bg-on-background p-2 neo-shadow md:rotate-3 overflow-hidden">
              {ABOUT.image ? (
                <img className="w-full h-[500px] object-cover grayscale brightness-110" alt="Portrait" src={ABOUT.image} />
              ) : (
                <div className="w-full h-[500px] flex items-center justify-center bg-surface-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-on-surface-variant opacity-40">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-container border-2 border-on-background -z-10 rotate-12" />
            <div className="absolute -bottom-8 -left-8 w-32 h-12 bg-tertiary-container border-2 border-on-background -z-10 -rotate-6" />
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {ABOUT.philosophy.map((item) => (
            <div key={item.title} className={`${item.bg} border-4 border-on-background neo-shadow p-stack-md flex flex-col gap-unit ${item.offset ? "md:translate-y-12" : ""}`}>
              <span className="material-symbols-outlined text-5xl text-primary">{item.icon}</span>
              <h3 className="font-headline-md uppercase">{item.title}</h3>
              <p className="font-body-md">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-40 max-w-4xl mx-auto">
          <h2 className="font-headline-lg uppercase mb-stack-lg border-b-8 border-on-background inline-block">The Journey</h2>
          <div className="relative pl-8 md:pl-24 border-l-8 border-on-background py-stack-md flex flex-col gap-stack-lg">
            {ABOUT.timeline.map((item) => (
              <div key={item.period} className="relative">
                <div className={`absolute -left-[44px] md:-left-[108px] top-0 w-8 h-8 ${item.color} border-4 border-on-background rounded-full flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-on-background rounded-full" />
                </div>
                <div className="bg-surface-container border-2 border-on-background p-stack-md neo-shadow-sm flex flex-col gap-unit">
                  <span className="font-label-mono text-label-mono text-primary font-black">{item.period}</span>
                  <h4 className="font-headline-md uppercase">{item.title}</h4>
                  <p className="font-body-md" dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto pb-stack-lg" data-anime="fade-up">
        <div className="mb-stack-lg border-l-8 border-on-background pl-6">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">
            {CONTACT.headline.split(CONTACT.headlineAccent)[0]}
            <span className="text-secondary">{CONTACT.headlineAccent}</span>
          </h1>
          <p className="font-body-lg mt-stack-sm max-w-2xl">{CONTACT.description}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <section className="lg:col-span-7 bg-surface-container-lowest border-4 border-on-background p-8 md:p-12 neobrutal-shadow">
            <ContactForm />
          </section>
          <aside className="lg:col-span-5 flex flex-col gap-gutter">
            <div className="grid grid-cols-2 gap-gutter">
              {CONTACT.socials.map((s) => (
                <Link key={s.label} href={s.href} className={`${s.bg} border-4 border-on-background p-8 flex flex-col items-center justify-center gap-4 neobrutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all`}>
                  <span className="material-symbols-outlined text-[48px]">{s.icon}</span>
                  <span className="font-label-mono uppercase">{s.label}</span>
                </Link>
              ))}
            </div>
            <div className="bg-surface-container border-4 border-on-background p-8 neobrutal-shadow flex flex-col gap-4">
              <h3 className="font-headline-md uppercase">Location</h3>
              <div className="w-full h-48 border-4 border-on-background relative overflow-hidden bg-slate-200 flex items-center justify-center">
                <span className="bg-primary text-on-primary border-4 border-on-background px-4 py-2 font-label-mono z-10">{CONTACT.location}</span>
              </div>
              <div className="font-body-md">
                <p className="font-bold uppercase mb-1">Office Hours:</p>
                <p>{CONTACT.hours.weekday}</p>
                <p>{CONTACT.hours.weekend}</p>
              </div>
            </div>
            <div className="bg-tertiary border-4 border-on-background p-6 flex items-center gap-6 text-on-tertiary">
              <div className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-tertiary-fixed border-2 border-on-background" />
              </div>
              <p className="font-headline-md text-[20px] uppercase italic">{CONTACT.status}</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  )
}
