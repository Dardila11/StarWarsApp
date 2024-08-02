import { SWAPI_IMAGE_URL } from "@/lib/constants"
import {
  getAllIdsFromArray,
  getCharacterById,
  getFilmById,
  getIdFromUrl,
  getSpecieById,
  getStarshipById,
  getVehicleById,
} from "@/lib/utils"
import Image from "next/image"

type ListProps = {
  urlList: string[]
  category: "films" | "species" | "starships" | "vehicles" | "people"
}

export default async function List({ urlList, category }: ListProps) {
  const ids = getAllIdsFromArray(urlList)
  // initialize object to store ids and names
  let list = await Promise.all(
    urlList.map((url) => {
      switch (category) {
        case "films":
          return getFilmById(getIdFromUrl(url))
        case "species":
          return getSpecieById(getIdFromUrl(url))
        case "starships":
          return getStarshipById(getIdFromUrl(url))
        case "vehicles":
          return getVehicleById(getIdFromUrl(url))
        case "people":
          return getCharacterById(getIdFromUrl(url))
      }
    })
  ).then((list) => list.map((item) => item.name))

  const isEmpty = list.length === 0

  return (
    <div className="flex flex-col flex-wrap  w-full items-center">
      <h1>{category.toUpperCase()}</h1>
      {isEmpty ? (
        <p>No {category} found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 ">
          {list.map((item, index) => (
            <Card key={index} name={item} id={ids[index]} category={category} />
          ))}
        </div>
      )}
    </div>
  )
}

function Card({
  name,
  id,
  category,
}: {
  name: string
  id: string
  category: string
}) {
  let newCat = category
  if (category === "people") {
    newCat = "characters"
  }
  return (
    <div className="flex flex-col p-5 w-[250px] items-center">
      <Image
        src={`${SWAPI_IMAGE_URL}/${newCat}/${id}.jpg`}
        alt={name}
        width={200}
        height={200}
      />
      <p>{name}</p>
    </div>
  )
}
