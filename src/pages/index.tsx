import Nav from "@/components/Navbar/nav"
import Busca from "@/components/MenuBusca/busca"
import ResultBusca from "@/components/ResultBusca/resultBusca"

export default function Home() {
  return (
      <main className="h-screen w-full">
        <Nav />
        <div className="w-full px-[5%] 2xl:h-[calc(100vh-80px)] flex">
          <div className="w-[320px] max-md:w-full">
            <Busca />
          </div>
          <div className="w-full max-md:hidden">
            <ResultBusca />
          </div>
        </div>
        
      </main>
    )
}
