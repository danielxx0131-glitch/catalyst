
import React from 'react';
import { UserRole, AppUser } from '../types';

interface SidebarProps {
  user: AppUser;
  activeMenu: string;
  onMenuChange: (menu: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, activeMenu, onMenuChange, onLogout }) => {
  const getMenuItems = () => {
    switch (user.role) {
      case UserRole.ADMIN:
        return [
          { id: 'dashboard', label: '數據監控', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
          { id: 'projects-review', label: '待審項目', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
        ];
      case UserRole.INVESTOR:
        return [
          { id: 'explore', label: '發現項目', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
          { id: 'messages', label: '通訊媒合', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
          { id: 'profile', label: '認證中心', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
        ];
      case UserRole.ENTREPRENEUR:
        return [
          { id: 'my-projects', label: '我的項目', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
          { id: 'messages', label: '媒合請求', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
          { id: 'profile', label: '創辦人檔案', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
        ];
      default: return [];
    }
  };

  return (
    <div className="w-64 bg-slate-950 min-h-screen fixed left-0 top-0 flex flex-col p-8 text-white z-40">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <span className="font-black text-xl tracking-tighter uppercase">Catalyst</span>
      </div>

      <div className="flex-1 space-y-2">
        {getMenuItems().map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuChange(item.id)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
              activeMenu === item.id ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/40' : 'text-slate-500 hover:text-white hover:bg-slate-900'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
            <span className="text-sm font-bold">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto pt-8 border-t border-slate-900">
        <div className="mb-6 flex items-center gap-3">
           <img src={user.avatar} className="w-10 h-10 rounded-full border border-slate-800" alt="" />
           <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">{user.name}</p>
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{user.role}</p>
           </div>
        </div>
        <button onClick={onLogout} className="w-full py-3 bg-red-500/10 text-red-400 text-xs font-bold rounded-xl border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">安全登出系統</button>
      </div>
    </div>
  );
};

export default Sidebar;
