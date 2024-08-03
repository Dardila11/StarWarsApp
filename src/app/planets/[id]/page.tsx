import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import { SWAPI_URL } from "@/lib/constants"
import { Planet } from "@/lib/types"

type PlanetDetailsPageProps = {
  params: {
    id: number
  }
}

export default async function PlanetDetailsPage({
  params,
}: PlanetDetailsPageProps) {
  const { id } = params

  const reponse = await fetch(`${SWAPI_URL}/planets/${id}`)
  const planet: Planet = await reponse.json()

  return (
    <main>
      <H1>{planet.name}</H1>
      <section>
        <p>Climate: {planet.climate}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Gravity: {planet.gravity}</p>
        <p>Orbital Period: {planet.orbital_period}</p>
        <p>Population: {planet.population}</p>
        <p>Rotation Period: {planet.rotation_period}</p>
        <p>Surface Water: {planet.surface_water}</p>
        <p>Terrain: {planet.terrain}</p>
      </section>

      <div className="mt-4 border-t border-white/10 text-white/20 h-14 w-1/2 " />

      <section>
        <List urlList={planet.films} category={"films"} hasTitle={true} />
        <List urlList={planet.residents} category={"people"} hasTitle={true} />
      </section>
    </main>
  )
}
