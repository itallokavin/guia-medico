import Select from "@/components/Select/select"
import Input from "@/components/Input/input"
import Button from "../Button/button"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faEraser } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const options = {
    especialidade : [ 'Cardiologia','Clinico' ],
    plano : ['Pleno','Unimaster'],
    municipio: ['Açailândia','Balsas','Imperatriz'],
    uf: ['MA','PA','RO']
}

export default function Busca(){

    const [esp, setEsp] = useState('');
    const [mun, setMun] = useState('');
    const [uf,setUf] = useState('');
    const [prest, setPrest] = useState('');
    const [plano, setPlano] = useState('');

    const handleClear = () => {
        setEsp("");
        setMun("");
        setUf("");
        setPrest("");
        setPlano("");
      };

    return(
        <div className="w-full ">
            <div className="shadow-lg w-9/12 m-auto rounded-2xl my-5 text-center bg-verdeUnimed text-white p-2 max-sm:block max-sm:w-full">
                <h2 className="text-2xl font-UnimedSans font-semiBold">Formulário de Busca</h2>
            </div>
            <div className="flex w-full mt-5">
                <div className="w-full grid grid-cols-4 justify-items-center max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
                    <Select label="Especialidade" options={options.especialidade} value={esp} onChange={setEsp} />
                    <Input  label="Prestador" value={prest} onChange={setPrest} />
                    <div className="flex justify-between w-[270px] max-xl:mr-5 max-sm:mr-0 max-sm:w-full ">
                        <Select label="Município" options={options.municipio} value={mun} onChange={setMun} width="70%"/>
                        <Select label="UF" options={options.uf} value={uf} onChange={setUf} mr={0} width="25%"/>
                    </div>
                    <Select label="Área de atuação" options={options.plano} />
                    <Select label="Tipo de Estabelecimento" options={options.plano} />
                    <Select label="Plano" options={options.plano} value={plano} onChange={setPlano} />
                    <div className="flex w-[270px] max-xl:mr-5 items-end justify-between  max-sm:w-full max-sm:mr-0">
                        <Button label="Limpar" onclick={handleClear} color="#f37920" icon={faEraser} hIcon={22}/>
                        <Button label="Buscar" color="#00985c" icon={faSearch} hIcon={22}/>
                    </div>
                </div>
            </div>
        
            
            

        </div>       
    )
}