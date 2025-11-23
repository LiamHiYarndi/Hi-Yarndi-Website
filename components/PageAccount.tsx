
import React, { useState } from 'react';
import { User, Reward, Challenge } from '../types';
import { rewardsData, challengesData } from '../data';
import { Button } from './Button';
import { LogOut, Award, Gift, Zap, Instagram, Repeat, MessageSquare, CheckCircle, Lock, Unlock } from 'lucide-react';

interface Props {
    user: User;
    onLogout: () => void;
    onRedeem: (reward: Reward) => void;
    onCompleteChallenge: (challenge: Challenge) => void;
}

export const PageAccount: React.FC<Props> = ({ user, onLogout, onRedeem, onCompleteChallenge }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'rewards' | 'earn'>('overview');

    // Calculate progress to next tier (Simple Logic)
    // Rookie: 0-1000, Pro: 1000-5000, Elite: 5000+
    let nextTierPoints = 1000;
    let progressPercent = 0;
    let currentTierLabel = 'Rookie';

    if (user.points >= 5000) {
        currentTierLabel = 'Elite';
        nextTierPoints = 5000; // Cap
        progressPercent = 100;
    } else if (user.points >= 1000) {
        currentTierLabel = 'Pro';
        nextTierPoints = 5000;
        progressPercent = ((user.points - 1000) / 4000) * 100;
    } else {
        progressPercent = (user.points / 1000) * 100;
    }

    const renderChallengeIcon = (type: string) => {
        switch(type) {
            case 'instagram': return <Instagram className="w-5 h-5 text-pink-600" />;
            case 'run': return <Zap className="w-5 h-5 text-yellow-500" />;
            case 'referral': return <Repeat className="w-5 h-5 text-blue-500" />;
            case 'review': return <MessageSquare className="w-5 h-5 text-green-500" />;
            default: return <Award className="w-5 h-5" />;
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20 animate-fade-in">
            {/* Header / Hero */}
            <div className="bg-off-black text-white pt-10 pb-24 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                 <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                     <div className="flex items-center gap-6">
                         <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yarndi-green to-emerald-600 flex items-center justify-center text-3xl font-black text-off-black shadow-glow border-4 border-off-black">
                             {user.name.charAt(0).toUpperCase()}
                         </div>
                         <div>
                             <h1 className="font-heading text-3xl font-bold">Welcome, {user.name}</h1>
                             <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                                 <span className="bg-white/10 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white border border-white/20">{currentTierLabel} Member</span>
                                 <span>Member since {user.joinedDate}</span>
                             </div>
                         </div>
                     </div>
                     
                     <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <div className="text-xs font-bold uppercase text-gray-400">Current Balance</div>
                            <div className="font-heading text-4xl font-black text-accent">{user.points} <span className="text-lg text-white">PTS</span></div>
                        </div>
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 ml-4" onClick={onLogout}>
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                     </div>
                 </div>
            </div>

            {/* Dashboard Container */}
            <div className="container mx-auto px-6 -mt-12 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">
                    
                    {/* Sidebar Nav */}
                    <div className="w-full md:w-64 bg-gray-50 border-r border-gray-100 p-6 flex flex-col gap-2">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'overview' ? 'bg-off-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                        >
                            <Award className="w-5 h-5" /> Overview
                        </button>
                        <button 
                            onClick={() => setActiveTab('rewards')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'rewards' ? 'bg-off-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                        >
                            <Gift className="w-5 h-5" /> Rewards
                        </button>
                        <button 
                            onClick={() => setActiveTab('earn')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'earn' ? 'bg-off-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                        >
                            <Zap className="w-5 h-5" /> Earn Points
                        </button>
                        
                        <div className="md:hidden pt-6 mt-6 border-t border-gray-200">
                             <div className="text-xs font-bold uppercase text-gray-400 mb-1">Balance</div>
                             <div className="font-heading text-3xl font-black text-off-black">{user.points} PTS</div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 md:p-12">
                        
                        {/* TAB: OVERVIEW */}
                        {activeTab === 'overview' && (
                            <div className="animate-fade-in space-y-12">
                                {/* Tier Progress */}
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <h2 className="font-heading text-xl font-bold text-off-black">Tier Progress</h2>
                                        <span className="text-xs font-bold text-gray-500">{Math.round(progressPercent)}% to {currentTierLabel === 'Rookie' ? 'Pro' : 'Elite'}</span>
                                    </div>
                                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden relative">
                                        <div className="h-full bg-gradient-to-r from-yarndi-green to-emerald-600 transition-all duration-1000" style={{width: `${progressPercent}%`}}></div>
                                    </div>
                                    <p className="mt-4 text-sm text-gray-500">
                                        Earn <strong>{Math.max(0, nextTierPoints - user.points)}</strong> more points to reach the next tier and unlock exclusive benefits.
                                    </p>
                                </div>

                                {/* Recent Activity */}
                                <div>
                                    <h2 className="font-heading text-xl font-bold text-off-black mb-6">History</h2>
                                    <div className="space-y-4">
                                        {user.redeemedRewards.length === 0 && user.completedChallenges.length === 0 ? (
                                            <div className="text-gray-400 text-sm italic">No activity yet. Start earning points!</div>
                                        ) : (
                                            <>
                                                {/* Mock History Logic */}
                                                {user.completedChallenges.map(cid => {
                                                    const challenge = challengesData.find(c => c.id === cid);
                                                    return challenge ? (
                                                        <div key={cid} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 bg-green-100 text-green-700 rounded-full"><CheckCircle className="w-4 h-4" /></div>
                                                                <div>
                                                                    <div className="font-bold text-sm text-off-black">{challenge.title}</div>
                                                                    <div className="text-xs text-gray-500">Challenge Completed</div>
                                                                </div>
                                                            </div>
                                                            <div className="font-bold text-green-600">+{challenge.points} PTS</div>
                                                        </div>
                                                    ) : null;
                                                })}
                                                {user.redeemedRewards.map(rid => {
                                                    const reward = rewardsData.find(r => r.id === rid);
                                                    return reward ? (
                                                        <div key={rid} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 bg-blue-100 text-blue-700 rounded-full"><Gift className="w-4 h-4" /></div>
                                                                <div>
                                                                    <div className="font-bold text-sm text-off-black">{reward.title}</div>
                                                                    <div className="text-xs text-gray-500">Reward Redeemed</div>
                                                                </div>
                                                            </div>
                                                            <div className="font-bold text-red-500">-{reward.cost} PTS</div>
                                                        </div>
                                                    ) : null;
                                                })}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB: REWARDS */}
                        {activeTab === 'rewards' && (
                            <div className="animate-fade-in">
                                <h2 className="font-heading text-2xl font-bold text-off-black mb-2">Rewards Marketplace</h2>
                                <p className="text-gray-500 mb-8">Redeem your hard-earned points for exclusive perks.</p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {rewardsData.map(reward => {
                                        const isRedeemed = user.redeemedRewards.includes(reward.id);
                                        const canAfford = user.points >= reward.cost;
                                        
                                        return (
                                            <div key={reward.id} className={`border rounded-2xl p-6 relative overflow-hidden transition-all ${isRedeemed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-100 hover:shadow-lg'}`}>
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isRedeemed ? 'bg-green-200 text-green-800' : 'bg-off-black text-accent'}`}>
                                                        {isRedeemed ? <Unlock className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                                                    </div>
                                                    <div className="font-heading font-black text-xl text-off-black">{reward.cost} PTS</div>
                                                </div>
                                                
                                                <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
                                                <p className="text-sm text-gray-500 mb-6 h-10">{reward.description}</p>
                                                
                                                {isRedeemed ? (
                                                    <div className="bg-white border border-green-200 rounded-lg p-3 text-center">
                                                        <span className="text-xs font-bold uppercase text-gray-400 block mb-1">Your Code</span>
                                                        <span className="font-mono font-bold text-green-700 select-all">{reward.code}</span>
                                                    </div>
                                                ) : (
                                                    <Button 
                                                        fullWidth 
                                                        disabled={!canAfford}
                                                        onClick={() => onRedeem(reward)}
                                                        className={!canAfford ? 'opacity-50 cursor-not-allowed' : ''}
                                                    >
                                                        {canAfford ? 'Redeem Reward' : 'Not Enough Points'}
                                                    </Button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                         {/* TAB: EARN */}
                         {activeTab === 'earn' && (
                             <div className="animate-fade-in">
                                <h2 className="font-heading text-2xl font-bold text-off-black mb-2">Community Challenges</h2>
                                <p className="text-gray-500 mb-8">Complete challenges to boost your tier.</p>
                                
                                <div className="space-y-4">
                                    {challengesData.map(challenge => {
                                        const isCompleted = user.completedChallenges.includes(challenge.id);
                                        
                                        return (
                                            <div key={challenge.id} className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border transition-all ${isCompleted ? 'bg-gray-50 border-gray-200 opacity-70' : 'bg-white border-gray-100 hover:border-accent hover:shadow-md'}`}>
                                                 <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isCompleted ? 'bg-gray-200 text-gray-500' : 'bg-off-black text-white'}`}>
                                                     {isCompleted ? <CheckCircle className="w-6 h-6" /> : renderChallengeIcon(challenge.icon)}
                                                 </div>
                                                 
                                                 <div className="flex-1 text-center md:text-left">
                                                     <h3 className="font-bold text-lg text-off-black">{challenge.title}</h3>
                                                     <p className="text-sm text-gray-500">{challenge.description}</p>
                                                 </div>

                                                 <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                                     <span className="font-bold text-accent text-lg">+{challenge.points} PTS</span>
                                                     <Button 
                                                        size="sm" 
                                                        variant={isCompleted ? 'outline' : 'primary'} 
                                                        disabled={isCompleted}
                                                        onClick={() => onCompleteChallenge(challenge)}
                                                    >
                                                         {isCompleted ? 'Completed' : challenge.actionLabel}
                                                     </Button>
                                                 </div>
                                            </div>
                                        );
                                    })}
                                </div>
                             </div>
                         )}

                    </div>
                </div>
            </div>
        </div>
    );
};
