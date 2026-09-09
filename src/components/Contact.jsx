import { GithubIcon, Linkedin, ShieldCheck } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 lg:px-7">
      <div className="flex flex-col gap-6 rounded-xl border border-white/10 bg-white/[.025] p-7 sm:p-9 lg:flex-row lg:items-center">
        <ShieldCheck size={32} className="shrink-0 text-emerald-400" />
        <div>
          <div className="font-mono text-[10px] tracking-[.16em] text-emerald-400">// ESTABLISH CONNECTION</div>
          <h2 className="mt-2 text-3xl font-bold text-slate-100">Let's talk security.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">Open to Cybersecurity projects, Full-Stack development, Software engineering and red-team work.</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:ml-auto">
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-3 font-mono text-xs font-bold text-[#06100b]"><GithubIcon size={15} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-3 font-mono text-xs text-slate-300"><Linkedin size={15} /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}