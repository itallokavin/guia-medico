export default function Cards(){
    return(
        <div className="w-[270px] max-sm:w-[350px] rounded-b-xl shadow-lg m-5">
            <div className="w-full bg-verdeUnimed text-white p-3 rounded-t-xl">
                <p className="text-[20px] font-bold">Nome Prestador</p>
                <p>Especialidade</p>
            </div> 
            <div className="w-full p-3">
                <p>Rua Ceará, 701</p>
                <p>Centro</p>
                <p>Tel.: (99) 3535-2000</p>
            </div> 
        </div>
    )
}