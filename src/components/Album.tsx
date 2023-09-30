import { Play } from "lucide-react"
import Image from "next/image"

export const Album = () => {
    return (
        <div>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-5 hover:bg-white/20 transition-colors">
                <Image src="/album.png" width={104} height={104} alt="capa album Pink Floyd" />
                <strong>The Wall</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button>
            </a>
        </div>
    )
}