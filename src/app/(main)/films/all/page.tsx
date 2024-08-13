import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import PaginationControls from "@/components/PaginationControls"
import SearchForm from "@/components/SearchForm"
import { Film, FilmsResponse } from "@/lib/types"

type FilmsPageProps = {
  searchParams: {
    page: string
  }
}

export default async function FilmsPage({ searchParams }: FilmsPageProps) {
  const pageNumber = Number(searchParams.page) || 1
  const reponse = await fetch(`https://swapi.dev/api/films/?page=${pageNumber}`)

  const data: FilmsResponse = await reponse.json()
  const films: Film[] = data.results

  const filmsUrl = films.map((film) => film.url)

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center items-center gap-9 mt-5 px-4 py-4">
          <H1>All Films in Star Wars Database</H1>
          <SearchForm title={""} />
        </div>
      </section>
      <List urlList={filmsUrl} category={"films"} hasTitle={false} />
      <PaginationControls page={pageNumber} category={"films"} />
    </main>
  )
}
