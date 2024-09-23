export function ChooseCreator(){
    return(
        <div>
        <label className="sm:form-control w-96 max-w-xl">
  <div className="label">
    <span className="label-text">Select your creator:</span>
  </div>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Mr Beast</option>
    <option>GanjiSwag</option>
    <option>PewdiPie</option>
    <option>Dan</option>
    <option>JohnnyTimes</option>
  </select>
</label>
<label className="sm:form-control w-96 max-w-xl">
  <div className="label">
    <span className="label-text">Enter the tip amount:</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>
<label className="sm:form-control w-96 max-w-xl">
  <div className="label">
    <span className="label-text">Enter your message:</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>
<div className="mt-10">
<button className="btn btn-ghost bg-black text-white w-full">Confirm Tipping!</button>
</div>
</div>
)}