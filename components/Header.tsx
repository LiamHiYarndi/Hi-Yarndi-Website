
import React, { useState } from 'react';
import { PageView, Currency, SiteMode, User, Product } from '../types';
import { Menu, X, ShoppingBag, Search, Sun, Moon, User as UserIcon } from 'lucide-react';

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
    onLoginClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.style.display = 'none';
      const fallback = document.getElementById('text-logo-fallback');
      if (fallback) fallback.style.display = 'block';
  };

  const navLinks: { label: string; view: PageView }[] = [
      { label: 'Shop', view: 'shop' },
      { label: 'Ranges', view: 'ranges' },
      { label: 'Science', view: 'science' },
      { label: 'Blog', view: 'blog' },
      { label: 'About', view: 'about' },
  ];

  const handleNavClick = (view: PageView) => {
      onNavigate(view);
      setIsMobileMenuOpen(false);
  };

  return (
    <>
        <header className="sticky top-0 z-[60] bg-theme-card border-b border-theme-border transition-colors duration-300 safe-top">
            <div className="container mx-auto px-4 md:px-6 h-[70px] md:h-[80px] flex justify-between items-center">
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 -ml-2 text-theme-text hover:bg-theme-bg rounded-full transition-colors active:scale-95"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Logo */}
                <div className="flex items-center cursor-pointer select-none" onClick={() => onNavigate('home')}>
                    <img 
                        id="logo-img" 
                        src={isDarkMode ? "logo-white.png" : "logo-black.png"} 
                        alt="Hi Yarndi Logo" 
                        className="h-8 md:h-10 w-auto object-contain"
                        onError={handleFallback}
                    />
                    <div id="text-logo-fallback" className="hidden font-black text-xl md:text-2xl uppercase tracking-tighter text-theme-text ml-2">HI YARNDI</div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.slice(0, 3).map((link) => ( // Show first 3 links on desktop header
                        <span 
                            key={link.view}
                            onClick={() => onNavigate(link.view)}
                            className="text-sm font-bold uppercase tracking-widest text-theme-text hover:text-accent cursor-pointer transition-colors"
                        >
                            {link.label}
                        </span>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Search - Desktop Only */}
                    <button className="hidden md:flex p-2 text-theme-text hover:bg-theme-bg rounded-full transition-colors">
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Dark Mode Toggle */}
                    <button 
                        onClick={onToggleDarkMode}
                        className="p-2 text-theme-text hover:bg-theme-bg rounded-full transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    {/* Account */}
                    <button 
                        onClick={() => user ? onNavigate('account') : onLoginClick()}
                        className="hidden md:flex p-2 text-theme-text hover:bg-theme-bg rounded-full transition-colors"
                    >
                        <UserIcon className="w-5 h-5" />
                    </button>

                    {/* Cart */}
                    <button 
                        onClick={onOpenCart}
                        className="relative p-2 text-theme-text hover:bg-theme-bg rounded-full transition-colors active:scale-95"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-accent text-off-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce-in">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div 
            className={`fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
            onClick={() => setIsMobileMenuOpen(false)} 
        />
        
        {/* Mobile Menu Drawer */}
        <div className={`fixed inset-y-0 left-0 z-[80] w-[85%] max-w-[320px] bg-theme-card border-r border-theme-border shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-5 border-b border-theme-border flex justify-between items-center bg-theme-card safe-top">
                 <span className="font-heading font-black text-xl text-theme-text">MENU</span>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-theme-text hover:bg-theme-bg rounded-full active:scale-90 transition-transform">
                     <X className="w-6 h-6" />
                 </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4 bg-theme-card overscroll-contain">
                <nav className="flex flex-col">
                    {navLinks.map((link) => (
                        <button 
                            key={link.view}
                            onClick={() => handleNavClick(link.view)}
                            className="px-6 py-4 text-left text-lg font-bold text-theme-text hover:bg-theme-bg border-l-4 border-transparent hover:border-accent transition-all active:bg-theme-bg"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="mt-8 px-6 space-y-4">
                     <button 
                        onClick={() => {
                            user ? handleNavClick('account') : onLoginClick();
                            setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 w-full p-4 rounded-xl bg-theme-bg text-theme-text font-bold active:scale-[0.98] transition-transform"
                    >
                         <UserIcon className="w-5 h-5" />
                         {user ? 'My Account' : 'Sign In / Join'}
                     </button>
                </div>
            </div>

            <div className="p-6 border-t border-theme-border bg-theme-card safe-bottom">
                <p className="text-xs text-theme-sub text-center">
                    &copy; {new Date().getFullYear()} Hi Yarndi
                </p>
            </div>
        </div>
    </>
  );
};
