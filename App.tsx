
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('創業項目');
  const [timeOffset, setTimeOffset] = useState(0);

  // 實時計算地球光照偏移量 (根據系統 UTC 時間)
  useEffect(() => {
    const updateEarthTime = () => {
      const now = new Date();
      // UTC 小時轉為百分比 (0-24h -> 0-100%)
      const hours = now.getUTCHours() + now.getUTCMinutes() / 60;
      setTimeOffset((hours / 24) * 100);
    };
    updateEarthTime();
    const timer = setInterval(updateEarthTime, 60000); // 每分鐘更新一次
    return () => clearInterval(timer);
  }, []);

  const tabs = ['創業項目', '投資金額', '深度企劃', '啟動連線'];

  const renderContent = () => {
    switch (activeTab) {
      case '創業項目':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6">
              GreenTech · AI Core
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tighter text-white">EcoNexus 智慧能源</h2>
            <p className="text-slate-400 leading-relaxed text-lg font-medium italic opacity-90">
              「重新定義城市微電網的分配效率。」<br/>
              利用邊緣運算優化建築間的剩餘電力分配，為永續城市提供核心骨幹，預計降低 15% 的能源損耗。
            </p>
          </div>
        );
      case '投資金額':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-black mb-10 tracking-[0.2em] italic text-white uppercase">Capital Target</h2>
            <div className="space-y-4">
              <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] flex justify-between items-center group hover:bg-white/[0.08] transition-all">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">融資規模</span>
                <span className="text-2xl font-black italic text-white tracking-tight">NT$ 5,000 萬</span>
              </div>
              <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-[2rem] flex justify-between items-center">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">認購進度</span>
                <span className="text-2xl font-black italic text-blue-400 tracking-tight">25% Locked</span>
              </div>
            </div>
          </div>
        );
      case '深度企劃':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-black mb-8 tracking-[0.2em] italic text-indigo-400 uppercase">Roadmap</h2>
            <div className="space-y-5">
              {[
                '取得 AI 能源分配專利權',
                '台北試點場域節能達 28%',
                '預計 2026 Q3 損益兩平',
                '擴展至東南亞智慧城市'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
                  <span className="text-slate-300 font-bold text-sm tracking-[0.1em]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case '啟動連線':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-black mb-6 tracking-[0.2em] italic text-white uppercase">Consulting</h2>
            <p className="text-slate-500 mb-8 font-medium text-sm tracking-wide">請留下您的機構名稱，我們將為您開啟專屬投資評估通道。</p>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="機構 / 投資者名稱" className="w-full px-8 py-5 bg-white/[0.03] border border-white/10 rounded-2xl outline-none focus:border-blue-500 transition-all font-bold text-white placeholder:text-slate-700 tracking-wide" />
              <button className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-[0.4em] shadow-2xl shadow-blue-900/40 hover:bg-blue-500 transition-all active:scale-95">發送媒合請求</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#02040a] text-slate-200 selection:bg-blue-500/30 font-sans relative overflow-hidden">
      
      {/* --- 全新宇宙 & 實時光照地球背景 --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#02040a_100%)]"></div>
        
        {/* 星塵背景 */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full" style={{ width: '1px', height: '1px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }} />
          ))}
        </div>

        {/* 實時地球 (台灣為中心) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vh] h-[85vh] opacity-40">
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5 shadow-[0_0_120px_rgba(30,58,138,0.25)]">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale-[30%] brightness-[0.9]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop')`,
                backgroundSize: '210% 100%',
                backgroundPosition: '78.5% center', // 鎖定台灣經緯度
              }}
            />
            {/* 台灣地標光點 */}
            <div className="absolute top-[46%] left-[78.8%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_20px_#60a5fa] animate-ping z-10"></div>
            
            {/* 實時晝夜陰影遮罩 */}
            <div 
              className="absolute inset-0 mix-blend-multiply z-20"
              style={{
                background: `linear-gradient(to right, transparent ${timeOffset - 30}%, rgba(0,0,0,0.98) ${timeOffset}%, rgba(0,0,0,0.98) ${timeOffset + 30}%, transparent ${timeOffset + 60}%)`,
                backgroundSize: '200% 100%',
                backgroundPosition: `${-timeOffset}% center`
              }}
            />
          </div>
        </div>

        {/* 流星系統 */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent opacity-0 animate-[meteor_10s_infinite_linear]"
              style={{ width: '250px', top: `${20 + Math.random() * 40}%`, left: `${Math.random() * 110}%`, transform: 'rotate(-25deg)', animationDelay: `${i * 3 + Math.random() * 5}s` }}
            />
          ))}
        </div>
      </div>

      {/* --- 主體網格小卡 --- */}
      <div className="w-full max-w-lg bg-[#0a0c14]/80 backdrop-blur-3xl border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_50px_150px_-30px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-1000">
        
        {/* 卡片頭部 */}
        <div className="px-12 pt-14 pb-10 flex justify-between items-end border-b border-white/5">
          <div className="flex items-center gap-5">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-pulse"></div>
              <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_white]"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black uppercase tracking-[0.3em] text-white">Catalyst</h1>
              <span className="text-[8px] font-black text-blue-500/50 uppercase tracking-[0.6em]">Hub Synergy</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Local Time</p>
            <p className="text-[11px] font-black text-blue-400 uppercase tracking-widest">{new Date().toLocaleTimeString('zh-TW', { hour12: false })}</p>
          </div>
        </div>

        {/* 導覽分頁 */}
        <div className="flex px-4 py-2 overflow-x-auto scrollbar-hide border-b border-white/5 bg-white/[0.01]">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-6 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap transition-all relative ${activeTab === tab ? 'text-white' : 'text-slate-600 hover:text-slate-300'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>}
            </button>
          ))}
        </div>

        {/* 內容區域 */}
        <div className="p-12 md:p-14 min-h-[440px] flex flex-col justify-center">
          {renderContent()}
        </div>

        {/* 頁尾：僅保留 Email */}
        <div className="px-12 py-12 bg-black/20 border-t border-white/5">
          <a href="mailto:danielxx0131@gmail.com" className="group flex flex-col gap-2 items-center justify-center">
             <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.8em] group-hover:text-blue-500/50 transition-colors">Direct Contact</span>
             <span className="text-[11px] font-black text-slate-400 group-hover:text-white uppercase tracking-[0.25em] transition-all">danielxx0131@gmail.com</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes meteor {
          0% { transform: translateX(0) translateY(0) rotate(-25deg); opacity: 0; }
          5% { opacity: 0.8; }
          15% { transform: translateX(-1200px) translateY(550px) rotate(-25deg); opacity: 0; }
          100% { transform: translateX(-1200px) translateY(550px) rotate(-25deg); opacity: 0; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default App;
