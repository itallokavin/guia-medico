import Nav from "@/components/Navbar/nav"
import Busca from "@/components/MenuBusca/busca"
import { useState } from "react";
import MenuCards from "@/components/Cards/menuCards";
import { useEffect } from "react";

export default function Home() {
  
  const [menuBusca, setMenuBusca] = useState(true);
  const [menuCards, setMenuCards] = useState(true);


  function handleBusca(){
    setMenuBusca(!menuBusca);
    setMenuCards(!menuCards)
  }
  
  return (
      <main className="h-screen w-full">
        <Nav handleBusca={handleBusca}/>
        <div className="w-full px-[5%] flex flex-col justify-between max-md:flex-col">
          {menuBusca &&(
            <div className="w-full">
              <Busca />
            </div>
          )}
          {menuCards &&(
            <div className="w-full" >
              <MenuCards />
            </div>
          )}
        </div>        
      </main>
    )
}
