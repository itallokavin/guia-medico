import Image from "next/image"
import Logo from "../../../assets/img/logo.png"
import Somoscoop from "../../../assets/img/somoscoop_alt.png"
import { faClose, faEraser, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { use, useState } from "react"
import Select from "../FormsInput/select"
import Input from "../FormsInput/input"
import Button from "../FormsButton/button"

export type IconType = typeof faBars | typeof faClose;
interface NavbarProps {
  icon: IconType;
  setIcon: (icon: IconType) => void;
}

export default function Navbar({ icon, setIcon }: NavbarProps){

    function handleClick(){
      setIcon( icon === faBars ? faClose : faBars);
    }

    return(
        <>
          <div className="bg-verdeUnimed w-full h-[80px] flex px-[3%]">
            <div className="w-full h-full flex items-center">
              <Image alt="logo unimed" src={Logo} width={150} />
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={icon} fontSize={35} beat color="white" onClick={handleClick} />
            </div>
          </div>
          {icon === faClose &&
            <div>
              <div className="flex justify-center mt-3 py-2">
                <p className="text-[34px] font-UnimedSansBlack text-[#004E4C]">Guia Médico</p>
              </div>
              <div className="px-[3%]">
                <Select label="Especialidade" />
                <Input  label="Prestador" />
                <div className="flex w-full justify-between">
                  <Select label="Município" width={'70%'}/>
                  <Select label="UF" width={'25%'}/>
                </div>
                <Select label="Área de atuação" />
                <Select label="Tipo de estabelecimento" />
                <Select label="Plano" />
                <div className="flex justify-between">
                  <Button label="Limpar" icone={faEraser} iconSize={20} color="#F37920" />
                  <Button label="Buscar" icone={faSearch} iconSize={20} color="#004E4C" />
                </div>
                <div className="flex justify-center p-3 ">
                  <Image src={Somoscoop} alt="somoscoop"/>
                </div>
              </div>
            </div>
          }
        </>
    )
}