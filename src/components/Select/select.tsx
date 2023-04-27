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
            <div className="w-[270px] max-xl:mr-5 mt-5 max-sm:mr-0 max-sm:w-full max-sm:mt-3" style={{width: width, marginRight: mr}}>
                <label className="font-UnimedSans" htmlFor="">{label}</label>
                <select className="shadow-md outline-0 w-full h-[35px] bg-input rounded-md pl-2 mt-1 max-sm:shadow-md" name="" id="" value={value} onChange={(e)=> onChange && onChange(e.target.value)}>
                    <option value="" selected disabled hidden ></option>
                    {options.map((e)=> 
                        <option key={e} value={e}>{e}</option>
                    )}
                </select>
            </div>
            
        </>
    )
}