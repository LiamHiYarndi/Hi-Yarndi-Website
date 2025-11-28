


import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, User as UserIcon, Briefcase, Globe, Building } from 'lucide-react';
import { Button } from './Button';
import { User } from '../types';
import { ADMIN_CREDENTIALS } from '../data';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (user: User) => void;
}

export const AuthModal: React.FC<Props> = ({ isOpen, onClose, onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        accountType: 'retail' as 'retail' | 'wholesale',
        
        // Wholesale Specifics
        companyName: '',
        abn: '',
        website: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            // 1. Check for Admin Login
            if (isLogin && formData.email === ADMIN_CREDENTIALS.email && formData.password === ADMIN_CREDENTIALS.password) {
                 const adminUser: User = {
                    id: 'admin-user',
                    name: 'Admin',
                    email: ADMIN_CREDENTIALS.email,
                    role: 'admin',
                    points: 99999,
                    tier: 'Elite',
                    joinedDate: new Date().toLocaleDateString(),
                    completedChallenges: [],
                    redeemedRewards: []
                };
                onLogin(adminUser);
                setIsLoading(false);
                onClose();
                return;
            }

            // 2. Standard User / Wholesale Signup
            const isWholesale = formData.accountType === 'wholesale';
            
            const mockUser: User = {
                id: 'user-' + Date.now(),
                name: formData.name || (formData.email.split('@')[0]),
                email: formData.email,
                role: isWholesale ? 'wholesale' : 'retail',
                status: isWholesale ? 'pending' : 'approved', // Wholesale is pending by default
                
                // Business Fields
                companyName: isWholesale ? formData.companyName : undefined,
                abn: isWholesale ? formData.abn : undefined,
                website: isWholesale ? formData.website : undefined,

                points: 250, // Welcome points
                tier: 'Rookie',
                joinedDate: new Date().toLocaleDateString(),
                completedChallenges: [],
                redeemedRewards: []
            };
            
            onLogin(mockUser);
            setIsLoading(false);
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            
            <div className="relative w-full max-w-md bg-theme-card rounded-3xl overflow-hidden shadow-2xl animate-zoom-in max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-theme-bg transition-colors z-10">
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Header Graphic */}
                <div className="bg-off-black p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black"></div>
                    <div className="relative z-10">
                         <h2 className="font-heading text-2xl font-black text-white mb-2">
                             {isLogin ? 'WELCOME BACK' : (formData.accountType === 'wholesale' ? 'PARTNER APPLICATION' : 'JOIN THE CLUB')}
                         </h2>
                         <p className="text-gray-400 text-sm">
                             {isLogin ? 'Access your points and rewards.' : 'Sign up to earn points on every order.'}
                         </p>
                    </div>
                </div>

                {/* Form */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        {/* Account Type Selector (Signup Only) */}
                        {!isLogin && (
                            <div className="bg-theme-bg p-1 rounded-xl flex mb-4 border border-theme-border">
                                <button
                                    type="button"
                                    onClick={() => setFormData({...formData, accountType: 'retail'})}
                                    className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${formData.accountType === 'retail' ? 'bg-theme-text text-theme-card shadow-sm' : 'text-theme-sub hover:text-theme-text'}`}
                                >
                                    Personal
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({...formData, accountType: 'wholesale'})}
                                    className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${formData.accountType === 'wholesale' ? 'bg-theme-text text-theme-card shadow-sm' : 'text-theme-sub hover:text-theme-text'}`}
                                >
                                    Business
                                </button>
                            </div>
                        )}

                        {/* Standard Fields */}
                        {!isLogin && (
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-theme-sub">Name</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                    <input 
                                        type="text" 
                                        className="w-full pl-10 pr-4 py-3 bg-theme-bg border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all text-theme-text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                        required={!isLogin}
                                    />
                                </div>
                            </div>
                        )}
                        
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-theme-sub">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                <input 
                                    type="email" 
                                    className="w-full pl-10 pr-4 py-3 bg-theme-bg border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all text-theme-text"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                        </div>

                        {/* Wholesale Specific Fields */}
                        {!isLogin && formData.accountType === 'wholesale' && (
                            <div className="space-y-4 pt-2 border-t border-theme-border mt-2 animate-fade-in">
                                <p className="text-xs text-accent font-bold">Business Verification Required *</p>
                                
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-theme-sub">Business Name</label>
                                    <div className="relative">
                                        <Building className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        <input 
                                            type="text" 
                                            className="w-full pl-10 pr-4 py-3 bg-theme-bg border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all text-theme-text"
                                            placeholder="Registered Company Name"
                                            value={formData.companyName}
                                            onChange={e => setFormData({...formData, companyName: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-theme-sub">Tax ID / ABN</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        <input 
                                            type="text" 
                                            className="w-full pl-10 pr-4 py-3 bg-theme-bg border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all text-theme-text"
                                            placeholder="ABN / Tax ID"
                                            value={formData.abn}
                                            onChange={e => setFormData({...formData, abn: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-theme-sub">Website</label>
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                        <input 
                                            type="url" 
                                            className="w-full pl-10 pr-4 py-3 bg-theme-bg border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all text-theme-text"
                                            placeholder="https://yourstore.com"
                                            value={formData.website}
                                            onChange={e => setFormData({...formData, website: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-theme-sub">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                <input 
                                    type="password" 
                                    className="w-full pl-10 pr-4 py-3 bg-theme-bg border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all text-theme-text"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={e => setFormData({...formData, password: e.target.value})}
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button fullWidth size="lg" disabled={isLoading} className="group">
                                {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : (formData.accountType === 'wholesale' ? 'Submit Application' : 'Create Account'))}
                                {!isLoading && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button 
                                onClick={() => setIsLogin(!isLogin)} 
                                className="font-bold text-theme-text hover:text-accent transition-colors underline decoration-2 decoration-accent/50 hover:decoration-accent"
                            >
                                {isLogin ? 'Join Now' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};