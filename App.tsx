
import React, { useState, useEffect, useMemo } from 'react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [timeOffset, setTimeOffset] = useState(0);

  // 計算實時太陽光照射角度 (根據 UTC 時間)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcHours = now.getUTCHours() + now.getUTCMinutes() / 60;
      // 台灣在 UTC+8，12:00 UTC 時太陽在 0 度經度，計算相對位移
      const offset = (utcHours / 24) * 100;
      setTimeOffset(offset);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans relative">
      
      {/* --- 全新宇宙 & 實時地球背景 --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        
        {/* 深空星點 */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(80)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 'px',
                height: Math.random() * 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random(),
              }}
            />
          ))}
        </div>

        {/* 實時光照地球 (以台灣為中心) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vh] h-[90vh] md:w-[110vh] md:h-[110vh] opacity-40">
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(30,58,138,0.2)]">
            {/* 地球基礎層 (陸地藍圖風格) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop')`,
                backgroundSize: '200% auto',
                transform: `rotate(5deg) scale(1.1)`,
              }}
            />
            {/* 台灣座標光點 (Taipei Ping) */}
            <div className="absolute top-[46%] left-[78%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa] animate-ping"></div>
            
            {/* 實時晝夜遮罩層 */}
            <div 
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background: `linear-gradient(to right, transparent ${timeOffset - 25}%, rgba(0,0,0,0.95) ${timeOffset}%, rgba(0,0,0,0.95) ${timeOffset + 25}%, transparent ${timeOffset + 50}%)`,
                backgroundSize: '200% 100%',
                backgroundPosition: `${-timeOffset}% center`
              }}
            />
            
            {/* 城市燈火效果 (夜間顯現) */}
            <div 
              className="absolute inset-0 opacity-30 mix-blend-screen"
              style={{
                backgroundImage: `radial-gradient(circle at 78% 46%, #fbbf24 2px, transparent 4px)`,
                backgroundSize: '100% 100%'
              }}
            />
          </div>
        </div>

        {/* 流星系統 */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 animate-[meteor_8s_infinite_linear]"
              style={{
                width: '180px',
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 120}%`,
                transform: 'rotate(-25deg)',
                animationDelay: `${i * 4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* 導覽列 */}
      <nav className="max-w-7xl mx-auto px-10 py-12 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-6 group cursor-pointer">
          {/* 高級幾何 Logo (軌道核心) */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 border-[1.5px] border-blue-500/20 rounded-full group-hover:border-blue-500/50 transition-all duration-700"></div>
            <div className="absolute inset-1.5 border-[1.5px] border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-3 border-[2px] border-blue-400/30 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-3xl tracking-[-0.04em] uppercase text-white">Catalyst</span>
            <span className="text-[9px] font-black text-blue-500/60 uppercase tracking-[0.5em] ml-1">Global Synergy</span>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] hover:bg-blue-600 hover:border-blue-500 transition-all uppercase backdrop-blur-md"
        >
          立即啟動
        </button>
      </nav>

      {/* Hero 區塊 */}
      <main className="max-w-7xl mx-auto px-10 pt-32 pb-48 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-blue-600/10 border border-blue-500/20 rounded-full mb-14 backdrop-blur-xl">
            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] animate-pulse"></div>
            <span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.3em]">以台灣為核心 · 連結全球創業動能</span>
          </div>

          <h1 className="text-7xl md:text-[8.5rem] font-black leading-[0.85] mb-14 tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000">
            精準媒合<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-500">不再盲目探索</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mb-20 font-medium opacity-80 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            Catalyst 專為追求卓越的投資者與創業者打造。我們透過實時數據監控與全球視角，將每一個具備潛力的主意轉化為可預期的商業版圖。
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-12 animate-in fade-in slide-in-from-bottom-20 duration-1000">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative w-full sm:w-auto px-16 py-8 bg-blue-600 text-white rounded-full font-black text-sm shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:-translate-y-2 transition-all active:scale-[0.97]"
            >
              <span className="relative z-10">獲取專業邀請</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-[5px] border-[#02040a] bg-slate-800 flex items-center justify-center text-xs font-black ring-1 ring-white/10">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">已服務超過 300+ 個頂尖團隊</p>
            </div>
          </div>
        </div>

        {/* 核心功能簡介 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-64">
          <div className="group p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-700 backdrop-blur-sm">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-10 text-blue-400 group-hover:scale-110 transition-transform duration-500 border border-white/5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h3 className="text-3xl font-black mb-8">實時資本監控</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-lg">
              整合全球市場動態，為您提供最直覺的項目評估。我們不只是媒合，更是您在新創宇宙中的精準雷達。
            </p>
          </div>
          <div className="group p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-700 backdrop-blur-sm">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-10 text-blue-400 group-hover:scale-110 transition-transform duration-500 border border-white/5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-4.514A11.042 11.042 0 0010 12.5m12 9.5c0-3.517-1.009-6.799-2.753-9.571m-3.44-4.514A11.042 11.042 0 0010 12.5m10-10l-10 10" /></svg>
            </div>
            <h3 className="text-3xl font-black mb-8">深度信任體系</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-lg">
              每一個連結都基於嚴謹的身份與項目驗證。我們在保護創意的同時，也確保投資者的每一分資本都能投向真實的未來。
            </p>
          </div>
        </div>
      </main>

      {/* 聯繫 Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-3xl animate-in fade-in duration-500">
          <div className="w-full max-w-xl bg-[#0a0c14] border border-white/10 rounded-[4rem] p-12 md:p-16 relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-12">
              <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-500 hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center py-20 animate-in zoom-in-95 duration-700">
                <div className="w-24 h-24 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-10">
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tight">請求已傳送</h3>
                <p className="text-slate-400 font-medium text-lg">我們將在 24 小時內與您取得聯繫。</p>
              </div>
            ) : (
              <div>
                <h2 className="text-5xl font-black mb-8 tracking-tighter italic text-blue-400">Join Catalyst</h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  請留下您的聯繫資訊，我們的顧問將為您開啟專屬通道。<br/>
                  官方連線：<a href="mailto:danielxx0131@gmail.com" className="text-white font-black hover:text-blue-400 underline underline-offset-8 transition-colors">danielxx0131@gmail.com</a>
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" placeholder="您的稱呼" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-blue-500 transition-all text-base font-medium" />
                  <input type="email" placeholder="電子郵件" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-blue-500 transition-all text-base font-medium" />
                  <textarea placeholder="您的需求..." rows={3} className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-blue-500 transition-all text-base font-medium resize-none"></textarea>
                  <button className="w-full py-6 bg-blue-600 text-white rounded-3xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-95">提交諮詢</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 頁尾 (精簡版) */}
      <footer className="max-w-7xl mx-auto px-10 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.6em]">
          Catalyst Hub · Taiwan Powered · 2024
        </div>
        <div>
          <a href="mailto:danielxx0131@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors text-[11px] font-black uppercase tracking-widest flex items-center gap-3 group">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
            danielxx0131@gmail.com
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes meteor {
          0% { transform: translateX(0) translateY(0) rotate(-25deg); opacity: 0; }
          10% { opacity: 1; }
          20% { transform: translateX(-1200px) translateY(550px) rotate(-25deg); opacity: 0; }
          100% { transform: translateX(-1200px) translateY(550px) rotate(-25deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default App;
