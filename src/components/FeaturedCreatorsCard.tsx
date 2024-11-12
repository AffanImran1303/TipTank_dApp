import { FeaturedCreatorsProps } from "@/app/featuredcreators/page";

const FeaturedCreatorCards:React.FC<FeaturedCreatorsProps>=({image,name,bio})=>{
    return(
        <>
<div className="flex justify-center items-center min-h-screen">
    <div className="max-w-[620px] mx-auto text-gray-300">
        <div className="relative flex flex-col shadow-2xl bg-clip-border rounded-xl max-w-60 hover:bg-[#6ead3d] hover:text-[#fffdff] hover:opacity-100 transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110">
            <div className="relative mx-4 mt-4 overflow-hidden bg-clip-border rounded-xl h-80 shadow-2xl">
                <img
                    src={image}
                    alt="card-image" className="object-cover w-full h-full" />
                    <div className="badge absolute inset-0 bg-[#6ead3d] border-none font-regular flex justify-self-end m-2 shadow-inner">Trending
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up mx-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    </div>
            </div>
            <div className="p-6">
                <div className="items-center justify-between mb-2">
                
                    <p className="text-left text-base antialiased font-medium text-blue-gray-900">
                        {name}
                    </p>
                    <p className="text-left text-sm antialiased font-normal">
                    {bio}
                </p>
                </div>

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