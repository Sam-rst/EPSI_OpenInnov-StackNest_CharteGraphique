import { useState } from "react";
import {
  Cloud,
  Server,
  Database,
  Lock,
  Users,
  Zap,
  MessageSquare,
  LayoutDashboard,
  Shield,
  Code,
  Gauge,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  Palette,
  Type,
  Box,
  Mouse,
  Image as ImageIcon,
  Grid3x3,
  Layers,
} from "lucide-react";
import logoImage from "/logo.png";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Vue d'ensemble", icon: Palette },
    { id: "colors", label: "Couleurs", icon: Palette },
    { id: "typography", label: "Typographie", icon: Type },
    { id: "components", label: "Composants", icon: Box },
    { id: "icons", label: "Iconographie", icon: Sparkles },
    { id: "layout", label: "Layout & Grilles", icon: Grid3x3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]">
      {/* Header */}
      <header className="border-b border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={logoImage}
                alt="StackNest"
                className="h-12 w-auto"
              />
              <div className="border-l border-cyan-500/30 pl-4">
                <h1 className="text-xl text-white">
                  Charte Graphique
                </h1>
                <p className="text-sm text-slate-400">
                  Design System StackNest
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Version 1.0.0</span>
              <span className="text-cyan-400">•</span>
              <span>Janvier 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm sticky top-[73px] z-40">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5"
                      : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[1600px] mx-auto px-8 py-12">
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "colors" && <ColorsSection />}
        {activeTab === "typography" && <TypographySection />}
        {activeTab === "components" && <ComponentsSection />}
        {activeTab === "icons" && <IconsSection />}
        {activeTab === "layout" && <LayoutSection />}
      </main>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <div className="bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-slate-900/40 border border-cyan-500/30 rounded-xl p-8">
        <h2 className="text-3xl text-white mb-4">
          Bienvenue dans la charte graphique StackNest
        </h2>
        <p className="text-slate-300 text-lg mb-6">
          Cette charte définit l'identité visuelle complète de
          StackNest, une plateforme B2B DevOps & Cloud de type
          Internal Developer Platform (IDP).
        </p>
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
            <Palette className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-white mb-2">
              Style Tech & Moderne
            </h3>
            <p className="text-sm text-slate-400">
              Design orienté startup B2B avec une esthétique
              DevOps professionnelle
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
            <Layers className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-white mb-2">
              Système Cohérent
            </h3>
            <p className="text-sm text-slate-400">
              Composants réutilisables pour une expérience
              unifiée
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
            <Sparkles className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-white mb-2">Innovation & IA</h3>
            <p className="text-sm text-slate-400">
              Design qui reflète notre approche innovante et
              conversationnelle
            </p>
          </div>
        </div>
      </div>

      {/* Principes */}
      <div>
        <h2 className="text-2xl text-white mb-6">
          Principes de Design
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Clarté & Lisibilité
            </h3>
            <p className="text-slate-300 text-sm">
              Tous les éléments doivent être immédiatement
              compréhensibles. Utiliser des contrastes élevés,
              des espacements généreux et une hiérarchie
              visuelle claire.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Cohérence
            </h3>
            <p className="text-slate-300 text-sm">
              Utiliser les mêmes patterns, espacements, couleurs
              et composants à travers toute la plateforme pour
              créer une expérience familière.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Performance Visuelle
            </h3>
            <p className="text-slate-300 text-sm">
              Design optimisé pour la rapidité perçue.
              Animations subtiles, feedbacks immédiats et états
              de chargement clairs.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Accessibilité
            </h3>
            <p className="text-slate-300 text-sm">
              Respect des normes WCAG 2.1 AA. Contrastes
              suffisants, navigation au clavier, labels ARIA
              appropriés.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div>
        <h2 className="text-2xl text-white mb-6">
          Référence Rapide
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-4 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a1628] to-[#0f1f3a] rounded-lg mx-auto mb-3 border border-cyan-500/30"></div>
            <p className="text-sm text-white mb-1">
              Couleur primaire
            </p>
            <p className="text-xs text-slate-400 font-mono">
              #0a1628
            </p>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-4 text-center">
            <div className="w-16 h-16 bg-cyan-400 rounded-lg mx-auto mb-3"></div>
            <p className="text-sm text-white mb-1">
              Accent cyan
            </p>
            <p className="text-xs text-slate-400 font-mono">
              #22d3ee
            </p>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-4 text-center">
            <div className="w-16 h-16 rounded-lg mx-auto mb-3" style={{ backgroundColor: "#ffa21f" }}></div>
            <p className="text-sm text-white mb-1">
              Accent jaune
            </p>
            <p className="text-xs text-slate-400 font-mono">
              #ffa21f
            </p>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-4 text-center">
            <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-xs text-slate-800">
                16px
              </span>
            </div>
            <p className="text-sm text-white mb-1">
              Base spacing
            </p>
            <p className="text-xs text-slate-400">
              16px / 1rem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorsSection() {
  const colorPalettes = {
    primary: [
      {
        name: "Bleu Nuit 900",
        hex: "#0a1628",
        usage: "Arrière-plans principaux",
      },
      {
        name: "Bleu Nuit 800",
        hex: "#0f1f3a",
        usage: "Arrière-plans secondaires",
      },
      {
        name: "Bleu Nuit 700",
        hex: "#1a2942",
        usage: "Conteneurs, cartes",
      },
      {
        name: "Bleu Nuit 600",
        hex: "#253952",
        usage: "Bordures sombres",
      },
    ],
    accent: [
      {
        name: "Cyan 400",
        hex: "#22d3ee",
        usage: "Actions primaires, liens, highlights",
      },
      {
        name: "Cyan 300",
        hex: "#67e8f9",
        usage: "Hover states, textes secondaires",
      },
      {
        name: "Cyan 500/30",
        hex: "rgba(34, 211, 238, 0.3)",
        usage: "Bordures, overlays",
      },
      {
        name: "Cyan 500/10",
        hex: "rgba(34, 211, 238, 0.1)",
        usage: "Backgrounds subtils",
      },
    ],
    highlight: [
      {
        name: "Jaune 400",
        hex: "#facc15",
        usage: "Différenciation, CTAs secondaires",
      },
      {
        name: "Jaune 500",
        hex: "#eab308",
        usage: "Warnings, alertes positives",
      },
      {
        name: "Jaune 500/20",
        hex: "rgba(234, 179, 8, 0.2)",
        usage: "Backgrounds d'accentuation",
      },
    ],
    neutral: [
      {
        name: "Slate 900",
        hex: "#0f172a",
        usage: "Textes foncés",
      },
      {
        name: "Slate 800",
        hex: "#1e293b",
        usage: "Cartes, conteneurs",
      },
      {
        name: "Slate 700",
        hex: "#334155",
        usage: "Bordures, séparateurs",
      },
      {
        name: "Slate 600",
        hex: "#475569",
        usage: "Icônes désactivées",
      },
      {
        name: "Slate 400",
        hex: "#94a3b8",
        usage: "Textes secondaires",
      },
      {
        name: "Slate 300",
        hex: "#cbd5e1",
        usage: "Textes sur fonds sombres",
      },
      {
        name: "Slate 200",
        hex: "#e2e8f0",
        usage: "Textes clairs",
      },
      {
        name: "White",
        hex: "#ffffff",
        usage: "Textes principaux, icônes actives",
      },
    ],
    status: [
      {
        name: "Success",
        hex: "#10b981",
        usage: "Validations, succès",
      },
      {
        name: "Error",
        hex: "#ef4444",
        usage: "Erreurs, alertes critiques",
      },
      {
        name: "Warning",
        hex: "#f59e0b",
        usage: "Avertissements",
      },
      { name: "Info", hex: "#3b82f6", usage: "Informations" },
    ],
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl text-white mb-4">
          Palette de Couleurs
        </h2>
        <p className="text-slate-400 mb-8">
          Notre palette reflète l'univers tech et DevOps : bleu
          nuit pour la profondeur et le professionnalisme, cyan
          pour l'innovation et la technologie, touches de jaune
          pour l'énergie et la différenciation.
        </p>
      </div>

      {/* Primary Colors */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Couleurs Primaires (Bleu Nuit)
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {colorPalettes.primary.map((color) => (
            <div
              key={color.hex}
              className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden"
            >
              <div
                className="h-32"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="p-4">
                <h4 className="text-white mb-1">
                  {color.name}
                </h4>
                <p className="text-sm text-slate-400 font-mono mb-2">
                  {color.hex}
                </p>
                <p className="text-xs text-slate-500">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accent Colors */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Couleurs d'Accent (Cyan)
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {colorPalettes.accent.map((color) => (
            <div
              key={color.hex}
              className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden"
            >
              <div
                className="h-32 border border-slate-700"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="p-4">
                <h4 className="text-white mb-1">
                  {color.name}
                </h4>
                <p className="text-sm text-slate-400 font-mono mb-2 break-all">
                  {color.hex}
                </p>
                <p className="text-xs text-slate-500">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlight Colors */}
      <div>
        <h3 className="text-xl text-yellow-400 mb-6">
          Couleurs de Mise en Valeur (Jaune)
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {colorPalettes.highlight.map((color) => (
            <div
              key={color.hex}
              className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden"
            >
              <div
                className="h-32"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="p-4">
                <h4 className="text-white mb-1">
                  {color.name}
                </h4>
                <p className="text-sm text-slate-400 font-mono mb-2 break-all">
                  {color.hex}
                </p>
                <p className="text-xs text-slate-500">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral Colors */}
      <div>
        <h3 className="text-xl text-slate-300 mb-6">
          Couleurs Neutres
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {colorPalettes.neutral.map((color) => (
            <div
              key={color.hex}
              className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden"
            >
              <div
                className="h-32 border border-slate-700"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="p-4">
                <h4 className="text-white mb-1">
                  {color.name}
                </h4>
                <p className="text-sm text-slate-400 font-mono mb-2">
                  {color.hex}
                </p>
                <p className="text-xs text-slate-500">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Colors */}
      <div>
        <h3 className="text-xl text-white mb-6">
          Couleurs de Statut
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {colorPalettes.status.map((color) => (
            <div
              key={color.hex}
              className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden"
            >
              <div
                className="h-32"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="p-4">
                <h4 className="text-white mb-1">
                  {color.name}
                </h4>
                <p className="text-sm text-slate-400 font-mono mb-2">
                  {color.hex}
                </p>
                <p className="text-xs text-slate-500">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradients */}
      <div>
        <h3 className="text-xl text-white mb-6">Dégradés</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]"></div>
            <div className="p-4">
              <h4 className="text-white mb-2">
                Background Principal
              </h4>
              <p className="text-sm text-slate-400 font-mono text-xs">
                from-[#0a1628] via-[#0f1f3a] to-[#0a1628]
              </p>
            </div>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-slate-900/60"></div>
            <div className="p-4">
              <h4 className="text-white mb-2">
                Bloc Central / Highlight
              </h4>
              <p className="text-sm text-slate-400 font-mono text-xs">
                from-cyan-900/40 via-blue-900/40 to-slate-900/60
              </p>
            </div>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-slate-800/60 to-slate-900/60"></div>
            <div className="p-4">
              <h4 className="text-white mb-2">
                Cartes / Conteneurs
              </h4>
              <p className="text-sm text-slate-400 font-mono text-xs">
                from-slate-800/60 to-slate-900/60
              </p>
            </div>
          </div>
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-yellow-900/20 via-yellow-800/20 to-slate-900/40"></div>
            <div className="p-4">
              <h4 className="text-white mb-2">
                Différenciation
              </h4>
              <p className="text-sm text-slate-400 font-mono text-xs">
                from-yellow-900/20 via-yellow-800/20
                to-slate-900/40
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypographySection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl text-white mb-4">
          Typographie
        </h2>
        <p className="text-slate-400 mb-8">
          Nous utilisons la police système par défaut pour une
          lecture optimale et des performances maximales.
        </p>
      </div>

      {/* Font Stack */}
      <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
        <h3 className="text-cyan-400 mb-4">Stack de Polices</h3>
        <p className="text-slate-300 font-mono text-sm mb-2">
          -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, sans-serif
        </p>
        <p className="text-slate-500 text-sm">
          Police système native pour des performances optimales
          et une familiarité instantanée
        </p>
      </div>

      {/* Headings */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Titres (Headings)
        </h3>
        <div className="space-y-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h1 className="text-white mb-3">
              Heading 1 - Titre Principal
            </h1>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                2xl (1.5rem / 24px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Medium (500)
              </div>
              <div>
                <span className="text-cyan-400">Usage:</span>{" "}
                Titres de pages principales
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h2 className="text-white mb-3">
              Heading 2 - Titre Section
            </h2>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                xl (1.25rem / 20px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Medium (500)
              </div>
              <div>
                <span className="text-cyan-400">Usage:</span>{" "}
                Sections principales
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-white mb-3">
              Heading 3 - Titre Sous-section
            </h3>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                lg (1.125rem / 18px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Medium (500)
              </div>
              <div>
                <span className="text-cyan-400">Usage:</span>{" "}
                Sous-sections, cartes
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-3">
              Heading 4 - Titre Tertiaire
            </h4>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                base (1rem / 16px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Medium (500)
              </div>
              <div>
                <span className="text-cyan-400">Usage:</span>{" "}
                Labels, petits titres
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Corps de Texte
        </h3>
        <div className="space-y-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <p className="text-lg text-white mb-3">
              Texte Large - Utilisé pour les introductions et
              les descriptions importantes qui nécessitent une
              attention particulière.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                lg (1.125rem / 18px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Normal (400)
              </div>
              <div>
                <span className="text-cyan-400">Couleur:</span>{" "}
                White / Slate-200
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <p className="text-white mb-3">
              Texte Base - Le texte standard utilisé pour le
              contenu principal, les descriptions et les
              informations générales.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                base (1rem / 16px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Normal (400)
              </div>
              <div>
                <span className="text-cyan-400">Couleur:</span>{" "}
                White / Slate-300
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <p className="text-sm text-slate-300 mb-3">
              Texte Small - Utilisé pour les informations
              secondaires, les labels et les descriptions
              complémentaires.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                sm (0.875rem / 14px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Normal (400)
              </div>
              <div>
                <span className="text-cyan-400">Couleur:</span>{" "}
                Slate-300 / Slate-400
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <p className="text-xs text-slate-400 mb-3">
              Texte Extra Small - Pour les métadonnées,
              timestamps, et informations de support minimal.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Taille:</span>{" "}
                xs (0.75rem / 12px)
              </div>
              <div>
                <span className="text-cyan-400">Poids:</span>{" "}
                Normal (400)
              </div>
              <div>
                <span className="text-cyan-400">Couleur:</span>{" "}
                Slate-400 / Slate-500
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Text */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Textes Spéciaux
        </h3>
        <div className="space-y-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <p className="font-mono text-cyan-400 mb-3">
              Code / Monospace - const stacknest = "IDP
              Platform";
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Police:</span>{" "}
                Monospace
              </div>
              <div>
                <span className="text-cyan-400">Couleur:</span>{" "}
                Cyan-400
              </div>
              <div>
                <span className="text-cyan-400">Usage:</span>{" "}
                Code, valeurs techniques
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 underline mb-3 inline-block"
            >
              Lien - En savoir plus sur StackNest
            </a>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <span className="text-cyan-400">Couleur:</span>{" "}
                Cyan-400
              </div>
              <div>
                <span className="text-cyan-400">Hover:</span>{" "}
                Cyan-300
              </div>
              <div>
                <span className="text-cyan-400">
                  Décoration:
                </span>{" "}
                Underline
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Line Heights & Spacing */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Hauteur de Ligne & Espacement
        </h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white mb-2">
                Hauteur de ligne
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  • Titres:{" "}
                  <span className="text-cyan-400">1.5</span>
                </li>
                <li>
                  • Corps:{" "}
                  <span className="text-cyan-400">1.5</span>
                </li>
                <li>
                  • Dense:{" "}
                  <span className="text-cyan-400">1.25</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-2">
                Espacement paragraphes
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  • Entre sections:{" "}
                  <span className="text-cyan-400">
                    3rem (48px)
                  </span>
                </li>
                <li>
                  • Entre blocs:{" "}
                  <span className="text-cyan-400">
                    1.5rem (24px)
                  </span>
                </li>
                <li>
                  • Entre lignes:{" "}
                  <span className="text-cyan-400">
                    0.5rem (8px)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl text-white mb-4">
          Composants UI
        </h2>
        <p className="text-slate-400 mb-8">
          Bibliothèque de composants réutilisables pour garantir
          la cohérence à travers toute la plateforme.
        </p>
      </div>

      {/* Buttons */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">Boutons</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">Bouton Primaire</h4>
            <div className="space-y-4 mb-4">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Action Primaire
              </button>
              <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-6 py-3 rounded-lg transition-colors opacity-50 cursor-not-allowed">
                Bouton Désactivé
              </button>
            </div>
            <p className="text-sm text-slate-400">
              Utilisation: Actions principales, CTAs, boutons
              d'envoi
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Bouton Secondaire
            </h4>
            <div className="space-y-4 mb-4">
              <button className="bg-slate-700/50 hover:bg-slate-700 text-white border border-cyan-500/30 hover:border-cyan-400/60 px-6 py-3 rounded-lg transition-all">
                Action Secondaire
              </button>
              <button className="bg-transparent hover:bg-cyan-400/10 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 px-6 py-3 rounded-lg transition-all">
                Bouton Outline
              </button>
            </div>
            <p className="text-sm text-slate-400">
              Utilisation: Actions secondaires, annulations,
              options alternatives
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Bouton Accent (Jaune)
            </h4>
            <div className="space-y-4 mb-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-lg transition-colors">
                Différenciation
              </button>
            </div>
            <p className="text-sm text-slate-400">
              Utilisation: Actions de mise en valeur,
              différenciation concurrentielle
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Bouton Texte / Ghost
            </h4>
            <div className="space-y-4 mb-4">
              <button className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 px-4 py-2 rounded-lg transition-all">
                Lien textuel
              </button>
            </div>
            <p className="text-sm text-slate-400">
              Utilisation: Navigation, actions tertiaires, liens
              internes
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Cartes (Cards)
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">Carte Standard</h4>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/60 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white">
                  Titre de la carte
                </h4>
              </div>
              <p className="text-sm text-slate-300">
                Contenu de la carte avec des informations
                pertinentes et descriptives.
              </p>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Classes: bg-gradient-to-br from-slate-800/60
              to-slate-900/60 border border-cyan-500/30
              rounded-lg
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">Carte Highlight</h4>
            <div className="bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-slate-900/60 border-2 border-cyan-400 rounded-xl p-4 shadow-2xl shadow-cyan-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white">
                  Carte mise en valeur
                </h4>
              </div>
              <p className="text-sm text-slate-300">
                Utilisée pour les éléments importants ou
                centraux nécessitant une attention particulière.
              </p>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Classes: bg-gradient-to-br from-cyan-900/40
              via-blue-900/40 to-slate-900/60 border-2
              border-cyan-400
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Carte Interactive
            </h4>
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm">
                  Élément cliquable
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Change au survol et au clic
              </p>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              États: hover:border-cyan-500/50 cursor-pointer
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Carte Différenciation (Jaune)
            </h4>
            <div className="bg-gradient-to-br from-yellow-900/20 via-yellow-800/20 to-slate-900/40 border-2 border-yellow-500/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h4 className="text-white">
                  Avantage concurrentiel
                </h4>
              </div>
              <p className="text-sm text-slate-300">
                Pour mettre en avant les différenciateurs et
                points forts.
              </p>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Classes: bg-gradient-to-br from-yellow-900/20
              border-2 border-yellow-500/50
            </p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Badges & Tags
        </h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
              Primary Badge
            </span>
            <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-400/30">
              Highlight Badge
            </span>
            <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-400/30">
              Success
            </span>
            <span className="bg-red-400/20 text-red-400 px-3 py-1 rounded-full text-sm border border-red-400/30">
              Error
            </span>
            <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600/50">
              Neutral
            </span>
          </div>
          <p className="text-sm text-slate-400">
            Utilisation: Statuts, catégories, labels,
            métadonnées
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Champs de Saisie
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">Input Standard</h4>
            <input
              type="text"
              placeholder="Saisir du texte..."
              className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
            <p className="text-sm text-slate-400 mt-4">
              États: default, hover, focus, error, disabled
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">Textarea</h4>
            <textarea
              placeholder="Description longue..."
              rows={3}
              className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Alertes & Notifications
        </h3>
        <div className="space-y-4">
          <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-cyan-400 mb-1">
                Information
              </h4>
              <p className="text-sm text-slate-300">
                Message d'information général pour
                l'utilisateur.
              </p>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-green-400 mb-1">Succès</h4>
              <p className="text-sm text-slate-300">
                L'opération s'est terminée avec succès.
              </p>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-yellow-400 mb-1">
                Attention
              </h4>
              <p className="text-sm text-slate-300">
                Avertissement important à prendre en compte.
              </p>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-red-400 mb-1">Erreur</h4>
              <p className="text-sm text-slate-300">
                Une erreur s'est produite lors de l'opération.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsSection() {
  const iconCategories = {
    infrastructure: [
      {
        icon: Cloud,
        name: "Cloud",
        usage: "Cloud, infrastructure",
      },
      {
        icon: Server,
        name: "Server",
        usage: "Serveurs, backend",
      },
      {
        icon: Database,
        name: "Database",
        usage: "Bases de données",
      },
      {
        icon: Globe,
        name: "Globe",
        usage: "Multi-cloud, global",
      },
    ],
    actions: [
      { icon: Zap, name: "Zap", usage: "Automation, rapidité" },
      {
        icon: MessageSquare,
        name: "MessageSquare",
        usage: "Chatbot, conversation",
      },
      { icon: Code, name: "Code", usage: "Développement, IaC" },
      {
        icon: Sparkles,
        name: "Sparkles",
        usage: "IA, innovation",
      },
    ],
    ui: [
      {
        icon: LayoutDashboard,
        name: "LayoutDashboard",
        usage: "Dashboard, interface",
      },
      {
        icon: Gauge,
        name: "Gauge",
        usage: "Métriques, performance",
      },
      {
        icon: Users,
        name: "Users",
        usage: "Utilisateurs, équipes",
      },
      {
        icon: Shield,
        name: "Shield",
        usage: "Sécurité, protection",
      },
    ],
    status: [
      {
        icon: CheckCircle2,
        name: "CheckCircle2",
        usage: "Validation, succès",
      },
      {
        icon: ArrowRight,
        name: "ArrowRight",
        usage: "Navigation, flux",
      },
      {
        icon: Lock,
        name: "Lock",
        usage: "Sécurité, chiffrement",
      },
      {
        icon: Layers,
        name: "Layers",
        usage: "Architecture, stack",
      },
    ],
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl text-white mb-4">
          Iconographie
        </h2>
        <p className="text-slate-400 mb-8">
          Nous utilisons la bibliothèque Lucide React pour des
          icônes modernes, cohérentes et optimisées. Toutes les
          icônes doivent être utilisées à partir de cette
          bibliothèque pour garantir la cohérence visuelle.
        </p>
      </div>

      {/* Icon Library */}
      <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
        <h3 className="text-cyan-400 mb-4">Bibliothèque</h3>
        <div className="space-y-2 text-sm">
          <p className="text-slate-300">
            <span className="text-cyan-400">Package:</span>{" "}
            lucide-react
          </p>
          <p className="text-slate-300">
            <span className="text-cyan-400">Import:</span>{" "}
            <code className="bg-slate-900/50 px-2 py-1 rounded text-cyan-400">
              import &#123; IconName &#125; from 'lucide-react'
            </code>
          </p>
          <p className="text-slate-300">
            <span className="text-cyan-400">
              Documentation:
            </span>{" "}
            <a
              href="https://lucide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              lucide.dev
            </a>
          </p>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Tailles Standards
        </h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="grid grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-slate-700/30 rounded-lg p-4 mb-3 flex items-center justify-center">
                <Server className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-white text-sm mb-1">Small</p>
              <p className="text-xs text-slate-400">
                16px (w-4 h-4)
              </p>
              <p className="text-xs text-slate-500">
                UI dense, badges
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-700/30 rounded-lg p-4 mb-3 flex items-center justify-center">
                <Server className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white text-sm mb-1">Medium</p>
              <p className="text-xs text-slate-400">
                20px (w-5 h-5)
              </p>
              <p className="text-xs text-slate-500">
                Standard, cartes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-700/30 rounded-lg p-4 mb-3 flex items-center justify-center">
                <Server className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-white text-sm mb-1">Large</p>
              <p className="text-xs text-slate-400">
                24px (w-6 h-6)
              </p>
              <p className="text-xs text-slate-500">
                Boutons, headers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-700/30 rounded-lg p-4 mb-3 flex items-center justify-center">
                <Server className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="text-white text-sm mb-1">X-Large</p>
              <p className="text-xs text-slate-400">
                32px (w-8 h-8)
              </p>
              <p className="text-xs text-slate-500">
                Features, hero
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-700/30 rounded-lg p-4 mb-3 flex items-center justify-center">
                <Server className="w-12 h-12 text-cyan-400" />
              </div>
              <p className="text-white text-sm mb-1">
                2X-Large
              </p>
              <p className="text-xs text-slate-400">
                48px (w-12 h-12)
              </p>
              <p className="text-xs text-slate-500">
                Illustrations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Categories */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Icônes par Catégorie
        </h3>

        <div className="space-y-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-cyan-400" />
              Infrastructure & DevOps
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {iconCategories.infrastructure.map(
                ({ icon: Icon, name, usage }) => (
                  <div
                    key={name}
                    className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-white mb-1">
                      {name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {usage}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Actions & Fonctionnalités
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {iconCategories.actions.map(
                ({ icon: Icon, name, usage }) => (
                  <div
                    key={name}
                    className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-white mb-1">
                      {name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {usage}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-cyan-400" />
              Interface Utilisateur
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {iconCategories.ui.map(
                ({ icon: Icon, name, usage }) => (
                  <div
                    key={name}
                    className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-white mb-1">
                      {name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {usage}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              Status & Navigation
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {iconCategories.status.map(
                ({ icon: Icon, name, usage }) => (
                  <div
                    key={name}
                    className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-white mb-1">
                      {name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {usage}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Color Usage */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Utilisation des Couleurs
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Icônes Primaires
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Cloud className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400">
                  text-cyan-400
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Utilisé pour les icônes principales, les actions
                importantes et les éléments interactifs.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">Icônes d'Accent</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400">
                  text-yellow-400
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Pour les éléments différenciateurs, l'IA,
                l'innovation et les points forts.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">Icônes Neutres</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Server className="w-6 h-6 text-slate-400" />
                <span className="text-slate-400">
                  text-slate-400
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Pour les icônes secondaires, désactivées ou les
                informations de support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl text-white mb-4">
          Layout & Grilles
        </h2>
        <p className="text-slate-400 mb-8">
          Système de layout et d'espacement pour créer des
          interfaces cohérentes et équilibrées.
        </p>
      </div>

      {/* Spacing Scale */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Échelle d'Espacement
        </h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="space-y-4">
            {[
              {
                value: "4px",
                class: "space-1",
                usage: "Espacement minimal, bordures internes",
              },
              {
                value: "8px",
                class: "space-2",
                usage:
                  "Petits espacements, entre éléments proches",
              },
              {
                value: "12px",
                class: "space-3",
                usage: "Espacement standard entre éléments",
              },
              {
                value: "16px",
                class: "space-4",
                usage: "Espacement de base, padding de cartes",
              },
              {
                value: "24px",
                class: "space-6",
                usage: "Sections, groupes d'éléments",
              },
              {
                value: "32px",
                class: "space-8",
                usage:
                  "Grandes sections, séparations importantes",
              },
              {
                value: "48px",
                class: "space-12",
                usage: "Blocs majeurs, sections de page",
              },
              {
                value: "64px",
                class: "space-16",
                usage: "Séparations majeures entre sections",
              },
            ].map(({ value, class: className, usage }) => (
              <div
                key={value}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-cyan-400 font-mono text-sm">
                  {value}
                </div>
                <div
                  className="bg-cyan-400/20 rounded"
                  style={{ width: value, height: "24px" }}
                ></div>
                <div className="flex-1">
                  <span className="text-white">
                    {className}
                  </span>
                  <span className="text-slate-500 ml-4 text-sm">
                    {usage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid System */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Système de Grille
        </h3>
        <div className="space-y-6">
          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Grille 12 Colonnes
            </h4>
            <div className="grid grid-cols-12 gap-4 mb-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-cyan-400/20 border border-cyan-400/30 rounded p-2 text-center text-xs text-cyan-400"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Grille flexible à 12 colonnes pour des layouts
              complexes et responsives
            </p>
          </div>

          <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-white mb-4">
              Exemples de Layout
            </h4>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-400 mb-2">
                  Layout 3-6-3 (Sidebar - Contenu - Sidebar)
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-3
                  </div>
                  <div className="col-span-6 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-6
                  </div>
                  <div className="col-span-3 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-3
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-2">
                  Layout 4-4-4 (Trois colonnes égales)
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-4
                  </div>
                  <div className="col-span-4 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-4
                  </div>
                  <div className="col-span-4 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-4
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-2">
                  Layout 8-4 (Contenu principal - Sidebar)
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-8
                  </div>
                  <div className="col-span-4 bg-cyan-400/10 border border-cyan-400/30 rounded p-4 text-center text-sm text-cyan-400">
                    col-span-4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container Widths */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Largeurs de Conteneurs
        </h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">
                  max-w-[1400px]
                </span>
                <span className="text-slate-400 text-sm">
                  Cartographie, vues complexes
                </span>
              </div>
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded h-8"></div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">
                  max-w-[1600px]
                </span>
                <span className="text-slate-400 text-sm">
                  Dashboards larges, analytics
                </span>
              </div>
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded h-8"></div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">
                  max-w-7xl (1280px)
                </span>
                <span className="text-slate-400 text-sm">
                  Contenu standard
                </span>
              </div>
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded h-8 max-w-7xl"></div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">
                  max-w-4xl (896px)
                </span>
                <span className="text-slate-400 text-sm">
                  Formulaires, contenu centré
                </span>
              </div>
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded h-8 max-w-4xl"></div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">
                  max-w-2xl (672px)
                </span>
                <span className="text-slate-400 text-sm">
                  Textes longs, articles
                </span>
              </div>
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded h-8 max-w-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Arrondis (Border Radius)
        </h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="grid grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-cyan-400/20 border border-cyan-400/30 w-24 h-24 mx-auto mb-3 rounded-sm"></div>
              <p className="text-white text-sm mb-1">Small</p>
              <p className="text-xs text-slate-400">
                rounded-sm (2px)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-400/20 border border-cyan-400/30 w-24 h-24 mx-auto mb-3 rounded"></div>
              <p className="text-white text-sm mb-1">Default</p>
              <p className="text-xs text-slate-400">
                rounded (4px)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-400/20 border border-cyan-400/30 w-24 h-24 mx-auto mb-3 rounded-lg"></div>
              <p className="text-white text-sm mb-1">Large</p>
              <p className="text-xs text-slate-400">
                rounded-lg (8px)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-400/20 border border-cyan-400/30 w-24 h-24 mx-auto mb-3 rounded-xl"></div>
              <p className="text-white text-sm mb-1">X-Large</p>
              <p className="text-xs text-slate-400">
                rounded-xl (12px)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-400/20 border border-cyan-400/30 w-24 h-24 mx-auto mb-3 rounded-full"></div>
              <p className="text-white text-sm mb-1">Full</p>
              <p className="text-xs text-slate-400">
                rounded-full
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shadows */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">Ombres</h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-slate-800/60 border border-cyan-500/30 w-24 h-24 mx-auto mb-3 rounded-lg shadow-sm"></div>
              <p className="text-white text-sm mb-1">Small</p>
              <p className="text-xs text-slate-400">
                shadow-sm
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-800/60 border border-cyan-500/30 w-24 h-24 mx-auto mb-3 rounded-lg shadow-md"></div>
              <p className="text-white text-sm mb-1">Medium</p>
              <p className="text-xs text-slate-400">
                shadow-md
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-800/60 border border-cyan-500/30 w-24 h-24 mx-auto mb-3 rounded-lg shadow-lg"></div>
              <p className="text-white text-sm mb-1">Large</p>
              <p className="text-xs text-slate-400">
                shadow-lg
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-800/60 border border-cyan-400 w-24 h-24 mx-auto mb-3 rounded-lg shadow-2xl shadow-cyan-500/20"></div>
              <p className="text-white text-sm mb-1">Glow</p>
              <p className="text-xs text-slate-400">
                shadow-cyan-500/20
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <div>
        <h3 className="text-xl text-cyan-400 mb-6">
          Points de Rupture (Breakpoints)
        </h3>
        <div className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
              <div>
                <span className="text-white">sm:</span>
                <span className="text-slate-400 ml-4">
                  640px et plus
                </span>
              </div>
              <span className="text-cyan-400 text-sm">
                Petites tablettes
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
              <div>
                <span className="text-white">md:</span>
                <span className="text-slate-400 ml-4">
                  768px et plus
                </span>
              </div>
              <span className="text-cyan-400 text-sm">
                Tablettes
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
              <div>
                <span className="text-white">lg:</span>
                <span className="text-slate-400 ml-4">
                  1024px et plus
                </span>
              </div>
              <span className="text-cyan-400 text-sm">
                Petits écrans desktop
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
              <div>
                <span className="text-white">xl:</span>
                <span className="text-slate-400 ml-4">
                  1280px et plus
                </span>
              </div>
              <span className="text-cyan-400 text-sm">
                Desktop standard
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
              <div>
                <span className="text-white">2xl:</span>
                <span className="text-slate-400 ml-4">
                  1536px et plus
                </span>
              </div>
              <span className="text-cyan-400 text-sm">
                Grands écrans
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}