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
        <div className="min-w-[320px] w-2/12 max-md:w-full">
            <div className="min-w-[320px] max-md:w-full my-5 text-center bg-verdeUnimed text-white p-2">
                <h2 className="text-2xl">Formulário de Busca</h2>
            </div>
            <div className="min-w-[320px] max-md:w-full">
                <Select label="Especialidade" options={options.especialidade} value={esp} onChange={setEsp} />
            </div>
            <div className="min-w-[320px] max-md:w-full flex justify-between">
                <Select label="Município" options={options.municipio} value={mun} onChange={setMun} width={'70%'}/>
                <Select label="UF" options={options.uf} value={uf} onChange={setUf} width={'28%'}/>
            </div>
            <div className="min-w-[320px] max-md:w-full">
                <Input label="Prestador" value={prest} onChange={setPrest} />
                <Select label="Plano" options={options.plano} value={plano} onChange={setPlano} />
                <Select label="Tipo de Estabelecimento" options={options.plano} />
                <Select label="Área de atuação" options={options.plano} />
            </div>
            <div className="min-w-[320px] max-md:w-full flex justify-between">
                <Button label="Limpar" onclick={handleClear} color="#f37920" icon={faEraser} hIcon={20}/>
                <Button label="Buscar" color="#00985c" icon={faSearch} hIcon={20}/>
            </div>   
        </div>       
    )
}