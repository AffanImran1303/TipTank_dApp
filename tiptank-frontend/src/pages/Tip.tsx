import { ChooseCreator } from "../components/ChooseCreator";

export default function Tip(){
    return(
        <div className="grid sm:grid-cols-2 gap-10 mt-10">
            <div className="sm:col-end-2 col-span-6 m-12">
            <p className="sm:text-8xl text-left font-semibold">Tip Your Favorite Creators. Empower Their Passion.</p>
            </div>
            <div className="sm:col-start-2 col-span-6 justify-self-center">
                <ChooseCreator/>
            </div>
   
        </div>
 
)}