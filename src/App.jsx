/**
 * ============================================================================
 * APPLICATION PROGRAMME PCF VILLEFRANCHE 2026
 * ============================================================================
 *
 * Ce fichier contient toute l'interface de l'application.
 *
 * STRUCTURE :
 * 1. Imports et configuration
 * 2. Utilitaires (animations, hooks)
 * 3. Composants de partage et affichage
 * 4. Composants de fonctionnalités (calculateur, comparateur, etc.)
 * 5. Composants de pages (Admin, Stats, etc.)
 * 6. Application principale
 *
 * POUR MODIFIER LE CONTENU (textes, mesures) :
 * → Allez dans src/content.js
 *
 * POUR MODIFIER L'APPARENCE (couleurs, styles) :
 * → Cherchez les classes Tailwind dans ce fichier
 */

import React, { useState, useEffect, useRef } from "react";
import { INTRO, SECTIONS, PARTICIPER, STATS, POUR_ALLER_PLUS_LOIN } from "./content";
import logoPcf from "../logo.png";
import bandeau from "../bandeau.png";
import image1 from "../1200x680.jpg";
import image2 from "../aveyron-2823061_1280.jpg";
import image3 from "../calvaire_avec_credit__gallery.jpg";
import image4 from "../collegiale-villefranche-bastide-j.morel.jpg";
import image5 from "../parasol-marche-villefranche.jpg";
import image6 from "../villefranche1.jpg";
import "./index.css";

const JOIN_URL = "https://www.pcf.fr/adherer";

// ============================================================================
// UTILITAIRES - Hooks et animations
// ============================================================================

// Hook pour détecter quand un élément entre dans le viewport (pour animations)
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Composant pour animer les chiffres
const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// ============================================================================
// CARROUSEL D'IMAGES
// ============================================================================

const ImageCarousel = () => {
  const images = [
    { src: bandeau, alt: "Bandeau de la liste communiste villefranchoise" },
    { src: image4, alt: "Collégiale de Villefranche" },
    { src: image5, alt: "Marché de Villefranche" },
    { src: image6, alt: "Vue de Villefranche" },
    { src: image2, alt: "Paysage de l'Aveyron" },
    { src: image3, alt: "Patrimoine de Villefranche" },
    { src: image1, alt: "Villefranche-de-Rouergue" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Conteneur des images */}
      <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
        <div className="relative w-full aspect-[16/9]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-red-600 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          aria-label="Image précédente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-red-600 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          aria-label="Image suivante"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              } h-2 rounded-full`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// PARTAGE SOCIAL - Génération de textes pour réseaux sociaux
// ============================================================================

// Fonction qui génère le texte à partager sur les réseaux sociaux
// Paramètres :
//   - action : la mesure à partager (contient title, detail, example)
//   - sectionTitle : le nom du bloc (ex: "Services publics")
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
  const [shareMessage, setShareMessage] = React.useState('');
  const colorStyle = COLOR_STYLES[color];
  const { twitterText, longText } = generateShareText(action, sectionTitle);

  const showMessage = (msg) => {
    setShareMessage(msg);
    setTimeout(() => setShareMessage(''), 4000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(longText);
    showMessage('✅ Texte copié ! Collez-le dans votre post Instagram.');
  };

  const shareToTwitter = async () => {
    // Copier automatiquement le texte dans le presse-papiers
    try {
      await navigator.clipboard.writeText(twitterText);
      showMessage('✅ Texte copié ! Collez-le dans votre tweet.');
    } catch (err) {
      console.log('Clipboard failed:', err);
    }

    // Ouvrir Twitter avec le texte pré-rempli
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = async () => {
    // Copier automatiquement le texte complet dans le presse-papiers
    try {
      await navigator.clipboard.writeText(longText);
      showMessage('✅ Texte copié ! Collez-le dans votre post Facebook.');
    } catch (err) {
      console.log('Clipboard failed:', err);
    }

    // Ouvrir Facebook (l'utilisateur devra coller le texte car Facebook ne supporte pas le pré-remplissage)
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
          title="Copier le texte pour Instagram"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Instagram (copier)
        </button>
      </div>

      {/* Message de confirmation de partage */}
      {shareMessage && (
        <div className="mt-3 p-3 bg-green-50 border-2 border-green-300 rounded-xl text-green-800 text-sm font-bold animate-pulse">
          {shareMessage}
        </div>
      )}

      <p className="text-xs text-slate-500 mt-2 italic">
        💡 Le texte est copié automatiquement dans le presse-papiers. Collez-le dans votre post !
      </p>
    </div>
  );
};

// ============================================================================
// STYLES - Configuration des couleurs pour chaque bloc thématique
// ============================================================================

// Définit les couleurs utilisées pour chaque thème de mesures
// Chaque couleur a plusieurs variantes (fond, bordure, texte, gradients...)
// Pour changer les couleurs d'un bloc, modifiez ici
const COLOR_STYLES = {
  red: {  // Rouge - Pour "Pouvoir citoyen" et budgets
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-600",
    hoverBg: "hover:bg-red-100",
    activeBg: "bg-red-600",
    activeText: "text-white",
    lightBg: "bg-red-50/70",
    gradient: "from-red-50 to-white",
    headerGradient: "from-red-600 to-red-700"
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    hoverBg: "hover:bg-blue-100",
    activeBg: "bg-blue-600",
    activeText: "text-white",
    lightBg: "bg-blue-50/70",
    gradient: "from-blue-50 to-white",
    headerGradient: "from-blue-600 to-blue-700"
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    hoverBg: "hover:bg-green-100",
    activeBg: "bg-green-600",
    activeText: "text-white",
    lightBg: "bg-green-50/70",
    gradient: "from-green-50 to-white",
    headerGradient: "from-green-600 to-green-700"
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    hoverBg: "hover:bg-amber-100",
    activeBg: "bg-amber-600",
    activeText: "text-white",
    lightBg: "bg-amber-50/70",
    gradient: "from-amber-50 to-white",
    headerGradient: "from-amber-600 to-amber-700"
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    hoverBg: "hover:bg-purple-100",
    activeBg: "bg-purple-600",
    activeText: "text-white",
    lightBg: "bg-purple-50/70",
    gradient: "from-purple-50 to-white",
    headerGradient: "from-purple-600 to-purple-700"
  }
};

// ============================================================================
// CARTE DE MESURE - Affichage d'une proposition politique
// ============================================================================

// Composant qui affiche UNE mesure du programme
// Paramètres :
//   - action : la mesure à afficher (contient title, detail, example)
//   - color : la couleur du thème (red, blue, green, etc.)
//
// Structure d'affichage :
//   1. Header avec titre en gros + badge économies si trouvé
//   2. Section rouge "Le Problème" = diagnostic
//   3. Section verte "Notre Solution" = les mesures concrètes
//   4. Section bleue "Ça marche où ?" = les exemples d'autres villes
//   5. Boutons de partage social
const ActionCard = ({ action, color = "red" }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const detailParagraphs = Array.isArray(action.detail) ? action.detail : [action.detail];
  const [diagnostic, ...measures] = detailParagraphs;
  const colorStyle = COLOR_STYLES[color];

  const exampleParagraphs =
    action.example && action.example.detail
      ? Array.isArray(action.example.detail)
        ? action.example.detail
        : [action.example.detail]
      : [];

  // Extraire les économies du titre ou du diagnostic
  const extractEconomies = () => {
    const text = action.title + " " + diagnostic;
    const match = text.match(/(\d[\d\s]*€)/);
    return match ? match[0] : null;
  };

  const economies = extractEconomies();

  return (
    <article className={`group relative rounded-3xl border-2 ${colorStyle.border} bg-gradient-to-br from-white via-white to-${color}-50/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
      {/* Header avec titre en GROS */}
      <div className={`relative bg-gradient-to-r ${colorStyle.headerGradient} p-6`}>
        <div className="flex items-start gap-4">
          {/* Icône thématique */}
          <div className="text-6xl opacity-20 absolute -right-4 -top-4">
            {action.title.includes("Cantine") || action.title.includes("cantines") ? "🍽️" :
             action.title.includes("Crèche") || action.title.includes("crèches") ? "👶" :
             action.title.includes("Eau") || action.title.includes("eau") ? "💧" :
             action.title.includes("Bus") || action.title.includes("transport") ? "🚌" :
             action.title.includes("Santé") || action.title.includes("santé") ? "🏥" :
             action.title.includes("Logement") || action.title.includes("logement") ? "🏠" :
             action.title.includes("Budget") ? "🗳️" : "⭐"}
          </div>

          <div className="flex-1 relative z-10">
            <h4 className="text-2xl font-black text-white leading-tight mb-2">
              {action.title}
            </h4>

            {/* Badge économies si trouvé */}
            {economies && (
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-black text-lg shadow-lg">
                <span>💰</span>
                <span>{economies} économisés</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        {/* Problème - toujours visible */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
              ⚠️ Le Problème
            </span>
          </div>
          <p className="text-slate-800 leading-relaxed font-medium">
            {diagnostic}
          </p>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
              ✅ Notre Solution
            </span>
          </div>
          <div className="space-y-3">
            {measures.slice(0, isExpanded ? measures.length : 1).map((paragraph, index) => (
              <div key={index} className="flex gap-3">
                <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-slate-800 leading-relaxed flex-1 font-medium">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          {measures.length > 1 && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="mt-3 text-green-700 hover:text-green-900 font-bold text-sm flex items-center gap-2 group/btn"
            >
              <span>Voir les {measures.length - 1} autres actions</span>
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Exemple - si existe */}
        {action.example && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
                🌍 Ça marche où ?
              </span>
              <span className="text-blue-900 font-bold text-sm">
                {action.example.city}
              </span>
            </div>
            <div className="space-y-2">
              {exampleParagraphs.map((paragraph, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <p className="text-slate-700 leading-relaxed flex-1 text-sm">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
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

// ============================================================================
// CARROUSEL - Propositions phares en rotation
// ============================================================================

// Affiche les 6 propositions principales en carrousel animé
// Change automatiquement toutes les 5 secondes
// Affiche : icône, titre, impact chiffré, description courte
const PhareCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      icon: "🍽️",
      title: "Cantines scolaires",
      subtitle: "100% GRATUITES",
      impact: "1 200 à 2 000€",
      impactLabel: "économisés par enfant et par an",
      description: "Fini de payer la cantine ! Tous les enfants mangent gratuitement avec des produits locaux et bio.",
      color: "from-purple-600 to-purple-700",
      badge: "500 000€/an",
      link: "#themes"
    },
    {
      icon: "👶",
      title: "Crèches et centres de loisirs",
      subtitle: "100% GRATUITS",
      impact: "200 à 400€/mois",
      impactLabel: "économisés par famille",
      description: "Régie municipale gratuite : crèches, centres de loisirs, périscolaire. Fin des galères de garde d'enfants !",
      color: "from-pink-500 to-rose-600",
      badge: "1,2M€/an - Égalité totale",
      link: "#themes"
    },
    {
      icon: "💧",
      title: "Eau en régie publique",
      subtitle: "STOP À LA HAUSSE DE +300%",
      impact: "200 à 400€/an",
      impactLabel: "économisés par foyer",
      description: "Fini les hausses scandaleuses ! Régie municipale avec tarif social. L'eau est un bien commun, pas une marchandise.",
      color: "from-cyan-500 to-blue-600",
      badge: "Tarif divisé par 2",
      link: "#themes"
    },
    {
      icon: "🚌",
      title: "Basti'Bus pérennisé",
      subtitle: "FRÉQUENCE DOUBLÉE",
      impact: "20 min",
      impactLabel: "entre chaque bus",
      description: "Service permanent avec horaires adaptés aux travailleurs (6h30-22h). Service le dimanche pour les loisirs.",
      color: "from-green-600 to-emerald-700",
      badge: "Déjà gratuit",
      link: "#themes"
    },
    {
      icon: "🗳️",
      title: "Budget participatif",
      subtitle: "1 MILLION D'EUROS",
      impact: "5%",
      impactLabel: "du budget d'investissement",
      description: "Les habitant·es décident directement de 1 million € par an. Assemblées citoyennes avec droit de veto.",
      color: "from-red-600 to-red-700",
      badge: "Pouvoir aux citoyen·nes",
      link: "#themes"
    },
    {
      icon: "🏥",
      title: "Centre de santé municipal",
      subtitle: "MÉDECINS SALARIÉS",
      impact: "Gratuit",
      impactLabel: "ou tarifs solidaires",
      description: "4 médecins, 2 dentistes, psychologue, sage-femme. Fin du désert médical à Villefranche.",
      color: "from-teal-600 to-cyan-700",
      badge: "Accès aux soins",
      link: "#themes"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-play toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative">
      {/* Slide principal */}
      <div className={`relative rounded-3xl bg-gradient-to-br ${slide.color} p-10 md:p-16 text-white shadow-2xl overflow-hidden`}>
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* Contenu gauche */}
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
              {slide.badge}
            </div>

            <div className="space-y-3">
              <div className="text-7xl">{slide.icon}</div>
              <h3 className="text-3xl md:text-4xl font-black leading-tight">
                {slide.title}
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-white/90">
                {slide.subtitle}
              </p>
            </div>

            <p className="text-lg text-white/90 leading-relaxed">
              {slide.description}
            </p>

            <a
              href={slide.link}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              En savoir plus
              <span>→</span>
            </a>
          </div>

          {/* Contenu droite - Impact chiffré */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/30 p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-white/80 mb-3">
              Impact direct
            </p>
            <div className="text-6xl md:text-7xl font-black mb-2 leading-tight">
              {slide.impact}
            </div>
            <p className="text-xl font-semibold text-white/90">
              {slide.impactLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full p-3 transition-all hover:scale-110"
          aria-label="Proposition précédente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-red-600 w-8 h-3'
                  : 'bg-slate-300 w-3 h-3 hover:bg-slate-400'
              }`}
              aria-label={`Aller à la proposition ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full p-3 transition-all hover:scale-110"
          aria-label="Proposition suivante"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Compteur */}
      <div className="text-center mt-4">
        <p className="text-sm text-slate-500 font-medium">
          Proposition {currentSlide + 1} sur {slides.length}
        </p>
      </div>
    </div>
  );
};

// ============================================================================
// CALCULATEUR D'ÉCONOMIES - Outil interactif
// ============================================================================

// Permet aux visiteurs de calculer combien ils économiseraient
// avec le programme PCF selon leur situation (nombre d'enfants)
//
// Calcule automatiquement :
//   - Cantines gratuites : 1600€/enfant/an
//   - Petits déjeuners : 65€/enfant/an
//   - Fournitures scolaires : 150€/enfant/an
//   - Crèches/centres de loisirs : 3600€/enfant/an
const CalculateurEconomies = () => {
  const [nbEnfants, setNbEnfants] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  const calculateEconomies = () => {
    const cantines = nbEnfants * 1600; // Moyenne entre 1200 et 2000€
    const petitsDej = nbEnfants * 65;
    const fournitures = nbEnfants * 150;
    const creches = nbEnfants * 3600; // 300€/mois x 12 mois moyenne
    return cantines + petitsDej + fournitures + creches;
  };

  const total = calculateEconomies();

  const handleCalculate = () => {
    setShowResult(true);
  };

  const shareResult = () => {
    const text = `💰 Avec le programme PCF à Villefranche, j'économiserais ${total.toLocaleString()}€ par an !

${nbEnfants > 0 ? `✅ Cantines gratuites : ${(nbEnfants * 1600).toLocaleString()}€
✅ Petits déjeuners gratuits : ${(nbEnfants * 65).toLocaleString()}€
✅ Fournitures scolaires gratuites : ${(nbEnfants * 150).toLocaleString()}€
✅ Crèches/centres de loisirs gratuits : ${(nbEnfants * 3600).toLocaleString()}€` : ''}

💪 Un programme concret pour le pouvoir d'achat !

#Villefranche2026 #PCF #PouvoirDAchat
👉 Calculez vos économies : [LIEN]`;

    navigator.clipboard.writeText(text);
    alert('✅ Texte copié ! Partagez vos économies sur les réseaux sociaux.');
  };

  return (
    <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black mb-3">💰 Calculez VOS économies</h2>
          <p className="text-xl text-green-100">
            Combien économiseriez-VOUS avec notre programme ?
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20">
          <div className="space-y-6">
            {/* Nombre d'enfants */}
            <div>
              <label className="block text-lg font-bold mb-3">
                👶 Combien d'enfants scolarisés avez-vous ?
              </label>
              <div className="flex gap-3 flex-wrap">
                {[0, 1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    onClick={() => setNbEnfants(n)}
                    className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                      nbEnfants === n
                        ? 'bg-white text-green-700 scale-110 shadow-xl'
                        : 'bg-white/20 hover:bg-white/30 border-2 border-white/40'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Bouton calculer */}
            <button
              onClick={handleCalculate}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl py-4 rounded-xl transition-all hover:scale-105 shadow-2xl"
            >
              🧮 CALCULER MES ÉCONOMIES
            </button>

            {/* Résultat */}
            {showResult && total > 0 && (
              <div className="bg-yellow-400 text-green-900 rounded-2xl p-6 mt-6 animate-pulse">
                <p className="text-center text-lg font-bold mb-2">
                  💰 VOUS ÉCONOMISERIEZ :
                </p>
                <p className="text-center text-6xl font-black mb-4">
                  {total.toLocaleString()}€
                </p>
                <p className="text-center text-lg font-bold mb-4">PAR AN !</p>

                <div className="bg-green-900/20 rounded-xl p-4 mb-4 text-sm space-y-1">
                  {nbEnfants > 0 && (
                    <>
                      <p>✅ Cantines gratuites : <strong>{(nbEnfants * 1600).toLocaleString()}€</strong></p>
                      <p>✅ Petits déjeuners gratuits : <strong>{(nbEnfants * 65).toLocaleString()}€</strong></p>
                      <p>✅ Fournitures scolaires gratuites : <strong>{(nbEnfants * 150).toLocaleString()}€</strong></p>
                      <p>✅ Crèches/centres de loisirs gratuits : <strong>{(nbEnfants * 3600).toLocaleString()}€</strong></p>
                    </>
                  )}
                </div>

                <button
                  onClick={shareResult}
                  className="w-full bg-green-900 hover:bg-green-800 text-white font-bold py-3 rounded-xl transition-all"
                >
                  📢 PARTAGER MES ÉCONOMIES
                </button>
              </div>
            )}

            {showResult && total === 0 && (
              <div className="bg-white/20 rounded-2xl p-6 mt-6 text-center">
                <p className="text-lg font-bold">
                  Notre programme bénéficie à tous les habitants de Villefranche !
                </p>
                <p className="mt-2">
                  Découvrez toutes nos mesures ci-dessous 👇
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// COMPARATEUR AVANT/APRÈS - Visualisation des changements
// ============================================================================

// Affiche 6 comparaisons visuelles "Aujourd'hui vs Avec le PCF"
// Pour chaque mesure : situation actuelle → nouvelle situation → économies
const ComparateurAvantApres = () => {
  const comparaisons = [
    {
      icon: "🍽️",
      titre: "Cantine scolaire",
      avant: "5€ par repas",
      apres: "100% GRATUIT",
      economie: "1 200-2 000€/an/enfant",
      color: "purple"
    },
    {
      icon: "👶",
      titre: "Crèche + centres de loisirs",
      avant: "200-400€/mois",
      apres: "100% GRATUIT",
      economie: "2 400-4 800€/an/famille",
      color: "pink"
    },
    {
      icon: "💧",
      titre: "Prix de l'eau",
      avant: "Hausse +300% en 2025",
      apres: "Tarif divisé par 2",
      economie: "200-400€/an/foyer",
      color: "cyan"
    },
    {
      icon: "🚌",
      titre: "Basti'Bus",
      avant: "Arrêts à 19h30",
      apres: "Service jusqu'à 22h",
      economie: "Fréquence doublée",
      color: "orange"
    },
    {
      icon: "🏥",
      titre: "Consultation médicale",
      avant: "25€ minimum",
      apres: "20€ centre municipal",
      economie: "Économies + accès facilité",
      color: "green"
    },
    {
      icon: "🗳️",
      titre: "Budget participatif",
      avant: "0€",
      apres: "300 000€/an",
      economie: "500+ citoyens décident",
      color: "teal"
    }
  ];

  const colorClasses = {
    purple: "from-purple-600 to-purple-700",
    orange: "from-orange-600 to-orange-700",
    blue: "from-blue-600 to-blue-700",
    red: "from-red-600 to-red-700",
    green: "from-green-600 to-green-700",
    teal: "from-teal-600 to-teal-700",
    pink: "from-pink-500 to-rose-600",
    cyan: "from-cyan-500 to-blue-600"
  };

  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3">⚡ Avant / Après</h2>
          <p className="text-xl text-slate-300">
            Ce qui change CONCRÈTEMENT avec notre programme
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparaisons.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-white/40 transition-all hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${colorClasses[item.color]} p-4 text-center`}>
                <span className="text-5xl">{item.icon}</span>
                <h3 className="text-xl font-bold mt-2">{item.titre}</h3>
              </div>

              <div className="p-6 space-y-4">
                {/* Avant */}
                <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-3">
                  <p className="text-xs uppercase tracking-wider text-red-300 font-bold mb-1">
                    ❌ Aujourd'hui
                  </p>
                  <p className="text-lg font-bold text-red-200">{item.avant}</p>
                </div>

                {/* Flèche */}
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Après */}
                <div className="bg-green-900/30 border-2 border-green-500/50 rounded-xl p-3">
                  <p className="text-xs uppercase tracking-wider text-green-300 font-bold mb-1">
                    ✅ Avec le PCF
                  </p>
                  <p className="text-lg font-bold text-green-200">{item.apres}</p>
                </div>

                {/* Économie */}
                <div className="bg-yellow-400 text-slate-900 rounded-xl p-3 text-center">
                  <p className="text-sm font-black">💰 {item.economie}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-yellow-400">
            💪 Un programme qui redonne du pouvoir d'achat aux Villefranchois !
          </p>
        </div>
      </div>
    </section>
  );
};

// Bouton flottant pour accéder aux mesures
const FloatingButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToMesures = () => {
    const element = document.getElementById('themes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToMesures}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-110 animate-bounce"
          style={{ boxShadow: '0 10px 40px rgba(220, 38, 38, 0.4)' }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
            <span className="hidden sm:inline">Voir les mesures</span>
            <span className="sm:hidden">📋</span>
          </div>
        </button>
      )}
    </>
  );
};

// ============================================================================
// BARRE DE RECHERCHE - Recherche dans toutes les mesures
// ============================================================================

// Permet de chercher un mot-clé dans toutes les mesures du programme
// Recherche dans : titre, détails, exemples, villes
// Affiche les résultats en temps réel dès 2 caractères tapés
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length < 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const searchResults = [];
    SECTIONS.forEach(section => {
      section.actions.forEach(action => {
        const searchString = `${action.title} ${JSON.stringify(action.detail)} ${action.example?.city || ''}`.toLowerCase();
        if (searchString.includes(term.toLowerCase())) {
          searchResults.push({
            action,
            sectionTitle: section.title,
            sectionIcon: section.icon,
            sectionId: section.id,
            sectionColor: section.color
          });
        }
      });
    });
    setResults(searchResults);
  };

  return (
    <div className="bg-white border-y-2 border-slate-200 py-8 sticky top-[72px] z-40 shadow-md">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="🔍 Rechercher une mesure (ex: cantine, transport, logement...)"
            className="w-full px-6 py-4 pr-12 text-lg border-3 border-slate-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {isSearching && results.length > 0 && (
          <div className="mt-4 bg-slate-50 rounded-2xl border-2 border-slate-200 p-4 max-h-96 overflow-y-auto">
            <p className="text-sm font-bold text-slate-500 mb-3">
              {results.length} résultat{results.length > 1 ? 's' : ''} trouvé{results.length > 1 ? 's' : ''} :
            </p>
            <div className="space-y-2">
              {results.map((result, index) => (
                <a
                  key={index}
                  href={`#themes`}
                  className="block p-3 bg-white rounded-xl border-2 border-slate-200 hover:border-red-400 hover:shadow-lg transition-all"
                  onClick={() => setIsSearching(false)}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{result.sectionIcon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">{result.action.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        📂 {result.sectionTitle}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {isSearching && results.length === 0 && (
          <div className="mt-4 bg-yellow-50 rounded-2xl border-2 border-yellow-200 p-4 text-center">
            <p className="text-sm text-yellow-800">
              Aucune mesure trouvée pour "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// AVIS DES VISITEURS - Formulaire de commentaires
// ============================================================================

// Section où les visiteurs peuvent laisser leurs avis sur le programme
// Les avis sont stockés dans localStorage et doivent être validés par l'admin
// avant d'apparaître publiquement sur le site
const AvisSection = () => {
  const [avis, setAvis] = React.useState([]);
  const [nom, setNom] = React.useState('');
  const [commentaire, setCommentaire] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const storedAvis = localStorage.getItem('avis_pcf_villefranche');
    if (storedAvis) {
      setAvis(JSON.parse(storedAvis).filter(a => a.valide));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom || !commentaire) return;

    const newAvis = {
      id: Date.now(),
      nom,
      commentaire,
      date: new Date().toISOString(),
      valide: false
    };

    const allAvis = JSON.parse(localStorage.getItem('avis_pcf_villefranche') || '[]');
    allAvis.push(newAvis);
    localStorage.setItem('avis_pcf_villefranche', JSON.stringify(allAvis));

    setNom('');
    setCommentaire('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-3">💬 Ils soutiennent notre programme</h2>
          <p className="text-xl text-slate-600">
            Partagez votre avis sur nos propositions
          </p>
        </div>

        {/* Avis validés */}
        {avis.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {avis.map(a => (
              <div key={a.id} className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    👤
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{a.nom}</h4>
                    <p className="text-xs text-slate-500">
                      {new Date(a.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{a.commentaire}"</p>
              </div>
            ))}
          </div>
        )}

        {/* Formulaire */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-slate-200">
          <h3 className="text-2xl font-black text-slate-900 mb-6">✍️ Laissez votre avis</h3>

          {submitted && (
            <div className="mb-6 bg-green-50 border-2 border-green-300 rounded-xl p-4 text-green-800 font-bold animate-pulse">
              ✅ Merci ! Votre avis sera publié après validation.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Votre nom ou pseudo
              </label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Ex: Marie D., Habitant de Villefranche"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Votre avis sur le programme
              </label>
              <textarea
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                placeholder="Dites-nous ce que vous pensez de nos propositions..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-lg py-4 rounded-xl transition-all hover:scale-105 shadow-xl"
            >
              📤 ENVOYER MON AVIS
            </button>

            <p className="text-xs text-slate-500 text-center">
              Votre avis sera vérifié avant publication
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// ADMINISTRATION - Gestion des avis (réservé PCF)
// ============================================================================

// Interface d'administration pour valider ou supprimer les avis
// Accès protégé par mot de passe : pcfvillefranche2026
//
// POUR MODIFIER LES MESURES DU PROGRAMME :
// → N'utilisez PAS cette interface
// → Modifiez directement le fichier src/content.js
// → Puis faites npm run build
//
// Cette interface sert UNIQUEMENT à gérer les avis des visiteurs
const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [avisEnAttente, setAvisEnAttente] = React.useState([]);

  const loadAvis = () => {
    const allAvis = JSON.parse(localStorage.getItem('avis_pcf_villefranche') || '[]');
    setAvisEnAttente(allAvis.filter(a => !a.valide));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'pcfvillefranche2026') {
      setIsAdmin(true);
      loadAvis();
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const validerAvis = (id) => {
    const allAvis = JSON.parse(localStorage.getItem('avis_pcf_villefranche') || '[]');
    const updated = allAvis.map(a => a.id === id ? { ...a, valide: true } : a);
    localStorage.setItem('avis_pcf_villefranche', JSON.stringify(updated));
    loadAvis();
    window.location.reload();
  };

  const supprimerAvis = (id) => {
    const allAvis = JSON.parse(localStorage.getItem('avis_pcf_villefranche') || '[]');
    const filtered = allAvis.filter(a => a.id !== id);
    localStorage.setItem('avis_pcf_villefranche', JSON.stringify(filtered));
    loadAvis();
  };

  if (!isAdmin) {
    return (
      <div className="bg-slate-900 text-white py-8">
        <div className="max-w-md mx-auto px-4">
          <form onSubmit={handleLogin} className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">🔐 Administration</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white mb-4"
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg"
            >
              Connexion
            </button>
            <p className="text-xs text-slate-400 mt-3 text-center">
              Réservé aux membres de la section PCF
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black">👮 Gestion des avis ({avisEnAttente.length} en attente)</h3>
          <button
            onClick={() => setIsAdmin(false)}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-2 rounded-lg"
          >
            🚪 Déconnexion
          </button>
        </div>

        {avisEnAttente.length === 0 && (
          <p className="text-slate-400">Aucun avis en attente de validation.</p>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {avisEnAttente.map(a => (
            <div key={a.id} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold">{a.nom}</h4>
                  <p className="text-xs text-slate-400">
                    {new Date(a.date).toLocaleString('fr-FR')}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4 italic">"{a.commentaire}"</p>
              <div className="flex gap-2">
                <button
                  onClick={() => validerAvis(a.id)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg"
                >
                  ✅ Valider
                </button>
                <button
                  onClick={() => supprimerAvis(a.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg"
                >
                  ❌ Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer avec mentions légales
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 */}
          <div>
            <h4 className="text-xl font-black mb-4 text-red-400">📍 PCF Villefranche</h4>
            <p className="text-slate-300 text-sm mb-3">
              Parti Communiste Français<br />
              Section de Villefranche
            </p>
            <p className="text-slate-400 text-xs">
              Programme municipal 2026<br />
              Pour une ville solidaire et démocratique
            </p>
          </div>

          {/* Colonne 2 */}
          <div>
            <h4 className="text-xl font-black mb-4 text-red-400">🔗 Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#themes" className="text-slate-300 hover:text-white transition-colors">
                  📋 Notre programme
                </a>
              </li>
              <li>
                <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  🤝 Adhérer au PCF
                </a>
              </li>
              <li>
                <a href="https://www.pcf.fr" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  🌐 PCF National
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h4 className="text-xl font-black mb-4 text-red-400">⚖️ Informations légales</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">
                <strong>Éditeur :</strong> PCF Section Villefranche
              </li>
              <li className="text-slate-300">
                <strong>Hébergement :</strong> Site local
              </li>
              <li className="text-slate-400 text-xs mt-4">
                Les données personnelles collectées via le formulaire d'avis sont stockées localement et ne sont pas transmises à des tiers.
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 PCF Villefranche - Tous droits réservés
            </p>
            <div className="flex gap-4">
              <a href="#mentions-legales" className="text-slate-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <span className="text-slate-600">•</span>
              <a href="#admin" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// AFFICHAGE DES MESURES PAR BLOCS - Composant principal du programme
// ============================================================================

// Affiche toutes les mesures organisées par blocs thématiques
// Navigation par onglets :
//   - Bloc 1 : Pouvoir citoyen (rouge)
//   - Bloc 2 : Services publics (bleu)
//   - Bloc 3 : Écologie (vert)
//   - Bloc 4 : Emploi (amber)
//   - Bloc 5 : Culture (purple)
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

// ============================================================================
// PAGE CHIFFRES - Statistiques sur Villefranche
// ============================================================================

// Page dédiée aux chiffres clés de Villefranche
// Contient :
//   1. Contexte national (135 milliards, rôle du maire militant)
//   2. Chiffres locaux (population, chômage, revenus, etc.)
//   3. Quartiers prioritaires
//
// Accessible via le bouton "Chiffres" dans le menu
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

      {/* Contexte national */}
      {STATS.contexteNational && (
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="inline-block bg-red-600 text-white rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide mb-4">
                ⚠️ Contexte national
              </span>
              <h2 className="text-3xl font-black mb-4">{STATS.contexteNational.title}</h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              {STATS.contexteNational.paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-l-4 border-red-500 rounded-xl p-6"
                >
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-red-600 rounded-2xl p-8 text-center">
              <p className="text-2xl font-black mb-3">
                💪 Le combat local ET national
              </p>
              <p className="text-lg text-red-100">
                Un maire communiste à Villefranche, c'est l'outil pour transformer la ville MAINTENANT et pour faire pression sur l'État avec les habitant·es mobilisé·es.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-[3fr_2fr] items-start">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900 mb-4">📊 Villefranche en chiffres</h2>
            <div className="space-y-4 text-base text-slate-700">
              {STATS.paragraphs.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {STATS.highlights.map((stat) => {
              // Extraire le nombre pour l'animation
              const match = stat.value.match(/(\d+[\s\d]*)/);
              const hasNumber = match && match[1];
              const number = hasNumber ? parseInt(match[1].replace(/\s/g, '')) : null;

              return (
                <div key={stat.label} className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
                  <p className="text-sm uppercase tracking-widest text-red-500 font-semibold">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {number ? (
                      <>
                        <AnimatedCounter target={number} />
                        {stat.value.replace(match[0], '')}
                      </>
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{stat.source}</p>
                </div>
              );
            })}
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

// ============================================================================
// APPLICATION PRINCIPALE
// ============================================================================

// Point d'entrée de l'application
// Gère la navigation entre la page d'accueil et la page Chiffres
// Contient toute la structure du site : header, contenu, footer
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

            {/* Carrousel d'images */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {view === "stats" ? (
        <StatsPage onBack={() => setView("home")} />
      ) : (
        <main>
          {/* Carrousel Propositions Phares */}
          <section className="bg-white py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <span className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide mb-4">
                  ⭐ Les propositions phares
                </span>
                <h2 className="text-4xl font-black text-slate-900 mb-3">
                  Des mesures concrètes qui changent <span className="text-red-600">ta vie</span>
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Économies pour les familles, services publics renforcés, démocratie locale : voici ce qu'on propose pour Villefranche.
                </p>
              </div>

              <PhareCarousel />
            </div>
          </section>

          {/* Calculateur d'économies */}
          <CalculateurEconomies />

          {/* Comparateur Avant/Après */}
          <ComparateurAvantApres />

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

        {/* Barre de recherche pour les mesures */}
        <SearchBar />

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

      {/* Section avis */}
      <AvisSection />

      {/* Panel admin (discret, accessible via #admin) */}
      <div id="admin">
        <AdminPanel />
      </div>

      {/* Footer avec mentions légales */}
      <Footer />

      {/* Bouton flottant pour accéder aux mesures */}
      <FloatingButton />
    </div>
  );
}
