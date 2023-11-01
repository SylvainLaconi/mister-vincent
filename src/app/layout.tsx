import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mister Vincent | Home Organizer & Coach en rangement à Lyon',
  description: "Je vous accompagne pour optimiser, transformer et organiser vos espaces de vie et de travail. A l'écoute de vos contraintes et de vos besoins pour vous proposer des solutions adaptées à votre mode de vie.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
