import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import PaginationControls from "@/components/PaginationControls"
import SearchForm from "@/components/SearchForm"
import { Character, PeopleResponse } from "@/lib/types"

/**
 * TODO
 * Search Functionality
 * Pagination
 *
 * @returns
 */

type PeoplePageProps = {
  searchParams: {
    page: string
  }
}

export default async function PeoplePage({ searchParams }: PeoplePageProps) {
  const pageNumber = Number(searchParams.page) || 1
  const numberOfItemsPerPage = 6
  const startIndex = (pageNumber - 1) * numberOfItemsPerPage
  const response = await fetch(
    `https://swapi.dev/api/people/?page=${pageNumber}`
  )
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
      <List urlList={peopleUrl} category={"people"} hasTitle={false} />
      <PaginationControls page={pageNumber} category={"people"} />
    </main>
  )
}
