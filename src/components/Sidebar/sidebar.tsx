import Image from "next/image"
import Logo from "../../../assets/img/logo.png"
import Select from "../FormsInput/select"
import Input from "../FormsInput/input"
import Button from "../FormsButton/button"
import { faEraser, faSearch} from "@fortawesome/free-solid-svg-icons"
import SomosCoop from "../../../assets/img/somoscoop.png"
import Navbar from "./navbar"
import { useState } from "react"

export default function Sidebar(){
  
  return(
    <>  
      <div className="bg-verdeUnimed w-[280px] h-screen overflow-y-auto hide-scroll-bar">
        <div className="flex justify-center p-4">
          <Image alt="logo" src={Logo} width={200}/>
        </div>
        <div className="flex justify-center p-4">
          <p className="font-UnimedSansBlack text-white text-[30px] ">Guia Médico</p>
        </div>
        <div>
          <Select label="Especialidade" />
          <Input  label="Prestador"/>
          <div className="w-[240px] m-auto flex justify-between">
            <Select label="Município" width={'70%'} />
            <Select label="UF" width={'25%'} />
          </div>
          <Select label="Área de atuação" />
          <Select label="Tipo de estabelecimento" />
          <Select label="Plano" />
          <div className="w-[240px] m-auto flex justify-between mt-3">
            <Button label="Limpar" icone={faEraser} />
            <Button label="Buscar" icone={faSearch} />
          </div>
          <div className="flex justify-center p-10">
            <Image alt="somoscoop" src={SomosCoop} width={200} />
          </div>
        </div>
      </div>
    </>
  )
}