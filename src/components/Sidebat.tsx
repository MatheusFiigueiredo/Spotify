import { HomeIcon, Library, Search } from "lucide-react"

export const Sidebar = () => {
    return(
        <aside className="w-72 bg-zinc-900 p-6">
          <nav className="flex flex-col gap-5">
            <a className="flex gap-3 text-sm font-semibold text-zinc-200 items-center" href="#"><HomeIcon /> Home</a>
            <a className="flex gap-3 text-sm font-semibold text-zinc-200 items-center" href="#"><Search /> Search</a>
            <a className="flex gap-3 text-sm font-semibold text-zinc-200 items-center" href="#"><Library /> You Library</a>
          </nav>
          <nav className="mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-4">
            <a className=" text-zinc-400 text-sm hover:text-zinc-100" href="">Liked Songs</a>
            <a className=" text-zinc-400 text-sm hover:text-zinc-100" href="">Your Episodes</a>
            <a className=" text-zinc-400 text-sm hover:text-zinc-100" href="">Rock Music - Classic Rock</a>
            <a className=" text-zinc-400 text-sm hover:text-zinc-100" href="">Daily Mix1</a>
            <a className=" text-zinc-400 text-sm hover:text-zinc-100" href="">Podpah</a>
          </nav>
        </aside>
    )
}