import { LocalStarWarsData } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

type PrevCardProps = {
  card: LocalStarWarsData
}

export default function PrevCard({ card }: PrevCardProps) {
  return (
    <Link href={`/${card.name}`}>
      <section className="flex flex-col justify-between  h-[300px] max-w-[200px]">
        <Image
          className="h-[75%] object-fit"
          src={card.image}
          alt={card.name}
          width={200}
          height={500}
        />
        <div className="flex justify-center pb-0">
          <h2 className="text-2xl font-semibold">{card.name}</h2>
        </div>
      </section>
    </Link>
  )
}
