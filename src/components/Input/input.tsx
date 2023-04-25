type Props = {
    label: string,
    onChange?: (value: string) => void;
    value?: string;
}

export default function Input({label,value,onChange}:Props){
    return(
        <div className="mt-1 max-[420px]:mt-5 2xl:mt-5">
            <label className="uppercase" htmlFor="">{label}</label>
            <input value={value} onChange={(e)=> onChange && onChange(e.target.value)} className="outline-0 border border-1 border-black block w-full h-[35px] rounded-md" type="text" />
        </div>
    )
}