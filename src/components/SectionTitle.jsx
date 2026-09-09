export default function SectionTitle({ kicker, title, description }) {
  return (
    <div className="mb-10">
      <div className="mb-3 font-mono text-[11px] font-semibold tracking-[.16em] text-emerald-400">{kicker}</div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{description}</p>}
    </div>
  );
}