
import React, { useState } from 'react';
import { Shield, Truck, Lock, FileText } from 'lucide-react';

export const PageLegal: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'shipping' | 'general' | 'privacy' | 'wholesale'>('shipping');

    return (
        <div className="min-h-screen bg-theme-bg pb-20 animate-fade-in">
            {/* Header */}
            <div className="bg-off-black text-white pt-16 pb-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">LEGAL & POLICIES</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transparency is key. Here is everything you need to know about how we operate, ship, and protect your data.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-12 relative z-10">
                <div className="bg-theme-card rounded-3xl shadow-xl overflow-hidden border border-theme-border min-h-[600px] flex flex-col md:flex-row">
                    
                    {/* Sidebar */}
                    <div className="w-full md:w-64 bg-theme-bg border-r border-theme-border p-6 flex flex-col gap-2">
                        <button 
                            onClick={() => setActiveTab('shipping')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'shipping' ? 'bg-off-black text-white shadow-md' : 'text-theme-sub hover:bg-theme-card'}`}
                        >
                            <Truck className="w-4 h-4" /> Shipping & Returns
                        </button>
                        <button 
                            onClick={() => setActiveTab('general')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'general' ? 'bg-off-black text-white shadow-md' : 'text-theme-sub hover:bg-theme-card'}`}
                        >
                            <FileText className="w-4 h-4" /> General Policy
                        </button>
                        <button 
                            onClick={() => setActiveTab('privacy')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'privacy' ? 'bg-off-black text-white shadow-md' : 'text-theme-sub hover:bg-theme-card'}`}
                        >
                            <Lock className="w-4 h-4" /> Privacy Policy
                        </button>
                        <button 
                            onClick={() => setActiveTab('wholesale')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'wholesale' ? 'bg-off-black text-white shadow-md' : 'text-theme-sub hover:bg-theme-card'}`}
                        >
                            <Shield className="w-4 h-4" /> Wholesale Terms
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-12 text-theme-text">
                        
                        {/* SHIPPING & RETURNS */}
                        {activeTab === 'shipping' && (
                            <div className="animate-fade-in space-y-8">
                                <div>
                                    <h2 className="font-heading text-2xl font-bold mb-4">Shipping & Returns Policy</h2>
                                    <p className="text-sm text-theme-sub mb-4">
                                        Because our products are consumable, we cannot accept returns for change of mind, opened items, or used products. This is for hygiene and safety reasons.
                                    </p>
                                    <div className="bg-theme-bg p-6 rounded-xl border border-theme-border mb-6">
                                        <h3 className="font-bold text-lg mb-2">Australian Consumer Law</h3>
                                        <p className="text-sm text-theme-sub">
                                            You are entitled to a replacement or refund if your item is:
                                        </p>
                                        <ul className="list-disc list-inside text-sm text-theme-sub mt-2 space-y-1">
                                            <li>Faulty</li>
                                            <li>Damaged on arrival</li>
                                            <li>Incorrect</li>
                                            <li>Not as described</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm text-theme-sub">
                                        To lodge a claim, contact <strong>support@hiyarndi.com</strong> within 7 days of receiving your order with your Order Number and Photos of the issue.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-theme-border pt-8">
                                    <div>
                                        <h3 className="font-bold text-lg mb-3">Retail Orders (Personal)</h3>
                                        <ul className="space-y-3 text-sm text-theme-sub">
                                            <li><strong>Dispatch:</strong> 1-2 business days.</li>
                                            <li><strong>Standard Post:</strong> 3-5 business days.</li>
                                            <li><strong>Express Post:</strong> 1-3 business days.</li>
                                            <li><strong>Free Shipping:</strong> Orders over $100.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-3">Wholesale Orders (Business)</h3>
                                        <ul className="space-y-3 text-sm text-theme-sub">
                                            <li><strong>Dispatch:</strong> 2-4 business days depending on volume.</li>
                                            <li><strong>Freight:</strong> Calculated at checkout based on weight.</li>
                                            <li><strong>Free Freight:</strong> Wholesale orders over $1,000.</li>
                                            <li><strong>Damages:</strong> Must be reported within 48hrs of delivery.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* GENERAL POLICY */}
                        {activeTab === 'general' && (
                            <div className="animate-fade-in space-y-8">
                                <h2 className="font-heading text-2xl font-bold mb-4">General Store Policy</h2>
                                
                                <div className="space-y-6 text-sm text-theme-sub leading-relaxed">
                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">Product Information</h3>
                                        <p>
                                            Hi Yarndi products are food-grade supplements made with hemp seed ingredients that are non-psychoactive and compliant with FSANZ standards. 
                                            <strong>Our products contain zero CBD or THC.</strong>
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">Usage Warnings</h3>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Do not exceed recommended servings.</li>
                                            <li>Not suitable for children under 15 years or pregnant/breastfeeding individuals.</li>
                                            <li>Consult a healthcare professional if you have underlying health conditions.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">Regulatory Compliance</h3>
                                        <p className="mb-2">Hi Yarndi products comply with:</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>FSANZ Food Standards Code</li>
                                            <li>Hemp seed ingredient legislation</li>
                                            <li>Australian Consumer Law</li>
                                            <li>ACCC product safety requirements</li>
                                        </ul>
                                        <p className="mt-2">Manufactured in China, developed in Australia.</p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">Limitation of Liability</h3>
                                        <p>
                                            Hi Yarndi is not responsible for improper use of the product, allergic reactions to clearly listed ingredients, or misuse of the product outside its intended purpose.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PRIVACY POLICY */}
                        {activeTab === 'privacy' && (
                            <div className="animate-fade-in space-y-8">
                                <h2 className="font-heading text-2xl font-bold mb-4">Privacy & Data Security</h2>
                                
                                <div className="space-y-6 text-sm text-theme-sub leading-relaxed">
                                    <p>
                                        We respect your privacy. We collect your information (Name, Email, Shipping Details) solely for the purpose of processing orders and managing your account experience.
                                    </p>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">Data Protection</h3>
                                        <p>We do not sell, trade, or rent your personal data to third parties.</p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">Payment Security</h3>
                                        <p>
                                            Your payment information is processed securely via our encrypted payment gateway partners. We do not store credit card details on our servers.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">Communications</h3>
                                        <p>
                                            By signing up, you agree to receive transactional emails regarding your orders. You may opt-in to receive marketing newsletters and can unsubscribe at any time via the link in our emails.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* WHOLESALE TERMS */}
                        {activeTab === 'wholesale' && (
                            <div className="animate-fade-in space-y-8">
                                <h2 className="font-heading text-2xl font-bold mb-4">Wholesale Terms of Trade</h2>
                                
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 mb-8">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg mb-2">Our Fair Pricing Pledge</h3>
                                    <p className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
                                        We pledge to use our Direct-to-Consumer (DTC) website as a "Pricing Anchor." We will strictly adhere to the Recommended Retail Price (RRP) and will not undercut our stockists with permanent aggressive discounting. We stand with our bricks-and-mortar partners.
                                    </p>
                                </div>

                                <div className="space-y-6 text-sm text-theme-sub leading-relaxed">
                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">1. Eligibility & Verification</h3>
                                        <p>
                                            Wholesale accounts are strictly for legitimate business entities intended for resale. We reserve the right to request proof of business registration (ABN) and to deny applications at our discretion.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">2. Minimum Order Quantities (MOQ)</h3>
                                        <p>
                                            To access wholesale pricing, orders must meet our Minimum Order Value of <strong>$250.00</strong>. Orders falling below this threshold will be charged at standard retail rates or cannot be processed via the portal.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">3. Resale Policy</h3>
                                        <p>
                                            Products purchased via a Wholesale Account are intended for resale to end consumers via your approved retail channels. Listing our products on third-party marketplaces (Amazon, eBay, Catch) without prior written consent is prohibited.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-theme-text text-base mb-2">4. Payment & Title</h3>
                                        <p>
                                            Orders must be paid in full prior to dispatch. Title of goods remains with Hi Yarndi until full payment is received.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};
