import { FeaturedCreatorsProps } from "@/app/featuredcreators/page";

const FeaturedCreatorCards:React.FC<FeaturedCreatorsProps>=({image,name,bio})=>{
    return(
        <>
        <div className="card border-2 border-[#6ead3d]  shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl max-h-80 min-w-52"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{bio}</p>
    <div className="card-actions">
      <div className="badge badge-outline">Top 5%</div>
    </div>
  </div>
</div>
{/* <div className="card image-full max-h-96 max-w-52 shadow-xl border-4 hover:opacity-100 transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110">
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