type PageProps = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  // const slug = params.slug.toLowerCase()

  // const response = await fetch(`https://swapi.dev/api/${slug}/`)
  // const data = await response.json()
  // const list: PrevData[] = data.results

  return (
    <main className="flex flex-col items-center pt-28">
      {/* <section className="mb-8">
        <H1>
          Find all about <span>{slug} in Star Wars</span>
        </H1>
      </section>

      <SearchForm title={slug} />

      <section className="grid grid-cols-3 gap-10 mt-8">
        {list.map((listData, index) => (
          <PrevCard
            key={index + 1}
            data={listData}
            id={index + 1}
            slug={slug}
          />
        ))}
      </section> */}
    </main>
  )
}

// export default async function PeoplePage({ params }: PeoplePageParams) {
//   const slug = params.slug.toLowerCase()

//   const response = await fetch(`https://swapi.dev/api/${slug}/`)
//   const peopleResponse: PeopleResponse = await response.json()
//   const people = peopleResponse.results

//   return (
//     <main className="flex flex-col items-center pt-28">
//       <section className="mb-8">
//         <H1>
//           Find all about <span>{slug} in Star Wars</span>
//         </H1>
//       </section>

//       <SearchForm title={slug} />

//       <section className="grid grid-cols-3 gap-10 mt-8">
//         {people.map((character, index) => (
//           <CharacterCard
//             key={character.name}
//             character={character}
//             id={index + 1}
//           />
//         ))}
//       </section>
//     </main>
//   )
// }
