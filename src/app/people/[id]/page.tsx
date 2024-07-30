import { Character } from "@/lib/types"

type CharacterDetailsPageProps = {
  params: {
    id: number
  }
}
export default async function CharacterDetailsPage({
  params,
}: CharacterDetailsPageProps) {
  const { id } = params
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  const character: Character = await response.json()

  return <div>{character.name}</div>
}
