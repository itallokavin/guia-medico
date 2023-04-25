import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

type Props = {
    label: string,
    color: string,
    icon: any,
    hIcon: number,
    onclick?: any
}

export default function Button({label,color,icon,hIcon,onclick}:Props){
    return(
        <div className="w-5/12 border mt-5 h-[45px] flex text-white" style={{backgroundColor: color}}>
            <button onClick={onclick} className="w-full relative left-2">
                <FontAwesomeIcon icon={icon} style={{fontSize: hIcon}} className="absolute left-2"/>
                {label}
            </button>
        </div>
    )
}