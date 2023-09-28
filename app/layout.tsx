import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
      {/* <Script src="../public/watercanvas.js" /> */}
      {/* <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" /> */}
      {/* <Script src="../public/jquery.ripples.js" /> */}
    </html>
  )
}
