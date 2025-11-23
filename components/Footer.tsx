
import React from 'react';
import { PageView } from '../types';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
    onNavigate: (page: PageView) => void;
}

// Custom Icons for brands not in Lucide (or specific versions)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <TikTokIcon />, href: "https://tiktok.com", label: "TikTok" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <XIcon />, href: "https://x.com", label: "X" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
  ];
  
  // White Text Logo ID for dark backgrounds
  const LOGO_ID = "10ugFnwLOX_iWSwCY_JzEST9-n9Ii-rr2";
  const LOGO_URL = `https://drive.google.com/thumbnail?id=${LOGO_ID}&sz=w400`;

  return (
    <footer className="bg-off-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                     <img 
                        src={LOGO_URL} 
                        alt="Hi Yarndi" 
                        className="h-10 w-auto object-contain" 
                        referrerPolicy="no-referrer"
                    />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Powered By Hemp. Australian owned and operated. 
                    Energy when you need it, recovery when it counts.
                </p>
                <div className="flex gap-3 flex-wrap">
                    {socialLinks.map((social, idx) => (
                        <a 
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-accent hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer group"
                            aria-label={social.label}
                        >
                            <div className="transform group-hover:scale-110 transition-transform">
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Shop */}
            <div>
                <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-gray-500">Shop</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('shop')}>Shop All</li>
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('ranges')}>Recovery+</li>
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('ranges')}>Energize^</li>
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('ranges')}>Drip°</li>
                </ul>
            </div>

            {/* Explore */}
            <div>
                <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-gray-500">Explore</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('science')}>The Science</li>
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('athletes')}>Athlete Programs</li>
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('about')}>Our Story</li>
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('blog')}>Performance Hub</li>
                </ul>
            </div>

            {/* Support */}
            <div>
                <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-gray-500">Support</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="hover:text-accent cursor-pointer" onClick={() => onNavigate('contact')}>Contact Us</li>
                    <li className="hover:text-accent cursor-pointer">Shipping & Returns</li>
                    <li className="hover:text-accent cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-accent cursor-pointer">Terms of Service</li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Hi Yarndi Pty Ltd. All rights reserved. Proudly Australian Owned & Operated.</p>
            <p>Hi Yarndi is based in Australia. Designed & Developed in Australia. Manufactured in China.</p>
        </div>
      </div>
    </footer>
  );
};
