import { Album } from "@/components/Album"
import { Episodios } from "@/components/Episodios"
import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebat"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1 ">

        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex gap-4 items-center">
            <button className="rounded-full bg-black/40 p-1"><ChevronLeft /></button>
            <button className="rounded-full bg-black/40 p-1"><ChevronRight /></button>
          </div>

          <h1 className="mt-7 text-3xl font-semibold">Good evening</h1>

          <div className="grid grid-cols-3 gap-3 mt-10">

            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />

          </div>

          <h1 className="mt-7 text-2xl font-semibold">Episodes for you</h1>

          <div className="grid grid-cols-6 gap-3 mt-10">

            <Episodios />
            <Episodios />
            <Episodios />
            <Episodios />
            <Episodios />
            <Episodios />

          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
