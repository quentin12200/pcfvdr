import React, { useState } from "react";
import { INTRO, SECTIONS, PARTICIPER, STATS, POUR_ALLER_PLUS_LOIN } from "./content";
import logoPcf from "../logo.png";
import bandeau from "../bandeau.png";
import "./index.css";

const JOIN_URL = "https://www.pcf.fr/adherer";

const COLOR_STYLES = {
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-600",
    hoverBg: "hover:bg-red-100",
    activeBg: "bg-red-600",
    activeText: "text-white",
    lightBg: "bg-red-50/70",
    gradient: "from-red-50 to-white"
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    hoverBg: "hover:bg-blue-100",
    activeBg: "bg-blue-600",
    activeText: "text-white",
    lightBg: "bg-blue-50/70",
    gradient: "from-blue-50 to-white"
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    hoverBg: "hover:bg-green-100",
    activeBg: "bg-green-600",
    activeText: "text-white",
    lightBg: "bg-green-50/70",
    gradient: "from-green-50 to-white"
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    hoverBg: "hover:bg-amber-100",
    activeBg: "bg-amber-600",
    activeText: "text-white",
    lightBg: "bg-amber-50/70",
    gradient: "from-amber-50 to-white"
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    hoverBg: "hover:bg-purple-100",
    activeBg: "bg-purple-600",
    activeText: "text-white",
    lightBg: "bg-purple-50/70",
    gradient: "from-purple-50 to-white"
  }
};

const ActionCard = ({ action, color = "red" }) => {
  const [activeTab, setActiveTab] = useState("probleme");
  const detailParagraphs = Array.isArray(action.detail) ? action.detail : [action.detail];
  const [diagnostic, ...measures] = detailParagraphs;
  const colorStyle = COLOR_STYLES[color];

  const exampleParagraphs =
    action.example && action.example.detail
      ? Array.isArray(action.example.detail)
        ? action.example.detail
        : [action.example.detail]
      : [];

  const tabs = [
    { id: "probleme", label: "Le problème", icon: "⚠️", badge: "Diagnostic" },
    { id: "solution", label: "Notre solution", icon: "✅", badge: `${measures.length} actions` },
    ...(action.example ? [{ id: "exemple", label: "Ça marche où ?", icon: "🌍", badge: "Exemples" }] : [])
  ];

  return (
    <article className={`rounded-[28px] border-2 ${colorStyle.border} bg-gradient-to-br from-white to-slate-50/30 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)] transition-all overflow-hidden flex flex-col group`}>
      {/* Header avec badge */}
      <header className={`${colorStyle.bg} ${colorStyle.border} border-b-2 p-5`}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="text-xl font-bold text-slate-900 leading-tight flex-1">{action.title}</h4>
          <span className={`${colorStyle.activeBg} text-white text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide whitespace-nowrap`}>
            Nouvelle
          </span>
        </div>
        {action.territories && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {action.territories.map((territory) => (
              <span key={territory} className={`${colorStyle.lightBg} ${colorStyle.text} text-xs px-2 py-0.5 rounded-full font-medium`}>
                📍 {territory}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Tabs - avec couleurs thématiques */}
      <div className={`flex gap-1 px-4 pt-3 bg-slate-50/50`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold transition-all rounded-t-xl flex-1 justify-center ${
              activeTab === tab.id
                ? `${colorStyle.activeBg} text-white shadow-md`
                : `${colorStyle.lightBg} ${colorStyle.text} hover:${colorStyle.bg}`
            }`}
          >
            <span className="text-sm">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-5 bg-white">
        {activeTab === "probleme" && diagnostic && (
          <div className="space-y-4">
            <div className={`rounded-2xl border-2 ${colorStyle.border} ${colorStyle.gradient} bg-gradient-to-br p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`${colorStyle.activeBg} text-white text-xs px-2 py-1 rounded font-bold uppercase`}>⚠️ Constat</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium">{diagnostic}</p>
            </div>
          </div>
        )}

        {activeTab === "solution" && measures.length > 0 && (
          <div className="space-y-3">
            {measures.map((paragraph, index) => (
              <div key={index} className={`rounded-2xl border ${colorStyle.border} bg-white p-5 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`${colorStyle.activeBg} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                    {index + 1}
                  </span>
                  <span className={`${colorStyle.text} text-xs font-bold uppercase tracking-wide`}>Action concrète</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{paragraph}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "exemple" && action.example && (
          <div className="space-y-4">
            <div className={`rounded-2xl border ${colorStyle.border} ${colorStyle.bg} p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🌍</span>
                <p className={`text-base font-bold ${colorStyle.text}`}>{action.example.city}</p>
              </div>
              <div className="space-y-3">
                {exampleParagraphs.map((paragraph, index) => (
                  <div key={index} className="flex gap-3">
                    <span className={`${colorStyle.activeBg} text-white text-xs px-2 py-1 rounded-full font-bold h-fit`}>
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed flex-1">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {action.validations && (
          <div className={`mt-4 rounded-2xl border-2 ${colorStyle.border} ${colorStyle.lightBg} p-4`}>
            <p className={`text-xs uppercase tracking-[0.3em] ${colorStyle.text} font-bold`}>✓ Déjà {action.validations} validations</p>
            <p className="mt-1 text-sm text-slate-700 font-medium">
              À 100 validations, on publie un guide détaillé pour appliquer cette mesure à Villefranche.
            </p>
          </div>
        )}
      </div>
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
  const [activeTheme, setActiveTheme] = useState("bloc1");
  const activeSection = SECTIONS.find(s => s.id === activeTheme);
  const colorStyle = COLOR_STYLES[activeSection?.color || "red"];

  return (
    <section id="themes" className="bg-slate-50/60 border-y border-red-100/60">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">Les propositions</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Des solutions concrètes pour Villefranche</h2>
          <p className="text-base text-slate-600 max-w-4xl mx-auto">
            Chaque mesure part d'un problème réel à Villefranche et propose une solution qui marche déjà ailleurs. Tout est chiffré, vérifié, réalisable.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-3 justify-center">
          {SECTIONS.map((section) => {
            const isActive = activeTheme === section.id;
            const sectionColor = COLOR_STYLES[section.color];
            return (
              <button
                key={section.id}
                onClick={() => setActiveTheme(section.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all border-2 ${
                  isActive
                    ? `${sectionColor.activeBg} ${sectionColor.activeText} ${sectionColor.border} shadow-lg scale-105`
                    : `${sectionColor.bg} ${sectionColor.text} ${sectionColor.border} ${sectionColor.hoverBg} hover:scale-102`
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="hidden sm:inline">{section.title}</span>
                <span className="sm:hidden">Bloc {section.id.replace("bloc", "")}</span>
              </button>
            );
          })}
        </div>

        {/* Active Theme Content */}
        {activeSection && (
          <article className={`rounded-[36px] border-2 ${colorStyle.border} bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden`}>
            <div className="p-6 sm:p-10 space-y-8">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className={`h-16 w-16 rounded-2xl ${colorStyle.activeBg} text-4xl flex items-center justify-center shadow-lg`} aria-hidden>
                  {activeSection.icon}
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-[0.4em] ${colorStyle.text} font-semibold`}>{activeSection.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{activeSection.title}</h3>
                  <p className="mt-3 text-base text-slate-600">{activeSection.description}</p>
                </div>
              </div>

              {/* Actions Grid */}
              <div className="grid gap-6 lg:grid-cols-2">
                {activeSection.actions.map((action) => (
                  <ActionCard key={action.title} action={action} color={activeSection.color} />
                ))}
              </div>

              {/* Fil rouge budgétaire - repositionné en bas */}
              {activeSection.focus && (
                <div className={`rounded-3xl border-2 ${colorStyle.border} ${colorStyle.activeBg} bg-gradient-to-br p-6 text-white shadow-xl`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">💰</span>
                    <p className="text-sm uppercase tracking-[0.3em] font-bold">Fil rouge budgétaire</p>
                  </div>
                  <p className="text-lg font-semibold leading-relaxed">{activeSection.focus}</p>
                </div>
              )}
            </div>
          </article>
        )}
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
