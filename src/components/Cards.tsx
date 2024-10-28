const Card=()=>{
    return(
        <>
<div className="card items-center w-48 shadow-2xl p-4 flex flex-col justify-center opacity-60 hover:opacity-100 transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110 hover:bg-[#6ead3d]">

<div className="avatar">
  <div className="w-24 rounded-full overflow-hidden mx-auto">
    <img src="/images/creator1.jpg"/>
  </div>
</div>
  <div className="card-body text-center">
    <p>Sam just got 0.2 SOL Tip!</p>
  </div>
</div> 
        </>
    )
}
export default Card;