import PrevdataCard from "./PrevDataCard"

import localData from "../lib/localData.json"

export default function PrevList() {
  return (
    <div className="grid grid-cols-3 gap-10 justify-center">
      {localData.map((category) => (
        <PrevdataCard key={category.name} data={category} isLocal={true} />
      ))}
    </div>
  )
}
