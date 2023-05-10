import Sidebar from "@/components/Sidebar/sidebar"
import Navbar, {IconType} from "@/components/Sidebar/navbar"
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import Cards from "@/components/Cards/cards"
import { useState, useEffect } from "react";

interface Props {
  ESPECIALIDADE: string,
  NOME: string,
  ENDERECO: string,
  BAIRRO: string,
  CEP: string,
  TEL_FIXO: string
}


export default function Home() {
  const [icon, setIcon] = useState<IconType>(faClose);
  
  const [prest, setPrest] = useState<Props[]>([])
  {/*
  useEffect(() =>{
    async function FetchData(){
      const req = await fetch(`http://localhost:3002/guiamedico`)
      const res = await req.json()
      setPrest(res)
    }
    FetchData()
  },[])
  */}
  
  return (
      <main className="w-full flex max-md:flex-col">
        <div className="w-[320px] max-md:w-full">
          <div className="hidden max-md:block">
            <Navbar icon={icon} setIcon={setIcon}   />
          </div>
          <div className="max-md:hidden">
            <Sidebar />
          </div>
        </div>   
        {/*<div className="w-[calc(100%-320px)] h-screen overflow-y-auto p-3 items-center grid grid-cols-3 gap-4 max-2xl:grid-cols-2 max-lg:grid-cols-1 justify-items-center max-md:w-full">
          prest.slice(0,12).map((p) => (
            <Cards name={p.NOME} especialidade={p.ESPECIALIDADE} endereco={p.ENDERECO} cep={p.CEP} bairro={p.BAIRRO} tel={p.TEL_FIXO} />
          )) 
          
        </div>*/}
      </main>
      
    )
}
