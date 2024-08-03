import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import { Vehicle } from "@/lib/types"

type VehicleDetailsPageProps = {
  params: {
    id: number
  }
}

export default async function VehicleDetailsPage({
  params,
}: VehicleDetailsPageProps) {
  const { id } = params

  const response = await fetch(`https://swapi.dev/api/vehicles/${id}`)
  const vehicle: Vehicle = await response.json()
  return (
    <main>
      <H1> {vehicle.name} </H1>
      <section className="grid grid-cols-2 gap-4 mt-4">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <section>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>Cost in Credits: {vehicle.cost_in_credits}</p>
            <p>Length: {vehicle.length}</p>
            <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
            <p>Crew: {vehicle.crew}</p>
            <p>Passengers: {vehicle.passengers}</p>
            <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
            <p>Consumables: {vehicle.consumables}</p>
            <p>Vehicle Class: {vehicle.vehicle_class}</p>
          </section>
        </div>
      </section>

      <div className="mt-4 border-t border-white/10 text-white/20 h-14 w-1/2 " />

      <section>
        <List urlList={vehicle.pilots} category={"people"} hasTitle={true} />
        <List urlList={vehicle.films} category={"films"} hasTitle={true} />
      </section>
    </main>
  )
}
