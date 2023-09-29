import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebat"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex gap-4 items-center">
            <button className="rounded-full bg-black/40 p-1"><ChevronLeft /></button>
            <button className="rounded-full bg-black/40 p-1"><ChevronRight /></button>
          </div>

          <h1 className="mt-7 text-3xl font-semibold">Good evening</h1>

          <div className="grid grid-cols-3 gap-3 mt-10">
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
              <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
          </div>

          <h1 className="mt-7 text-2xl font-semibold">Episodes for yor</h1>

          <div className="grid grid-cols-6 gap-3 mt-10">
            <a className=" bg-zinc-700/40 group rounded flex items-center flex-col gap-3 pt-4 pb-4 hover:bg-white/20 transition-colors">
              <Image className="rounded" src="/album.png" width={120} height={120} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
            </a>
            <a className=" bg-zinc-700/40 group rounded flex items-center flex-col gap-3 pt-4 pb-4 hover:bg-white/20 transition-colors">
              <Image className="rounded" src="/album.png" width={120} height={120} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
            </a>
            <a className=" bg-zinc-700/40 group rounded flex items-center flex-col gap-3 pt-4 pb-4 hover:bg-white/20 transition-colors">
              <Image className="rounded" src="/album.png" width={120} height={120} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
            </a>
            <a className=" bg-zinc-700/40 group rounded flex items-center flex-col gap-3 pt-4 pb-4 hover:bg-white/20 transition-colors">
              <Image className="rounded" src="/album.png" width={120} height={120} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
            </a>
            <a className=" bg-zinc-700/40 group rounded flex items-center flex-col gap-3 pt-4 pb-4 hover:bg-white/20 transition-colors">
              <Image className="rounded" src="/album.png" width={120} height={120} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
            </a>
            <a className=" bg-zinc-700/40 group rounded flex items-center flex-col gap-3 pt-4 pb-4 hover:bg-white/20 transition-colors">
              <Image className="rounded" src="/album.png" width={120} height={120} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
