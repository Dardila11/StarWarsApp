import { Character, PeopleResponse } from "@/lib/types"
import Link from "next/link"

export default async function PeoplePage() {
  const response = await fetch(`https://swapi.dev/api/people`)
  const data: PeopleResponse = await response.json()
  const people: Character[] = data.results
  return (
    <div>
      {people.map((character, index) => (
        <Link key={index} href={`/people/${index + 1}`}>
          <div>{character.name}</div>
        </Link>
      ))}
    </div>
  )
}
