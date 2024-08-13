import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import { SWAPI_URL } from "@/lib/constants"
import { Starship } from "@/lib/types"

type StarShipDetailsPageProps = {
  params: {
    id: number
  }
}

export default async function StarShipDetails({
  params,
}: StarShipDetailsPageProps) {
  const { id } = params

  const reponse = await fetch(`${SWAPI_URL}/starships/${id}`)
  const starship: Starship = await reponse.json()
  return (
    <main>
      <H1>{starship.name}</H1>
      <section>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Cost in Credits: {starship.cost_in_credits}</p>
        <p>Length: {starship.length}</p>
        <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
        <p>Crew: {starship.crew}</p>
        <p>Passengers: {starship.passengers}</p>
        <p>Cargo Capacity: {starship.cargo_capacity}</p>
        <p>Consumables: {starship.consumables}</p>
        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
        <p>MGLT: {starship.MGLT}</p>
        <p>Starship Class: {starship.starship_class}</p>
      </section>
      <div className="mt-4 border-t border-white/10 text-white/20 h-14 w-1/2 " />

      <section>
        <List urlList={starship.films} category={"films"} hasTitle={true} />
        <List urlList={starship.pilots} category={"people"} hasTitle={true} />
      </section>
    </main>
  )
}
