import { LayoutDashboard, Package, MessageSquare, Settings, LogIn, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useState } from 'react';

interface MockupNavigationProps {
  currentScreen: string;
  onScreenChange: (screen: string) => void;
}

export function MockupNavigation({ currentScreen, onScreenChange }: MockupNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const screens = [
    { id: 'login', label: 'Login', icon: LogIn },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'catalog', label: 'Service Catalog', icon: Package },
    { id: 'chatbot', label: 'AI Assistant', icon: MessageSquare },
    { id: 'settings', label: 'Settings / RBAC', icon: Settings },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-72 bg-[#0a2433]/90 backdrop-blur-sm border-r border-[#0d9297]/20 flex-col">
        {/* Logo Section */}
        <div className="p-6 border-b border-[#0d9297]/20">
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="StackNest" className="h-12 w-auto" />
          </div>
          <p className="text-xs text-gray-400 mt-2">UI Mockup Showcase</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
              Maquettes
            </p>
            {screens.map((screen) => {
              const IconComponent = screen.icon;
              const isActive = currentScreen === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => onScreenChange(screen.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white shadow-lg shadow-[#0d9297]/20'
                      : 'text-gray-400 hover:text-white hover:bg-[#032233]/50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {screen.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer Info */}
        <div className="p-6 border-t border-[#0d9297]/20">
          <div className="bg-[#021519] border border-[#0d9297]/20 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">À propos</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Maquettes UI haute-fidélité pour la plateforme SaaS StackNest.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-[#0d9297]/10 border border-[#0d9297]/30 rounded text-xs text-[#0d9297]">
                Dark UI
              </span>
              <span className="px-2 py-0.5 bg-[#0d9297]/10 border border-[#0d9297]/30 rounded text-xs text-[#0d9297]">
                SaaS
              </span>
              <span className="px-2 py-0.5 bg-[#0d9297]/10 border border-[#0d9297]/30 rounded text-xs text-[#0d9297]">
                DevOps
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a2433]/90 backdrop-blur-sm border-b border-[#0d9297]/20 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="StackNest" className="h-8 w-auto" />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#032233]/95 backdrop-blur-sm pt-16">
          <nav className="p-4">
            <div className="space-y-2">
              {screens.map((screen) => {
                const IconComponent = screen.icon;
                const isActive = currentScreen === screen.id;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      onScreenChange(screen.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] text-white shadow-lg shadow-[#0d9297]/20'
                        : 'text-gray-400 hover:text-white hover:bg-[#032233]/50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {screen.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
