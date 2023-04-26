import Image from "next/image"
import Logo from "../../../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


export default function Nav({handleBuscaVisivel}:any){
    const [iconeClicado, setIconeClicado] = useState(faBars);

    function handleIconeClicado() {
        setIconeClicado(iconeClicado === faBars ? faTimes : faBars);
        handleBuscaVisivel();
    }
    return(
        <div className="bg-verdeUnimed h-[80px] flex items-center justify-between px-[5%]">
          <div className="hidden max-[768px]:block">
            <FontAwesomeIcon icon={iconeClicado} style={{fontSize: 30}} color="white" onClick={handleIconeClicado}   />
          </div>
          <div className="w-[140px] max-[768px]:w-[120px]">
            <Image alt="Unimed Logo" src={Logo}/>
          </div>
          <div className="max-[768px]:hidden">
            <h2 className="font-UnimedSlab text-white text-xl font-bold tracking-[.09em]">Guia Médico</h2>
          </div>
        </div>
    )
}