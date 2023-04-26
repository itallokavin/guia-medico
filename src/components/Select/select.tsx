type Props = {
    label?: string;
    options: string[];
    width?: string;
    display?: string;
    onChange?: (value: string) => void;
    value?: string;
    mr?:number;
  };

  export default function Select({label,options,width,onChange,value,mr}: Props) {
    return(
        <>  
            <div className="w-[270px] max-xl:mr-5 max-sm:mr-0 max-sm:w-full" style={{width: width, marginRight: mr}}>
                <label className="uppercase" htmlFor="">{label}</label>
                <select className="outline-0 w-full h-[35px] border border-1 border-black bg-white rounded-md pl-2" name="" id="" value={value} onChange={(e)=> onChange && onChange(e.target.value)}>
                    <option value="" selected disabled hidden ></option>
                    {options.map((e)=> 
                        <option key={e} value={e}>{e}</option>
                    )}
                </select>
            </div>
            
        </>
    )
}