
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Button } from './Button';
import { ArrowLeft, Check, ShieldCheck, ChevronDown, ChevronUp, Leaf, Zap, Droplets, Brain, Dumbbell, Moon } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedBundle, setSelectedBundle] = useState<number>(1); // 1 represents single unit
  const [selectedFlavour, setSelectedFlavour] = useState<string>(product.flavours?.[0] || '');
  const [openSection, setOpenSection] = useState<string | null>('ingredients');

  // Ensure active image updates if product prop changes
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

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Calculate Price based on bundle
  const getPrice = () => {
    if (selectedBundle === 1) return product.price;
    const bundle = product.bundles?.find(b => b.quantity === selectedBundle);
    if (bundle) {
        const total = product.price * bundle.quantity;
        return total * (1 - bundle.discount / 100);
    }
    return product.price * selectedBundle;
  };

  const currentPrice = getPrice();
  
  // Helper to render feature icons
  const renderIcon = (type: string) => {
      switch(type) {
          case 'leaf': return <Leaf className="w-5 h-5 text-green-600" />;
          case 'zap': return <Zap className="w-5 h-5 text-yellow-500" />;
          case 'shield': return <ShieldCheck className="w-5 h-5 text-blue-500" />;
          case 'droplet': return <Droplets className="w-5 h-5 text-cyan-500" />;
          case 'brain': return <Brain className="w-5 h-5 text-purple-500" />;
          case 'muscle': return <Dumbbell className="w-5 h-5 text-red-500" />;
          case 'moon': return <Moon className="w-5 h-5 text-indigo-500" />;
          default: return <Check className="w-5 h-5 text-green-600" />;
      }
  }

  return (
    <div className="bg-white min-h-screen animate-fade-in-up">
      {/* Navigation Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-soft-gray hover:text-premium-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="font-bold text-premium-black text-sm md:text-base truncate max-w-[200px]">{product.title}</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 md:py-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Left Column: Image & Gallery */}
          <div className="relative">
            <div className="lg:sticky lg:top-24 space-y-4 md:space-y-6">
              {/* Main Image */}
              <div className="aspect-square bg-premium-gray rounded-3xl overflow-hidden relative shadow-soft group">
                <img 
                  src={activeImage} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 md:top-6 md:left-6 bg-yarndi-green px-3 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-premium-black shadow-sm">
                    {product.tag}
                  </span>
                )}
                
                {/* Floating Trust Badges on Image */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-wrap gap-2 max-w-[80%]">
                    <div className="bg-white/90 backdrop-blur px-2 py-1 md:px-3 rounded-lg text-[9px] md:text-[10px] font-bold uppercase text-premium-black flex items-center gap-1 shadow-sm">
                        <ShieldCheck className="w-3 h-3 text-green-600" /> FSANZ Compliant
                    </div>
                    <div className="bg-white/90 backdrop-blur px-2 py-1 md:px-3 rounded-lg text-[9px] md:text-[10px] font-bold uppercase text-premium-black shadow-sm">
                        🇦🇺 Aussie Owned
                    </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2 md:gap-4">
                  {galleryImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === img 
                          ? 'border-premium-black opacity-100 ring-2 ring-premium-black/10' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">
            <div className="mb-2">
                <span className="text-yarndi-green font-bold uppercase tracking-widest text-xs">{product.subtitle}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-premium-black mb-4 tracking-tight font-troopiland leading-tight">
              {product.title}
            </h1>

            {/* Price Block */}
            <div className="flex items-baseline gap-3 md:gap-4 mb-6">
              <div className="text-2xl md:text-3xl font-bold text-premium-black">
                ${currentPrice.toFixed(2)}
              </div>
              {product.compareAtPrice && selectedBundle === 1 && (
                 <div className="text-lg md:text-xl text-gray-400 line-through decoration-red-500 decoration-2">
                    ${product.compareAtPrice.toFixed(2)}
                 </div>
              )}
              {product.format && (
                  <div className="text-xs md:text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                      {product.format}
                  </div>
              )}
            </div>

            {/* Description */}
            <div className="prose text-soft-gray mb-8 leading-relaxed text-sm md:text-base">
              <p>{product.longDescription || product.description}</p>
            </div>

            {/* Flavour Selection */}
            {product.flavours && (
                <div className="mb-8">
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-3">Select Flavour</label>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {product.flavours.map(flavour => (
                            <button
                                key={flavour}
                                onClick={() => setSelectedFlavour(flavour)}
                                className={`px-3 py-2 md:px-4 rounded-lg text-xs md:text-sm font-bold border-2 transition-all ${
                                    selectedFlavour === flavour
                                    ? 'border-premium-black bg-premium-black text-white'
                                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                            >
                                {flavour}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Bundle Selector */}
            {product.bundles && (
                <div className="mb-8">
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-3">Quantity & Savings</label>
                    <div className="grid grid-cols-1 gap-3">
                        {/* Single Option */}
                        <div 
                            onClick={() => setSelectedBundle(1)}
                            className={`relative p-3 md:p-4 rounded-xl border-2 cursor-pointer flex justify-between items-center transition-all ${
                                selectedBundle === 1 
                                ? 'border-yarndi-green bg-green-50/50 shadow-sm' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border flex items-center justify-center ${selectedBundle === 1 ? 'border-premium-black bg-premium-black' : 'border-gray-300'}`}>
                                    {selectedBundle === 1 && <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />}
                                </div>
                                <div>
                                    <span className="font-bold text-premium-black text-sm md:text-base block">1 Pack</span>
                                    {product.pricePerUnit && <span className="text-xs text-gray-500">{product.pricePerUnit}</span>}
                                </div>
                            </div>
                            <span className="font-bold text-sm md:text-base">${product.price.toFixed(2)}</span>
                        </div>

                        {/* Bundle Options */}
                        {product.bundles.map(bundle => (
                            <div 
                                key={bundle.quantity}
                                onClick={() => setSelectedBundle(bundle.quantity)}
                                className={`relative p-3 md:p-4 rounded-xl border-2 cursor-pointer flex justify-between items-center transition-all ${
                                    selectedBundle === bundle.quantity
                                    ? 'border-yarndi-green bg-green-50/50 shadow-sm' 
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <div className="absolute -top-2.5 right-4 bg-premium-black text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                    {bundle.saveText}
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border flex items-center justify-center ${selectedBundle === bundle.quantity ? 'border-premium-black bg-premium-black' : 'border-gray-300'}`}>
                                        {selectedBundle === bundle.quantity && <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />}
                                    </div>
                                    <div>
                                        <span className="font-bold text-premium-black block text-sm md:text-base">{bundle.label}</span>
                                        <span className="text-[10px] md:text-xs text-gray-500">{bundle.quantity} Packs</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold block text-sm md:text-base">${(product.price * bundle.quantity * (1 - bundle.discount/100)).toFixed(2)}</span>
                                    <span className="text-[10px] md:text-xs text-gray-400 line-through">${(product.price * bundle.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

             <Button 
              variant="primary" 
              className="w-full rounded-2xl text-base md:text-lg py-4 shadow-xl shadow-green-900/10"
              onClick={onAddToCart}
             >
                Add to Bag &mdash; ${currentPrice.toFixed(2)}
            </Button>
            
            {/* Accordion Sections */}
             <div className="mt-8 border-t border-gray-100 pt-6 space-y-4">
                 {/* Ingredients */}
                 <div className="border-b border-gray-100 pb-4">
                     <button onClick={() => toggleSection('ingredients')} className="flex justify-between items-center w-full text-left font-bold text-premium-black text-sm uppercase tracking-wider">
                         <span>Ingredients & Nutrition</span>
                         {openSection === 'ingredients' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                     </button>
                     {openSection === 'ingredients' && (
                         <div className="mt-4 text-sm text-gray-500 space-y-4 animate-fade-in-up">
                             <p className="leading-relaxed">{product.ingredientsList}</p>
                             
                             {/* Nutrition Table */}
                             {product.nutrition && (
                                 <div className="overflow-x-auto">
                                     <table className="w-full text-xs text-left">
                                         <thead>
                                             <tr className="border-b border-gray-200">
                                                 <th className="py-2 font-bold text-premium-black">Nutrient</th>
                                                 <th className="py-2 font-bold text-premium-black">Per Serve</th>
                                                 <th className="py-2 font-bold text-premium-black">Per 100g/ml</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             {product.nutrition.map((row, i) => (
                                                 <tr key={i} className="border-b border-gray-100 last:border-0">
                                                     <td className="py-2 font-medium">{row.nutrient}</td>
                                                     <td className="py-2">{row.perServe}</td>
                                                     <td className="py-2">{row.per100}</td>
                                                 </tr>
                                             ))}
                                         </tbody>
                                     </table>
                                 </div>
                             )}
                         </div>
                     )}
                 </div>

                 {/* Benefits Breakdown */}
                  <div className="border-b border-gray-100 pb-4">
                     <button onClick={() => toggleSection('benefits')} className="flex justify-between items-center w-full text-left font-bold text-premium-black text-sm uppercase tracking-wider">
                         <span>Key Benefits</span>
                         {openSection === 'benefits' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                     </button>
                     {openSection === 'benefits' && (
                         <div className="mt-4 grid grid-cols-1 gap-4 animate-fade-in-up">
                             {product.benefitDetails ? product.benefitDetails.map((benefit, idx) => (
                                 <div key={idx} className="flex gap-3 items-start bg-gray-50 p-3 rounded-xl">
                                     <div className="mt-1">{renderIcon(benefit.icon)}</div>
                                     <div>
                                         <h4 className="font-bold text-premium-black text-sm">{benefit.title}</h4>
                                         <p className="text-xs text-gray-500 leading-relaxed">{benefit.description}</p>
                                     </div>
                                 </div>
                             )) : (
                                 <ul className="space-y-2">
                                     {product.benefits?.map((b, i) => (
                                         <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                             <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                             <span>{b}</span>
                                         </li>
                                     ))}
                                 </ul>
                             )}
                         </div>
                     )}
                 </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};
