import React from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: '1',
      user: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100',
      comment: "Incredible recovery times. The taste is subtle and refreshing, unlike the artificial sweetness of other brands.",
      rating: 5
    },
    {
      id: '2',
      user: 'Davide K.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100',
      comment: "Clean energy. No jitters. Just pure focus for my morning training sessions.",
      rating: 5
    },
    {
      id: '3',
      user: 'Jessie J.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100',
      comment: "A staple in my gym bag now. The design is beautiful and the product actually works.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-16 tracking-tight">Trusted by Athletes.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-premium-gray rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300 fill-gray-300'}`} />
                  ))}
              </div>
              <p className="text-lg font-medium text-premium-black mb-6 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center gap-3 mt-auto opacity-70">
                <img src={review.avatar} alt={review.user} className="w-8 h-8 rounded-full object-cover grayscale" />
                <span className="text-sm font-semibold uppercase tracking-wider">{review.user}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};