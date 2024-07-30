import { Category } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

type PreviewCardProps = {
  category: Category
}

export default function PreviewCard({ category }: PreviewCardProps) {
  return (
    <Link href={`/${category.name.toLowerCase()}/all`}>
      <div className="flex flex-col h-[300px] max-w-[200px] hover:scale-105 active:scale-[1.02] transition">
        <Image
          className="h-[75%] object-fit"
          src={category.image}
          alt={category.name}
          width={200}
          height={500}
        />
        <h3 className="text-2xl font-semibold text-center mt-5">
          {category.name}
        </h3>
      </div>
    </Link>
  )
}
