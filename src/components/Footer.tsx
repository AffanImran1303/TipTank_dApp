import Link from "next/link";
import {FOOTER_LINKS} from "@/constants";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="m-4 w-screen">
          <section className="mt-72 rounded-3xl border-none border-2">
            <footer className="footer flex justify-between text-slate-300 p-7">
              <aside className="grid sm:flex flex-col">
                <a className="btn btn-ghost p-0 text-4xl league-spartan">
                  tiptank
                </a>
                <p>© 2024. All Rights Reserved.</p>
              </aside>
              <div className="grid grid-cols-2 gap-4 sm:flex inline-block">
                {FOOTER_LINKS.map((column,index)=>(
                  <Link href={column.href} key={column.key} className="link link-hover m-3">{column.label}</Link>
                ))}
              </div>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};
