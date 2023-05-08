type Props = {
    name: string,
    especialidade?: string,
    endereco?:string,
    bairro?: string,
    cep?: string,
    tel?:string
}

export default function Cards({name,especialidade,endereco,bairro,tel,cep}:Props){
    return(
        <>
            <div className="w-[290px] max-h-[160px] max-sm:w-full shadow-xl rounded-lg">
                <div className="bg-verdeUnimed text-white p-2 rounded-t-lg">
                    <p className="font-UnimedSansBlack text-[18px]">{name}</p>
                    <p className="font-UnimedSans text-[13px]">{especialidade}</p>
                </div>
                <div className="p-2">
                    <p className="text-[13px]">{endereco}</p>
                    <p className="text-[13px]" >{bairro} - {cep}</p>
                    <p className="text-[13px]">TEL.: {tel}</p>
                </div>
            </div>
        </>
    )
}