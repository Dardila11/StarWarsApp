import React from "react"

type H1Props = {
  children: React.ReactNode
}

export default function H1({ children }: H1Props) {
  return (
    <h1 className="text-4xl lg:text-6xl font-bold text-center">{children}</h1>
  )
}
