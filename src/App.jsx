import React from "react";
import { INTRO, SECTIONS, PARTICIPER, STATS } from "./content";
import logoPcf from "../logo.png";
import bandeau from "../bandeau.png";
import "./index.css";

const JOIN_URL = "https://www.pcf.fr/adherer";
const ActionCard = ({ action }) => {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-white to-red-50 border border-red-100 p-6 flex flex-col gap-4 shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">Mesure communiste</p>
        <h4 className="mt-2 text-xl font-semibold text-slate-900">{action.title}</h4>
        <p className="mt-2 text-sm text-slate-700">{action.detail}</p>
      </div>
      {action.example && (
        <div className="rounded-2xl border border-red-100 bg-white/80 p-4">
          <p className="text-xs uppercase tracking-widest text-red-500 font-semibold">Déjà réalisé</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{action.example.city}</p>
          <p className="mt-1 text-sm text-slate-600">{action.example.detail}</p>
        </div>
      )}
      <div className="rounded-2xl border border-dashed border-red-200 bg-white/60 p-4 text-sm text-slate-700 leading-relaxed">
        Cette fiche est prête pour les ateliers populaires. Ajoutez vos idées lors des réunions de quartier pour la mettre en
        œuvre dès 2026.
      </div>
    </div>
  );
};

const NAV_LINKS = [
  { label: "Vision", type: "anchor", href: "#vision" },
  { label: "Grands thèmes", type: "anchor", href: "#themes" },
  { label: "Les chiffres", type: "view", view: "stats" },
  { label: "Participer", type: "anchor", href: "#participer" }
];

const ThemesTabs = () => {
  const [activeId, setActiveId] = React.useState(SECTIONS[0]?.id ?? null);
  const activeSection = React.useMemo(
    () => SECTIONS.find((section) => section.id === activeId),
    [activeId]
  );

  return (
    <section id="themes" className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-red-500">Grands thèmes</p>
        <h2 className="mt-2 text-3xl font-extrabold">Bloc communiste pour Villefranche</h2>
        <p className="mt-3 text-base text-slate-600 max-w-3xl mx-auto">
          Choisissez un onglet pour découvrir nos priorités. Chaque fiche est rédigée pour être exploitable par une
          future municipalité.
        </p>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setActiveId(section.id)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeId === section.id
                ? "bg-red-600 text-white border-red-600"
                : "border-red-200 text-red-700 hover:border-red-400"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
      {activeSection && (
        <div className="mt-8 rounded-3xl border border-red-100 bg-white shadow-sm">
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-start gap-4">
              <div className="text-4xl" aria-hidden>
                {activeSection.icon}
              </div>
              <div className="flex-1 min-w-[250px]">
                <p className="text-xs uppercase tracking-widest text-red-600 font-semibold">
                  {activeSection.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{activeSection.title}</h3>
                <p className="mt-2 text-base text-slate-600">{activeSection.description}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {activeSection.actions.map((action) => (
                <ActionCard key={action.title} action={action} />
              ))}
            </div>
            {activeSection.focus && (
              <div className="mt-8 rounded-2xl bg-red-50 text-red-900 p-5 font-semibold">
                {activeSection.focus}
              </div>
            )}
          </div>
        </div>
      )}
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
                Rejoindre l’équipe
              </a>
            </nav>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center rounded-3xl border border-white/20 bg-white/10 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-100">Campagne 2026</p>
              <h1 className="mt-3 text-3xl font-extrabold text-white">Ensemble, réinventons Villefranche</h1>
              <p className="mt-3 text-sm text-red-100">
                Le bandeau de campagne devient la scène du débat : nos ateliers populaires alimentent le programme ouvert et
                l’assemblée citoyenne.
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


        <ThemesTabs />

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
              <h3 className="text-lg font-semibold text-slate-900">Comment agir</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {PARTICIPER.steps.map((step) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" aria-hidden></span>
                    <div>
                      <p className="font-semibold text-slate-900">{step.title}</p>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={JOIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-5 py-3 text-sm font-semibold hover:bg-red-700"
                >
                  Participer aux ateliers populaires
                </a>
                <a
                  href={JOIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-red-200 text-red-700 px-5 py-3 text-sm font-semibold hover:border-red-400 hover:text-red-800"
                >
                  Rejoindre l’équipe villefranchoise
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
