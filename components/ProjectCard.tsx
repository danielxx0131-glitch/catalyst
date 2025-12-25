
import React, { useState } from 'react';
import { StartupProject, TabType } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ProjectCardProps {
  project: StartupProject;
  isVerified: boolean;
  isSubscribed: boolean;
  onVerify: () => void;
  onUpgrade: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isVerified, isSubscribed, onVerify, onUpgrade }) => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.PROJECT);

  const progress = (project.currentAmount / project.targetAmount) * 100;
  const COLORS = ['#4f46e5', '#f1f5f9'];

  const renderContent = () => {
    switch (activeTab) {
      case TabType.PROJECT:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h3 className="text-xl font-bold text-slate-900 mb-6">核心商業計畫</h3>
            <p className="text-slate-500 leading-loose mb-10 text-sm">{project.description}</p>
            <div className="grid grid-cols-1 gap-4">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-sm text-slate-700 font-bold">{h}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case TabType.INVESTMENT:
      case TabType.BUSINESS_PLAN:
        if (!isVerified) {
          return (
            <div className="py-20 text-center animate-in fade-in duration-700">
               <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
               </div>
               <h4 className="text-xl font-black text-slate-900 mb-4">實名認證限制</h4>
               <p className="text-slate-400 text-sm max-w-xs mx-auto mb-8">為了維護項目隱私與合規，您必須完成 KYC 實名認證後方可解鎖財務數據與企劃書。</p>
               <button onClick={onVerify} className="px-12 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-indigo-100">開始認證</button>
            </div>
          );
        }
        return (
          <div className="animate-in fade-in duration-500">
             <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="w-40 h-40">
                   <ResponsiveContainer width="100%" height="100%">
                      <PieChart><Pie data={[{value: project.currentAmount}, {value: project.targetAmount - project.currentAmount}]} cx="50%" cy="50%" innerRadius={50} outerRadius={70} stroke="none" dataKey="value">{[0,1].map(i => <Cell key={i} fill={COLORS[i]} />)}</Pie></PieChart>
                   </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100"><p className="text-[10px] font-black text-slate-400 uppercase mb-1">釋出股權</p><p className="text-lg font-black">{project.equityOffered}</p></div>
                      <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100"><p className="text-[10px] font-black text-slate-400 uppercase mb-1">目標規模</p><p className="text-lg font-black">NT${(project.targetAmount / 10000).toLocaleString()}萬</p></div>
                   </div>
                </div>
             </div>
             <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                <div className="z-10 relative">
                   <p className="text-xs text-indigo-400 font-bold mb-4 uppercase tracking-widest">企劃書摘要</p>
                   <p className="text-sm leading-loose opacity-80 italic">"{project.planSummary}"</p>
                </div>
             </div>
          </div>
        );
      case TabType.CONTACT:
        return (
          <div className="animate-in fade-in duration-500">
             <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 mb-10">
                <img src={project.founder.avatar} className="w-20 h-20 rounded-3xl border-4 border-white shadow-md" alt="" />
                <div>
                   <h4 className="text-2xl font-black text-slate-900">{project.founder.name}</h4>
                   <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">{project.founder.title}</p>
                </div>
             </div>
             {isSubscribed ? (
               <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <textarea className="w-full p-6 bg-white border border-slate-200 rounded-3xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 text-sm h-40" placeholder="請描述您的媒合意向與預計投資規模..."></textarea>
                  <button className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black shadow-2xl shadow-indigo-100">發送媒合邀請</button>
               </form>
             ) : (
               <div className="py-12 text-center bg-indigo-50/50 rounded-[2.5rem] border border-indigo-100">
                  <h4 className="text-xl font-black text-slate-900 mb-2">權限不足</h4>
                  <p className="text-slate-500 text-sm mb-8">啟動通訊與媒合功能需持有有效的天使或法人訂閱計畫。</p>
                  <button onClick={onUpgrade} className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs shadow-xl shadow-indigo-100 uppercase tracking-widest">查看會員方案</button>
               </div>
             )}
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/40 overflow-hidden border border-slate-100">
      <div className="relative h-64">
        <img src={project.imageUrl} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-10 right-10 flex justify-between items-end">
           <div>
             <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2 block">{project.category}</span>
             <h2 className="text-3xl font-black text-white">{project.name}</h2>
           </div>
           <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">募資進度</p>
              <p className="text-xl font-black text-white">{progress.toFixed(0)}%</p>
           </div>
        </div>
      </div>
      <div className="flex border-b border-slate-100 px-6 py-2 overflow-x-auto scrollbar-hide">
        {Object.values(TabType).map(t => (
          <button key={t} onClick={() => setActiveTab(t)} className={`px-6 py-5 text-[11px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap ${activeTab === t ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
            {t}
            {activeTab === t && <div className="absolute bottom-0 left-4 right-4 h-1.5 bg-indigo-600 rounded-t-full"></div>}
          </button>
        ))}
      </div>
      <div className="p-12 min-h-[450px]">{renderContent()}</div>
    </div>
  );
};

export default ProjectCard;
