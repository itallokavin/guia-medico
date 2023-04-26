import Nav from "@/components/Navbar/nav"
import Busca from "@/components/MenuBusca/busca"
import { useState } from "react";

export default function Home() {
  
  const [buscaVisivel, setBuscaVisivel] = useState(true);

  function handleBuscaVisivel() {
    setBuscaVisivel(!buscaVisivel);
  }

  return (
      <main className="h-screen w-full">
        <Nav handleBuscaVisivel={handleBuscaVisivel}/>
        <div className="w-full px-[5%] flex justify-between max-md:flex-col">
          {buscaVisivel && (
            <div className="w-full max-md:w-full">
              <Busca />
            </div>
          )}
        </div>        
      </main>
    )
}
