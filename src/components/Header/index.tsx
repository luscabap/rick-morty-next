import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-slate-500 w-full flex items-center justify-center">
      <Link href={"/"} className="bg-zinc-300 p-1 text-black rounded-lg">HOME</Link>
    </header>
  )
}