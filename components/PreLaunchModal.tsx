
import React, { useState } from 'react';
import { X, ShieldCheck, Truck, Lock } from 'lucide-react';
import { Button } from './Button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cartTotal: number;
}

export const PreLaunchModal: React.FC<Props> = ({ isOpen, onClose, cartTotal }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        country: 'Australia',
        state: '',
        city: '',
        ageRange: '',
        role: 'retail' // retail | wholesale
    });
    const [agreedToPolicy, setAgreedToPolicy] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            
            <div className="relative w-full max-w-2xl bg-theme-card rounded-3xl overflow-hidden shadow-2xl animate-zoom-in max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-theme-bg transition-colors z-10">
                    <X className="w-5 h-5 text-theme-sub" />
                </button>

                {step === 1 ? (
                    <div className="flex flex-col md:flex-row h-full">
                        {/* Left: Info */}
                        <div className="bg-off-black text-white p-8 md:w-2/5 flex flex-col justify-between dark:bg-theme-bg">
                            <div>
                                <div className="inline-block bg-accent text-off-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-4">
                                    Pre-Launch Access
                                </div>
                                <h2 className="font-heading text-3xl font-bold mb-4">SECURE YOUR STOCK.</h2>
                                <p className="text-gray-400 text-sm mb-6">
                                    Hi Yarndi products are currently in pre-launch. Register your interest to be notified when stock drops and to access wholesale opportunities.
                                </p>
                                <div className="space-y-4 text-xs text-gray-400">
                                    <div className="flex items-start gap-2">
                                        <Truck className="w-4 h-4 text-accent shrink-0" />
                                        <div>
                                            <strong className="text-white block">Australian Shipping</strong>
                                            Standard from $10.90<br/>Express from $14.10
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                                        <div>
                                            <strong className="text-white block">Secure Checkout</strong>
                                            Encrypted payment processing.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-800">
                                <div className="text-xs font-bold uppercase text-gray-500 mb-1">Your Cart Value</div>
                                <div className="text-2xl font-bold text-white">${cartTotal.toFixed(2)}</div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="p-8 md:w-3/5 bg-theme-card">
                            <h3 className="font-bold text-xl text-theme-text mb-6">Register Interest</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-theme-sub mb-1">Account Type</label>
                                    <div className="flex gap-2">
                                        <button 
                                            type="button" 
                                            onClick={() => setFormData({...formData, role: 'retail'})}
                                            className={`flex-1 py-2 rounded-lg text-sm font-bold border-2 transition-all ${formData.role === 'retail' ? 'border-theme-text bg-theme-text text-theme-card' : 'border-theme-border text-theme-sub hover:border-gray-300'}`}
                                        >
                                            Retail
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => setFormData({...formData, role: 'wholesale'})}
                                            className={`flex-1 py-2 rounded-lg text-sm font-bold border-2 transition-all ${formData.role === 'wholesale' ? 'border-theme-text bg-theme-text text-theme-card' : 'border-theme-border text-theme-sub hover:border-gray-300'}`}
                                        >
                                            Wholesale
                                        </button>
                                    </div>
                                    {formData.role === 'wholesale' && (
                                        <p className="text-[10px] text-accent mt-1 font-bold">
                                            * Wholesale pricing will be available after account verification.
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-theme-sub mb-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        required 
                                        className="w-full bg-theme-bg border border-theme-border rounded-xl px-4 py-2 focus:ring-2 focus:ring-accent outline-none text-theme-text"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-theme-sub mb-1">Country</label>
                                        <select 
                                            className="w-full bg-theme-bg border border-theme-border rounded-xl px-4 py-2 focus:ring-2 focus:ring-accent outline-none text-theme-text"
                                            value={formData.country}
                                            onChange={e => setFormData({...formData, country: e.target.value})}
                                        >
                                            <option>Australia</option>
                                            <option>New Zealand</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-theme-sub mb-1">Age Range</label>
                                        <select 
                                            className="w-full bg-theme-bg border border-theme-border rounded-xl px-4 py-2 focus:ring-2 focus:ring-accent outline-none text-theme-text"
                                            value={formData.ageRange}
                                            onChange={e => setFormData({...formData, ageRange: e.target.value})}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option>18-24</option>
                                            <option>25-34</option>
                                            <option>35-44</option>
                                            <option>45+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-theme-sub mb-1">State</label>
                                        <input 
                                            type="text" 
                                            required 
                                            className="w-full bg-theme-bg border border-theme-border rounded-xl px-4 py-2 focus:ring-2 focus:ring-accent outline-none text-theme-text"
                                            value={formData.state}
                                            onChange={e => setFormData({...formData, state: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-theme-sub mb-1">City</label>
                                        <input 
                                            type="text" 
                                            required 
                                            className="w-full bg-theme-bg border border-theme-border rounded-xl px-4 py-2 focus:ring-2 focus:ring-accent outline-none text-theme-text"
                                            value={formData.city}
                                            onChange={e => setFormData({...formData, city: e.target.value})}
                                        />
                                    </div>
                                </div>

                                {/* Policies Scrollbox */}
                                <div className="mt-4 p-3 bg-theme-bg rounded-xl h-24 overflow-y-auto border border-theme-border text-[10px] text-theme-sub leading-relaxed">
                                    <strong className="block text-theme-text mb-1">Returns & Refund Policy</strong>
                                    Because our products are consumable, we cannot accept returns for change of mind, opened items, or used products. Faulty/Damaged items must be reported within 7 days.<br/><br/>
                                    <strong className="block text-theme-text mb-1">General Store Policy</strong>
                                    Hi Yarndi products are food-grade supplements compliant with FSANZ standards. Zero CBD/THC. Not suitable for children under 15 or pregnant individuals.
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                    <input 
                                        type="checkbox" 
                                        id="terms" 
                                        checked={agreedToPolicy} 
                                        onChange={e => setAgreedToPolicy(e.target.checked)}
                                        className="rounded text-accent focus:ring-accent bg-theme-bg border-theme-border"
                                    />
                                    <label htmlFor="terms" className="text-xs text-theme-sub">I agree to the Returns Policy & Store Terms.</label>
                                </div>

                                <Button fullWidth disabled={!agreedToPolicy}>
                                    Join Waitlist
                                </Button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px] bg-theme-card">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 animate-bounce">
                            <ShieldCheck className="w-10 h-10 text-green-600 dark:text-green-300" />
                        </div>
                        <h2 className="font-heading text-3xl font-black text-theme-text mb-4">YOU'RE ON THE LIST.</h2>
                        <p className="text-theme-sub max-w-md mx-auto mb-8">
                            Thanks for registering. We'll email you at <strong>{formData.email}</strong> as soon as the drop goes live.
                            {formData.role === 'wholesale' && <br/> + "Your wholesale application is under review."}
                        </p>
                        <Button onClick={onClose}>Back to Site</Button>
                    </div>
                )}
            </div>
        </div>
    );
};
