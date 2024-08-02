import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import SearchForm from "@/components/SearchForm"
import { Character, PeopleResponse } from "@/lib/types"

export default async function PeoplePage() {
  const response = await fetch(`https://swapi.dev/api/people`)
  const data: PeopleResponse = await response.json()
  const people: Character[] = data.results

  const peopleUrl = people.map((person) => person.url)
  return (
    <main>
      <section>
        <div className="flex flex-col justify-center items-center gap-9 mt-5 px-4 py-4">
          <H1>All People in Star Wars Database</H1>
          <SearchForm title={""} />
        </div>
      </section>
      <List urlList={peopleUrl} category={"people"} />
    </main>
  )
}
