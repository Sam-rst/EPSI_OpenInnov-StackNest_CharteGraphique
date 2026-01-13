import { useState } from 'react';
import { 
  Palette, Type, Box, Sparkles, Grid3x3, Layers, Code,
  Play, Square, Circle, CheckCircle2, AlertCircle, Info,
  ArrowRight, Zap, MessageSquare, Server, Database, Cloud,
  Settings, User, Bell, Search, Menu, X, ChevronDown,
  Upload, Download, Trash2, Edit, Eye, EyeOff, Lock,
  Loader2
} from 'lucide-react';
import logoImage from "../../logo.png";

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [buttonStates, setButtonStates] = useState({
    primary: 'default',
    secondary: 'default',
    loading: false,
  });

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Palette },
    { id: 'colors', label: 'Couleurs', icon: Palette },
    { id: 'typography', label: 'Typographie', icon: Type },
    { id: 'buttons', label: 'Boutons', icon: Box },
    { id: 'inputs', label: 'Inputs & Formulaires', icon: Edit },
    { id: 'components', label: 'Composants', icon: Layers },
    { id: 'examples', label: 'Exemples', icon: Grid3x3 },
  ];

  return (
    <div className="min-h-screen bg-[#0a1420]">
      {/* Header */}
      <header className="border-b border-[rgba(13,146,151,0.15)] bg-[#0f1b2a]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="StackNest" className="h-10 w-auto" />
              <div className="border-l border-[rgba(13,146,151,0.2)] pl-4">
                <h1 className="text-lg font-semibold text-[#f1f5f9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Design System
                </h1>
                <p className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Production-Ready • v1.0.0
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-[#cbd5e1]">
              <span className="font-mono text-xs">Janvier 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-[rgba(13,146,151,0.15)] bg-[#132338]/50 backdrop-blur-sm sticky top-[73px] z-40">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 border-b-2 transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#0d9297] text-[#0d9297] bg-[rgba(13,146,151,0.05)]'
                      : 'border-transparent text-[#94a3b8] hover:text-[#cbd5e1] hover:bg-[rgba(13,146,151,0.03)]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
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
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'colors' && <ColorsSection />}
        {activeTab === 'typography' && <TypographySection />}
        {activeTab === 'buttons' && <ButtonsSection />}
        {activeTab === 'inputs' && <InputsSection />}
        {activeTab === 'components' && <ComponentsSection />}
        {activeTab === 'examples' && <ExamplesSection />}
      </main>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-12">
      {/* Hero Intro */}
      <div className="relative overflow-hidden rounded-2xl p-12" 
           style={{ 
             background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
             boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)'
           }}>
        <div className="relative z-10">
          <h1 className="text-5xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
            StackNest Design System
          </h1>
          <p className="text-xl text-[#cbd5e1] mb-8 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
            Charte graphique complète de niveau production pour une plateforme SaaS B2B DevOps & Cloud.
            Design moderne, sobre et crédible, aux standards des leaders du secteur.
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm border border-white/20">
              🎨 Design Premium
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm border border-white/20">
              ♿ Accessible
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm border border-white/20">
              📱 Responsive
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm border border-white/20">
              🚀 Production-Ready
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea21f] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Core Principles */}
      <div>
        <h2 className="text-3xl mb-8 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Principes de Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Sparkles,
              title: 'Premium & Sobre',
              desc: 'Design haut de gamme sans effets superflus, focus sur la clarté et l\'efficacité.',
            },
            {
              icon: Zap,
              title: 'Performance',
              desc: 'Transitions fluides, animations subtiles, sensation de rapidité et de maîtrise.',
            },
            {
              icon: Lock,
              title: 'Confiance',
              desc: 'Esthétique robuste qui inspire la sécurité et la fiabilité technique.',
            },
            {
              icon: Eye,
              title: 'Accessibilité',
              desc: 'Contrastes élevés, navigation clavier, respect des standards WCAG 2.1 AA.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40 backdrop-blur-sm hover:border-[rgba(13,146,151,0.3)] hover:bg-[#1a2e45]/60 transition-all duration-200"
              style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)' }}
            >
              <item.icon className="w-8 h-8 text-[#0d9297] mb-4 group-hover:text-[#10b3b9] transition-colors" />
              <h3 className="text-lg mb-2 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                {item.title}
              </h3>
              <p className="text-sm text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reference */}
      <div>
        <h2 className="text-3xl mb-8 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Référence Rapide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colors */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <h3 className="text-xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
              Palette Principale
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg" style={{ background: '#032233' }}></div>
                <div>
                  <p className="text-sm text-white font-mono">#032233</p>
                  <p className="text-xs text-[#64748b]">Primary Blue</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg" style={{ background: '#0d9297' }}></div>
                <div>
                  <p className="text-sm text-white font-mono">#0d9297</p>
                  <p className="text-xs text-[#64748b]">Secondary Cyan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg" style={{ background: '#fea21f' }}></div>
                <div>
                  <p className="text-sm text-white font-mono">#fea21f</p>
                  <p className="text-xs text-[#64748b]">Accent Orange</p>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <h3 className="text-xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
              Typographie
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[#64748b] mb-1">Titres / Display</p>
                <p className="text-lg text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Space Grotesk
                </p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] mb-1">Corps de texte</p>
                <p className="text-lg text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Inter
                </p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] mb-1">Code / Monospace</p>
                <p className="text-lg text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  JetBrains Mono
                </p>
              </div>
            </div>
          </div>

          {/* Spacing */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <h3 className="text-xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
              Système d'Espacement
            </h3>
            <div className="space-y-3">
              {[
                { size: '8px', label: 'Base unit' },
                { size: '16px', label: 'Standard' },
                { size: '24px', label: 'Medium' },
                { size: '32px', label: 'Large' },
                { size: '48px', label: 'XLarge' },
              ].map((item) => (
                <div key={item.size} className="flex items-center gap-3">
                  <div 
                    className="h-3 bg-[#0d9297] rounded" 
                    style={{ width: item.size }}
                  ></div>
                  <p className="text-sm text-[#cbd5e1] font-mono">{item.size}</p>
                  <p className="text-xs text-[#64748b]">({item.label})</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Standards Reference */}
      <div className="p-8 rounded-xl border border-[rgba(254,162,31,0.2)] bg-[rgba(254,162,31,0.05)]">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-[#fea21f] flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg mb-2 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
              Standards de Référence
            </h3>
            <p className="text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              Cette charte s'inspire des meilleures pratiques des leaders SaaS B2B :
            </p>
            <div className="flex flex-wrap gap-3">
              {['Stripe', 'Linear', 'Vercel', 'HashiCorp', 'GitHub Enterprise'].map((brand) => (
                <span 
                  key={brand}
                  className="px-3 py-1.5 bg-[#132338] rounded-lg text-sm text-[#f1f5f9] border border-[rgba(13,146,151,0.15)]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorsSection() {
  const colorGroups = [
    {
      title: 'Couleurs Primaires',
      desc: 'Identité de marque principale',
      colors: [
        { name: 'Primary', hex: '#032233', usage: 'Fonds principaux, headers' },
        { name: 'Primary Light', hex: '#054361', usage: 'Hover states' },
        { name: 'Primary Dark', hex: '#021a26', usage: 'Ombres, profondeur' },
      ],
    },
    {
      title: 'Couleurs Secondaires',
      desc: 'Accent principal, interactions',
      colors: [
        { name: 'Secondary', hex: '#0d9297', usage: 'CTAs, liens, focus' },
        { name: 'Secondary Light', hex: '#10b3b9', usage: 'Hover, highlights' },
        { name: 'Secondary Dark', hex: '#0a7278', usage: 'Active states' },
      ],
    },
    {
      title: 'Accent / CTA',
      desc: 'Différenciation, appels à l\'action',
      colors: [
        { name: 'Accent', hex: '#fea21f', usage: 'CTAs secondaires' },
        { name: 'Accent Light', hex: '#ffb647', usage: 'Hover' },
        { name: 'Accent Dark', hex: '#e68a00', usage: 'Active' },
      ],
    },
    {
      title: 'Couleurs Fonctionnelles',
      desc: 'États et notifications',
      colors: [
        { name: 'Success', hex: '#22c55e', usage: 'Validations, succès' },
        { name: 'Error', hex: '#c42b1c', usage: 'Erreurs, alertes' },
        { name: 'Warning', hex: '#f59e0b', usage: 'Avertissements' },
        { name: 'Info', hex: '#0d9297', usage: 'Informations' },
      ],
    },
    {
      title: 'Backgrounds',
      desc: 'Arrière-plans et surfaces',
      colors: [
        { name: 'Background', hex: '#0a1420', usage: 'Fond principal' },
        { name: 'Background Elevated', hex: '#0f1b2a', usage: 'Fond élevé' },
        { name: 'Surface', hex: '#132338', usage: 'Cartes, panels' },
        { name: 'Surface Elevated', hex: '#1a2e45', usage: 'Modals, dropdowns' },
      ],
    },
    {
      title: 'Texte',
      desc: 'Hiérarchie de texte',
      colors: [
        { name: 'Foreground', hex: '#f1f5f9', usage: 'Texte principal' },
        { name: 'Foreground Secondary', hex: '#cbd5e1', usage: 'Texte secondaire' },
        { name: 'Foreground Muted', hex: '#94a3b8', usage: 'Texte désactivé' },
        { name: 'Foreground Subtle', hex: '#64748b', usage: 'Hints, labels' },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Palette de Couleurs
        </h2>
        <p className="text-lg text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Système de couleurs complet pour garantir cohérence et accessibilité.
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            {group.title}
          </h3>
          <p className="text-sm text-[#94a3b8] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            {group.desc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {group.colors.map((color) => (
              <div
                key={color.name}
                className="group rounded-xl overflow-hidden border border-[rgba(13,146,151,0.15)] bg-[#132338]/40 hover:border-[rgba(13,146,151,0.3)] transition-all"
              >
                <div className="h-32 relative" style={{ backgroundColor: color.hex }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <span className="text-white font-mono text-sm">{color.hex}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                    {color.name}
                  </h4>
                  <p className="text-xs font-mono text-[#0d9297] mb-2">{color.hex}</p>
                  <p className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Gradients */}
      <div>
        <h3 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Dégradés
        </h3>
        <p className="text-sm text-[#94a3b8] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          Dégradés subtils et premium pour backgrounds et highlights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Primary Gradient',
              style: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
              usage: 'Hero sections, headers premium',
            },
            {
              name: 'Accent Gradient',
              style: 'linear-gradient(135deg, #0d9297 0%, #fea21f 100%)',
              usage: 'CTAs, highlights',
            },
            {
              name: 'Subtle Gradient',
              style: 'linear-gradient(135deg, #0a1420 0%, #132338 100%)',
              usage: 'Backgrounds discrets',
            },
            {
              name: 'Warm Gradient',
              style: 'linear-gradient(135deg, #fea21f 0%, #e68a00 100%)',
              usage: 'Boutons accent',
            },
          ].map((gradient) => (
            <div
              key={gradient.name}
              className="rounded-xl overflow-hidden border border-[rgba(13,146,151,0.15)]"
            >
              <div className="h-32" style={{ background: gradient.style }}></div>
              <div className="p-4 bg-[#132338]/40">
                <h4 className="text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  {gradient.name}
                </h4>
                <p className="text-xs text-[#94a3b8] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {gradient.usage}
                </p>
                <code className="text-xs font-mono text-[#0d9297] break-all">
                  {gradient.style}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TypographySection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Typographie
        </h2>
        <p className="text-lg text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Système typographique professionnel pour une lecture optimale.
        </p>
      </div>

      {/* Font Families */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <h3 className="text-xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            Display / Titres
          </h3>
          <p className="text-4xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
            Ag
          </p>
          <p className="text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Space Grotesk
          </p>
          <p className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Moderne, géométrique, excellent pour titres et UI premium
          </p>
        </div>

        <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <h3 className="text-xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            Corps de texte
          </h3>
          <p className="text-4xl mb-4 text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            Ag
          </p>
          <p className="text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Inter
          </p>
          <p className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Lisibilité maximale, optimisé pour interfaces digitales
          </p>
        </div>

        <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <h3 className="text-xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            Code / Mono
          </h3>
          <p className="text-4xl mb-4 text-white" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 }}>
            Ag
          </p>
          <p className="text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            JetBrains Mono
          </p>
          <p className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Clarté optimale pour code, valeurs techniques, données
          </p>
        </div>
      </div>

      {/* Type Scale */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Échelle Typographique
        </h3>
        <div className="space-y-6">
          {[
            { tag: 'H1', size: '48px', weight: 600, sample: 'Titre Principal Premium' },
            { tag: 'H2', size: '36px', weight: 600, sample: 'Titre de Section' },
            { tag: 'H3', size: '30px', weight: 600, sample: 'Sous-titre Important' },
            { tag: 'H4', size: '24px', weight: 600, sample: 'Titre de Carte' },
            { tag: 'H5', size: '20px', weight: 600, sample: 'Titre Tertiaire' },
            { tag: 'H6', size: '16px', weight: 500, sample: 'Label de Section' },
          ].map((item) => (
            <div
              key={item.tag}
              className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40"
            >
              <div className="flex items-baseline gap-6 mb-4">
                <span className="text-sm font-mono text-[#0d9297] w-12">{item.tag}</span>
                <span className="text-sm font-mono text-[#94a3b8]">{item.size}</span>
                <span className="text-sm text-[#64748b]">Weight: {item.weight}</span>
              </div>
              <p
                className="text-white"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: item.size,
                  fontWeight: item.weight,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.sample}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Body Text */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Corps de Texte
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { size: 'Large (18px)', fontSize: '18px', sample: 'Texte d\'introduction ou paragraphe important nécessitant une attention particulière.' },
            { size: 'Base (16px)', fontSize: '16px', sample: 'Texte standard pour le contenu principal, descriptions et informations générales.' },
            { size: 'Small (14px)', fontSize: '14px', sample: 'Texte secondaire, labels, descriptions complémentaires et informations de support.' },
            { size: 'XSmall (12px)', fontSize: '12px', sample: 'Métadonnées, timestamps, hints et informations minimales.' },
          ].map((item) => (
            <div
              key={item.size}
              className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-mono text-[#0d9297]">{item.size}</span>
              </div>
              <p
                className="text-[#cbd5e1]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: item.fontSize,
                  lineHeight: 1.6,
                }}
              >
                {item.sample}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Code Samples */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Code & Monospace
        </h3>
        <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-[#64748b] mb-2">Inline Code</p>
              <p className="text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Utiliser la variable <code className="px-2 py-1 bg-[#0a1420] rounded text-[#0d9297] font-mono text-sm">primary</code> pour les couleurs principales.
              </p>
            </div>
            <div>
              <p className="text-xs text-[#64748b] mb-2">Code Block</p>
              <pre className="p-4 bg-[#0a1420] rounded-lg border border-[rgba(13,146,151,0.15)] overflow-x-auto">
                <code className="text-sm text-[#0d9297]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
{`const stacknest = {
  primary: '#032233',
  secondary: '#0d9297',
  accent: '#fea21f'
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonsSection() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Boutons & CTAs
        </h2>
        <p className="text-lg text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Tous les états interactifs : default, hover, active, focus, disabled, loading
        </p>
      </div>

      {/* Primary Button */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Bouton Primaire (CTA Principal)
        </h3>
        <div className="p-8 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default */}
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Default</p>
              <button
                className="px-6 py-3 rounded-lg text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
                }}
              >
                Déployer l'infrastructure
              </button>
            </div>

            {/* Hover */}
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Hover</p>
              <button
                className="px-6 py-3 rounded-lg text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #054361 0%, #10b3b9 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 0 20px rgba(13, 146, 151, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.4)',
                }}
              >
                Déployer l'infrastructure
              </button>
            </div>

            {/* Active */}
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Active</p>
              <button
                className="px-6 py-3 rounded-lg text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #021a26 0%, #0a7278 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(1px)',
                }}
              >
                Déployer l'infrastructure
              </button>
            </div>

            {/* Focus */}
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Focus</p>
              <button
                className="px-6 py-3 rounded-lg text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
                  outline: '2px solid #0d9297',
                  outlineOffset: '2px',
                }}
              >
                Déployer l'infrastructure
              </button>
            </div>

            {/* Disabled */}
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Disabled</p>
              <button
                disabled
                className="px-6 py-3 rounded-lg text-white transition-all duration-200 cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  opacity: 0.4,
                }}
              >
                Déployer l'infrastructure
              </button>
            </div>

            {/* Loading */}
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Loading</p>
              <button
                disabled
                className="px-6 py-3 rounded-lg text-white transition-all duration-200 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
                }}
              >
                <Loader2 className="w-4 h-4 animate-spin" />
                Déploiement...
              </button>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="mt-8 pt-8 border-t border-[rgba(13,146,151,0.15)]">
            <p className="text-sm text-[#cbd5e1] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Démo Interactive (essayez de survoler et cliquer)
            </p>
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000);
              }}
              disabled={loading}
              className="group px-6 py-3 rounded-lg text-white transition-all duration-200 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(13,146,151,0.3)] active:translate-y-[1px] focus:outline focus:outline-2 focus:outline-[#0d9297] focus:outline-offset-2"
              style={{
                background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Déploiement en cours...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Déployer maintenant
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Button */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Bouton Secondaire
        </h3>
        <div className="p-8 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Default</p>
              <button
                className="px-6 py-3 rounded-lg bg-transparent border border-[rgba(13,146,151,0.3)] text-[#0d9297] transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                Configurer
              </button>
            </div>

            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Hover</p>
              <button
                className="px-6 py-3 rounded-lg bg-[rgba(13,146,151,0.1)] border border-[rgba(13,146,151,0.5)] text-[#10b3b9] transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                Configurer
              </button>
            </div>

            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Disabled</p>
              <button
                disabled
                className="px-6 py-3 rounded-lg bg-transparent border border-[rgba(13,146,151,0.3)] text-[#0d9297] transition-all duration-200 cursor-not-allowed opacity-40"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                Configurer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Button */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Bouton Accent (Différenciation)
        </h3>
        <div className="p-8 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Default</p>
              <button
                className="px-6 py-3 rounded-lg text-[#0a1420] transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #fea21f 0%, #e68a00 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
                }}
              >
                Essai gratuit 14 jours
              </button>
            </div>

            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Hover</p>
              <button
                className="px-6 py-3 rounded-lg text-[#0a1420] transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #ffb647 0%, #fea21f 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 0 20px rgba(254, 162, 31, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.4)',
                }}
              >
                Essai gratuit 14 jours
              </button>
            </div>

            <div>
              <p className="text-sm text-[#cbd5e1] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Active</p>
              <button
                className="px-6 py-3 rounded-lg text-[#0a1420] transition-all duration-200"
                style={{
                  background: '#e68a00',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(1px)',
                }}
              >
                Essai gratuit 14 jours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Boutons avec Icônes
        </h3>
        <div className="p-8 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <div className="flex flex-wrap gap-4">
            <button
              className="group px-6 py-3 rounded-lg text-white transition-all duration-200 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(13,146,151,0.3)]"
              style={{
                background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              <Upload className="w-4 h-4" />
              Uploader
            </button>

            <button
              className="group px-6 py-3 rounded-lg text-white transition-all duration-200 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(13,146,151,0.3)]"
              style={{
                background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              <Download className="w-4 h-4" />
              Télécharger
            </button>

            <button
              className="px-6 py-3 rounded-lg bg-transparent border border-[rgba(13,146,151,0.3)] text-[#0d9297] hover:bg-[rgba(13,146,151,0.1)] hover:border-[rgba(13,146,151,0.5)] transition-all duration-200 flex items-center gap-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              <Settings className="w-4 h-4" />
              Paramètres
            </button>

            <button
              className="px-6 py-3 rounded-lg bg-[rgba(196,43,28,0.1)] border border-[rgba(196,43,28,0.3)] text-[#c42b1c] hover:bg-[rgba(196,43,28,0.2)] hover:border-[rgba(196,43,28,0.5)] transition-all duration-200 flex items-center gap-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              <Trash2 className="w-4 h-4" />
              Supprimer
            </button>
          </div>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Boutons Ghost / Texte
        </h3>
        <div className="p-8 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <div className="flex flex-wrap gap-4">
            <button
              className="px-4 py-2 rounded-lg text-[#0d9297] hover:bg-[rgba(13,146,151,0.1)] transition-all duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              En savoir plus
            </button>

            <button
              className="px-4 py-2 rounded-lg text-[#0d9297] hover:bg-[rgba(13,146,151,0.1)] transition-all duration-200 flex items-center gap-1"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              Documentation
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              className="px-4 py-2 rounded-lg text-[#cbd5e1] hover:text-white hover:bg-[rgba(13,146,151,0.05)] transition-all duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputsSection() {
  const [inputValue, setInputValue] = useState('');
  const [errorInput, setErrorInput] = useState('invalid@');
  const [successInput, setSuccessInput] = useState('success@example.com');

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Inputs & Formulaires
        </h2>
        <p className="text-lg text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Champs de saisie avec tous les états : default, hover, focus, error, success, disabled
        </p>
      </div>

      {/* Text Inputs */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Champs Texte
        </h3>
        <div className="space-y-6">
          {/* Default */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Default State
            </label>
            <input
              type="text"
              placeholder="Nom du projet..."
              className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] placeholder:text-[#64748b] transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* Hover */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Hover State
            </label>
            <input
              type="text"
              placeholder="Nom du projet..."
              className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.3)] text-[#f1f5f9] placeholder:text-[#64748b] transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* Focus */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Focus State
            </label>
            <input
              type="text"
              placeholder="Nom du projet..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border-2 border-[#0d9297] text-[#f1f5f9] placeholder:text-[#64748b] outline-none transition-all duration-200"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 0 0 3px rgba(13, 146, 151, 0.1)',
              }}
            />
          </div>

          {/* Error */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Error State
            </label>
            <input
              type="email"
              placeholder="Email..."
              value={errorInput}
              onChange={(e) => setErrorInput(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border-2 border-[#c42b1c] text-[#f1f5f9] placeholder:text-[#64748b] outline-none transition-all duration-200"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 0 0 3px rgba(196, 43, 28, 0.1)',
              }}
            />
            <div className="flex items-center gap-2 mt-2">
              <AlertCircle className="w-4 h-4 text-[#c42b1c]" />
              <p className="text-sm text-[#c42b1c]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Format d'email invalide
              </p>
            </div>
          </div>

          {/* Success */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Success State
            </label>
            <input
              type="email"
              placeholder="Email..."
              value={successInput}
              onChange={(e) => setSuccessInput(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border-2 border-[#22c55e] text-[#f1f5f9] placeholder:text-[#64748b] outline-none transition-all duration-200"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.1)',
              }}
            />
            <div className="flex items-center gap-2 mt-2">
              <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
              <p className="text-sm text-[#22c55e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Email valide
              </p>
            </div>
          </div>

          {/* Disabled */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Disabled State
            </label>
            <input
              type="text"
              placeholder="Nom du projet..."
              disabled
              className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#64748b] placeholder:text-[#64748b] opacity-50 cursor-not-allowed transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Inputs avec Icônes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Recherche
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#0d9297] focus:outline-none transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
            <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#0d9297] focus:outline-none transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#cbd5e1] transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Textarea
        </h3>
        <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            Description
          </label>
          <textarea
            rows={4}
            placeholder="Description du projet..."
            className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#0d9297] focus:outline-none transition-all duration-200 resize-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
          ></textarea>
        </div>
      </div>

      {/* Select */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Select / Dropdown
        </h3>
        <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            Région
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] focus:border-[#0d9297] focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <option>Sélectionner une région...</option>
              <option>Europe West (Paris)</option>
              <option>US East (Virginia)</option>
              <option>Asia Pacific (Singapore)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b] pointer-events-none" />
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
        <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Composants UI
        </h2>
        <p className="text-lg text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Cartes, badges, alertes et autres composants réutilisables
        </p>
      </div>

      {/* Cards */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Cartes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Card */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40 hover:border-[rgba(13,146,151,0.3)] hover:bg-[#1a2e45]/60 transition-all duration-200"
               style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#032233] to-[#0d9297] flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Compute Instance
                </h4>
                <p className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  VM Standard
                </p>
              </div>
            </div>
            <p className="text-sm text-[#cbd5e1] mb-4" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
              Instance virtuelle haute performance pour vos workloads critiques.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#64748b] font-mono">4 vCPU • 8GB RAM</span>
              <span className="px-2 py-1 rounded-md bg-[rgba(34,197,94,0.1)] text-[#22c55e] text-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Active
              </span>
            </div>
          </div>

          {/* Elevated Card */}
          <div className="p-6 rounded-xl border-2 border-[#0d9297] bg-[#1a2e45]/80 transition-all duration-200"
               style={{ boxShadow: '0 0 20px rgba(13, 146, 151, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#fea21f] to-[#e68a00] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  AI Assistant
                </h4>
                <p className="text-xs text-[#fea21f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Nouveau
                </p>
              </div>
            </div>
            <p className="text-sm text-[#cbd5e1] mb-4" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
              Assistant IA conversationnel pour automatiser vos déploiements.
            </p>
            <button
              className="w-full px-4 py-2 rounded-lg text-white transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              Essayer maintenant
            </button>
          </div>

          {/* Stats Card */}
          <div className="p-6 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40"
               style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)' }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#cbd5e1]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                Coûts mensuels
              </h4>
              <Database className="w-5 h-5 text-[#0d9297]" />
            </div>
            <div className="mb-4">
              <p className="text-4xl text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                $2,847
              </p>
              <div className="flex items-center gap-1">
                <span className="text-[#22c55e] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  ↓ 12%
                </span>
                <span className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  vs mois dernier
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>Compute</span>
                <span className="text-white font-mono">$1,245</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>Storage</span>
                <span className="text-white font-mono">$892</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>Network</span>
                <span className="text-white font-mono">$710</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Badges & Tags
        </h3>
        <div className="p-8 rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-[rgba(13,146,151,0.1)] text-[#0d9297] border border-[rgba(13,146,151,0.3)] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Primary
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[rgba(254,162,31,0.1)] text-[#fea21f] border border-[rgba(254,162,31,0.3)] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Accent
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.1)] text-[#22c55e] border border-[rgba(34,197,94,0.3)] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Success
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[rgba(196,43,28,0.1)] text-[#c42b1c] border border-[rgba(196,43,28,0.3)] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Error
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.1)] text-[#f59e0b] border border-[rgba(245,158,11,0.3)] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Warning
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[rgba(148,163,184,0.1)] text-[#94a3b8] border border-[rgba(148,163,184,0.2)] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Neutral
            </span>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Alertes & Notifications
        </h3>
        <div className="space-y-4">
          {/* Info */}
          <div className="p-4 rounded-xl bg-[rgba(13,146,151,0.1)] border border-[rgba(13,146,151,0.3)] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0d9297] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[#0d9297] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                Information
              </h4>
              <p className="text-sm text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Votre infrastructure a été mise à jour avec succès. Les nouveaux paramètres sont maintenant actifs.
              </p>
            </div>
          </div>

          {/* Success */}
          <div className="p-4 rounded-xl bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[#22c55e] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                Succès
              </h4>
              <p className="text-sm text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Le déploiement s'est terminé avec succès. Votre application est maintenant en ligne.
              </p>
            </div>
          </div>

          {/* Warning */}
          <div className="p-4 rounded-xl bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.3)] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[#f59e0b] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                Attention
              </h4>
              <p className="text-sm text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Vous approchez de votre limite mensuelle. Considérez augmenter votre quota.
              </p>
            </div>
          </div>

          {/* Error */}
          <div className="p-4 rounded-xl bg-[rgba(196,43,28,0.1)] border border-[rgba(196,43,28,0.3)] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#c42b1c] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[#c42b1c] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                Erreur
              </h4>
              <p className="text-sm text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Le déploiement a échoué. Vérifiez vos credentials et réessayez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExamplesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Exemples d'Application
        </h2>
        <p className="text-lg text-[#cbd5e1]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Exemples de pages complètes utilisant le design system
        </p>
      </div>

      {/* Dashboard Example */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Dashboard
        </h3>
        <div className="rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40 overflow-hidden"
             style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
          {/* Header */}
          <div className="p-6 border-b border-[rgba(13,146,151,0.15)] bg-[#0f1b2a]/80">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl mb-1 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Tableau de bord
                </h1>
                <p className="text-sm text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Vue d'ensemble de votre infrastructure
                </p>
              </div>
              <button
                className="px-6 py-2.5 rounded-lg text-white transition-all duration-200 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                <Zap className="w-4 h-4" />
                Nouveau déploiement
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Instances actives', value: '24', icon: Server, color: '#0d9297' },
                { label: 'Coûts ce mois', value: '$2,847', icon: Database, color: '#fea21f' },
                { label: 'Uptime', value: '99.9%', icon: CheckCircle2, color: '#22c55e' },
                { label: 'Alertes', value: '3', icon: Bell, color: '#f59e0b' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg border border-[rgba(13,146,151,0.15)] bg-[#0a1420]/60">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <p className="text-2xl text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Resources List */}
            <div className="rounded-lg border border-[rgba(13,146,151,0.15)] bg-[#0a1420]/60 overflow-hidden">
              <div className="p-4 border-b border-[rgba(13,146,151,0.15)] bg-[#0f1b2a]/60">
                <h3 className="text-lg text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Ressources récentes
                </h3>
              </div>
              <div className="divide-y divide-[rgba(13,146,151,0.15)]">
                {[
                  { name: 'prod-api-server-01', type: 'VM', status: 'Active', region: 'EU-West' },
                  { name: 'staging-db-cluster', type: 'Database', status: 'Active', region: 'US-East' },
                  { name: 'dev-kubernetes-cluster', type: 'K8s', status: 'Active', region: 'EU-West' },
                ].map((resource, i) => (
                  <div key={i} className="p-4 hover:bg-[rgba(13,146,151,0.05)] transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#032233] to-[#0d9297] flex items-center justify-center">
                          <Server className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                            {resource.name}
                          </p>
                          <p className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {resource.type} • {resource.region}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-lg bg-[rgba(34,197,94,0.1)] text-[#22c55e] text-xs border border-[rgba(34,197,94,0.3)]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                          {resource.status}
                        </span>
                        <button className="text-[#94a3b8] hover:text-[#cbd5e1] transition-colors">
                          <Settings className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Page Example */}
      <div>
        <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
          Page Paramètres
        </h3>
        <div className="rounded-xl border border-[rgba(13,146,151,0.15)] bg-[#132338]/40 overflow-hidden"
             style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
          <div className="p-6 border-b border-[rgba(13,146,151,0.15)] bg-[#0f1b2a]/80">
            <h1 className="text-2xl text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
              Paramètres du projet
            </h1>
          </div>
          <div className="p-6 space-y-6">
            {/* Project Name */}
            <div>
              <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Nom du projet
              </label>
              <input
                type="text"
                value="stacknest-production"
                className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] focus:border-[#0d9297] focus:outline-none transition-all duration-200 font-mono"
              />
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Région par défaut
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] focus:border-[#0d9297] focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <option>Europe West (Paris)</option>
                  <option>US East (Virginia)</option>
                  <option>Asia Pacific (Singapore)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b] pointer-events-none" />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-[#cbd5e1] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Description du projet..."
                className="w-full px-4 py-3 rounded-lg bg-[#0a1420] border border-[rgba(13,146,151,0.15)] text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#0d9297] focus:outline-none transition-all duration-200 resize-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-[rgba(13,146,151,0.15)]">
              <button
                className="px-6 py-3 rounded-lg text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #032233 0%, #0d9297 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                Enregistrer les modifications
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-transparent border border-[rgba(13,146,151,0.3)] text-[#0d9297] hover:bg-[rgba(13,146,151,0.1)] transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
