import React from 'react';
import { Button } from './Button';

export const PageContact: React.FC = () => {
  return (
    <div className="bg-bloom-cream min-h-screen py-20 animate-fade-in">
        <div className="container mx-auto px-6 max-w-2xl">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl animate-zoom-in">
                <h1 className="font-heading text-3xl font-bold mb-2">GET IN TOUCH</h1>
                <p className="text-gray-500 mb-8">Questions about stacking? Order support? Reach out.</p>

                <form className="space-y-6">
                    <div className="animate-fade-in-up delay-100">
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all focus:shadow-soft" />
                    </div>
                    <div className="animate-fade-in-up delay-200">
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                        <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all focus:shadow-soft" />
                    </div>
                    <div className="animate-fade-in-up delay-300">
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Subject</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all focus:shadow-soft">
                            <option>Product Question</option>
                            <option>Order Support</option>
                            <option>Wholesale / Teams</option>
                        </select>
                    </div>
                    <div className="animate-fade-in-up delay-400">
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                        <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all focus:shadow-soft"></textarea>
                    </div>
                    <div className="animate-fade-in-up delay-500">
                        <Button fullWidth>Send Message</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};