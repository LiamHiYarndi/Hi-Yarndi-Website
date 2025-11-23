import React, { useState } from 'react';
import { Star, Check, User, Send } from 'lucide-react';
import { Review } from '../types';
import { productReviewsData } from '../data';
import { Button } from './Button';

interface Props {
  productId: string;
  productTitle: string;
}

export const ProductReviews: React.FC<Props> = ({ productId, productTitle }) => {
  // Load initial reviews for this product
  const initialReviews = productReviewsData.filter(r => r.productId === productId);
  
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `new-${Date.now()}`,
      productId,
      user: name,
      avatar: '',
      comment,
      rating,
      date: 'Just now',
      sport: 'Verified Buyer' // Assuming verified for demo
    };

    setReviews([newReview, ...reviews]);
    setShowForm(false);
    setName('');
    setComment('');
    setRating(5);
  };

  return (
    <div className="py-16 border-t border-gray-100 bg-white">
      <div className="container px-6 mx-auto max-w-[1000px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-off-black mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-3">
              <div className="flex text-accent">
                {[1,2,3,4,5].map(star => (
                   <Star key={star} className={`w-5 h-5 ${star <= Math.round(Number(averageRating)) ? 'fill-current' : 'text-gray-200 fill-gray-200'}`} />
                ))}
              </div>
              <span className="font-bold text-lg">{averageRating}</span>
              <span className="text-gray-400 text-sm">({reviews.length} Reviews)</span>
            </div>
          </div>
          
          <Button variant="outline" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel Review' : 'Write a Review'}
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="bg-gray-50 p-6 rounded-2xl mb-12 animate-fade-in-up border border-gray-100">
             <h3 className="font-bold text-lg mb-4">Write a Review for {productTitle}</h3>
             <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                   <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Rating</label>
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                         <button
                           key={star}
                           type="button"
                           onClick={() => setRating(star)}
                           onMouseEnter={() => setHoverRating(star)}
                           onMouseLeave={() => setHoverRating(0)}
                           className="focus:outline-none transition-transform hover:scale-110"
                         >
                            <Star className={`w-8 h-8 ${star <= (hoverRating || rating) ? 'text-accent fill-accent' : 'text-gray-300 fill-gray-300'}`} />
                         </button>
                      ))}
                   </div>
                </div>
                
                <div>
                   <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                   <input 
                      type="text" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Name"
                      required
                   />
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Review</label>
                   <textarea 
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent h-32"
                      placeholder="How was the fit? The feel? The quality?"
                      required
                   />
                </div>

                <Button type="submit" fullWidth>Post Review <Send className="w-4 h-4 ml-2" /></Button>
             </form>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
           {reviews.length === 0 ? (
              <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-2xl">
                 <p>No reviews yet. Be the first to review {productTitle}!</p>
              </div>
           ) : (
              reviews.map((review) => (
                 <div key={review.id} className="border-b border-gray-100 last:border-0 pb-8 last:pb-0 animate-fade-in-up">
                    <div className="flex justify-between items-start mb-3">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                             {review.user.charAt(0)}
                          </div>
                          <div>
                             <h4 className="font-bold text-off-black text-sm">{review.user}</h4>
                             <div className="flex items-center gap-2">
                                <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                                   <Check className="w-3 h-3" /> {review.sport || 'Verified Buyer'}
                                </span>
                                {review.date && <span className="text-xs text-gray-400">• {review.date}</span>}
                             </div>
                          </div>
                       </div>
                       <div className="flex text-accent">
                          {[1,2,3,4,5].map(star => (
                             <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-current' : 'text-gray-200 fill-gray-200'}`} />
                          ))}
                       </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-[52px]">
                       "{review.comment}"
                    </p>
                 </div>
              ))
           )}
        </div>

      </div>
    </div>
  );
};
