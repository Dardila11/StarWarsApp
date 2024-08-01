import H1 from "@/components/H1"
import { Character } from "@/lib/types"
import Image from "next/image"

type CharacterDetailsPageProps = {
  params: {
    id: number
  }
}
export default async function CharacterDetailsPage({
  params,
}: CharacterDetailsPageProps) {
  const { id } = params
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  const character: Character = await response.json()

  return (
    <main className="flex flex-col items-center pt-5">
      <H1>{character.name}</H1>
      <section className="grid grid-cols-2 gap-4 mt-4">
        <Image
          className="rounded-e text-center"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          width={200}
          height={200}
          alt={character.name}
        />

        <section>
          <p>Gender: {character.gender}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Birth Year: {character.birth_year}</p>
        </section>

        {/* <div>
          <p>Homeworld: {character.homeworld}</p>
          <p>Species: {character.species}</p>
          <p>Starships: {character.starships}</p>
          <p>Vehicles: {character.vehicles}</p>
          <p>Films: {character.films}</p>
        </div> */}
      </section>
    </main>
  )
}
