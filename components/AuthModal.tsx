
import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, User as UserIcon } from 'lucide-react';
import { Button } from './Button';
import { User } from '../types';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (user: User) => void;
}

export const AuthModal: React.FC<Props> = ({ isOpen, onClose, onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            const mockUser: User = {
                id: 'user-' + Date.now(),
                name: formData.name || (formData.email.split('@')[0]),
                email: formData.email,
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
            
            <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl animate-zoom-in">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10">
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Header Graphic */}
                <div className="bg-off-black p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black"></div>
                    <div className="relative z-10">
                         <h2 className="font-heading text-2xl font-black text-white mb-2">
                             {isLogin ? 'WELCOME BACK' : 'JOIN THE CLUB'}
                         </h2>
                         <p className="text-gray-400 text-sm">
                             {isLogin ? 'Access your points and rewards.' : 'Sign up to earn points on every order.'}
                         </p>
                    </div>
                </div>

                {/* Form */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Name</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                    <input 
                                        type="text" 
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                        required={!isLogin}
                                    />
                                </div>
                            </div>
                        )}
                        
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-gray-500">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                <input 
                                    type="email" 
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-gray-500">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                <input 
                                    type="password" 
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={e => setFormData({...formData, password: e.target.value})}
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button fullWidth size="lg" disabled={isLoading} className="group">
                                {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                                {!isLoading && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button 
                                onClick={() => setIsLogin(!isLogin)} 
                                className="font-bold text-off-black hover:text-accent transition-colors underline decoration-2 decoration-accent/50 hover:decoration-accent"
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
