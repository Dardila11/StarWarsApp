import { getAllIdsFromArray, getFilmById, getIdFromUrl } from "@/lib/utils"
import Image from "next/image"

type FilmsListProps = {
  films: string[]
}

export default async function FilmsList({ films }: FilmsListProps) {
  const ids = getAllIdsFromArray(films)

  // get starships by id

  let filmsList = await Promise.all(
    films.map((filmUrl) => getFilmById(getIdFromUrl(filmUrl)))
  ).then((films) => films.map((films) => films.title))

  const isEmpty = filmsList.length === 0

  return (
    <div className="flex flex-col border p-5 w-full items-center">
      <h1>Films</h1>
      {isEmpty ? (
        <p>No starships found</p>
      ) : (
        <div className="flex gap-4 ">
          {filmsList.map((film, index) => (
            <FilmsCard key={index} name={film} id={ids[index]} />
          ))}
        </div>
      )}
    </div>
  )
}

function FilmsCard({ name, id }: { name: string; id: string }) {
  return (
    <div className="">
      <Image
        src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
        alt={name}
        width={200}
        height={200}
      />
      <p>{name}</p>
    </div>
  )
}
