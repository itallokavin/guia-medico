import Image from "next/image"
import Logo from "../../../assets/img/logo.png"
import Select from "../FormsInput/select"
import Input from "../FormsInput/input"
import Button from "../FormsButton/button"
import { faEraser, faSearch} from "@fortawesome/free-solid-svg-icons"
import SomosCoop from "../../../assets/img/somoscoop.png"
import Navbar from "./navbar"
import { useState, useEffect, use } from "react"
import axios from "axios"

interface Props {
  ESPECIALIDADE: string
}

export default function Sidebar(){
  
  const [esp, setEsp] = useState<Props[]>([])
  {/*
  useEffect(() =>{
    async function FetchData(){
      const req = await fetch(`http://localhost:3002/filter/especialidade`)
      const res = await req.json()
      setEsp(res)
    }
    FetchData()
  },[])
  */}
  return(
    <>  
      <div className="bg-verdeUnimed w-[320px] min-h-screen">

        <div className="flex justify-center">
          <div className="w-[60%] py-4 xl:w-[70%]">
            <Image alt="logo" src={Logo}/>
          </div>
        </div>

        <div className="text-center xl:py-6">
          <p className="font-UnimedSansBlack tracking-wider text-white text-[28px] xl:text-[30px] ">Guia Médico</p>
        </div>

        <div className="">
          <Select label="Especialidade" options={esp.map((e) => (e.ESPECIALIDADE))} />
          <Input  label="Prestador"/>
          <div className="w-[280px] m-auto flex justify-between">
            <Select label="Município" width={'70%'} />
            <Select label="UF" width={'25%'} />
          </div>
          <Select label="Tipo de estabelecimento" />
          <div className="w-[280px] m-auto flex justify-between mt-3">
            <Button label="Limpar" icone={faEraser} />
            <Button label="Buscar" icone={faSearch} />
          </div>
        </div>

        <div className="flex justify-center items-center xl:py-10">
          <div className="w-[60%] mt-3">
            <Image alt="somoscoop" src={SomosCoop} />
          </div>
        </div>

      </div>
    </>
  )
}