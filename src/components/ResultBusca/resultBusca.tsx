import Cards from "./cards"

export default function ResultBusca(){
    return(
        <div className="h-full text-white">
            <div className="w-8/12 text-center bg-verdeUnimed my-5 p-2 m-auto">
                <h2 className="text-2xl">Resultado da Busca</h2>
            </div>
            <div className="flex">
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}