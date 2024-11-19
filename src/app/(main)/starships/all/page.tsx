import List from "@/components/Lists/List"
import PaginationControls from "@/components/PaginationControls"
import { SWAPI_URL } from "@/lib/constants"
import { Starship, StarshipsResponse } from "@/lib/types"

type StarshipsPageProps = {
  searchParams: {
    page: string
  }
}

export default async function StarshipsPage({
  searchParams,
}: StarshipsPageProps) {
  const pageNumber = Number(searchParams.page) || 1

  const response = await fetch(`${SWAPI_URL}/starships/?page=${pageNumber}`)
  const data: StarshipsResponse = await response.json()
  const starships: Starship[] = data.results

  const starshipsUrl = starships.map((starship) => starship.url)

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center items-center gap-9 mt-5 px-4 py-4">
          <h1>All Starships in Star Wars Database</h1>
        </div>
      </section>
      <List urlList={starshipsUrl} category={"starships"} hasTitle={false} />
      <PaginationControls page={pageNumber} category={"starships"} />
    </main>
  )
}
