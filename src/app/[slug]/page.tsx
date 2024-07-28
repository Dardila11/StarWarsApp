import CharacterCard from "@/components/CharacterCard"
import H1 from "@/components/H1"
import SearchForm from "@/components/SearchForm"
import { PeopleResponse } from "@/lib/types"

type PeoplePageParams = {
  params: {
    slug: string
  }
}

export default async function PeoplePage({ params }: PeoplePageParams) {
  const slug = params.slug.toLowerCase()

  const response = await fetch(`https://swapi.dev/api/${slug}/`)
  const peopleResponse: PeopleResponse = await response.json()
  const people = peopleResponse.results

  return (
    <main className="flex flex-col items-center pt-28">
      <section className="mb-8">
        <H1>
          Find all about <span>{slug} in Star Wars</span>
        </H1>
      </section>

      <SearchForm />

      <section className="grid grid-cols-3 gap-10 mt-8">
        {people.map((character, index) => (
          <CharacterCard
            key={character.name}
            character={character}
            id={index + 1}
          />
        ))}
      </section>
    </main>
  )
}
