import React, { useState } from 'react';
import { PageView, Currency, SiteMode, User, Product } from '../types';
import { Menu, X, ShoppingBag, Search, Sun, Moon, User as UserIcon, Shield, Box } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenCart: () => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  siteMode: SiteMode;
  onSiteModeChange: (mode: SiteMode) => void;
  user: User | null;
  onLoginClick: () => void;
  onProductSelect: (product: Product) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
    cartCount, 
    onNavigate, 
    onOpenCart, 
    isDarkMode,
    onToggleDarkMode,
    user,
    onLoginClick,
    siteMode,
    onSiteModeChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { label: string; view: PageView }[] = [
      { label: 'Shop', view: 'shop' },
      { label: 'Ranges', view: 'ranges' },
      { label: 'Science', view: 'science' },
      { label: 'Hub', view: 'blog' },
      { label: 'About', view: 'about' },
  ];

  const handleNavClick = (view: PageView) => {
      onNavigate(view);
      setIsMobileMenuOpen(false);
  };

  return (
    <>
        <header className="sticky top-0 z-[60] bg-theme-bg/95 backdrop-blur border-b border-theme-border transition-colors duration-300 safe-top">
            <div className="container mx-auto px-6 h-[80px] flex justify-between items-center">
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden -ml-2 text-theme-text"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Logo */}
                <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
                    {/* FIXED: Paths now point to the root public folder (no /images/logos/) */}
                    <img 
                        id="logo-img" 
                        src={isDarkMode ? "/logo-white.png" : "/logo-black.png"} 
                        alt="Hi Yarndi" 
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* Desktop Nav - Minimal */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <span 
                            key={link.view}
                            onClick={() => onNavigate(link.view)}
                            className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-theme-text hover:text-accent cursor-pointer transition-colors"
                        >
                            {link.label}
                        </span>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    {/* Site Mode Toggle - Segmented Control */}
                    <div className="hidden md:flex items-center bg-theme-sub/10 rounded-full p-1 border border-theme-border mr-2">
                        <button 
                            onClick={() => onSiteModeChange('performance')}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 ${
                                siteMode === 'performance' 
                                ? 'bg-theme-text text-theme-bg shadow-sm' 
                                : 'text-theme-sub hover:text-theme-text'
                            }`}
                        >
                            Performance
                        </button>
                        <button 
                            onClick={() => onSiteModeChange('merch')}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 ${
                                siteMode === 'merch' 
                                ? 'bg-theme-text text-theme-bg shadow-sm' 
                                : 'text-theme-sub hover:text-theme-text'
                            }`}
                        >
                            Culture
                        </button>
                    </div>

                    <button onClick={onToggleDarkMode} className="text-theme-text hover:text-accent">
                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <button onClick={user ? () => user.role === 'admin' ? onNavigate('admin') : user.role === 'wholesale' ? onNavigate('wholesale') : onNavigate('account') : onLoginClick} className="text-theme-text hover:text-accent">
                        <UserIcon className="w-5 h-5" />
                    </button>

                    <button onClick={onOpenCart} className="relative text-theme-text hover:text-accent">
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-theme-text text-theme-bg text-[9px] font-bold w-3 h-3 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div 
            className={`fixed inset-0 z-[70] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
            onClick={() => setIsMobileMenuOpen(false)} 
        />
        
        {/* Minimal Mobile Drawer */}
        <div className={`fixed inset-y-0 left-0 z-[80] w-[85%] max-w-[320px] bg-theme-bg border-r border-theme-border transform transition-transform duration-500 ease-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-6 border-b border-theme-border flex justify-between items-center">
                 <span className="font-sans font-bold text-xl uppercase tracking-widest text-theme-text">Menu</span>
                 <button onClick={() => setIsMobileMenuOpen(false)}>
                     <X className="w-6 h-6 text-theme-text" />
                 </button>
            </div>
            
            <div className="flex-1 py-8 px-6 space-y-6 overflow-y-auto">
                {/* Mobile Site Mode Toggle */}
                <div className="pb-6 border-b border-theme-border">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-theme-sub mb-3 block">Site Mode</label>
                    <div className="flex items-center bg-theme-sub/10 rounded-full p-1 border border-theme-border">
                        <button 
                            onClick={() => {onSiteModeChange('performance'); setIsMobileMenuOpen(false)}}
                            className={`flex-1 px-4 py-3 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 ${
                                siteMode === 'performance' 
                                ? 'bg-theme-text text-theme-bg shadow-sm' 
                                : 'text-theme-sub hover:text-theme-text'
                            }`}
                        >
                            Performance
                        </button>
                        <button 
                            onClick={() => {onSiteModeChange('merch'); setIsMobileMenuOpen(false)}}
                            className={`flex-1 px-4 py-3 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 ${
                                siteMode === 'merch' 
                                ? 'bg-theme-text text-theme-bg shadow-sm' 
                                : 'text-theme-sub hover:text-theme-text'
                            }`}
                        >
                            Culture
                        </button>
                    </div>
                </div>

                {navLinks.map((link) => (
                    <button 
                        key={link.view}
                        onClick={() => handleNavClick(link.view)}
                        className="block w-full text-left text-2xl font-serif italic text-theme-text hover:pl-4 transition-all"
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
    </>
  );
};
