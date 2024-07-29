import H1 from "@/components/H1"
import PrevList from "@/components/PrevList"

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-28">
      <H1>Star Wars Database App</H1>
      <p className="mt-5 mb-10 text-xl">
        Find all about your{" "}
        <span className="font-bold italic underline">favorite universe!</span>
      </p>
      <PrevList />
    </main>
  )
}
