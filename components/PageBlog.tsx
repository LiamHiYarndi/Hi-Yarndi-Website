


import React, { useState, useRef, useEffect } from 'react';
import { blogPosts } from '../data';
import { Button } from './Button';
import { ArrowRight, Calendar, Clock, ArrowUpRight, ArrowLeft, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../types';

export const PageBlog: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const topRef = useRef<HTMLDivElement>(null);

    const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
    const filteredPosts = filter === 'All' ? blogPosts : blogPosts.filter(p => p.category === filter);
    
    // Sorting logic could be added here if needed, currently relying on array order
    const featuredPost = filter === 'All' ? filteredPosts[0] : null;
    const gridPosts = filter === 'All' ? filteredPosts.slice(1) : filteredPosts;

    const handleSelectPost = (post: BlogPost) => {
        setSelectedPost(post);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- ARTICLE READ VIEW ---
    if (selectedPost) {
        return (
            <div className="min-h-screen bg-theme-bg pb-20 animate-fade-in" ref={topRef}>
                {/* Progress / Nav Bar */}
                <div className="sticky top-20 z-40 bg-theme-bg/95 backdrop-blur border-b border-theme-border py-4 px-6">
                    <div className="container mx-auto max-w-4xl flex items-center justify-between">
                        <button 
                            onClick={handleBack}
                            className="flex items-center gap-2 text-sm font-bold text-theme-sub hover:text-theme-text uppercase tracking-wider transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Hub
                        </button>
                        <span className="text-xs font-bold text-theme-sub hidden md:block uppercase tracking-widest">{selectedPost.category}</span>
                    </div>
                </div>

                <article className="container mx-auto px-6 max-w-4xl mt-8 md:mt-16">
                    {/* Article Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full border border-theme-border text-[10px] font-bold uppercase tracking-widest text-theme-sub">
                                {selectedPost.category}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-theme-sub">• {selectedPost.readTime}</span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-6xl font-black text-theme-text mb-8 leading-tight uppercase">
                            {selectedPost.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-sm text-theme-sub border-t border-b border-theme-border py-4 max-w-lg mx-auto">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {selectedPost.date}
                            </div>
                            {selectedPost.author && (
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" /> {selectedPost.author}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Feature Image */}
                    <div className="rounded-3xl overflow-hidden mb-16 shadow-xl aspect-[21/9]">
                        <img 
                            src={selectedPost.image} 
                            alt={selectedPost.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Body - Using Typography Plugin Styles manually via Tailwind */}
                    <div className="prose prose-lg md:prose-xl prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-p:text-theme-sub prose-p:font-serif prose-p:leading-loose prose-a:text-accent max-w-none">
                        <ReactMarkdown>{selectedPost.content || selectedPost.excerpt}</ReactMarkdown>
                    </div>

                    {/* Footer / CTA */}
                    <div className="mt-20 pt-10 border-t border-theme-border text-center">
                        <h3 className="font-heading text-2xl font-bold text-theme-text mb-4">Enjoyed this read?</h3>
                        <div className="flex justify-center gap-4">
                            <Button onClick={handleBack} variant="outline">Back to Articles</Button>
                            <Button variant="primary">Shop the Science</Button>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    // --- GRID VIEW (HUB) ---
    return (
        <div className="min-h-screen bg-theme-bg animate-fade-in pb-12 md:pb-24">
            {/* Hero */}
            <div className="bg-off-black text-white py-16 md:py-28 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-3 py-1 rounded-full border border-gray-600 text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 animate-fade-in-up">
                        Performance Hub
                    </div>
                    <h1 className="font-heading text-4xl md:text-7xl font-black mb-4 md:mb-6 leading-none animate-fade-in-up delay-100">
                        ELEVATE YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">INTELLECT.</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Deep dives into nutrition, training methodology, and the science behind plant-based performance.
                    </p>
                </div>
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                     <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary rounded-full blur-[100px]"></div>
                     <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-900 rounded-full blur-[100px]"></div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-20 z-30 bg-theme-card/90 backdrop-blur border-b border-theme-border py-3 md:py-4 overflow-x-auto no-scrollbar">
                <div className="container mx-auto px-6 flex justify-start md:justify-center gap-2 min-w-max">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 md:px-5 md:py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                                filter === cat 
                                ? 'bg-theme-text text-theme-bg scale-105' 
                                : 'bg-theme-bg text-theme-sub hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 md:py-12">
                
                {/* Featured Post (Only on All) */}
                {featuredPost && (
                    <div className="mb-8 md:mb-16 animate-fade-in-up">
                        <div 
                            onClick={() => handleSelectPost(featuredPost)}
                            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl md:rounded-[3rem] overflow-hidden bg-theme-card shadow-xl cursor-pointer border border-theme-border"
                        >
                            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-theme-card px-3 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-md text-theme-text border border-theme-border">
                                Featured
                            </div>
                            <div className="relative h-[250px] md:h-[400px] lg:h-auto overflow-hidden">
                                <img 
                                    src={featuredPost.image} 
                                    alt={featuredPost.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-6 md:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold text-theme-sub uppercase tracking-widest mb-4 md:mb-6">
                                    <span className="text-accent">{featuredPost.category}</span>
                                    <span>•</span>
                                    <span>{featuredPost.date}</span>
                                </div>
                                <h2 className="font-heading text-2xl md:text-5xl font-black text-theme-text mb-4 md:mb-6 leading-tight group-hover:text-theme-sub transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-theme-sub text-sm md:text-lg mb-6 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-theme-text uppercase tracking-wider group/btn">
                                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Grid Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {gridPosts.map((post, index) => (
                        <div 
                            key={post.id} 
                            onClick={() => handleSelectPost(post)}
                            className="group bg-theme-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full animate-fade-in-up border border-theme-border"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                                <div className="absolute top-4 left-4 bg-theme-card/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-theme-text border border-theme-border">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 text-[10px] font-bold text-theme-sub uppercase tracking-wider mb-3">
                                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</div>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-theme-text mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-theme-sub text-sm line-clamp-3 mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-theme-border flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase text-theme-text group-hover:underline">Read Now</span>
                                    <div className="w-8 h-8 rounded-full bg-theme-bg flex items-center justify-center group-hover:bg-accent group-hover:text-off-black transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="container mx-auto px-6 mt-12 md:mt-20">
                <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden dark:bg-theme-card dark:border border-theme-border">
                     {/* Decor */}
                     <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] bg-accent rounded-full blur-[100px]"></div>
                     </div>

                     <div className="relative z-10 max-w-2xl mx-auto">
                         <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 md:mb-6">JOIN THE INNER CIRCLE</h2>
                         <p className="text-gray-300 dark:text-theme-sub text-base md:text-lg mb-6 md:mb-8">
                             Get weekly performance tips, exclusive product drops, and science-backed protocols delivered to your inbox.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-3">
                             <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm md:text-base"
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