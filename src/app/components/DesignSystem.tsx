import { Check, X, AlertTriangle, Info, Loader2, ChevronRight, Copy, Search, Server, Database, Cloud } from 'lucide-react';
import logo from '@/assets/logo.png';

export function DesignSystem() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#032233] via-[#041e2b] to-[#021519] overflow-auto">
      <div className="max-w-7xl mx-auto p-8 space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <img src={logo} alt="StackNest" className="h-20 w-auto mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-3">Charte Graphique StackNest</h1>
          <p className="text-lg text-gray-400">Design System - Version 1.0</p>
          <p className="text-sm text-gray-500 mt-2">Enterprise SaaS DevOps Platform</p>
        </div>

        {/* 1. PALETTE DE COULEURS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Palette de couleurs</h2>
            <p className="text-gray-400 text-sm">Couleurs principales et fonctionnelles du système</p>
          </div>

          {/* Couleurs Principales */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Couleurs Principales</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-24 bg-[#032233] rounded-lg mb-4 shadow-lg"></div>
                <h4 className="text-white font-semibold mb-2">Primary</h4>
                <p className="text-sm text-gray-400 font-mono">#032233</p>
                <p className="text-xs text-gray-500 mt-1">Bleu nuit profond</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-24 bg-[#0d9297] rounded-lg mb-4 shadow-lg shadow-[#0d9297]/30"></div>
                <h4 className="text-white font-semibold mb-2">Secondary</h4>
                <p className="text-sm text-gray-400 font-mono">#0d9297</p>
                <p className="text-xs text-gray-500 mt-1">Cyan moderne</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-24 bg-[#fea21f] rounded-lg mb-4 shadow-lg shadow-[#fea21f]/30"></div>
                <h4 className="text-white font-semibold mb-2">Accent / CTA</h4>
                <p className="text-sm text-gray-400 font-mono">#fea21f</p>
                <p className="text-xs text-gray-500 mt-1">Orange/Jaune subtil</p>
              </div>
            </div>
          </div>

          {/* Couleurs Fonctionnelles */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Couleurs Fonctionnelles</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-20 bg-[#22c55e] rounded-lg mb-4 shadow-lg shadow-[#22c55e]/20"></div>
                <h4 className="text-white font-semibold mb-2">Success</h4>
                <p className="text-sm text-gray-400 font-mono">#22c55e</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-20 bg-[#c42b1c] rounded-lg mb-4 shadow-lg shadow-[#c42b1c]/20"></div>
                <h4 className="text-white font-semibold mb-2">Error</h4>
                <p className="text-sm text-gray-400 font-mono">#c42b1c</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-20 bg-[#f59e0b] rounded-lg mb-4 shadow-lg shadow-[#f59e0b]/20"></div>
                <h4 className="text-white font-semibold mb-2">Warning</h4>
                <p className="text-sm text-gray-400 font-mono">#f59e0b</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-20 bg-[#3b82f6] rounded-lg mb-4 shadow-lg shadow-[#3b82f6]/20"></div>
                <h4 className="text-white font-semibold mb-2">Info</h4>
                <p className="text-sm text-gray-400 font-mono">#3b82f6</p>
              </div>
            </div>
          </div>

          {/* Dégradés */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Dégradés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-24 bg-gradient-to-r from-[#032233] to-[#0d9297] rounded-lg mb-4 shadow-lg"></div>
                <h4 className="text-white font-semibold mb-2">Primary → Secondary</h4>
                <p className="text-sm text-gray-400 font-mono">from-[#032233] to-[#0d9297]</p>
                <p className="text-xs text-gray-500 mt-1">Hero sections, Headers</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-24 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] rounded-lg mb-4 shadow-lg shadow-[#0d9297]/20"></div>
                <h4 className="text-white font-semibold mb-2">CTA Gradient</h4>
                <p className="text-sm text-gray-400 font-mono">from-[#0d9297] to-[#0b7b7f]</p>
                <p className="text-xs text-gray-500 mt-1">Boutons principaux</p>
              </div>
            </div>
          </div>

          {/* Surfaces */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Surfaces & Backgrounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-20 bg-[#021519] rounded-lg mb-4 border border-gray-800"></div>
                <h4 className="text-white font-semibold mb-2">Background Dark</h4>
                <p className="text-sm text-gray-400 font-mono">#021519</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-20 bg-[#0a2433]/80 backdrop-blur-sm rounded-lg mb-4 border border-[#0d9297]/20"></div>
                <h4 className="text-white font-semibold mb-2">Card Surface</h4>
                <p className="text-sm text-gray-400 font-mono">#0a2433 / 80%</p>
              </div>
              <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-6">
                <div className="w-full h-20 bg-[#032233]/50 rounded-lg mb-4 border border-[#0d9297]/10"></div>
                <h4 className="text-white font-semibold mb-2">Secondary Surface</h4>
                <p className="text-sm text-gray-400 font-mono">#032233 / 50%</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TYPOGRAPHIE */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">2. Typographie</h2>
            <p className="text-gray-400 text-sm">Hiérarchie et styles de texte</p>
          </div>

          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8 space-y-6">
            {/* Fonts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-gray-700/50">
              <div>
                <p className="text-xs text-gray-500 mb-2">TITRES</p>
                <p className="text-white font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>Space Grotesk</p>
                <p className="text-xs text-gray-400 mt-1">Weights: 400, 500, 600, 700</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">TEXTE</p>
                <p className="text-white font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Inter</p>
                <p className="text-xs text-gray-400 mt-1">Weights: 300, 400, 500, 600, 700</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">CODE</p>
                <p className="text-white font-semibold font-mono">JetBrains Mono</p>
                <p className="text-xs text-gray-400 mt-1">Weights: 400, 500, 600</p>
              </div>
            </div>

            {/* Hierarchy */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">H1</span>
                <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Titre Principal
                </h1>
                <span className="text-xs text-gray-400 ml-auto font-mono">36px / Bold</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">H2</span>
                <h2 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Titre Section
                </h2>
                <span className="text-xs text-gray-400 ml-auto font-mono">30px / Semibold</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">H3</span>
                <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Titre Sous-section
                </h3>
                <span className="text-xs text-gray-400 ml-auto font-mono">24px / Semibold</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">H4</span>
                <h4 className="text-xl font-medium text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Titre Card
                </h4>
                <span className="text-xs text-gray-400 ml-auto font-mono">20px / Medium</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">Body</span>
                <p className="text-base text-gray-300">Texte de paragraphe standard avec une bonne lisibilité</p>
                <span className="text-xs text-gray-400 ml-auto font-mono">16px / Regular</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">Small</span>
                <p className="text-sm text-gray-400">Texte secondaire ou informations complémentaires</p>
                <span className="text-xs text-gray-400 ml-auto font-mono">14px / Regular</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">Caption</span>
                <p className="text-xs text-gray-500">Labels, hints, timestamps</p>
                <span className="text-xs text-gray-400 ml-auto font-mono">12px / Regular</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-16">Code</span>
                <code className="text-sm text-[#0d9297] font-mono bg-[#021519] px-2 py-1 rounded">const value = true;</code>
                <span className="text-xs text-gray-400 ml-auto font-mono">14px / Mono</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BOUTONS - TOUS LES ÉTATS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">3. Boutons</h2>
            <p className="text-gray-400 text-sm">Tous les états et variations</p>
          </div>

          {/* Bouton Primaire */}
          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <h3 className="text-lg font-medium text-white mb-6">Bouton Primaire (CTA)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white font-medium rounded-lg shadow-lg shadow-[#0d9297]/20 transition-all duration-200">
                  Default
                </button>
                <p className="text-xs text-gray-400 text-center">État par défaut</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0fa8ad] to-[#0d8a8f] text-white font-medium rounded-lg shadow-xl shadow-[#0d9297]/30 transition-all duration-200">
                  Hover
                </button>
                <p className="text-xs text-gray-400 text-center">Au survol</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white font-medium rounded-lg shadow-md shadow-[#0d9297]/20 transition-all duration-200 scale-95">
                  Active
                </button>
                <p className="text-xs text-gray-400 text-center">Au clic</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white font-medium rounded-lg shadow-lg shadow-[#0d9297]/20 ring-2 ring-[#0d9297] ring-offset-2 ring-offset-[#021519]">
                  Focus
                </button>
                <p className="text-xs text-gray-400 text-center">Focus clavier</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white font-medium rounded-lg opacity-50 cursor-not-allowed">
                  Disabled
                </button>
                <p className="text-xs text-gray-400 text-center">Désactivé</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white font-medium rounded-lg shadow-lg shadow-[#0d9297]/20 flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading
                </button>
                <p className="text-xs text-gray-400 text-center">Chargement</p>
              </div>
            </div>
          </div>

          {/* Bouton Secondaire */}
          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <h3 className="text-lg font-medium text-white mb-6">Bouton Secondaire</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent border border-[#0d9297]/30 text-[#0d9297] font-medium rounded-lg transition-all duration-200">
                  Default
                </button>
                <p className="text-xs text-gray-400 text-center">État par défaut</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-[#0d9297]/10 border border-[#0d9297]/50 text-[#0fa8ad] font-medium rounded-lg transition-all duration-200">
                  Hover
                </button>
                <p className="text-xs text-gray-400 text-center">Au survol</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-[#0d9297]/20 border border-[#0d9297]/60 text-[#0d9297] font-medium rounded-lg transition-all duration-200 scale-95">
                  Active
                </button>
                <p className="text-xs text-gray-400 text-center">Au clic</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent border border-[#0d9297]/30 text-[#0d9297] font-medium rounded-lg ring-2 ring-[#0d9297] ring-offset-2 ring-offset-[#021519]">
                  Focus
                </button>
                <p className="text-xs text-gray-400 text-center">Focus clavier</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent border border-gray-700/30 text-gray-500 font-medium rounded-lg opacity-50 cursor-not-allowed">
                  Disabled
                </button>
                <p className="text-xs text-gray-400 text-center">Désactivé</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent border border-[#0d9297]/30 text-[#0d9297] font-medium rounded-lg flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </button>
                <p className="text-xs text-gray-400 text-center">Chargement</p>
              </div>
            </div>
          </div>

          {/* Bouton Ghost */}
          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <h3 className="text-lg font-medium text-white mb-6">Bouton Ghost</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent text-gray-300 font-medium rounded-lg transition-all duration-200">
                  Default
                </button>
                <p className="text-xs text-gray-400 text-center">État par défaut</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-[#0d9297]/10 text-white font-medium rounded-lg transition-all duration-200">
                  Hover
                </button>
                <p className="text-xs text-gray-400 text-center">Au survol</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-[#0d9297]/20 text-white font-medium rounded-lg transition-all duration-200">
                  Active
                </button>
                <p className="text-xs text-gray-400 text-center">Au clic</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent text-gray-300 font-medium rounded-lg ring-2 ring-[#0d9297] ring-offset-2 ring-offset-[#021519]">
                  Focus
                </button>
                <p className="text-xs text-gray-400 text-center">Focus clavier</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent text-gray-600 font-medium rounded-lg opacity-50 cursor-not-allowed">
                  Disabled
                </button>
                <p className="text-xs text-gray-400 text-center">Désactivé</p>
              </div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-transparent text-gray-300 font-medium rounded-lg flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </button>
                <p className="text-xs text-gray-400 text-center">Chargement</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. INPUTS & FORMULAIRES */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">4. Inputs & Formulaires</h2>
            <p className="text-gray-400 text-sm">Tous les états de champs de formulaire</p>
          </div>

          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Default</label>
                <input
                  type="text"
                  placeholder="Entrez votre texte..."
                  className="w-full px-4 py-2.5 bg-[#021519] border border-[#0d9297]/30 rounded-lg text-white placeholder-gray-500 transition-all"
                />
                <p className="text-xs text-gray-500">État par défaut</p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Hover</label>
                <input
                  type="text"
                  placeholder="Entrez votre texte..."
                  className="w-full px-4 py-2.5 bg-[#021519] border border-[#0d9297]/50 rounded-lg text-white placeholder-gray-500 transition-all"
                />
                <p className="text-xs text-gray-500">Au survol</p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Focus</label>
                <input
                  type="text"
                  placeholder="Entrez votre texte..."
                  className="w-full px-4 py-2.5 bg-[#021519] border border-[#0d9297] rounded-lg text-white placeholder-gray-500 ring-2 ring-[#0d9297] transition-all"
                />
                <p className="text-xs text-gray-500">Focus actif avec glow</p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Filled</label>
                <input
                  type="text"
                  value="john.doe@company.com"
                  className="w-full px-4 py-2.5 bg-[#021519] border border-[#0d9297]/30 rounded-lg text-white transition-all"
                  readOnly
                />
                <p className="text-xs text-gray-500">Avec valeur</p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Error</label>
                <input
                  type="text"
                  placeholder="Entrez votre texte..."
                  className="w-full px-4 py-2.5 bg-[#021519] border border-[#c42b1c] rounded-lg text-white placeholder-gray-500 transition-all"
                />
                <p className="text-xs text-[#ff6b6b] flex items-center gap-1">
                  <X className="w-3 h-3" />
                  Ce champ est requis
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Success</label>
                <input
                  type="text"
                  value="Validé avec succès"
                  className="w-full px-4 py-2.5 bg-[#021519] border border-[#22c55e] rounded-lg text-white transition-all"
                  readOnly
                />
                <p className="text-xs text-[#22c55e] flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Email vérifié
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Disabled</label>
                <input
                  type="text"
                  placeholder="Champ désactivé"
                  disabled
                  className="w-full px-4 py-2.5 bg-[#021519] border border-gray-700/30 rounded-lg text-gray-600 placeholder-gray-600 opacity-50 cursor-not-allowed transition-all"
                />
                <p className="text-xs text-gray-500">Non modifiable</p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">With Icon</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full pl-12 pr-4 py-2.5 bg-[#021519] border border-[#0d9297]/30 rounded-lg text-white placeholder-gray-500 transition-all"
                  />
                </div>
                <p className="text-xs text-gray-500">Avec icône</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BADGES & STATUTS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">5. Badges & Statuts</h2>
            <p className="text-gray-400 text-sm">Indicateurs visuels d'état</p>
          </div>

          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Success</h4>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-md text-sm text-[#22c55e]">
                    <Check className="w-3 h-3" />
                    Active
                  </span>
                  <br />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-md text-sm text-[#22c55e]">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    Deployed
                  </span>
                  <br />
                  <span className="inline-flex items-center px-3 py-1.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full text-xs font-medium text-[#22c55e]">
                    Healthy
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Error</h4>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#c42b1c]/10 border border-[#c42b1c]/30 rounded-md text-sm text-[#ff6b6b]">
                    <X className="w-3 h-3" />
                    Failed
                  </span>
                  <br />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#c42b1c]/10 border border-[#c42b1c]/30 rounded-md text-sm text-[#ff6b6b]">
                    <div className="w-2 h-2 rounded-full bg-[#c42b1c]" />
                    Error
                  </span>
                  <br />
                  <span className="inline-flex items-center px-3 py-1.5 bg-[#c42b1c]/10 border border-[#c42b1c]/30 rounded-full text-xs font-medium text-[#ff6b6b]">
                    Critical
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Warning</h4>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-md text-sm text-[#f59e0b]">
                    <AlertTriangle className="w-3 h-3" />
                    Warning
                  </span>
                  <br />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fea21f]/10 border border-[#fea21f]/30 rounded-md text-sm text-[#fea21f]">
                    <div className="w-2 h-2 rounded-full bg-[#fea21f]" />
                    Pending
                  </span>
                  <br />
                  <span className="inline-flex items-center px-3 py-1.5 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full text-xs font-medium text-[#f59e0b]">
                    Beta
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Info / Neutral</h4>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0d9297]/10 border border-[#0d9297]/30 rounded-md text-sm text-[#0d9297]">
                    <Info className="w-3 h-3" />
                    Info
                  </span>
                  <br />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/20 border border-gray-700/30 rounded-md text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-500" />
                    Inactive
                  </span>
                  <br />
                  <span className="inline-flex items-center px-3 py-1.5 bg-[#0d9297]/10 border border-[#0d9297]/30 rounded-full text-xs font-medium text-[#0d9297]">
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CARDS & CONTAINERS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">6. Cards & Containers</h2>
            <p className="text-gray-400 text-sm">Conteneurs et surfaces</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-6 shadow-lg transition-all hover:border-[#0d9297]/40 hover:shadow-xl hover:shadow-[#0d9297]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#0d9297]/20 to-[#0d9297]/5 rounded-lg">
                  <Server className="w-6 h-6 text-[#0d9297]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Card Standard</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">Fond sombre avec transparence, bordure subtile et ombre douce. Effet hover avec élévation.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1 h-1 rounded-full bg-[#22c55e]" />
                <span>Active</span>
              </div>
            </div>

            <div className="bg-[#021519] border border-[#0d9297]/30 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#fea21f]/20 to-[#fea21f]/5 rounded-lg">
                  <Database className="w-6 h-6 text-[#fea21f]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Card Solid</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">Fond opaque pour plus de contraste. Bordure plus visible. Idéal pour contenus importants.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1 h-1 rounded-full bg-[#fea21f]" />
                <span>Processing</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0d9297]/10 to-[#0d9297]/5 border border-[#0d9297]/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#0d9297]/30 to-[#0d9297]/10 rounded-lg">
                  <Cloud className="w-6 h-6 text-[#0d9297]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Card Gradient</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">Fond avec dégradé subtil pour mettre en valeur des éléments spéciaux ou premium.</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1 h-1 rounded-full bg-[#0d9297]" />
                <span>Premium</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ICONOGRAPHIE */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">7. Iconographie</h2>
            <p className="text-gray-400 text-sm">Style d'icônes et usage</p>
          </div>

          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { Icon: Server, label: 'Server' },
                { Icon: Database, label: 'Database' },
                { Icon: Cloud, label: 'Cloud' },
                { Icon: Check, label: 'Check' },
                { Icon: X, label: 'Close' },
                { Icon: AlertTriangle, label: 'Warning' },
                { Icon: Info, label: 'Info' },
                { Icon: Search, label: 'Search' },
                { Icon: Copy, label: 'Copy' },
                { Icon: ChevronRight, label: 'Arrow' },
                { Icon: Loader2, label: 'Loading' },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="p-4 bg-[#021519] border border-[#0d9297]/20 rounded-lg hover:border-[#0d9297]/40 transition-all">
                    <Icon className="w-6 h-6 text-[#0d9297]" />
                  </div>
                  <span className="text-xs text-gray-400">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-6 text-center">
              Icônes linéaires (stroke), 24px par défaut, épaisseur 2px. Couleur adaptée au contexte.
            </p>
          </div>
        </section>

        {/* 8. SPACING & LAYOUT */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">8. Spacing & Layout</h2>
            <p className="text-gray-400 text-sm">Système d'espacement</p>
          </div>

          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { size: '4px', value: '1' },
                { size: '8px', value: '2' },
                { size: '12px', value: '3' },
                { size: '16px', value: '4' },
                { size: '24px', value: '6' },
                { size: '32px', value: '8' },
                { size: '48px', value: '12' },
                { size: '64px', value: '16' },
              ].map(({ size, value }) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <div className="w-full bg-[#021519] border border-[#0d9297]/20 rounded p-2 flex items-center justify-center">
                    <div className="bg-[#0d9297] rounded" style={{ width: size, height: size }}></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-white font-mono">{size}</p>
                    <p className="text-xs text-gray-500">space-{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. ANIMATIONS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">9. Animations & Transitions</h2>
            <p className="text-gray-400 text-sm">Mouvements et transitions</p>
          </div>

          <div className="bg-[#0a2433]/80 border border-[#0d9297]/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Duration</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Fast</span>
                    <code className="text-[#0d9297] font-mono">150ms</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Normal</span>
                    <code className="text-[#0d9297] font-mono">200ms</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Slow</span>
                    <code className="text-[#0d9297] font-mono">300ms</code>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Easing</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Ease</span>
                    <code className="text-[#0d9297] font-mono">ease-in-out</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Linear</span>
                    <code className="text-[#0d9297] font-mono">linear</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Cubic</span>
                    <code className="text-[#0d9297] font-mono">cubic-bezier</code>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Effects</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Fade in/out</div>
                  <div>• Slide up/down</div>
                  <div>• Scale (subtle)</div>
                  <div>• Glow (hover CTA)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 pb-8 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm mb-2">StackNest Design System v1.0</p>
          <p className="text-gray-500 text-xs">© 2026 StackNest - Enterprise Cloud Platform</p>
        </footer>
      </div>
    </div>
  );
}
