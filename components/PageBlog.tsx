import React, { useState } from 'react';
import { blogPosts } from '../data';
import { Button } from './Button';
import { ArrowRight, Calendar, Clock, ArrowUpRight } from 'lucide-react';

export const PageBlog: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

    const filteredPosts = filter === 'All' ? blogPosts : blogPosts.filter(p => p.category === filter);
    
    // We use the first post as the "Featured" one if on 'All' view, otherwise just grid
    const featuredPost = filter === 'All' ? filteredPosts[0] : null;
    const gridPosts = filter === 'All' ? filteredPosts.slice(1) : filteredPosts;

    return (
        <div className="min-h-screen bg-off-white animate-fade-in pb-24">
            {/* Hero */}
            <div className="bg-off-black text-white py-20 md:py-28 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-3 py-1 rounded-full border border-gray-600 text-gray-300 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                        Performance Hub
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 leading-none animate-fade-in-up delay-100">
                        ELEVATE YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">INTELLECT.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Deep dives into nutrition, training methodology, and the science behind plant-based performance.
                    </p>
                </div>
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                     <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[100px]"></div>
                     <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full blur-[100px]"></div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-20 z-30 bg-white/90 backdrop-blur border-b border-gray-200 py-4 overflow-x-auto no-scrollbar">
                <div className="container mx-auto px-6 flex justify-center gap-2 min-w-max">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                                filter === cat 
                                ? 'bg-off-black text-white scale-105' 
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                
                {/* Featured Post (Only on All) */}
                {featuredPost && (
                    <div className="mb-16 animate-fade-in-up">
                        <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden bg-white shadow-xl cursor-pointer">
                            <div className="absolute top-6 left-6 z-20 bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                                Featured
                            </div>
                            <div className="relative h-[400px] lg:h-auto overflow-hidden">
                                <img 
                                    src={featuredPost.image} 
                                    alt={featuredPost.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-8 md:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                                    <span className="text-accent">{featuredPost.category}</span>
                                    <span>•</span>
                                    <span>{featuredPost.date}</span>
                                </div>
                                <h2 className="font-heading text-3xl md:text-5xl font-black text-off-black mb-6 leading-tight group-hover:text-gray-700 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-off-black uppercase tracking-wider group/btn">
                                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Grid Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts.map((post, index) => (
                        <div 
                            key={post.id} 
                            className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-off-black">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</div>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-off-black mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase text-off-black group-hover:underline">Read Now</span>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent group-hover:text-off-black transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="container mx-auto px-6 mt-20">
                <div className="bg-primary rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden">
                     {/* Decor */}
                     <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] bg-accent rounded-full blur-[100px]"></div>
                     </div>

                     <div className="relative z-10 max-w-2xl mx-auto">
                         <h2 className="font-heading text-3xl md:text-5xl font-black mb-6">JOIN THE INNER CIRCLE</h2>
                         <p className="text-gray-300 text-lg mb-8">
                             Get weekly performance tips, exclusive product drops, and science-backed protocols delivered to your inbox.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-3">
                             <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                             />
                             <Button variant="secondary" size="lg">Subscribe</Button>
                         </div>
                         <p className="text-xs text-gray-500 mt-6 font-medium">No spam. Unsubscribe anytime.</p>
                     </div>
                </div>
            </div>
        </div>
    );
};