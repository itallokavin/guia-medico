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
  
  useEffect(() =>{
    async function FetchData(){
      const req = await fetch(`http://localhost:3002/guiamedico`)
      const res = await req.json()
      setPrest(res)
    }
    FetchData()
  },[])
  
  return (
      <main className="w-full flex max-sm:flex-col">
        <div className="w-[290px] max-sm:w-full">
          <div className="hidden max-sm:block">
            <Navbar icon={icon} setIcon={setIcon}   />
          </div>
          <div className="max-sm:hidden">
            <Sidebar />
          </div>
        </div>   
        <div className="w-[calc(100%-290px)] h-screen overflow-y-auto p-3 grid grid-cols-4 gap-4 justify-items-center max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 max-sm:w-full">
          {prest.map((p) => (
            <Cards name={p.NOME} especialidade={p.ESPECIALIDADE} endereco={p.ENDERECO} cep={p.CEP} bairro={p.BAIRRO} tel={p.TEL_FIXO} />
          ))}
          
        </div>
      </main>
      
    )
}
