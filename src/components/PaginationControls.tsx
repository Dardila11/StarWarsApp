import Link from "next/link"

type PaginationControlsProps = {
  page: number
  category: string
}

export default function PaginationControls({
  page,
  category,
}: PaginationControlsProps) {
  return (
    <div className="flex gap-4">
      <Link href={`/${category}/all/?page=${page - 1}`}>Previous</Link>
      <span>{page}</span>
      <Link href={`/${category}/all/?page=${page + 1}`}>Next</Link>
    </div>
  )
}
