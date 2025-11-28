


import React, { useState } from 'react';
import { User } from '../types';
import { Button } from './Button';
import { Check, X, Eye, Shield, Users, Building, Search } from 'lucide-react';

interface Props {
    allUsers: User[];
    onUpdateUserStatus: (userId: string, status: 'approved' | 'rejected') => void;
    onImpersonate: (user: User) => void;
}

export const PageAdmin: React.FC<Props> = ({ allUsers, onUpdateUserStatus, onImpersonate }) => {
    const [filter, setFilter] = useState<'all' | 'pending' | 'wholesale'>('all');
    const [search, setSearch] = useState('');

    const filteredUsers = allUsers.filter(u => {
        const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()) || u.companyName?.toLowerCase().includes(search.toLowerCase());
        
        if (!matchesSearch) return false;
        
        if (filter === 'pending') return u.status === 'pending';
        if (filter === 'wholesale') return u.role === 'wholesale';
        return true;
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-20 animate-fade-in">
            {/* Header */}
            <div className="bg-off-black text-white pt-10 pb-24">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-red-500 p-2 rounded-lg"><Shield className="w-6 h-6 text-white" /></div>
                        <span className="text-red-500 font-bold tracking-widest uppercase text-xs">Admin Access</span>
                    </div>
                    <h1 className="font-heading text-4xl font-black">USER MANAGEMENT</h1>
                    <p className="text-gray-400">Manage wholesale approvals and customer accounts.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-12 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[600px]">
                    {/* Controls */}
                    <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                            <button 
                                onClick={() => setFilter('all')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${filter === 'all' ? 'bg-white shadow-sm text-off-black' : 'text-gray-500'}`}
                            >
                                All Users
                            </button>
                            <button 
                                onClick={() => setFilter('wholesale')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${filter === 'wholesale' ? 'bg-white shadow-sm text-off-black' : 'text-gray-500'}`}
                            >
                                Wholesale
                            </button>
                            <button 
                                onClick={() => setFilter('pending')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${filter === 'pending' ? 'bg-white shadow-sm text-red-500' : 'text-gray-500'}`}
                            >
                                Pending ({allUsers.filter(u => u.status === 'pending').length})
                            </button>
                        </div>

                        <div className="relative w-full md:w-auto">
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Search users..." 
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-off-black"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                                <tr>
                                    <th className="px-6 py-4">User</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Business Details</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredUsers.map(u => (
                                    <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-off-black">{u.name}</div>
                                            <div className="text-xs text-gray-500">{u.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold uppercase ${
                                                u.role === 'admin' ? 'bg-red-100 text-red-600' : 
                                                u.role === 'wholesale' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                                {u.role === 'wholesale' ? <Building className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {u.role === 'wholesale' ? (
                                                <div className="text-sm">
                                                    <div className="font-bold">{u.companyName}</div>
                                                    <div className="text-xs text-gray-500">ABN: {u.abn}</div>
                                                    <div className="text-xs text-blue-500">{u.website}</div>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 text-xs">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {u.status === 'pending' && (
                                                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold uppercase animate-pulse">Pending Approval</span>
                                            )}
                                            {u.status === 'approved' && (
                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase">Active</span>
                                            )}
                                            {u.status === 'rejected' && (
                                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold uppercase">Rejected</span>
                                            )}
                                            {!u.status && <span className="text-gray-400 text-xs">N/A</span>}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {u.status === 'pending' && (
                                                    <>
                                                        <button 
                                                            onClick={() => onUpdateUserStatus(u.id, 'approved')}
                                                            className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200" title="Approve"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                        <button 
                                                            onClick={() => onUpdateUserStatus(u.id, 'rejected')}
                                                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200" title="Reject"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}
                                                
                                                <button 
                                                    onClick={() => onImpersonate(u)}
                                                    className="flex items-center gap-2 px-3 py-2 bg-off-black text-white rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors ml-2"
                                                >
                                                    <Eye className="w-3 h-3" /> View As
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredUsers.length === 0 && (
                            <div className="p-12 text-center text-gray-400 text-sm">No users found.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};