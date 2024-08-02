import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import PrevContainer from "@/components/PrevContainer"
import { Character, Planet } from "@/lib/types"
import { getIdFromUrl } from "@/lib/utils"
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

  const responseHomeworld = await fetch(
    `https://swapi.dev/api/planets/${getIdFromUrl(character.homeworld)}`
  )
  const homeworld: Planet = await responseHomeworld.json()

  return (
    <main className="flex flex-col items-center pt-5">
      <H1>{character.name}</H1>
      <section className="grid grid-cols-2 gap-4 mt-4">
        <div className="grid grid-cols-2 gap-4 mt-4">
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
            <p>Weight: {character.mass}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Specie: {character.species.length === 0 && "Unknown"}</p>
          </section>
        </div>
        <PrevContainer title="Homeworld" name={homeworld.name} />
      </section>

      <div className="mt-4 border-t border-white/10 text-white/20 h-14 w-1/2 " />

      <div className="flex flex-grow gap-4">
        {character.species.length > 0 && (
          <PrevContainer
            title="Species"
            name={getIdFromUrl(character.species[0])}
          />
        )}
      </div>

      <section>
        <div className="flex flex-col">
          <List urlList={character.films} category="films" />
          <List urlList={character.starships} category="starships" />
          <List urlList={character.vehicles} category="vehicles" />
        </div>
      </section>
    </main>
  )
}
