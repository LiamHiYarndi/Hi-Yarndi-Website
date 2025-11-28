


import React from 'react';
import { PageView } from '../types';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
    onNavigate: (page: PageView) => void;
}

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <XIcon />, href: "https://x.com", label: "X" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
  ];
  
  return (
    <footer className="bg-theme-bg border-t border-theme-border pt-12 md:pt-24 pb-8 md:pb-12 text-theme-text relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 mb-12 md:mb-24">
            <div className="col-span-2 md:col-span-2">
                <img 
                    src="/images/Logos/powered-by-hemp-black.png" 
                    className="h-12 w-auto mb-6 dark:hidden" 
                    alt="Powered by Hemp" 
                />
                <img 
                    src="/images/Logos/powered-by-hemp-white.png" 
                    className="h-12 w-auto mb-6 hidden dark:block" 
                    alt="Powered by Hemp" 
                />
                
                <h4 className="font-sans text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">Hi Yarndi.</h4>
                <p className="font-serif text-theme-sub italic mb-6 md:mb-8 text-sm md:text-base max-w-xs">
                    Recovery Evolved. <br/> Powered by Australian Hemp.
                </p>
                <div className="flex gap-4 mb-6">
                    {socialLinks.map((social, idx) => (
                        <a key={idx} href={social.href} target="_blank" className="hover:text-accent transition-colors">{social.icon}</a>
                    ))}
                </div>
                <div className="space-y-1 text-sm text-theme-sub">
                    <p className="font-bold text-theme-text">Head Office</p>
                    <p>123 Hemp Street</p>
                    <p>Richmond, VIC 3121</p>
                    <p className="pt-2"><a href="mailto:support@hiyarndi.com" className="hover:text-accent transition-colors">support@hiyarndi.com</a></p>
                </div>
            </div>

            <div>
                <h4 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-8">Shop</h4>
                <ul className="space-y-2 md:space-y-4 font-serif text-theme-sub text-sm">
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('shop')}>Shop All</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('ranges')}>Recovery+</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('ranges')}>Energize^</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('wholesale')}>Wholesale</li>
                </ul>
            </div>

            <div>
                <h4 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-8">Explore</h4>
                <ul className="space-y-2 md:space-y-4 font-serif text-theme-sub text-sm">
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('science')}>The Science</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('about')}>Our Story</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('blog')}>Journal</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('athletes')}>Athletes</li>
                </ul>
            </div>

            <div>
                <h4 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-8">Legal</h4>
                <ul className="space-y-2 md:space-y-4 font-serif text-theme-sub text-sm">
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('legal')}>Shipping & Returns</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('legal')}>Privacy Policy</li>
                    <li className="hover:text-theme-text cursor-pointer" onClick={() => onNavigate('legal')}>Terms of Service</li>
                </ul>
            </div>
        </div>

        <div className="border-t border-theme-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-widest text-theme-sub">
            <p>&copy; {new Date().getFullYear()} Hi Yarndi Pty Ltd.</p>
            <p>Designed & Developed in Australia.</p>
        </div>
      </div>
    </footer>
  );
};