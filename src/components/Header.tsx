import Link from "next/link"

const routes = [
  { name: "Home", path: "/" },
  { name: "Favorites", path: "/favorites" },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-4">
      <h1>STAR WARS DATABASE</h1>
      <nav className="h-full">
        <ul className="flex gap-x-4 h-full">
          {routes.map((route) => (
            <li
              key={route.path}
              className="hover:text-white flex items-center relative transition"
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
