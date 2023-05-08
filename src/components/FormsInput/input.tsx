type Props ={
    label: string
}
export default function Input({label}:Props){
    return(
        <div className="flex justify-center mt-4 max-sm:mt-3">
            <div className="w-[240px] max-sm:w-full">
                <label className="text-white max-sm:text-black" htmlFor="">{label}</label>
                <input type="text" className="shadow-md border-none bg-[#fafafa] w-full h-[35px] rounded-md outline-none pl-2 max-sm:border" />                
            </div>
        </div>
    )
}