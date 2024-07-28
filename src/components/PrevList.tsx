import { LocalStarWarsData } from "@/lib/types"
import PrevCard from "./PrevCard"

import localData from "../lib/localData.json"

export default function PrevList() {
  return (
    <div className="grid grid-cols-3 gap-10 justify-center">
      {localData.map((category: LocalStarWarsData) => (
        <PrevCard key={category.name} card={category} />
      ))}
    </div>
  )
}
