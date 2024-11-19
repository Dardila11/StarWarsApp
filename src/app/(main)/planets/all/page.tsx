import List from "@/components/Lists/List"
import PaginationControls from "@/components/PaginationControls"
import SearchForm from "@/components/SearchForm"
import { SWAPI_URL } from "@/lib/constants"
import { PlanetsResponse } from "@/lib/types"

type PlanetPageProps = {
  searchParams: {
    page: string
  }
}

export default async function PlanetPage({ searchParams }: PlanetPageProps) {
  const pageNumber = Number(searchParams.page) || 1
  const response = await fetch(`${SWAPI_URL}/planets/?page=${pageNumber}`)
  const data: PlanetsResponse = await response.json()
  const planets = data.results

  const planetsUrl = planets.map((planet) => planet.url)
  return (
    <main>
      <section>
        <div className="flex flex-col justify-center items-center gap-9 mt-5 px-4 py-4">
          <h1>All Planets in Star Wars Database</h1>
          <SearchForm title={""} />
        </div>
      </section>
      <List urlList={planetsUrl} category={"planets"} hasTitle={false} />
      <PaginationControls page={pageNumber} category={"planets"} />
    </main>
  )
}
