import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    label:string,
    icone:any,
    color?: string,
    iconSize?: number
}   

export default function Button({label,icone,color,iconSize}:Props){
    return(
        <div className="py-3">
            <button className="shadow-md text-white border w-[100px] h-[40px] rounded-md hover:bg-verdeClaro hover:border-none max-sm:w-[140px] max-sm:h-[45px] max-sm:text-lg" style={{backgroundColor: color}}>
                <FontAwesomeIcon icon={icone} fontSize={iconSize} color="white" className="mr-2"/>
            {label}
            </button>
        </div>
    )
}