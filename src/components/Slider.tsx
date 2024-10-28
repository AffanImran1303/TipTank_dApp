import Cards from "./Cards";

const Slider=()=>{
    return(
        <>
        <div className="py-8">
            <div className="left-0 flex gap-4 text-center">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                {/* <div className="bg-black w-20">4</div> */}
            </div>

        </div>
        </>
    )
}
export default Slider;