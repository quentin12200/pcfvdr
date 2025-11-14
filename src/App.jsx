import React, { useState } from "react";
import { INTRO, SECTIONS, PARTICIPER, STATS, POUR_ALLER_PLUS_LOIN } from "./content";
import logoPcf from "../logo.png";
import bandeau from "../bandeau.png";
import "./index.css";

const JOIN_URL = "https://www.pcf.fr/adherer";

// Fonction de génération de texte de partage
const generateShareText = (action, sectionTitle) => {
  const diagnostic = Array.isArray(action.detail) ? action.detail[0] : action.detail;
  const firstSolution = Array.isArray(action.detail) && action.detail.length > 1 ? action.detail[1] : "";

  // Texte court pour Twitter (280 caractères max)
  const twitterText = `${action.title} à Villefranche 🏛️

${diagnostic.substring(0, 120)}...

✅ ${firstSolution.substring(0, 80)}...

${action.example ? `✓ Ça marche à ${action.example.city.split('(')[0].trim()}` : ''}

#Villefranche2026 #PCF #ProgrammeConcret`;

  // Texte long pour Facebook et Instagram
  const longText = `${action.title} 🏛️

📍 LE PROBLÈME À VILLEFRANCHE :
${diagnostic.substring(0, 250)}...

✅ NOTRE PROPOSITION :
${firstSolution.substring(0, 200)}...

${action.example ? `
🌍 ÇA MARCHE OÙ ?
${action.example.city}
${Array.isArray(action.example.detail) ? action.example.detail[0].substring(0, 150) + '...' : ''}
` : ''}

💪 Un programme concret, chiffré, réalisable !

#Villefranche2026 #PCF #ProgrammeConcret #Municipales2026 #ServicesPublics
👉 Plus d'infos : [LIEN DU SITE]`;

  return { twitterText, longText };
};

// Composant de boutons de partage
const ShareButtons = ({ action, sectionTitle, color = "red" }) => {
  const [copied, setCopied] = React.useState(false);
  const colorStyle = COLOR_STYLES[color];
  const { twitterText, longText } = generateShareText(action, sectionTitle);

  const handleCopy = () => {
    navigator.clipboard.writeText(longText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(longText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="border-t border-slate-200 pt-4 mt-4">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">📢 Partager cette proposition</p>
      <div className="flex flex-wrap gap-2">
        {/* Twitter */}
        <button
          onClick={shareToTwitter}
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-800 transition-all"
          title="Partager sur X (Twitter)"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          X / Twitter
        </button>

        {/* Facebook */}
        <button
          onClick={shareToFacebook}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all"
          title="Partager sur Facebook"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </button>

        {/* Instagram / Copier */}
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            copied
              ? 'bg-green-100 text-green-700 border-2 border-green-300'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
          }`}
          title="Copier le texte pour Instagram"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copié !
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram (copier)
            </>
          )}
        </button>
      </div>
      <p className="text-xs text-slate-500 mt-2 italic">
        💡 {copied ? 'Texte copié ! Collez-le dans votre post Instagram.' : 'Le texte inclut la mesure, l\'exemple, les hashtags et emojis.'}
      </p>
    </div>
  );
};

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

        {/* Boutons de partage social */}
        <ShareButtons action={action} sectionTitle="" color={color} />
      </div>
    </article>
  );
};

const NAV_LINKS = [
  { label: "Vision", icon: "👁️", type: "anchor", href: "#vision" },
  { label: "Propositions", icon: "📋", type: "anchor", href: "#themes" },
  { label: "Chiffres", icon: "📊", type: "view", view: "stats" },
  { label: "Participer", icon: "✊", type: "anchor", href: "#participer" }
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
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all ${
            isActive
              ? "bg-white text-red-600 shadow-lg"
              : "bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/50"
          }`}
        >
          <span>{link.icon}</span>
          {link.label}
        </button>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        onClick={() => setView("home")}
        className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/30 px-4 py-2 text-sm font-bold text-white hover:bg-white/20 hover:border-white/50 transition-all"
      >
        <span>{link.icon}</span>
        {link.label}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white shadow-2xl border-b-4 border-red-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo et titre */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                <img
                  src={logoPcf}
                  alt="Logo PCF Villefranche-de-Rouergue"
                  className="relative h-14 w-14 rounded-2xl border-2 border-white/40 bg-white/10 object-contain p-1.5 shadow-xl"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-red-100 font-bold">PCF Villefranche</p>
                <p className="font-extrabold text-xl text-white leading-tight">Programme 2026</p>
              </div>
            </div>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((link) => renderNavLink(link))}
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noreferrer"
                className="ml-2 rounded-xl bg-white text-red-600 px-5 py-2.5 text-sm font-bold hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                ✊ Rejoindre
              </a>
            </nav>

            {/* Bouton menu mobile */}
            <button className="lg:hidden rounded-xl bg-white/10 border border-white/40 px-4 py-2 text-white">
              ☰ Menu
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
            {/* Contenu gauche */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide">
                  🗳️ Municipales 2026
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
                Un <span className="text-red-200">vrai</span> programme<br/>
                pour Villefranche
              </h1>

              <p className="text-xl text-red-100 leading-relaxed font-medium">
                Des propositions concrètes, testées ailleurs, chiffrées. Parce que tu mérites mieux que des promesses en l'air.
              </p>

              {/* Stats clés */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-black text-white">26</div>
                  <div className="text-xs text-red-100 font-semibold uppercase mt-1">Actions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-black text-white">5</div>
                  <div className="text-xs text-red-100 font-semibold uppercase mt-1">Thèmes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-xs text-red-100 font-semibold uppercase mt-1">Chiffré</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#themes"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3.5 rounded-xl font-bold text-base shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
                >
                  📋 Voir le programme
                </a>
                <a
                  href="#participer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3.5 rounded-xl font-bold text-base hover:bg-white/20 transition-all"
                >
                  ✊ Participer
                </a>
              </div>
            </div>

            {/* Image bandeau */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform">
                <img
                  src={bandeau}
                  alt="Bandeau de la liste communiste villefranchoise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {view === "stats" ? (
        <StatsPage onBack={() => setView("home")} />
      ) : (
        <main>
          {/* Section Compétences Municipales */}
          <section className="bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="text-center space-y-4 mb-12">
                <span className="inline-block bg-red-100 text-red-700 rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide">
                  🏛️ Comprendre le pouvoir municipal
                </span>
                <h2 className="text-4xl font-black text-slate-900">
                  Qu'est-ce qu'une mairie peut <span className="text-red-600">vraiment</span> faire ?
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Beaucoup pensent que la mairie ne peut rien faire. C'est faux ! Les communes ont des <strong>compétences précises et étendues</strong> sur votre quotidien. Voici ce que la mairie de Villefranche PEUT décider :
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🏫",
                    title: "Éducation & Enfance",
                    powers: ["Construction et entretien des écoles", "Cantines scolaires (tarifs, qualité, gratuité)", "Activités périscolaires", "Crèches municipales", "Accueil de loisirs"],
                    color: "purple"
                  },
                  {
                    icon: "🏘️",
                    title: "Urbanisme & Logement",
                    powers: ["Plan Local d'Urbanisme (PLU)", "Permis de construire", "Logements sociaux", "Rénovation de centres-villes", "Lutte contre logements vacants"],
                    color: "blue"
                  },
                  {
                    icon: "🚌",
                    title: "Transports & Mobilité",
                    powers: ["Bus et transports locaux", "Pistes cyclables", "Voirie et trottoirs", "Parkings publics", "Gratuité des transports"],
                    color: "green"
                  },
                  {
                    icon: "🏥",
                    title: "Services Publics",
                    powers: ["Centres de santé municipaux", "CCAS (aide sociale)", "Distribution d'eau", "Collecte des déchets", "Espaces verts"],
                    color: "red"
                  },
                  {
                    icon: "🎭",
                    title: "Culture & Sport",
                    powers: ["Équipements sportifs (stades, piscines)", "Bibliothèques et médiathèques", "Festivals et événements", "Conservatoires", "Associations locales"],
                    color: "amber"
                  },
                  {
                    icon: "💰",
                    title: "Budget & Démocratie",
                    powers: ["Budget participatif", "Tarifs des services publics", "Impôts locaux (taux)", "Transparence des comptes", "Consultations citoyennes"],
                    color: "red"
                  }
                ].map((domain) => {
                  const colors = {
                    red: "bg-red-50 border-red-200 text-red-700",
                    blue: "bg-blue-50 border-blue-200 text-blue-700",
                    green: "bg-green-50 border-green-200 text-green-700",
                    purple: "bg-purple-50 border-purple-200 text-purple-700",
                    amber: "bg-amber-50 border-amber-200 text-amber-700"
                  };
                  return (
                    <div key={domain.title} className={`rounded-2xl border-2 ${colors[domain.color]} p-6 hover:shadow-lg transition-shadow`}>
                      <div className="text-4xl mb-3">{domain.icon}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{domain.title}</h3>
                      <ul className="space-y-2">
                        {domain.powers.map((power) => (
                          <li key={power} className="flex gap-2 text-sm text-slate-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>{power}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center">
                <p className="text-2xl font-bold mb-3">
                  💪 Une mairie peut TOUT changer dans ton quotidien
                </p>
                <p className="text-lg text-red-100 max-w-3xl mx-auto">
                  Écoles, transports, logement, culture, santé... <strong>Ce n'est pas "juste" une mairie</strong>. C'est le pouvoir le plus proche de toi. Et en 2026, on peut décider ensemble comment l'utiliser pour Villefranche.
                </p>
              </div>
            </div>
          </section>

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
