
import React, { useEffect, useState } from 'react';
import { X, Trash2, ShoppingBag, Truck, Gift, ArrowRight, Plus, User } from 'lucide-react';
import { CartItem, Currency, Product, User as UserType } from '../types';
import { formatPrice, products } from '../data';
import { Button } from './Button';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onRemoveItem: (id: string) => void;
    currency: Currency;
    onAddToCart?: (product: Product, quantity: number, bundleQty: number, flavour: string, price: number) => void;
    onCheckout?: () => void;
    user?: UserType | null;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem, currency, onAddToCart, onCheckout, user }) => {
    const [animateBar, setAnimateBar] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setAnimateBar(true), 300);
        } else {
            setAnimateBar(false);
        }
    }, [isOpen]);

    const subtotalAUD = cartItems.reduce((acc, item) => acc + item.price, 0);
    const freeShippingThreshold = 100;
    const freeGiftThreshold = 150;

    const progress = Math.min((subtotalAUD / freeGiftThreshold) * 100, 100);
    const remainingForFreeShipping = Math.max(freeShippingThreshold - subtotalAUD, 0);
    const remainingForGift = Math.max(freeGiftThreshold - subtotalAUD, 0);
    const potentialPoints = Math.floor(subtotalAUD);

    const cartProductIds = new Set(cartItems.map(i => i.productId));
    const upsellProduct = products.find(p => !cartProductIds.has(p.id) && (p.id.includes('drip') || p.id.includes('fuel'))) || products.find(p => !cartProductIds.has(p.id));

    const handleUpsellAdd = () => {
        if (upsellProduct && onAddToCart) {
            const defaultFlavor = upsellProduct.flavours?.[0] || 'Original';
            onAddToCart(upsellProduct, 1, 1, defaultFlavor, upsellProduct.price);
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-theme-card text-theme-text z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                {/* Header */}
                <div className="p-6 border-b border-theme-border flex justify-between items-center">
                    <h2 className="font-heading text-xl font-bold flex items-center gap-2 text-theme-text">
                        Your Bag <span className="bg-theme-text text-theme-card text-xs px-2 py-1 rounded-full">{cartItems.length}</span>
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-theme-bg rounded-full transition-colors">
                        <X className="w-5 h-5 text-theme-text" />
                    </button>
                </div>

                {/* Incentive Tracker */}
                <div className="bg-theme-bg p-6 border-b border-theme-border">
                    <div className="mb-2 flex justify-between items-end">
                        <p className="text-sm font-bold text-theme-text">
                            {remainingForFreeShipping > 0 
                                ? `Add ${formatPrice(remainingForFreeShipping, currency)} for Free Metro Shipping`
                                : remainingForGift > 0 
                                    ? "Free Metro Shipping Unlocked! Unlock Gift 👇"
                                    : "You've Unlocked Everything! 🎉"
                            }
                        </p>
                        <span className="text-xs font-bold text-gray-400">{Math.round(progress)}%</span>
                    </div>
                    
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
                        <div 
                            className="h-full bg-gradient-to-r from-yarndi-green to-accent transition-all duration-1000 ease-out relative"
                            style={{ width: `${animateBar ? progress : 0}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                        </div>
                        <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10" style={{ left: `${(freeShippingThreshold / freeGiftThreshold) * 100}%` }}></div>
                    </div>
                    
                    <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free Metro Ship</span>
                        <span className="flex items-center gap-1"><Gift className="w-3 h-3" /> Mystery Gift</span>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                            <ShoppingBag className="w-16 h-16 text-gray-300" />
                            <p className="font-medium text-theme-text">Your bag is empty.</p>
                            <Button variant="outline" onClick={onClose}>Start Shopping</Button>
                        </div>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 animate-fade-in-up">
                                    <div className="w-20 h-20 bg-theme-bg rounded-xl overflow-hidden shrink-0 border border-theme-border">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-sm text-theme-text">{item.title}</h3>
                                            <p className="font-bold text-sm text-theme-text">{formatPrice(item.price, currency)}</p>
                                        </div>
                                        <p className="text-xs text-theme-sub mb-1">{item.flavor}</p>
                                        <p className="text-xs text-theme-sub mb-3">{item.quantity} x {item.bundleSize} Pack</p>
                                        <button 
                                            onClick={() => onRemoveItem(item.id)}
                                            className="text-[10px] font-bold uppercase text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                                        >
                                            <Trash2 className="w-3 h-3" /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Upsell Item */}
                            {upsellProduct && (
                                <div className="mt-8 border-t border-theme-border pt-6 animate-fade-in-up delay-100">
                                    <p className="text-xs font-bold uppercase text-gray-400 mb-3">You might also need</p>
                                    <div className="flex gap-4 bg-theme-bg p-3 rounded-xl border border-theme-border items-center">
                                         <div className="w-12 h-12 bg-theme-card rounded-lg overflow-hidden shrink-0 border border-theme-border">
                                            <img src={upsellProduct.image} alt={upsellProduct.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <h4 className="font-bold text-sm text-theme-text">{upsellProduct.title}</h4>
                                                <span className="text-xs font-bold text-theme-text">{formatPrice(upsellProduct.price, currency)}</span>
                                            </div>
                                            <p className="text-[10px] text-gray-500 line-clamp-1">{upsellProduct.subtitle}</p>
                                        </div>
                                        <button 
                                            className="bg-theme-text text-theme-card w-8 h-8 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                                            onClick={handleUpsellAdd}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    
                    {/* Free Gift Item (Visual Only) */}
                    {subtotalAUD >= freeGiftThreshold && (
                         <div className="flex gap-4 p-4 bg-accent/10 rounded-xl border border-accent/20 animate-fade-in-up">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shrink-0 text-2xl">🎁</div>
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="font-bold text-sm text-theme-text">Mystery Gift Unlocked</h3>
                                <p className="text-xs text-green-600 font-bold uppercase">Added Free</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-theme-border bg-theme-card">
                    {user ? (
                         <div className="flex items-center gap-2 mb-4 bg-yellow-50/50 p-2 rounded-lg justify-center">
                            <Gift className="w-4 h-4 text-yellow-600" />
                            <p className="text-xs text-yellow-800 font-bold">You will earn +{potentialPoints} points with this order!</p>
                         </div>
                    ) : (
                         <div className="flex items-center gap-2 mb-4 bg-theme-bg p-2 rounded-lg justify-center">
                            <p className="text-xs text-gray-500">Sign in to earn +{potentialPoints} points.</p>
                         </div>
                    )}

                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-theme-sub font-medium">Subtotal</span>
                        <span className="text-xl font-bold text-theme-text">{formatPrice(subtotalAUD, currency)}</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-6 text-center">
                        Shipping & taxes calculated at checkout.<br/>
                        <span className="text-[10px] text-gray-400">*Free shipping applies to domestic Australian Metro addresses only.</span>
                    </p>
                    <Button fullWidth size="lg" className="group" onClick={onCheckout} disabled={cartItems.length === 0}>
                        {user ? 'Checkout Now' : 'Checkout as Guest'} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

            </div>
        </>
    );
};