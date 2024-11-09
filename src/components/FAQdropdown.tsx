interface FAQDropDownProps{
    question:string,
    answer:string,
}

const FAQDropDown:React.FC<FAQDropDownProps>=({question,answer})=>{
    return <div className="flex justify-center">
        <div className="collapse collapse-arrow mt-8 text-[#fffdff] border-2 border-[#6ead3d] league-spartan w-full">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                {question}
            </div>
            <div className="flex justify-center collapse-content text-xl">
                <p className=" w-96">{answer}</p>
            </div>
        </div>
    </div>;
}
export default FAQDropDown;