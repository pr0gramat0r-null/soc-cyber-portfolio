import { FileSearch } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { writeups } from "../data/profile";

export default function Writeups() {
  return (
    <section id="writeups" className="mx-auto max-w-6xl px-5 py-24 lg:px-7">
      <SectionTitle kicker="// INTELLIGENCE" title="Technical write-ups." />
      <div className="border-y border-white/10">
        {writeups.map(([title, text], i) => (
          <article key={title} className="grid gap-4 border-b border-white/10 py-6 last:border-0 md:grid-cols-[45px_1fr_auto] md:items-center">
            <span className="font-mono text-[11px] text-emerald-400">{String(i + 1).padStart(2, "0")}</span>
            <div><h3 className="text-lg font-semibold text-slate-200">{title}</h3><p className="mt-1 text-sm text-slate-500">{text}</p></div>
            <FileSearch size={17} className="text-slate-600"/>
          </article>
        ))}
      </div>
    </section>
  );
}