import Nav from "@/components/Navbar/nav"
import Busca from "@/components/MenuBusca/busca"
import { useState } from "react";

export default function Home() {
  
  const [buscaVisivel, setBuscaVisivel] = useState(false);

  function handleBuscaVisivel() {
    setBuscaVisivel(!buscaVisivel);
  }

  return (
      <main className="h-screen w-full">
        <Nav handleBuscaVisivel={handleBuscaVisivel}/>
        <div className="h-[calc(100vh-80px)] w-full px-[5%] flex justify-between max-md:flex-col">
        {buscaVisivel && (
          <div className="w-[320px] max-md:w-full">
            <Busca />
          </div>
        )}
        </div>
        
      </main>
    )
}
