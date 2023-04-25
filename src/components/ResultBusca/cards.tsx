export default function Cards(){
    return(
        <div className="min-w-[300px] shadow-lg rounded-[15px] m-auto">
            <div className="bg-verdeUnimed h-[70px] rounded-t-[15px] p-2">
                <p className="text-xl font-bold">Nome Prestador</p>
                <p>Especialidade</p>
            </div>
            <div className=" p-2 text-black">
                <p>Rua Ceará, 701</p>
                <p>Centro - 65901-610</p>
                <p>Tel: (99) 3535-0000 </p>
            </div>
        </div>
    )
}