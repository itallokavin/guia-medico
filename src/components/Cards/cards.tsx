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
            <div className="shadow-xl rounded-lg w-[400px] max-2xl:w-[380px] max-xl:w-[300px] max-lg:w-[400px] max-md:w-full">
                <div className="bg-verdeUnimed text-white p-2 rounded-t-lg">
                    <p className="font-UnimedSansBlack text-[16px]">{name}</p>
                    <p className="font-UnimedSans text-[12px]">{especialidade}</p>
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