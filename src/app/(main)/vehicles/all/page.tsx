import H1 from "@/components/H1"
import List from "@/components/Lists/List"
import PaginationControls from "@/components/PaginationControls"
import SearchForm from "@/components/SearchForm"
import { Vehicle, VehiclesResponse } from "@/lib/types"

type VehiclesPageProps = {
  searchParams: {
    page: string
  }
}

export default async function VehiclesPage({
  searchParams,
}: VehiclesPageProps) {
  const pageNumber = Number(searchParams.page) || 1

  const response = await fetch(
    `https://swapi.dev/api/vehicles/?page=${pageNumber}`
  )
  const data: VehiclesResponse = await response.json()
  const vehicles: Vehicle[] = data.results

  const vehiclesUrl = vehicles.map((vehicle) => vehicle.url)
  return (
    <div>
      <section>
        <div className="flex flex-col justify-center items-center gap-9 mt-5 px-4 py-4">
          <H1>All Vehicles in Star Wars Database</H1>
          <SearchForm title={""} />
        </div>
      </section>
      <List urlList={vehiclesUrl} category={"vehicles"} hasTitle={false} />
      <PaginationControls page={pageNumber} category={"vehicles"} />
    </div>
  )
}
