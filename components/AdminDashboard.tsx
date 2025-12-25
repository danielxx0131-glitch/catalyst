
import React from 'react';
/* Added StartupProject to imports to resolve type error in App.tsx */
import { AdminStats, StartupProject } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface AdminDashboardProps {
  stats: AdminStats;
  /* Added projects prop to interface to match usage in App.tsx */
  projects: StartupProject[];
}

/* Updated component to destructure projects from props */
const AdminDashboard: React.FC<AdminDashboardProps> = ({ stats, projects }) => {
  /* Calculate actual pending projects count from the provided projects array */
  const pendingCount = projects.filter(p => p.status === 'PENDING').length;

  return (
    <div className="w-full px-8 animate-in fade-in duration-700">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-2">平台數據監控中心</h2>
        <p className="text-slate-500 font-medium tracking-wide">即時掌握 Catalyst 營運深度分析與用戶活絡度</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-[10px] text-slate-400 font-black uppercase mb-3">付費訂閱用戶</p>
          <div className="flex items-end gap-2">
            <h4 className="text-3xl font-black text-slate-900">{stats.totalSubscribers.toLocaleString()}</h4>
            <span className="text-emerald-500 text-xs font-bold mb-1">+12%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-[10px] text-slate-400 font-black uppercase mb-3">媒合成功數</p>
          <div className="flex items-end gap-2">
            <h4 className="text-3xl font-black text-slate-900">{stats.activeMatchings}</h4>
            <span className="text-emerald-500 text-xs font-bold mb-1">+5%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-[10px] text-slate-400 font-black uppercase mb-3">待審核項目</p>
          <div className="flex items-end gap-2 text-amber-600">
            {/* Replaced hardcoded '12' with dynamic pendingCount */}
            <h4 className="text-3xl font-black">{pendingCount}</h4>
            <span className="text-[10px] font-bold mb-1 px-2 py-0.5 bg-amber-50 rounded-full ml-2">需處理</span>
          </div>
        </div>
        <div className="bg-indigo-600 p-6 rounded-3xl shadow-xl shadow-indigo-100 text-white">
          <p className="text-[10px] text-indigo-200 font-black uppercase mb-3">總募集資金</p>
          <h4 className="text-2xl font-black">NT$ {(stats.totalFundraised / 100000000).toFixed(1)} 億</h4>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h5 className="text-sm font-black text-slate-800 uppercase tracking-widest">網站活躍趨勢</h5>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
               <span className="text-[10px] text-slate-400 font-bold uppercase">每日瀏覽</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.platformActivity}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                <Area type="monotone" dataKey="visits" stroke="#4f46e5" fillOpacity={1} fill="url(#colorVisits)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h5 className="text-sm font-black text-slate-800 uppercase tracking-widest">項目審核成效</h5>
            <div className="px-3 py-1 bg-slate-50 text-[10px] font-bold text-slate-400 rounded-lg">最近 7 天</div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.platformActivity}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="matchings" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
