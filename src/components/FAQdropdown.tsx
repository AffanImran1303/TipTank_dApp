interface FAQDropDownProps{
    question:string,
    answer:string,
}

const FAQDropDown:React.FC<FAQDropDownProps>=({question,answer})=>{
    return <div className="flex justify-center">
        <div className="collapse collapse-arrow mt-8 text-[#fffdff] border-2 border-[#6ead3d] league-spartan w-max">
            <input type="checkbox" className="peer"/>
            <div className="collapse-title text-lg font-medium peer-checked:bg-[#6ead3d] peer-checked:text-[#00302e]">
                {question}
            </div>
            <div className="flex justify-center collapse-content peer-checked:bg-[#6ead3d] peer-checked:text-[#00302e]">
                <p className="w-96">{answer}</p>
            </div>
        </div>
    </div>;
}
export default FAQDropDown;