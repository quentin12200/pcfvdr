import React, { useEffect, useMemo, useState } from "react";
import { INTRO, KPI, SECTIONS, EXAMPLES } from "./content";
import logoPcf from "../logo.png";
import "./index.css";

const classNames = (...s) => s.filter(Boolean).join(" ");

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(id);}),
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
      );
      obs.observe(el); observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

function CopyButton({ text }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      onClick={async () => { try { await navigator.clipboard.writeText(text); setOk(true); setTimeout(()=>setOk(false),1500);} catch {} }}
      className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-sm"
    >{ok ? "Copié !" : "Copier le lien"}</button>
  );
}

function ProgrammeComplet() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 print:py-0">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600">Programme complet 2026–2032</h1>
        <p className="mt-2 text-lg opacity-80">
          Document intégral, mis à disposition des futures listes municipales. Version imprimable.
        </p>
      </header>
      <article className="prose dark:prose-invert max-w-none">
        {SECTIONS.map((s) => (
          <section key={s.id} className="mb-8 break-inside-avoid">
            <h2 className="text-2xl font-extrabold mt-6">{s.icon} {s.title}</h2>
            <ul className="mt-2 space-y-2">
              {s.items.map((it, idx) => (
                <li key={idx} className="leading-relaxed">{it}</li>
              ))}
            </ul>
          </section>
        ))}
      </article>
      <hr className="my-8 opacity-30" />
      <h3 className="text-xl font-bold mb-2">Ils l’ont fait (inspirations)</h3>
      <ul className="list-disc pl-6 space-y-2">
        {EXAMPLES.map((e,i)=>(<li key={i}><strong>{e.title}</strong> — {e.where} : {e.text}</li>))}
      </ul>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [view, setView] = useState("home"); // 'home' | 'full'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#programme-complet') setView('full');
    }
  }, []);

  const allTags = useMemo(() => {
    const s = new Set(); SECTIONS.forEach(sec => sec.tags.forEach(t => s.add(t))); return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase(); const t = tag.toLowerCase();
    return SECTIONS.filter((s) => {
      const inTag = !t || s.tags.includes(t);
      const inText = !q || s.title.toLowerCase().includes(q) || s.items.some(i => i.toLowerCase().includes(q));
      return inTag && inText;
    });
  }, [query, tag]);

  const active = useActiveSection(filtered.map(s => s.id));
  const shareUrl = typeof window !== 'undefined' ? window.location.href : "";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-zinc-900/70 border-b border-black/5 dark:border-white/10 print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              src={logoPcf}
              alt="PCF Villefranche-de-Rouergue"
              className="h-10 w-10 rounded-xl border border-black/10 dark:border-white/20 object-contain bg-white"
            />
            <div>
              <h1 className="text-lg font-extrabold leading-5">Villefranche 2026–2032</h1>
              <p className="text-xs opacity-70">Programme municipal – contribution des communistes, mise à disposition des futures listes</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {view === 'home' && (
              <>
                <input
                  aria-label="Rechercher"
                  placeholder="Rechercher une mesure…"
                  className="hidden sm:block px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 outline-none focus:ring-2 ring-red-500 text-sm w-64"
                  value={query}
                  onChange={(e)=>setQuery(e.target.value)}
                />
                <select aria-label="Filtrer par thème" className="px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-sm" value={tag} onChange={(e)=>setTag(e.target.value)}>
                  <option value="">Tous les thèmes</option>
                  {allTags.map(t => (<option key={t} value={t}>{t}</option>))}
                </select>
                <button onClick={() => { setQuery(""); setTag(""); }} className="px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 text-sm hover:bg-black/5 dark:hover:bg-white/10">Réinitialiser</button>
              </>
            )}
            <button onClick={() => setView(view === 'home' ? 'full' : 'home')} className="px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 text-sm hover:bg-black/5 dark:hover:bg-white/10">
              {view === 'home' ? 'Programme complet' : 'Retour au site'}
            </button>
            <button onClick={() => window.print()} className="px-3 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700">Imprimer / PDF</button>
            <CopyButton text={shareUrl} />
          </div>
        </div>
        {view === 'home' && (
          <nav className="overflow-x-auto border-t border-black/5 dark:border-white/10">
            <ul className="max-w-6xl mx-auto px-4 py-2 flex gap-2">
              {filtered.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={classNames("px-3 py-1.5 rounded-full text-sm whitespace-nowrap border", active===s.id ? "bg-red-600 text-white border-red-600" : "border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10")}>{s.icon} {s.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {view === 'full' ? (
        <ProgrammeComplet />
      ) : (
        <>
          <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
            <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-red-600">{INTRO.title}</h2>
              <div className="mt-4 space-y-3 text-lg">
                {INTRO.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#democratie" className="px-4 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">Découvrir les mesures</a>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 pb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {KPI.map((k) => (
                  <div key={k.label} className="rounded-2xl p-4 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm">
                    <div className="text-xs uppercase tracking-wider opacity-60">{k.label}</div>
                    <div className="text-2xl font-extrabold mt-1">{k.target}</div>
                    <div className="text-sm opacity-70">{k.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <main className="max-w-6xl mx-auto px-4 pb-24">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 lg:scroll-mt-28">
                <div className={classNames("rounded-3xl p-6 sm:p-8 mt-8 bg-gradient-to-br text-white", s.color)}>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl" aria-hidden>{s.icon}</div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold">{s.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-base sm:text-lg">
                    {s.items.map((it, idx) => (
                      <li key={idx} className="flex gap-2"><span aria-hidden>•</span><span>{it}</span></li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-white/30">#{t}</span>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </main>

          <section className="max-w-6xl mx-auto px-4 pb-16">
            <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-extrabold mb-2">Ils l’ont fait (inspirations)</h3>
              <ul className="space-y-2 list-disc pl-6">
                {EXAMPLES.map((e,i)=>(<li key={i}><strong>{e.title}</strong> — {e.where} : {e.text}</li>))}
              </ul>
            </div>
          </section>
        </>
      )}

      <footer className="border-t border-black/5 dark:border-white/10 print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="font-extrabold text-lg">Villefranche 2026–2032</div>
            <p className="opacity-70 text-sm mt-1">Programme municipal communiste – Contribution des communistes à la disposition des futures listes municipales.</p>
          </div>
          <div className="sm:text-right flex sm:justify-end gap-3">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 text-sm">Haut de page</button>
            <button onClick={() => window.print()} className="px-3 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700">Imprimer / PDF</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
