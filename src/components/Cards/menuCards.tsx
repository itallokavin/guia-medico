import Cards from "./cards";

export default function MenuCards(){
    return(
        <div className="w-full grid grid-cols-4 justify-items-center max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">           
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    )
}