import React from "react";
import { INTRO, SECTIONS, PARTICIPER } from "./content";
import logoPcf from "../logo.png";
import "./index.css";

const NAV_LINKS = [
  { label: "Vision", href: "#vision" },
  { label: "Grands thèmes", href: "#themes" },
  { label: "Participer", href: "#participer" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logoPcf}
              alt="Logo PCF Villefranche-de-Rouergue"
              className="h-12 w-12 rounded-xl border border-red-100 object-contain p-1"
            />
            <div>
              <p className="text-sm uppercase tracking-widest text-red-600 font-semibold">
                Communistes villefranchois
              </p>
              <p className="font-bold text-lg">Propositions municipales ouvertes</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 ml-auto text-sm font-semibold text-slate-700">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-red-700">
                {link.label}
              </a>
            ))}
            <a
              href="#participer"
              className="rounded-full bg-red-600 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700"
            >
              Rejoindre l’équipe
            </a>
          </nav>
        </div>
      </header>

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

        <section className="max-w-6xl mx-auto px-4 py-12" id="themes">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">Grands thèmes</p>
            <h2 className="mt-2 text-3xl font-extrabold">Bloc communiste pour Villefranche</h2>
            <p className="mt-3 text-base text-slate-600 max-w-3xl mx-auto">
              Chaque bloc reprend l’esprit des propositions communistes nationales et les traduit pour les quartiers de la Bastide,
              du Tricot, de Fontanges et des villages associés. Notre ambition : être force de proposition pour toutes les listes
              citoyennes et ouvrir la porte à de nouveaux candidats populaires.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-red-100 bg-white shadow-sm"
              >
                <div className="p-6 sm:p-10">
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="text-4xl" aria-hidden>
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-[250px]">
                      <p className="text-xs uppercase tracking-widest text-red-600 font-semibold">
                        {section.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">{section.title}</h3>
                      <p className="mt-2 text-base text-slate-600">{section.description}</p>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {section.actions.map((action) => (
                      <div key={action.title} className="rounded-2xl border border-slate-100 p-5 bg-red-50/50">
                        <h4 className="text-lg font-semibold text-red-700">{action.title}</h4>
                        <p className="mt-2 text-sm text-slate-700">{action.detail}</p>
                      </div>
                    ))}
                  </div>
                  {section.focus && (
                    <div className="mt-8 rounded-2xl bg-red-50 text-red-900 p-5 font-semibold">
                      {section.focus}
                    </div>
                  )}
                </div>
              </section>
            ))}
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
            </div>
          </div>
        </section>
      </main>

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
