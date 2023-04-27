type Props = {
    label: string,
    onChange?: (value: string) => void;
    value?: string;
}

export default function Input({label,value,onChange}:Props){
    return(
        <div className="w-[270px] mt-5 max-xl:mr-5 max-sm:mr-0 max-sm:w-full max-sm:mt-3">
            <label className="font-UnimedSans" htmlFor="">{label}</label>
            <input value={value} onChange={(e)=> onChange && onChange(e.target.value)} className="shadow-md outline-0 bg-input block w-full h-[35px] rounded-md pl-2 mt-1" type="text" />
        </div>
    )
}