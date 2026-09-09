import { useState } from "react";
import { Menu, Shield, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Certifications", "Projects", "Write-ups", "Contact"];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 lg:px-7">
        <a href="#top" className="font-mono text-m font-bold tracking-tight">
          <span className="mr-1 text-emerald-400">//</span>pr0gramat0r<span className="text-emerald-400">_</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace("-", "")}`} className="font-mono text-[11px] text-slate-400 transition hover:text-emerald-400">
              {link}
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="text-slate-300 md:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#05070b] px-5 py-5 md:hidden">
          {links.map((link) => (
            <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase().replace("-", "")}`} className="block py-3 font-mono text-xs text-slate-400">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}