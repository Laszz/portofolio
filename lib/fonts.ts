import { Montserrat, Archivo_Narrow, Space_Mono } from "next/font/google"

export const montserrat = Montserrat({
  weight: ["800", "900"],
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
})

export const archivoNarrow = Archivo_Narrow({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const spaceMono = Space_Mono({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})
