




import React, { useState } from 'react';
import { User, Product, Currency } from '../types';
import { products, formatPrice } from '../data';
import { Button } from './Button';
import { Download, ShieldCheck, Box, AlertCircle, ShoppingCart } from 'lucide-react';

interface Props {
    user: User;
    currency: Currency;
    onAddToCart: (product: Product, quantity: number, bundleQty: number, flavour: string, price: number) => void;
}

export const PageWholesale: React.FC<Props> = ({ user, currency, onAddToCart }) => {
    // Filter out bundles/merch for the quick order form usually
    const wholesaleProducts = products.filter(p => p.wholesalePrice && p.range !== 'Bundles');
    
    // State for quick order quantities
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const handleQuantityChange = (productId: string, val: string) => {
        const qty = parseInt(val) || 0;
        setQuantities(prev => ({...prev, [productId]: qty}));
    };

    const handleQuickAdd = (product: Product) => {
        const qty = quantities[product.id] || 0;
        if (qty > 0 && product.wholesalePrice) {
            // Default to first variant/flavor for quick add
            const flavor = product.variants?.[0]?.name || product.flavours?.[0] || 'Standard';
            onAddToCart(product, qty, 1, flavor, product.wholesalePrice * qty); // Add at wholesale price
            
            // Reset qty
            setQuantities(prev => ({...prev, [product.id]: 0}));
        }
    };

    if (user.status === 'pending') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 animate-fade-in">
                <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md border border-gray-100">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-10 h-10 text-yellow-600" />
                    </div>
                    <h1 className="font-heading text-2xl font-black text-off-black mb-4">ACCOUNT PENDING APPROVAL</h1>
                    <p className="text-gray-500 mb-8">
                        Thanks for applying, {user.name}. Your wholesale application for <strong>{user.companyName}</strong> is currently being reviewed by our team.
                    </p>
                    <p className="text-xs text-gray-400">
                        Approvals typically take 24-48 hours. You will be notified via email at {user.email}.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20 animate-fade-in">
            {/* B2B Header */}
            <div className="bg-off-black text-white pt-10 pb-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-blue-600 p-2 rounded-lg"><Box className="w-6 h-6 text-white" /></div>
                                <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Wholesale Portal</span>
                            </div>
                            <h1 className="font-heading text-4xl font-black">{user.companyName}</h1>
                            <p className="text-gray-400 mt-2">ABN: {user.abn}</p>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-xs font-bold uppercase text-gray-500 mb-1">Your Price Tier</div>
                            <div className="font-heading text-2xl font-bold text-white">Partner (50%)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-12 relative z-10 space-y-8">
                
                {/* 1. Partner Pledge (Expanded) */}
                <div className="bg-white rounded-3xl p-8 border-l-8 border-accent shadow-xl flex flex-col md:flex-row gap-6 items-start">
                    <div className="bg-accent/10 p-4 rounded-full shrink-0">
                        <ShieldCheck className="w-10 h-10 text-accent" />
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-off-black text-2xl mb-4">Our Pricing Promise to Partners</h3>
                        <div className="prose prose-sm text-gray-600 leading-relaxed">
                            <p className="mb-4">
                                At Hi Yarndi, we view our retail partners as extensions of our team, not competitors. We are committed to maintaining a healthy ecosystem where your business can thrive alongside ours.
                            </p>
                            <p className="mb-4">
                                <strong className="text-off-black">The Pricing Anchor:</strong> We pledge to use our Direct-to-Consumer (DTC) website as a "Pricing Anchor." We will strictly adhere to the Recommended Retail Price (RRP). We will not undercut our stockists with permanent aggressive discounting that devalues the product on your shelves.
                            </p>
                            <p>
                                While we occasionally run seasonal promotions, our goal is to drive brand awareness that lifts sales across all channels, including yours.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Quick Order Form */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h2 className="font-heading text-xl font-bold text-off-black">Quick Order</h2>
                        <span className="text-xs font-bold text-gray-400 uppercase">Prices Excl. Tax</span>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white text-gray-400 text-xs uppercase font-bold border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4">Case Config</th>
                                    <th className="px-6 py-4">Wholesale Price</th>
                                    <th className="px-6 py-4">RRP</th>
                                    <th className="px-6 py-4 w-32">Case Qty</th>
                                    <th className="px-6 py-4 w-40">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {wholesaleProducts.map(product => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={product.image} className="w-10 h-10 rounded-lg object-cover bg-gray-100" alt="" />
                                                <div>
                                                    <div className="font-bold text-off-black">{product.title}</div>
                                                    <div className="text-xs text-gray-500">{product.format}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                                                {product.caseLabel || `MOQ: ${product.wholesaleMoq}`}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-mono font-bold text-off-black">
                                            {formatPrice(product.wholesalePrice || 0, currency)}
                                        </td>
                                        <td className="px-6 py-4 font-mono text-gray-400 line-through">
                                            {formatPrice(product.price, currency)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <input 
                                                type="number" 
                                                min="0"
                                                className="w-20 p-2 border border-gray-200 rounded-lg text-center font-bold focus:ring-2 focus:ring-off-black outline-none"
                                                value={quantities[product.id] || ''}
                                                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                                placeholder="0"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <button 
                                                onClick={() => handleQuickAdd(product)}
                                                disabled={!quantities[product.id]}
                                                className="flex items-center gap-2 bg-off-black text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <ShoppingCart className="w-3 h-3" /> Add
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Asset Bank */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                         <h3 className="font-heading text-xl font-bold mb-4">Marketing Assets</h3>
                         <p className="text-gray-500 text-sm mb-6">
                             High-resolution product photography and social media assets for your channels.
                         </p>
                         <div className="space-y-3">
                             <button className="w-full flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors font-bold text-sm text-off-black">
                                 <span>Product Imagery (Packshots)</span>
                                 <Download className="w-4 h-4 text-gray-400" />
                             </button>
                             <button className="w-full flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors font-bold text-sm text-off-black">
                                 <span>Lifestyle Campaign Assets</span>
                                 <Download className="w-4 h-4 text-gray-400" />
                             </button>
                             <button className="w-full flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors font-bold text-sm text-off-black">
                                 <span>Brand Guidelines PDF</span>
                                 <Download className="w-4 h-4 text-gray-400" />
                             </button>
                         </div>
                     </div>

                     <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                         <h3 className="font-heading text-xl font-bold mb-4">In-Store Support</h3>
                         <p className="text-gray-500 text-sm mb-6">
                             Request POS materials and sampling stock for your counter or next event.
                         </p>
                         <form className="space-y-4">
                             <div>
                                 <label className="text-xs font-bold uppercase text-gray-400">Request Type</label>
                                 <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-off-black mt-1">
                                     <option>Sampling Stock (Sachets)</option>
                                     <option>Counter Display Unit</option>
                                     <option>Window Decal</option>
                                     <option>Staff Training Session</option>
                                 </select>
                             </div>
                             <Button fullWidth>Submit Request</Button>
                         </form>
                     </div>
                </div>

            </div>
        </div>
    );
};