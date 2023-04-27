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
        <div className=" shadow-md w-[130px] h-[45px] flex text-white rounded-lg max-xl:mt-5 max-sm:w-[150px] max-sm:h-[50px]" style={{backgroundColor: color}}>
            <button onClick={onclick} className="w-full relative left-2 font-UnimedSans max-sm:text-[22px]">
                <FontAwesomeIcon icon={icon} style={{fontSize: hIcon}} className="absolute left-1 top-3"/>
                {label}
            </button>
        </div>
    )
}