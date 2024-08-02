import Image from "next/image"

type PrevContainerProps = {
  title: string
  image?: string
  name: string
}

export default function PrevContainer({
  title,
  image,
  name,
}: PrevContainerProps) {
  return (
    <div className="flex flex-col  p-5 w-[250px] items-center">
      <h1>{title}</h1>
      <Image
        src={image == undefined ? "/images/NotFoundImageSVG.svg" : image}
        alt={name}
        width={200}
        height={200}
      />
      <p>{name}</p>
    </div>
  )
}
