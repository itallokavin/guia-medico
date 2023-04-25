type Props = {
    label?: string;
    options: string[];
    width?: string;
    display?: string;
    onChange?: (value: string) => void;
    value?: string;
  };

  export default function Select({label,options,width,onChange,value}: Props) {
    return(
        <>  
            <div className="mt-1 max-[420px]:mt-5 2xl:mt-5" style={{width: width}}>
                <label className="uppercase" htmlFor="">{label}</label>
                <select className="outline-0 w-full h-[35px] border border-1 border-black bg-white rounded-md " name="" id="" value={value} onChange={(e)=> onChange && onChange(e.target.value)}>
                    <option value="" selected disabled hidden ></option>
                    {options.map((e)=> 
                        <option key={e} value={e}>{e}</option>
                    )}
                </select>
            </div>
            
        </>
    )
}