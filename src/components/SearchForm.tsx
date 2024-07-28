"use client"
import { useState } from "react"

export default function SearchForm() {
  const [searchText, setSearchText] = useState("")

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!searchText) return

    // it should push a route to /search?q=searchText
  }

  return (
    <form onSubmit={handleChange} className="md:w-[300px]">
      <input
        className="w-full h-12 rounded-lg px-5 outline-none text-black"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Search for a star wars character"
        spellCheck={false}
      />
    </form>
  )
}
