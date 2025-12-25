
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#010413] text-white selection:bg-indigo-500/40 overflow-x-hidden font-sans relative">
      
      {/* --- 宇宙深空動態背景 --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        
        {/* 背景星雲光暈 */}
        <div className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] bg-indigo-900/10 blur-[160px] rounded-full animate-[pulse_12s_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] bg-blue-900/10 blur-[140px] rounded-full animate-[pulse_15s_infinite_reverse]"></div>

        {/* 靜態微量星塵 (Grainy Texture) */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* 閃爍星群 (Twinkling Stars) */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7,
                animationDuration: `${2 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* 流星效果 (Shooting Stars) */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-[shooting_10s_infinite_linear]"
              style={{
                width: `${150 + Math.random() * 100}px`,
                top: `${Math.random() * 40}%`,
                left: `${Math.random() * 100}%`,
                transform: 'rotate(-35deg)',
                animationDelay: `${i * 3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* 透視動態網格 (3D Space Mesh) */}
        <div className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            perspective: '1000px',
            transform: 'rotateX(45deg) scale(2)',
            transformOrigin: 'center center'
          }}>
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: `linear-gradient(#4f46e5 1.5px, transparent 1.5px), linear-gradient(90deg, #4f46e5 1.5px, transparent 1.5px)`,
              backgroundSize: '100px 100px',
              animation: 'gridMove 30s linear infinite'
            }}>
          </div>
        </div>
      </div>

      {/* 導覽列 */}
      <nav className="max-w-7xl mx-auto px-8 py-12 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-6 group cursor-pointer">
          {/* 強化版幾何 Logo (恆星核心) */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* 外部光環 */}
            <div className="absolute inset-0 border-[3px] border-indigo-500/20 rounded-full group-hover:scale-110 group-hover:border-indigo-500 transition-all duration-700"></div>
            <div className="absolute inset-2 border-[2px] border-blue-400/40 rounded-full group-hover:rotate-180 transition-all duration-1000"></div>
            {/* 核心光源 */}
            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.9)] animate-pulse"></div>
            {/* 繞行電子/粒子 */}
            <div className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-[spin_4s_linear_infinite] origin-[35px_15px]"></div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-3xl tracking-[-0.05em] uppercase text-white group-hover:text-indigo-300 transition-colors">
              Catalyst
            </span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] ml-1">Universal Hub</span>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black tracking-[0.3em] hover:bg-white/10 hover:border-indigo-500/30 transition-all uppercase backdrop-blur-md"
        >
          聯絡我們
        </button>
      </nav>

      {/* Hero 區塊 */}
      <main className="max-w-7xl mx-auto px-8 pt-24 pb-40 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full mb-12 backdrop-blur-xl animate-in fade-in duration-1000">
            <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] animate-pulse"></div>
            <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em]">解鎖新創宇宙 · 全民參與平台</span>
          </div>

          <h1 className="text-7xl md:text-[7.5rem] font-black leading-[0.9] mb-12 tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000">
            引爆創意<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 via-blue-400 to-white">連鎖反應</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mb-16 font-medium opacity-90 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            Catalyst 是為大眾量身打造的新創引力中心。我們打破資本黑盒，讓具備潛力的創業項目與每一位熱愛創新的靈魂產生共鳴。
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-10 animate-in fade-in slide-in-from-bottom-20 duration-1000">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative w-full sm:w-auto px-16 py-7 bg-indigo-600 text-white rounded-[2.5rem] font-black text-sm shadow-[0_20px_50px_-12px_rgba(79,70,229,0.5)] hover:bg-indigo-500 hover:-translate-y-2 transition-all active:scale-95"
            >
              <span className="relative z-10">啟動早期訪問</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <div className="flex items-center gap-5">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#010413] bg-slate-800 flex items-center justify-center text-xs font-black shadow-2xl overflow-hidden ring-1 ring-white/10">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs font-black tracking-[0.2em] ml-2">已經有 500+ 位開拓者加入</p>
            </div>
          </div>
        </div>

        {/* 核心價值 (深邃質感卡片) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-60">
          <div className="group p-14 bg-white/[0.03] border border-white/5 rounded-[4rem] hover:bg-white/[0.05] hover:border-indigo-500/20 transition-all duration-700 relative overflow-hidden backdrop-blur-md">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-3xl flex items-center justify-center mb-10 text-indigo-400 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-6">全視角項目探索</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-xl italic">
                「將複雜的商業語言轉化為星圖般的直覺。」<br/>
                我們重新設計了資訊架構，讓大眾能以最快速度鎖定具備成長性的潛力項目。
              </p>
            </div>
          </div>
          <div className="group p-14 bg-white/[0.03] border border-white/5 rounded-[4rem] hover:bg-white/[0.05] hover:border-blue-500/20 transition-all duration-700 relative overflow-hidden backdrop-blur-md">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl flex items-center justify-center mb-10 text-blue-400 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-4.514A11.042 11.042 0 0010 12.5m12 9.5c0-3.517-1.009-6.799-2.753-9.571m-3.44-4.514A11.042 11.042 0 0010 12.5m10-10l-10 10" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-6">信任鏈條體系</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-xl italic">
                「每一條連線都經過真實的驗證。」<br/>
                我們在浩瀚的新創大海中，為您標記出最可靠的創辦人背景與項目數據。
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 聯繫 Modal (高級感設計) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/95 backdrop-blur-3xl animate-in fade-in duration-500">
          <div className="w-full max-w-xl bg-gradient-to-b from-[#111827] to-[#010413] border border-white/10 rounded-[4.5rem] p-12 md:p-16 relative shadow-[0_0_100px_rgba(79,70,229,0.2)] overflow-hidden">
            
            {/* Modal 背景裝飾 */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/10 blur-3xl rounded-full"></div>

            <div className="absolute top-0 right-0 p-12">
              <button onClick={() => setIsModalOpen(false)} className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:rotate-90 hover:bg-white/10 transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center py-24 animate-in zoom-in-95 duration-700">
                <div className="w-28 h-28 bg-indigo-600/20 rounded-[3rem] flex items-center justify-center mx-auto mb-10 shadow-2xl">
                  <svg className="w-14 h-14 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tight italic">發射成功！</h3>
                <p className="text-slate-400 font-medium text-lg">我們已收到您的資訊，專業團隊將與您聯繫。</p>
              </div>
            ) : (
              <div>
                <h2 className="text-5xl font-black mb-6 tracking-tighter">與我們同行</h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  想要成為首批進入 Catalyst 宇宙的人嗎？<br/>
                  官方連線：<a href="mailto:danielxx0131@gmail.com" className="text-indigo-400 font-black hover:text-indigo-300 underline underline-offset-8">danielxx0131@gmail.com</a>
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <input 
                      type="text" 
                      placeholder="您的稱呼" 
                      required
                      className="w-full px-10 py-6 bg-white/[0.03] border border-white/10 rounded-[2rem] outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all text-base font-medium placeholder:text-slate-600" 
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="email" 
                      placeholder="您的電子郵件" 
                      required
                      className="w-full px-10 py-6 bg-white/[0.03] border border-white/10 rounded-[2rem] outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all text-base font-medium placeholder:text-slate-600" 
                    />
                  </div>
                  <div className="group">
                    <textarea 
                      placeholder="想對我們說的話..." 
                      rows={3}
                      className="w-full px-10 py-6 bg-white/[0.03] border border-white/10 rounded-[2rem] outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all text-base font-medium placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-base hover:bg-indigo-500 transition-all shadow-2xl active:scale-[0.98]">
                    立即提交申請
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 頁尾 */}
      <footer className="max-w-7xl mx-auto px-8 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-slate-600 text-[11px] font-black uppercase tracking-[0.6em]">
          Catalyst Platform · Beyond Boundaries · 2024
        </div>
        <div className="flex gap-16">
          <a href="mailto:danielxx0131@gmail.com" className="text-slate-600 hover:text-indigo-400 transition-colors text-[11px] font-black uppercase tracking-widest">Email</a>
          <a href="#" className="text-slate-600 hover:text-indigo-400 transition-colors text-[11px] font-black uppercase tracking-widest">Twitter</a>
          <a href="#" className="text-slate-600 hover:text-indigo-400 transition-colors text-[11px] font-black uppercase tracking-widest">LinkedIn</a>
        </div>
      </footer>

      {/* 自定義宇宙動畫 */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 1000px; }
        }
        @keyframes shooting {
          0% { transform: translateX(0) translateY(0) rotate(-35deg); opacity: 0; }
          5% { opacity: 1; }
          15% { transform: translateX(-1000px) translateY(700px) rotate(-35deg); opacity: 0; }
          100% { transform: translateX(-1000px) translateY(700px) rotate(-35deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default App;
