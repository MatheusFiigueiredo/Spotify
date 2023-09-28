import { HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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

        <main className="flex-1 p-6">
          <div className="flex gap-4 items-center">
            <button className="rounded-full bg-black/40 p-1"><ChevronLeft /></button>
            <button className="rounded-full bg-black/40 p-1"><ChevronRight /></button>
          </div>

          <h1 className="mt-7 text-3xl font-semibold">Good evening</h1>

          <div className="grid grid-cols-3 gap-3 mt-10">

            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd"/>
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd"/>
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd"/>
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd"/>
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd"/>
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd"/>
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
          </div>

          <h1 className="mt-7 text-2xl font-semibold">Episodes for yor</h1>

        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 ">footer</footer>

    </div>
  )
}
