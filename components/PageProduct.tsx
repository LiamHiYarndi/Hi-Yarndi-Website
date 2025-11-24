
import React, { useState, useEffect, useRef } from 'react';
import { Product, Currency } from '../types';
import { Button } from './Button';
import ReactMarkdown from 'react-markdown';
import { formatPrice } from '../data';
import { ArrowLeft, Check, ChevronDown, ChevronUp, Star, ShieldCheck, Leaf, Zap, Droplets, Brain, Dumbbell, Moon, Flame, FlaskConical, Shirt, Scissors, Sun, Share2, Microscope } from 'lucide-react';
import { ComparisonSection } from './ComparisonSection';
import { ProductReviews } from './ProductReviews';

interface Props {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number, bundleQty: number, flavour: string, price: number) => void;
  currency: Currency;
}

export const PageProduct: React.FC<Props> = ({ product, onBack, onAddToCart, currency }) => {
  const [selectedBundle, setSelectedBundle] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours?.[0] || '');
  const [openSection, setOpenSection] = useState<string | null>('benefits'); 
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  
  const mainCtaRef = useRef<HTMLDivElement>(null);
  const isMerch = product.range === 'Merch';

  // Images
  const [activeImage, setActiveImage] = useState(product.image);
  useEffect(() => {
    setActiveImage(product.image);
    setSelectedFlavour(product.flavours?.[0] || '');
    setSelectedBundle(1);
  }, [product]);

  // Auto-switch image when flavour changes
  useEffect(() => {
    if (product.flavourImages && selectedFlavour && product.flavourImages[selectedFlavour]) {
      setActiveImage(product.flavourImages[selectedFlavour]);
    }
  }, [selectedFlavour, product.flavourImages]);

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show bar when main CTA is NOT intersecting (scrolled past)
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (mainCtaRef.current) {
      observer.observe(mainCtaRef.current);
    }

    return () => {
      if (mainCtaRef.current) observer.unobserve(mainCtaRef.current);
    };
  }, []);
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const getPrice = () => {
      const bundle = product.bundles?.find(b => b.quantity === selectedBundle);
      if(bundle) {
          return product.price * bundle.quantity * (1 - bundle.discount / 100);
      }
      return product.price * selectedBundle;
  };

  const currentPrice = getPrice();

  const handleAdd = () => {
      onAddToCart(product, 1, selectedBundle, selectedFlavour, currentPrice);
  }

  const handleShare = async () => {
      const shareData = {
          title: `Hi Yarndi - ${product.title}`,
          text: product.description,
          url: window.location.href
      };

      if (navigator.share) {
          try {
              await navigator.share(shareData);
          } catch (err) {
              console.log('Error sharing:', err);
          }
      } else {
          navigator.clipboard.writeText(window.location.href);
          setShowShareToast(true);
          setTimeout(() => setShowShareToast(false), 3000);
      }
  };

  const renderIcon = (type: string) => {
      switch(type) {
          case 'leaf': return <Leaf className="w-5 h-5 text-green-600" />;
          case 'zap': return <Zap className="w-5 h-5 text-yellow-500" />;
          case 'shield': return <ShieldCheck className="w-5 h-5 text-blue-500" />;
          case 'droplet': return <Droplets className="w-5 h-5 text-cyan-500" />;
          case 'brain': return <Brain className="w-5 h-5 text-purple-500" />;
          case 'muscle': return <Dumbbell className="w-5 h-5 text-red-500" />;
          case 'moon': return <Moon className="w-5 h-5 text-indigo-500" />;
          case 'flask': return <FlaskConical className="w-5 h-5 text-pink-500" />;
          case 'microscope': return <Microscope className="w-5 h-5 text-teal-600" />;
          case 'shirt': return <Shirt className="w-5 h-5 text-indigo-500" />;
          case 'scissors': return <Scissors className="w-5 h-5 text-gray-500" />;
          case 'sun': return <Sun className="w-5 h-5 text-orange-500" />;
          default: return <Check className="w-5 h-5 text-green-600" />;
      }
  }

  return (
    <div className="bg-theme-bg min-h-screen pb-24 md:pb-40 animate-fade-in relative">
        {/* Share Toast */}
        <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[80] bg-off-black text-white px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${showShareToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            Link Copied to Clipboard!
        </div>

        {/* Desktop Sticky Bar (Top) */}
        <div className={`fixed top-0 left-0 right-0 bg-theme-card/95 backdrop-blur border-b border-theme-border z-40 py-3 px-6 hidden lg:flex items-center justify-between shadow-md transition-transform duration-300 ${showStickyBar ? 'translate-y-[80px]' : '-translate-y-full'}`}>
            <div className="flex items-center gap-4">
                <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg object-cover bg-theme-bg" />
                <div>
                    <h4 className="font-bold text-theme-text text-sm">{product.title}</h4>
                    <p className="text-xs text-theme-sub font-medium">{selectedFlavour}</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                    <span className="font-bold text-xl text-theme-text">{formatPrice(currentPrice, currency)}</span>
                </div>
                <Button size="md" onClick={handleAdd}>Add to Cart</Button>
            </div>
        </div>

        {/* Mobile Sticky Header - Only shows if scrolling up ideally, but simplified here */}
        <div className="sticky top-[70px] z-20 bg-theme-card/95 backdrop-blur border-b border-theme-border px-4 py-3 flex items-center gap-3 lg:hidden animate-fade-in-up text-theme-text shadow-sm safe-top">
            <button onClick={onBack} className="p-1 -ml-1 active:scale-95"><ArrowLeft className="w-5 h-5" /></button>
            <span className="font-bold text-sm truncate flex-1">{product.title}</span>
            <button onClick={handleShare} className="ml-auto p-1 active:scale-95"><Share2 className="w-5 h-5 text-theme-text" /></button>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-6 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-20">
                
                {/* Left: Gallery */}
                <div className="space-y-4 animate-slide-in-left">
                    <div className="aspect-square bg-theme-bg rounded-3xl overflow-hidden relative group shadow-soft">
                        <img src={activeImage} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        {product.tag && (
                            <span className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-yarndi-green text-off-black shadow-md animate-fade-in-up delay-300">
                                {product.tag}
                            </span>
                        )}
                    </div>
                    {/* Thumbnails - Improved Mobile Scroll */}
                    {galleryImages.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-4 lg:gap-4 snap-x px-1 -mx-4 md:mx-0 pl-4 md:pl-0">
                            {galleryImages.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => setActiveImage(img)}
                                    className={`snap-start flex-shrink-0 w-20 h-20 md:w-auto md:h-auto aspect-square bg-theme-bg rounded-xl cursor-pointer hover:opacity-80 transition-opacity border-2 ${activeImage === img ? 'border-theme-text' : 'border-transparent'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover rounded-lg" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Info & Actions */}
                <div className="animate-slide-in-right delay-100">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="flex text-accent text-xs">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                            </div>
                            <span className="text-xs text-gray-400 font-medium">4.9 (120 Reviews)</span>
                        </div>
                        {isMerch ? (
                             <div className="flex items-center gap-1 text-theme-text text-[10px] font-bold uppercase tracking-widest">
                                <Shirt className="w-3 h-3" /> Apparel
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-red-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                                <Flame className="w-3 h-3" /> Selling Fast
                            </div>
                        )}
                    </div>

                    <h1 className="font-heading text-3xl md:text-5xl font-black text-theme-text mb-4 leading-tight">
                        {product.title}
                    </h1>
                    
                    <div className="flex items-baseline gap-3 mb-6">
                        <div className="text-3xl font-bold text-theme-text">
                            {formatPrice(currentPrice, currency)}
                        </div>
                        {product.compareAtPrice && selectedBundle === 1 && (
                            <div className="text-xl text-gray-400 line-through decoration-red-500 decoration-2">
                                {formatPrice(product.compareAtPrice, currency)}
                            </div>
                        )}
                    </div>

                    {/* === PRIMARY ACTION AREA === */}
                    <div ref={mainCtaRef} className="space-y-6 mb-8 p-1">
                        
                        {/* 1. Flavour/Size Selection */}
                        {product.flavours && (
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-400 mb-3">
                                    {isMerch ? 'Select Size' : 'Select Flavour'}
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {product.flavours.map(f => (
                                        <button
                                            key={f}
                                            onClick={() => setSelectedFlavour(f)}
                                            className={`
                                                ${isMerch ? 'min-w-[3rem] h-12 px-3' : 'px-4 py-3'}
                                                rounded-xl text-sm font-bold border-2 transition-all duration-200 
                                                ${selectedFlavour === f 
                                                    ? 'border-theme-text bg-theme-text text-theme-card scale-105 shadow-md' 
                                                    : 'border-theme-border text-theme-sub hover:border-gray-300 hover:scale-105'
                                                }`}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. Bundle/Save Options (Secondary) */}
                        {product.bundles && !isMerch && (
                            <div className="p-4 bg-theme-bg rounded-2xl border border-theme-border">
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-3">Buy More, Save More</label>
                                <div className="space-y-2">
                                    {product.bundles.map(bundle => (
                                        <div 
                                            key={bundle.quantity}
                                            onClick={() => setSelectedBundle(bundle.quantity)}
                                            className={`relative p-3 rounded-xl border-2 cursor-pointer flex justify-between items-center transition-all bg-theme-card hover:shadow-md ${
                                                selectedBundle === bundle.quantity
                                                ? 'border-yarndi-green shadow-sm ring-1 ring-yarndi-green scale-[1.02]' 
                                                : 'border-theme-border hover:border-gray-300'
                                            }`}
                                        >
                                            {bundle.saveText && (
                                                <div className="absolute -top-2.5 right-4 bg-theme-text text-theme-card text-[9px] font-bold px-2 py-0.5 rounded uppercase animate-bounce" style={{animationDuration: '3s'}}>
                                                    {bundle.saveText}
                                                </div>
                                            )}
                                            <div className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedBundle === bundle.quantity ? 'border-theme-text bg-theme-text' : 'border-gray-300'}`}>
                                                    {selectedBundle === bundle.quantity && <div className="w-2 h-2 bg-theme-card rounded-full" />}
                                                </div>
                                                <span className="font-bold text-theme-text text-sm">{bundle.label}</span>
                                            </div>
                                            <span className="font-bold text-sm text-theme-text">{formatPrice(product.price * bundle.quantity * (1 - bundle.discount/100), currency)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. ADD TO CART BUTTON (Primary) */}
                        <Button fullWidth size="lg" onClick={handleAdd} className="text-lg py-4 shadow-xl shadow-green-900/10 rounded-2xl h-14 hover:scale-[1.02] active:scale-95 transition-transform">
                            Add to Bag &mdash; {formatPrice(currentPrice, currency)}
                        </Button>
                    </div>

                    {/* Description */}
                    <div className="text-theme-sub mb-8 leading-relaxed text-sm md:text-base border-l-2 border-accent pl-4">
                        <ReactMarkdown components={{
                            p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
                            strong: ({node, ...props}) => <span className="font-bold text-theme-text" {...props} />
                        }}>
                            {product.longDescription || product.description}
                        </ReactMarkdown>
                    </div>

                    {/* Accordion Sections */}
                    <div className="border-t border-theme-border pt-2 space-y-2">
                        {/* Key Benefits */}
                        <div className="border-b border-theme-border pb-2">
                            <button onClick={() => toggleSection('benefits')} className="flex justify-between items-center w-full py-4 text-left font-bold text-theme-text text-sm uppercase tracking-wider">
                                <span>{isMerch ? 'Product Features' : 'Key Benefits'}</span>
                                {openSection === 'benefits' ? <ChevronUp className="w-4 h-4 transition-transform rotate-180" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                            </button>
                            {openSection === 'benefits' && (
                                <div className="pb-4 space-y-3 animate-fade-in-up">
                                    {product.benefitDetails ? product.benefitDetails.map((benefit, idx) => (
                                        <div key={idx} className="flex gap-3 items-start bg-theme-bg p-3 rounded-xl">
                                            <div className="mt-1 bg-theme-card p-1 rounded-full shadow-sm">{renderIcon(benefit.icon)}</div>
                                            <div>
                                                <h4 className="font-bold text-theme-text text-sm">{benefit.title}</h4>
                                                <p className="text-xs text-theme-sub leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </div>
                                    )) : <p className="text-sm text-gray-500">Details coming soon.</p>}
                                </div>
                            )}
                        </div>

                        {/* Ingredients & Nutrition */}
                        <div className="border-b border-theme-border pb-2">
                            <button onClick={() => toggleSection('ingredients')} className="flex justify-between items-center w-full py-4 text-left font-bold text-theme-text text-sm uppercase tracking-wider">
                                <span>{isMerch ? 'Materials & Care' : 'Ingredients & Nutrition'}</span>
                                {openSection === 'ingredients' ? <ChevronUp className="w-4 h-4 transition-transform rotate-180" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                            </button>
                            {openSection === 'ingredients' && (
                                <div className="pb-4 text-sm text-theme-sub space-y-4 animate-fade-in-up">
                                    {product.ingredientsList && (
                                        <p className="leading-relaxed bg-theme-bg p-4 rounded-xl font-medium text-xs">
                                            {isMerch ? <span className="font-bold block mb-1">Composition:</span> : null}
                                            {product.ingredientsList}
                                        </p>
                                    )}
                                    
                                    {!isMerch && product.nutrition && (
                                        <div className="overflow-x-auto border border-theme-border rounded-lg">
                                            <table className="w-full text-xs text-left min-w-[300px]">
                                                <thead className="bg-theme-bg">
                                                    <tr>
                                                        <th className="py-2 px-3 font-bold text-theme-text">Nutrient</th>
                                                        <th className="py-2 px-3 font-bold text-theme-text">Per Serve</th>
                                                        <th className="py-2 px-3 font-bold text-theme-text">Per 100g/ml</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-theme-border">
                                                    {product.nutrition.map((row, i) => (
                                                        <tr key={i}>
                                                            <td className="py-2 px-3 font-medium text-theme-text">{row.nutrient}</td>
                                                            <td className="py-2 px-3">{row.perServe}</td>
                                                            <td className="py-2 px-3">{row.per100}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {isMerch && product.usage && (
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-theme-bg p-3 rounded-xl">
                                                <span className="text-[10px] font-bold uppercase text-gray-400 block">Wash</span>
                                                <span className="text-xs font-bold text-theme-text">{product.usage.how}</span>
                                            </div>
                                            <div className="bg-theme-bg p-3 rounded-xl">
                                                 <span className="text-[10px] font-bold uppercase text-gray-400 block">Fit Tip</span>
                                                <span className="text-xs font-bold text-theme-text">{product.usage.proTip}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Usage */}
                        {!isMerch && product.usage && (
                            <div className="border-b border-theme-border pb-2">
                                <button onClick={() => toggleSection('usage')} className="flex justify-between items-center w-full py-4 text-left font-bold text-theme-text text-sm uppercase tracking-wider">
                                    <span>How to Use</span>
                                    {openSection === 'usage' ? <ChevronUp className="w-4 h-4 transition-transform rotate-180" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                                </button>
                                {openSection === 'usage' && (
                                    <div className="pb-4 grid grid-cols-1 gap-3 animate-fade-in-up">
                                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                            <span className="text-[10px] font-bold uppercase text-blue-600 block mb-1">When</span>
                                            <p className="font-bold text-sm text-theme-text">{product.usage.when}</p>
                                        </div>
                                        <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                                            <span className="text-[10px] font-bold uppercase text-teal-600 block mb-1">How</span>
                                            <p className="font-bold text-sm text-theme-text">{product.usage.how}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {!isMerch && <ComparisonSection productId={product.id} />}

            <ProductReviews productId={product.id} productTitle={product.title} />

        </div>

        {/* Mobile Sticky Add to Cart Bar */}
        <div className={`fixed bottom-0 left-0 right-0 p-4 bg-theme-card border-t border-theme-border lg:hidden z-[60] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 safe-bottom ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex items-center gap-4 mb-3">
                <div className="flex-1">
                    <p className="text-xs font-bold text-theme-text truncate">{product.title}</p>
                    <p className="text-[10px] text-gray-500">{selectedFlavour}</p>
                </div>
                <div className="font-bold text-lg text-theme-text">{formatPrice(currentPrice, currency)}</div>
            </div>
            <Button fullWidth size="lg" onClick={handleAdd}>
                Add to Cart
            </Button>
        </div>
    </div>
  );
};
