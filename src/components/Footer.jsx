export default function Footer() {
  return <footer className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-8 font-mono text-[10px] text-slate-600 sm:flex-row sm:justify-between lg:px-7">
    <span>© {new Date().getFullYear()} | pr0gramat0r</span>
  </footer>;
}