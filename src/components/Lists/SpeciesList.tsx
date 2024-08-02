import { getAllIdsFromArray, getIdFromUrl, getVehicleById } from "@/lib/utils"
import Image from "next/image"

type VehiclesListProps = {
  vehicles: string[]
}

export default async function VehiclesList({ vehicles }: VehiclesListProps) {
  const ids = getAllIdsFromArray(vehicles)

  // get starships by id

  let vehiclesList = await Promise.all(
    vehicles.map((vehicleUrl) => getVehicleById(getIdFromUrl(vehicleUrl)))
  ).then((vehicles) => vehicles.map((vehicles) => vehicles.name))

  const isEmpty = vehiclesList.length === 0

  return (
    <div className="flex flex-col border p-5 w-full items-center">
      <h1>Vehicles</h1>
      {isEmpty ? (
        <p>No vehicles found</p>
      ) : (
        <div className="flex gap-4 ">
          {vehiclesList.map((vehicle, index) => (
            <FilmsCard key={index} name={vehicle} id={ids[index]} />
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
        src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
        alt={name}
        width={200}
        height={200}
      />
      <p>{name}</p>
    </div>
  )
}
