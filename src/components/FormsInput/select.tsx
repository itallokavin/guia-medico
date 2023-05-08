type Props ={
    label: string,
    width?: string,
    options?: string []
}

export default function Select({label,width,options}:Props){
    return(
        <div className="flex justify-center mt-4 max-sm:mt-3" style={{width: width}}>
            <div className="w-[240px] max-sm:w-full" >
                <label className="text-white max-sm:text-black" htmlFor="">{label}</label>
                <select className="border-none w-full h-[35px] rounded-md outline-none pl-2 max-sm:border bg-[#fafafa] shadow-md" name={label} id={label}>
                    <option hidden ></option>
                    {options?.map((op) => (
                        <option className="text-[14px]" key={op} value={op}>{op}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}