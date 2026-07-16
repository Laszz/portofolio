"use client"

import { useState, type FormEvent } from "react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setPending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
      <div className="flex flex-col gap-2">
        <label className="font-label-mono text-label-mono uppercase tracking-widest">Full Name</label>
        <input
          type="text"
          placeholder="WHO ARE YOU?"
          className="w-full border-4 border-on-background p-4 font-headline-md text-[20px] bg-white placeholder:text-surface-variant transition-all"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-mono text-label-mono uppercase tracking-widest">Email Address</label>
        <input
          type="email"
          placeholder="WHERE DO I REPLY?"
          className="w-full border-4 border-on-background p-4 font-headline-md text-[20px] bg-white placeholder:text-surface-variant transition-all"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-mono text-label-mono uppercase tracking-widest">Subject</label>
        <select className="w-full border-4 border-on-background p-4 font-headline-md text-[20px] bg-white transition-all">
          <option>NEW PROJECT</option>
          <option>SAYING HELLO</option>
          <option>PARTNERSHIP</option>
          <option>OTHER</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-mono text-label-mono uppercase tracking-widest">Message</label>
        <textarea
          rows={5}
          placeholder="WHAT'S THE BIG IDEA?"
          className="w-full border-4 border-on-background p-4 font-headline-md text-[20px] bg-white placeholder:text-surface-variant transition-all resize-none"
          required
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-primary-container text-on-primary-container border-4 border-on-background py-8 font-display-lg-mobile md:font-display-lg text-[32px] md:text-[40px] uppercase neobrutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all mt-4 group"
      >
        {pending ? "SENDING..." : "Send Message"}
        <span className="inline-block transition-transform group-hover:translate-x-2"> &rarr;</span>
      </button>
    </form>
  )
}
