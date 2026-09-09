import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, ShieldCheck, Terminal } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.08fr_.92fr] lg:px-7">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[.15em] text-emerald-400">
          <Terminal size={14} /> CyberSecurity | Red Team
        </div>
        <h1 className="text-6xl font-bold leading-[.9] tracking-[-.06em] text-slate-100 sm:text-8xl">
          Hi, I'm <span className="text-emerald-400">{profile.name}</span>.
        </h1>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-200 sm:text-4xl">{profile.role}</h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-emerald-400 bg-emerald-400 px-4 py-3 font-mono text-xs font-bold text-[#06100b] transition hover:-translate-y-0.5">
            View projects <ArrowDown size={15} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[.03] px-4 py-3 font-mono text-xs text-slate-300 hover:border-emerald-400 hover:text-emerald-400"><Github size={15} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[.03] px-4 py-3 font-mono text-xs text-slate-300 hover:border-emerald-400 hover:text-emerald-400"><Linkedin size={15} /> LinkedIn</a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="overflow-hidden rounded-xl border border-white/10 bg-[#080e12]/90 shadow-2xl shadow-black/30">
        <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#091015] px-4">
          <span className="h-2 w-2 rounded-full bg-slate-600" /><span className="h-2 w-2 rounded-full bg-slate-600" /><span className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="ml-auto font-mono text-[10px] text-slate-500">root@kali-$</span>
        </div>
        <div className="space-y-4 p-6 font-mono text-xs leading-6">
          <div><p className="text-slate-600"><i className="text-emerald-400">$</i> whoami</p><strong className="text-slate-200">{profile.name}</strong></div>
          <div><p className="text-slate-600"><i className="text-emerald-400">$</i> mission</p><strong className="text-slate-200">detect → investigate → respond</strong></div>
          <div><p className="text-slate-600"><i className="text-emerald-400">$</i> status</p><strong className="text-emerald-400">● ONLINE / LEARNING</strong></div>
          <div><p className="text-slate-600"><i className="text-emerald-400">$</i> focus</p><strong className="text-slate-200">PenTest → OSINT → Ethical Hacking</strong></div>
          <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-slate-500"><ShieldCheck size={15} className="text-emerald-400" /> defensive security mindset</div>
        </div>
      </motion.div>
    </section>
  );
}