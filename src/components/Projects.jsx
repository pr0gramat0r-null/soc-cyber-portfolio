import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 lg:px-7">
      <SectionTitle kicker="// OPERATIONS + BUILD" title="Projects & security work." description="A mix of labs & software projects. Because apparently one person can have both SIEM alerts and Flutter apps open at the same time." />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .045 }} className="group rounded-xl border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <div className="flex justify-between font-mono text-[10px] text-emerald-400"><span>{String(i + 1).padStart(2, "0")}</span><em className="not-italic text-slate-600">{p.status}</em></div>
            <h3 className="mt-4 text-xl font-semibold text-slate-100">{p.title}</h3>
            <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{p.tags.map(tag => <span key={tag} className="rounded border border-white/10 px-2 py-1 font-mono text-[9px] text-slate-500">{tag}</span>)}</div>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-[10px] text-emerald-400 hover:underline"><Github size={13} /> Repository <ExternalLink size={12} /></a>}
          </motion.article>
        ))}
      </div>
    </section>
  );
}