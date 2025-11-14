import React from "react";
import { INTRO, SECTIONS, PARTICIPER, STATS, POUR_ALLER_PLUS_LOIN } from "./content";
import logoPcf from "../logo.png";
import bandeau from "../bandeau.png";
import "./index.css";

const JOIN_URL = "https://www.pcf.fr/adherer";
const ActionCard = ({ action }) => {
  const detailParagraphs = Array.isArray(action.detail) ? action.detail : [action.detail];
  const [diagnostic, ...measures] = detailParagraphs;

  const exampleParagraphs =
    action.example && action.example.detail
      ? Array.isArray(action.example.detail)
        ? action.example.detail
        : [action.example.detail]
      : [];

  return (
    <article className="rounded-[28px] border border-red-100/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 flex flex-col gap-6">
      <header className="space-y-2">
        <h4 className="text-2xl font-semibold text-slate-900">{action.title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed">
          Le problème à Villefranche + ce qu'on propose de concret + des exemples de villes où ça marche déjà.
        </p>
      </header>

      {diagnostic && (
        <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-white p-5">
          <p className="text-[11px] uppercase tracking-[0.4em] text-red-600 font-semibold">Le problème</p>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">{diagnostic}</p>
        </div>
      )}

      {measures.length > 0 && (
        <div className="space-y-3">
          <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
            {measures.map((paragraph, index) => (
              <li key={index} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-semibold">La solution</p>
                <p className="mt-2">{paragraph}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(action.example || action.validations) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {action.example && (
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-semibold">Ça marche où ?</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{action.example.city}</p>
              {exampleParagraphs.map((paragraph, index) => (
                <p key={index} className="mt-2 text-sm text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {action.validations && (
            <div className="rounded-2xl border border-red-200 bg-red-50/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-red-600 font-semibold">Déjà {action.validations} personnes valident</p>
              <p className="mt-1 text-sm text-red-700">
                À 100 validations, on publie un guide détaillé pour appliquer cette mesure à Villefranche.
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

const NAV_LINKS = [
  { label: "Vision", type: "anchor", href: "#vision" },
  { label: "Grands thèmes", type: "anchor", href: "#themes" },
  { label: "Les chiffres", type: "view", view: "stats" },
  { label: "Participer", type: "anchor", href: "#participer" }
];

const ThemeSheets = () => {
  return (
    <section id="themes" className="bg-slate-50/60 border-y border-red-100/60">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">Les propositions</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Des solutions concrètes pour Villefranche</h2>
          <p className="text-base text-slate-600 max-w-4xl mx-auto">
            Chaque mesure part d'un problème réel à Villefranche et propose une solution qui marche déjà ailleurs. Tout est chiffré, vérifié, réalisable. Tu peux valider les propositions qui te parlent : à 100 validations, on publie un guide pratique pour la mettre en œuvre.
          </p>
        </div>
        <div className="space-y-12">
          {SECTIONS.map((section) => (
            <article key={section.id} className="rounded-[36px] border border-red-100/70 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="p-6 sm:p-10 space-y-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-red-50 text-3xl flex items-center justify-center border border-red-100" aria-hidden>
                      {section.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-red-600 font-semibold">{section.category}</p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">{section.title}</h3>
                      <p className="mt-3 text-base text-slate-600">{section.description}</p>
                    </div>
                  </div>
                  {section.focus && (
                    <div className="flex-1 rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-5 text-sm text-red-900">
                      <p className="text-[11px] uppercase tracking-[0.4em] text-red-500 font-semibold">Fil rouge budgétaire</p>
                      <p className="mt-2 text-base font-semibold">{section.focus}</p>
                    </div>
                  )}
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {section.actions.map((action) => (
                    <ActionCard key={action.title} action={action} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsPage = ({ onBack }) => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-red-700 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-100">Les chiffres clés</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight">{STATS.title}</h1>
            <p className="mt-4 text-lg text-red-50 max-w-3xl">{STATS.paragraphs[0]}</p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="self-start rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Revenir au programme
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-[3fr_2fr] items-start">
        <div>
          <div className="space-y-4 text-base text-slate-700">
            {STATS.paragraphs.slice(1).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {STATS.highlights.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
                <p className="text-sm uppercase tracking-widest text-red-500 font-semibold">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-xs text-slate-500">{stat.source}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 space-y-3 text-sm text-slate-700">
            {STATS.socio.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" aria-hidden></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-red-100 bg-red-50/60 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Quartiers et hameaux surveillés</h3>
          <p className="text-sm text-slate-700">
            Nous nous appuyons sur les IRIS de l’INSEE et les périmètres communaux pour partager nos diagnostics.
          </p>
          <ul className="space-y-4">
            {STATS.neighborhoods.map((neighborhood) => (
              <li key={neighborhood.name} className="rounded-2xl bg-white/70 border border-red-100 p-4">
                <p className="text-base font-semibold text-red-700">{neighborhood.name}</p>
                <p className="mt-1 text-sm text-slate-700">{neighborhood.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [view, setView] = React.useState("home");

  const renderNavLink = (link) => {
    if (link.type === "view") {
      const isActive = view === link.view;
      return (
        <button
          key={link.label}
          type="button"
          onClick={() => setView(link.view)}
          className={`rounded-full px-4 py-1 text-sm font-semibold transition border ${
            isActive
              ? "bg-white text-red-600 border-white"
              : "border-white/30 text-white/90 hover:border-white/70"
          }`}
        >
          {link.label}
        </button>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        onClick={() => setView("home")}
        className="rounded-full px-4 py-1 text-sm font-semibold text-white/90 hover:text-white"
      >
        {link.label}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="bg-gradient-to-br from-red-700 to-red-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logoPcf}
                alt="Logo PCF Villefranche-de-Rouergue"
                className="h-12 w-12 rounded-xl border border-white/30 bg-white/10 object-contain p-1"
              />
              <div>
                <p className="text-sm uppercase tracking-widest text-red-100 font-semibold">Communistes villefranchois</p>
                <p className="font-bold text-lg text-white">Propositions municipales ouvertes</p>
              </div>
            </div>
            <nav className="flex items-center gap-3 ml-auto flex-wrap">
              {NAV_LINKS.map((link) => renderNavLink(link))}
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 border border-white/40 text-white px-4 py-2 text-sm font-semibold hover:bg-white/20"
              >
                Rejoindre
              </a>
            </nav>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center rounded-3xl border border-white/20 bg-white/10 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-100">Municipales 2026</p>
              <h1 className="mt-3 text-3xl font-extrabold text-white">Un vrai programme pour Villefranche</h1>
              <p className="mt-3 text-sm text-red-100">
                Des propositions concrètes, testées ailleurs, chiffrées. Parce que tu mérites mieux que des promesses.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/20">
              <img
                src={bandeau}
                alt="Bandeau de la liste communiste villefranchoise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {view === "stats" ? (
        <StatsPage onBack={() => setView("home")} />
      ) : (
        <main>
          <section id="vision" className="bg-gradient-to-br from-red-700 to-red-600 text-white">
          <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-[3fr_2fr] items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-100">{INTRO.badge}</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
                {INTRO.title}
              </h1>
              <div className="mt-5 space-y-4 text-lg leading-relaxed">
                {INTRO.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 text-sm uppercase tracking-widest text-red-100">
                {INTRO.signature}
              </p>
            </div>
            <div className="bg-white/10 border border-white/30 rounded-3xl p-6 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-100">
                Nos engagements immédiats
              </p>
              <ul className="space-y-4">
                {INTRO.commitments.map((commitment) => (
                  <li key={commitment.title} className="bg-white/10 rounded-2xl p-4">
                    <p className="text-sm uppercase tracking-wide text-red-100">{commitment.title}</p>
                    <p className="text-lg font-semibold">{commitment.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        <ThemeSheets />

        <section className="bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center space-y-4 mb-10">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Pour les curieux</p>
              <h2 className="text-3xl font-extrabold text-slate-900">{POUR_ALLER_PLUS_LOIN.title}</h2>
              <p className="text-base text-slate-600 max-w-3xl mx-auto">{POUR_ALLER_PLUS_LOIN.intro}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {POUR_ALLER_PLUS_LOIN.sections.map((section) => (
                <div key={section.title} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{section.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="participer" className="bg-red-50 border-y border-red-100">
          <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-[3fr_2fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">{PARTICIPER.badge}</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">{PARTICIPER.title}</h2>
              <div className="mt-4 space-y-3 text-base text-slate-700">
                {PARTICIPER.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white border border-red-100 p-6 space-y-5">
              <div className="flex flex-col gap-3">
                <a
                  href={JOIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-5 py-3 text-sm font-semibold hover:bg-red-700"
                >
                  Je veux participer aux rencontres
                </a>
                <a
                  href={JOIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-red-200 text-red-700 px-5 py-3 text-sm font-semibold hover:border-red-400 hover:text-red-800"
                >
                  Je rejoins l'équipe
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}

      <footer className="bg-white border-t border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap gap-4 items-center justify-between text-sm text-slate-600">
          <div>
            <p className="font-bold text-slate-900">PCF Villefranchois</p>
            <p>Programme partagé 2026 – Contribution libre pour les futures listes citoyennes.</p>
          </div>
          <p className="text-slate-500">Conception : collectif militant • Impression libre</p>
        </div>
      </footer>
    </div>
  );
}
