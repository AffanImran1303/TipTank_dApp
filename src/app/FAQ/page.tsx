import React from 'react'

const FAQ = () => {
  return (
    <section className="sm:h-max mt-36" id="FAQSection">
    <div className="h-vh text-[#0c4727] text-center p-20 m-10">
      <h1 className="text-5xl league-spartan font-bold mt-4">FAQ</h1>
      <div className="text-lg league-spartan">
    </div>
    <div className="league-spartan text-[#e4e3dc] mt-10">
    <div className="collapse collapse-plus bg-[#0c4727]">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">1</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus mt-8 bg-[#0c4727]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">2</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus mt-8 bg-[#0c4727]">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">3</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
    </div>
    </div>

  </section>
  )
}

export default FAQ