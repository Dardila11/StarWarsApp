import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Star Wars App",
  description: "A database of Star Wars Universe",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-white overflow-y-scroll`}
      >
        <div className="flex flex-col mx-auto bg-white/[1%] max-w-6xl min-h-screen ">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
