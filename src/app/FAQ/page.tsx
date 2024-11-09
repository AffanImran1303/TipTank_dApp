import FAQDropDown from "@/components/FAQdropdown";
import React from "react";

interface FAQ{
  question:string,
  answer:string,
}

const FAQ:React.FC = () => {
  const FAQs:FAQ[]=[
    {question:"What is TipTank, and how does it work?",answer:"TipTank is a platform where fans can directly support creators by sending tips through a connected digital wallet."},
    {question:"How do creators receive their tips?",answer:"Tips go directly to the creator’s wallet instantly, with no delay or high platform fees."},
    {question:"Is there a limit to how much I can tip?",answer:"There’s no limit; you can tip any amount as long as it meets the minimum threshold."},
    {question:"How do I find my favorite creators?",answer:"Use the search and explore features to find creators by category, popularity, or activity."},
    {question:"How many crypto wallets do TipTank support?",answer:"TipTank supports 350+ wallets!"},
  ]
  return (
    <section className="flex justify-center sm:h-max mt-36" id="FAQSection">
      <div className="h-vh w-fit text-center p-20 m-10">
        <h1 className="text-5xl league-spartan font-bold mt-4">
          Frequently Asked Questions.
        </h1>
        <div>
          {[...FAQs].map((FAQ,idx)=>(
            <FAQDropDown question={FAQ.question} key={idx} answer={FAQ.answer}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
