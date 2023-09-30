import Image from "next/image"

export const Episodios = () =>{
    return(
        <div>
            <a className=" bg-zinc-700/40 group rounded flex items-center flex-col gap-3 pt-4 pb-4 hover:bg-white/20 transition-colors">
              <Image className="rounded" src="/album.png" width={120} height={120} alt="capa album Pink Floyd" />
              <strong>The Wall</strong>
            </a>
        </div>
    )
}