
import React from 'react';
import { Instagram, Heart, MessageCircle, Play, ArrowUpRight } from 'lucide-react';

const socialPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
        likes: "2.4k",
        comments: 45,
        type: "image",
        handle: "@hi.yarndi"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
        likes: "12.5k",
        comments: 120,
        type: "video",
        handle: "@hi.yarndi"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
        likes: "892",
        comments: 12,
        type: "image",
        handle: "@hi.yarndi"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop",
        likes: "3.1k",
        comments: 88,
        type: "video",
        handle: "@hi.yarndi"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop",
        likes: "1.2k",
        comments: 34,
        type: "image",
        handle: "@hi.yarndi"
    }
];

export const SocialFeed: React.FC = () => {
  return (
    <section className="py-20 bg-theme-bg border-t border-theme-border overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2 text-accent">
                    <Instagram className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest text-theme-text">@HI.YARNDI</span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-theme-text">JOIN THE CLUB.</h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-bold text-sm border-b-2 border-theme-text pb-1 hover:text-theme-sub hover:border-theme-sub transition-all text-theme-text">
                Follow Us <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
        </div>

        {/* Scrolling Feed */}
        <div className="flex overflow-x-auto gap-6 pb-8 px-6 no-scrollbar snap-x">
            {socialPosts.map((post, idx) => (
                <div 
                    key={post.id} 
                    className="relative shrink-0 w-[280px] aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer snap-center shadow-lg bg-gray-200 dark:bg-gray-800"
                >
                    <img src={post.image} alt="Social Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    
                    {/* Video Indicator */}
                    {post.type === 'video' && (
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                            <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                    )}

                    {/* Stats Overlay on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1 text-sm font-bold">
                                    <Heart className="w-4 h-4" /> {post.likes}
                                </span>
                                <span className="flex items-center gap-1 text-sm font-bold">
                                    <MessageCircle className="w-4 h-4" /> {post.comments}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* CTA Card at end of scroll */}
            <div className="shrink-0 w-[280px] aspect-[4/5] rounded-2xl overflow-hidden bg-off-black flex flex-col items-center justify-center text-center p-8 snap-center">
                <Instagram className="w-12 h-12 text-white mb-6" />
                <h3 className="text-white font-heading text-2xl font-bold mb-4">TAG US TO BE FEATURED</h3>
                <p className="text-gray-400 text-sm mb-6">#HiYarndi #PoweredByHemp</p>
                <button className="bg-accent text-off-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform">
                    View Profile
                </button>
            </div>
        </div>
    </section>
  );
};
