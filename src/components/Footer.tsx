import Link from "next/link"

export const Footer=()=>{
    return(
        <>
        <div className="flex justify-center">
        <div className="m-4 w-screen">
            <section className="bg-[#6ead3d] mt-72 rounded-3xl border-none border-2">
            <footer className="footer flex justify-between text-[#00302e] p-7">
  <aside className="grid sm:flex flex-col">
  <a className="btn btn-ghost p-0 text-4xl league-spartan text-[#00302e]">tiptank</a>
  <p>© 2024. All Rights Reserved.</p>
  </aside>
  <div className="grid grid-cols-2 sm:flex inline-block">
    <Link href="#AboutSection" className="link link-hover m-3">About</Link>
    <Link href="#HowItWorksSection" className="link link-hover m-3">How it Works?</Link>
    <Link href="#FeaturedCreatorsSection" className="link link-hover m-3">Featured Creators</Link>
    <Link href="#FAQSection" className="link link-hover m-3">FAQ</Link>
  </div>
</footer>
            </section>
        </div>
        </div>
        </>
    )
}