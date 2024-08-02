import { getAllIdsFromArray, getIdFromUrl, getStarshipById } from "@/lib/utils"
import Image from "next/image"

type StarshipsListProps = {
  starships: string[]
}

export default async function StarshipsList({ starships }: StarshipsListProps) {
  const ids = getAllIdsFromArray(starships)
  console.log(starships)
  // get starships by id
  let starshipsList = await Promise.all(
    starships.map((starshipUrl) => getStarshipById(getIdFromUrl(starshipUrl)))
  ).then((starships) => starships.map((starship) => starship.name))

  const isEmpty = starshipsList.length === 0

  return (
    <div className="">
      {isEmpty ? (
        <p>No starships found</p>
      ) : (
        <div className="flex flex-wrap">
          {starshipsList.map((starship, index) => (
            <StarShipsCard key={index} name={starship} id={ids[index]} />
          ))}
        </div>
      )}
    </div>
  )
}

function StarShipsCard({ name, id }: { name: string; id: string }) {
  return (
    <div className="flex flex-col border p-5 w-[250px] items-center">
      <h1>Starship</h1>
      <Image
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        alt={name}
        width={200}
        height={200}
      />
      <p>{name}</p>
    </div>
  )
}
