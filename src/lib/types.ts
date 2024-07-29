export type PrevData = {
  name: string
  image: string
  id: number | undefined
}

// People

export type PeopleResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Character[]
}

export type Character = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: Gender
  homeworld: string
  homeworldName: string[]
  films: string[]
  species: string[]
  speciesNameArray: string[]
  vehicles: string[]
  vehiclesName: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}

// Planets

export type PlanetsResponse = {
  count: number
  next: string
  previous: null
  results: Planet[]
}

export type Planet = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

// Species

export type SpeciesResponse = {
  count: number
  next: string
  previous: null
  results: Specie[]
}

export type Specie = {
  name: string
  classification: string
  designation: Designation
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: null | string
  language: string
  people: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export enum Designation {
  Reptilian = "reptilian",
  Sentient = "sentient",
}

// Vehicles

export type VehiclesResponse = {
  count: number
  next: string
  previous: null
  results: Vehicle[]
}

export type Vehicle = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  pilots: string[]
  films: string[]
  created: string
  edited: string
  url: string
}
