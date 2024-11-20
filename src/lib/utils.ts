import clsx, {ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {Character, Film, Planet, Specie, Starship, Vehicle} from "./types"

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
  return await response.json()
}

/*
  get specie by id
  return: Specie
*/
export async function getSpecieById(id: string): Promise<Specie> {
  const response = await fetch(`https://swapi.dev/api/species/${id}`)
  return await response.json()
}

/*
  get vehicle by id
  return: Vehicle
*/
export async function getVehicleById(id: string): Promise<Vehicle> {
  const response = await fetch(`https://swapi.dev/api/vehicles/${id}`)
  return await response.json()
}

export async function getFilmById(id: string): Promise<Film> {
  const response = await fetch(`https://swapi.dev/api/films/${id}`)
  return await response.json()
}

export async function getCharacterById(id: string): Promise<Character> {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  return await response.json()
}

export async function getPlanetById(id: string): Promise<Planet> {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`)
  return await response.json()
}
