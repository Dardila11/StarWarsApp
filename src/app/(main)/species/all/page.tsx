import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import PaginationControls from "@/components/PaginationControls"
import SearchForm from "@/components/SearchForm"
import { SWAPI_URL } from "@/lib/constants"
import { Specie, SpeciesResponse } from "@/lib/types"

type SpeciesPageProps = {
  searchParams: {
    page: string
  }
}

export default async function SpeciesPage({ searchParams }: SpeciesPageProps) {
  const pageNumber = Number(searchParams.page) || 1

  const response = await fetch(`${SWAPI_URL}/species/?page=${pageNumber}`)
  const data: SpeciesResponse = await response.json()
  const species: Specie[] = data.results

  const speciesUrl = species.map((specie) => specie.url)
  return (
    <main>
      <section>
        <div className="flex flex-col justify-center items-center gap-9 mt-5 px-4 py-4">
          <H1>All Species in Star Wars Database</H1>
          <SearchForm title={""} />
        </div>
      </section>
      <List urlList={speciesUrl} category={"species"} hasTitle={false} />
      <PaginationControls page={pageNumber} category={"species"} />
    </main>
  )
}
