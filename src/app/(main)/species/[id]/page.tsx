import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import { SWAPI_URL } from "@/lib/constants"
import { Specie } from "@/lib/types"

type SpecieDetailsPageProps = {
  params: {
    id: number
  }
}

export default async function SpecieDetailsPage({
  params,
}: SpecieDetailsPageProps) {
  const { id } = params

  const response = await fetch(`${SWAPI_URL}/species/${id}`)
  const specie: Specie = await response.json()

  return (
    <main className="flex flex-col items-center pt-5">
      <H1>{specie.name}</H1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <section>
          <p>Classification: {specie.classification}</p>
          <p>Designation: {specie.designation}</p>
          <p>Average Height: {specie.average_height}</p>
          <p>Average Lifespan: {specie.average_lifespan}</p>
          <p>Eye Colors: {specie.eye_colors}</p>
          <p>Hair Colors: {specie.hair_colors}</p>
          <p>language: {specie.language}</p>
        </section>
      </div>

      <div className="mt-4 border-t border-white/10 text-white/20 h-14 w-1/2 " />

      <section>
        <List urlList={specie.films} category={"films"} hasTitle={true} />
        <List urlList={specie.people} category={"people"} hasTitle={true} />
      </section>
    </main>
  )
}
