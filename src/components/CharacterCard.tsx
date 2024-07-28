import { Character } from "@/lib/types"
import Image from "next/image"

type CharacterCardProps = {
  character: Character
  id: number
}

export default function CharacterCard({ character, id }: CharacterCardProps) {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        width={200}
        height={200}
        alt={character.name}
      />
      <h2>{character.name}</h2>
    </div>
  )
}
