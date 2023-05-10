type Props ={
    label: string,
    width?: string,
    options?: string []
}

export default function Select({label,width,options}:Props){
    return(
        <div className="flex justify-center mt-3 xl:py-1 max-md:mt-5" style={{width: width}}>
            <div className="w-[280px] max-md:w-full" >
                <label className="text-white" htmlFor="">{label}</label>
                <select className="border-none w-full h-[35px] rounded-md outline-none pl-2 max-md:border bg-[#fafafa] shadow-md" name={label} id={label}>
                    <option hidden ></option>
                    {options?.map((op) => (
                        <option className="text-[14px]" key={op} value={op}>{op}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}