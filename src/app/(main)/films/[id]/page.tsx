import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import { Film } from "@/lib/types"

type FilmDetailsPageProps = {
  params: {
    id: number
  }
}

export default async function FilmDetailsPage({
  params,
}: FilmDetailsPageProps) {
  const { id } = params
  const response = await fetch(`https://swapi.dev/api/films/${id}`)

  const film: Film = await response.json()
  return (
    <main>
      <H1>{film.title}</H1>
      <section>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <p>Release Date: {film.release_date}</p>
        <p>Opening Crawl: {film.opening_crawl}</p>
      </section>

      <div className="mt-4 border-t border-white/10 text-white/20 h-14 w-1/2 " />

      <section>
        <div className="flex flex-col flex-wrap">
          <List urlList={film.characters} category={"people"} hasTitle={true} />
          <List urlList={film.planets} category={"planets"} hasTitle={true} />
          <List urlList={film.species} category={"species"} hasTitle={true} />
          <List
            urlList={film.starships}
            category={"starships"}
            hasTitle={true}
          />
          <List urlList={film.vehicles} category={"vehicles"} hasTitle={true} />
        </div>
      </section>
    </main>
  )
}
