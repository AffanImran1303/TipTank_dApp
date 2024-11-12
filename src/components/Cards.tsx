interface CardProps{
  image:string;
  text:string;
  currencySymbol:string;
}


const Card:React.FC<CardProps>=({image,text,currencySymbol})=>{
    return(
        <>
        <div className="relative overflow-hidden rounded-xl marquee-card">
<div className="card grid grid-rows-2 place-content-center items-center p-4 w-48 border-2 border-[#6ead3d] shadow-2xl hover:opacity-100 transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110 hover:bg-[#6ead3d]">

<div className="avatar">
  <div className="w-20 rounded-full overflow-hidden mx-auto">
    <img src={image}/>
  </div>
</div>
  <div className="card-body w-max">
    <div className="flex space-x-1 items-center">
    <p className="">{text}</p>
    <img src={`https://assets.parqet.com/logos/crypto/${currencySymbol}?format=png`} className="w-8 h-8 inline-block rounded-lg"/>
    </div>
  </div>

</div> 
</div>
        </>
    )
}
export default Card;