type Props = {
    label: string,
    onChange?: (value: string) => void;
    value?: string;
}

export default function Input({label,value,onChange}:Props){
    return(
        <div className="w-[270px] max-xl:mr-5 max-sm:mr-0 max-sm:w-full ">
            <label className="uppercase" htmlFor="">{label}</label>
            <input value={value} onChange={(e)=> onChange && onChange(e.target.value)} className="outline-0 border border-1 border-black block w-full h-[35px] rounded-md pl-2" type="text" />
        </div>
    )
}