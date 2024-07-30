import localData from "../lib/localData.json"
import PreviewCard from "./PreviewCard"

export default function PreviewList() {
  return (
    <div className="grid grid-cols-3 gap-10 justify-center">
      {localData.map((category) => (
        <PreviewCard key={category.id} category={category} />
      ))}
    </div>
  )
}
