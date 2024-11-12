import { FeaturedCreatorsProps } from "@/app/featuredcreators/page";

const FeaturedCreatorCards:React.FC<FeaturedCreatorsProps>=({image,name,bio})=>{
    return(
        <>
<div className="flex justify-center items-center min-h-screen">
    <div className="max-w-[620px] mx-auto text-gray-300">
        <div className="relative flex flex-col shadow-lg bg-clip-border rounded-xl max-w-60 hover:bg-[#6ead3d] hover:text-[#fffdff] hover:opacity-100 transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110">
            <div className="relative mx-4 mt-4 overflow-hidden bg-clip-border rounded-xl h-80">
                <img
                    src={image}
                    alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {name}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed">
                        $95.00
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal opacity-75">
                    {bio}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</div>
{/* <div classNameName="card image-full max-h-96 max-w-52 shadow-xl border-4 hover:opacity-100 transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110">
  <figure>
    <img
      src={image}
      alt="Shoes"
      className="hover:bg-blend-normal"
      />
  </figure>
  <div className="card-body place-self-center place-items-center">
    <h2 className="card-title">{name}</h2>
    <p>{bio}</p>
  </div>
</div> */}
        </>
    )
}
export default FeaturedCreatorCards;