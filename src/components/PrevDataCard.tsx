import Image from "next/image"
import Link from "next/link"
import { PrevData } from "../lib/types"

type PrevdataProps = {
  data: PrevData
  id?: number
  isLocal?: boolean
  slug?: string
}

export default function PrevdataCard({
  data,
  isLocal = false,
  id,
  slug,
}: PrevdataProps) {
  slug === "people" ? (slug = "characters") : slug
  return (
    <Link href={`/${data.name}`}>
      <section className="flex flex-col  h-[300px] max-w-[200px] hover:scale-105 active:scale-[1.02] transition">
        <Image
          className="h-[75%] object-fit"
          src={
            isLocal
              ? data.image
              : `https://starwars-visualguide.com/assets/img/${slug}/${id}.jpg`
          }
          alt={data.name}
          width={200}
          height={500}
        />
        <h3 className="text-2xl font-semibold text-center mt-5">{data.name}</h3>
      </section>
    </Link>
  )
}
