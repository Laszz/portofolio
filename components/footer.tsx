import { SITE } from "@/data/site"

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-on-background bg-on-background py-6 px-margin-mobile md:px-margin-desktop">
      <p className="font-label-mono text-background text-center">
        &copy; {new Date().getFullYear()} {SITE.copyright}
      </p>
    </footer>
  )
}
