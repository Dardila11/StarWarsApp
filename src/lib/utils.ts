import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Film, Specie, Starship, Vehicle } from "./types"
/**
 * get id inside the url property
 * @param url
 * @returns id
 */
export const getIdFromUrl = (url: string): string => {
  return url.split("/").slice(-2, -1)[0]
}

/*
  combines twmerge and clsx
  return: string 
  for both cases
  use as: className={cn("text-3xl", "lg:text-6xl", "font-bold", "tracking-tight")}
  */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
/*
  get all ids from an array of urls
  return: string[]
*/
export function getAllIdsFromArray(array: string[]): string[] {
  return array.map((item) => getIdFromUrl(item))
}

/*
  get starships by id
  return: Starship
*/
export async function getStarshipById(id: string): Promise<Starship> {
  const response = await fetch(`https://swapi.dev/api/starships/${id}`)
  const starship: Starship = await response.json()

  return starship
}

/*
  get specie by id
  return: Specie
*/
export async function getSpecieById(id: string): Promise<Specie> {
  const response = await fetch(`https://swapi.dev/api/species/${id}`)
  const specie: Specie = await response.json()

  return specie
}

/*
  get vehicle by id
  return: Vehicle
*/
export async function getVehicleById(id: string): Promise<Vehicle> {
  const response = await fetch(`https://swapi.dev/api/vehicles/${id}`)
  const vehicle: Vehicle = await response.json()

  return vehicle
}

export async function getFilmsById(id: string): Promise<Film> {
  const response = await fetch(`https://swapi.dev/api/films/${id}`)
  const film = await response.json()
  return film
}
