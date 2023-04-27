import Image from "next/image"
import Logo from "../../../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

interface NavProps {
  handleBusca: () => void;
}

export default function Nav({ handleBusca}: NavProps){
    const [iconeClicado, setIconeClicado] = useState(faTimes);

    function handleIconeClicado() {
        setIconeClicado(iconeClicado === faTimes ? faBars : faTimes);
        handleBusca();
    }
    return(
        <div className="bg-verdeUnimed h-[80px] flex items-center justify-between px-[5%]">
          <div className="hidden max-[768px]:block">
            <FontAwesomeIcon icon={iconeClicado} style={{fontSize: 30}} color="white" onClick={handleIconeClicado} beat className="cursor-pointer"/>
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