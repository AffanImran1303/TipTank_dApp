export const Footer=()=>{
    return(
        <>
        <div className="flex justify-center">
        <div className="w-5/6 mb-2">
            <section className="w-full bg-black mt-72 text-white rounded-3xl border-none border-2">
            <footer className="footer flex justify-between text-slate-400 p-7">
  <aside className="flex flex-col sm:flex items-center">
  <a className="btn btn-ghost p-0 text-4xl league-spartan text-[#A8FF35]">tiptank</a>
  <p>© 2024. All Rights Reserved.</p>
  </aside>
  <div className="flex flex-row sm:flex inline-block">
    <a className="link link-hover m-3">About</a>
    <a className="link link-hover m-3">How it Works?</a>
    <a className="link link-hover m-3">Featured Creators</a>
    <a className="link link-hover m-3">FAQ</a>
  </div>
</footer>
            </section>
        </div>
        </div>
        </>
    )
}