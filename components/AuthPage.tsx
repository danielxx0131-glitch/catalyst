
import React, { useState } from 'react';
import { UserRole } from '../types';

interface AuthPageProps {
  onLogin: (role: UserRole) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.INVESTOR);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white">
        {/* Branding Side */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
          <div className="z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">Catalyst</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-6">加速夢想<br/>連結資本</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xs">台灣首選高階創業媒合平台，為具有野心的創業者與精準投資人而生。</p>
          </div>
          <div className="z-10">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">© 2024 Catalyst Ventures</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-12 md:p-16 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <h2 className="text-3xl font-black text-slate-900 mb-2">{isLogin ? '歡迎回來' : '建立帳號'}</h2>
            <p className="text-slate-400 text-sm mb-10">{isLogin ? '請輸入您的憑證以進入控制面板' : '加入全台最活躍的新創生態系'}</p>

            {!isLogin && (
              <div className="mb-6">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">選擇您的身分</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setSelectedRole(UserRole.INVESTOR)}
                    className={`py-3 rounded-xl text-xs font-bold border transition-all ${selectedRole === UserRole.INVESTOR ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-white text-slate-500 border-slate-200'}`}
                  >
                    我是投資人
                  </button>
                  <button 
                    onClick={() => setSelectedRole(UserRole.ENTREPRENEUR)}
                    className={`py-3 rounded-xl text-xs font-bold border transition-all ${selectedRole === UserRole.ENTREPRENEUR ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-white text-slate-500 border-slate-200'}`}
                  >
                    我是創業者
                  </button>
                </div>
              </div>
            )}

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(selectedRole); }}>
              <div>
                <input 
                  type="email" 
                  placeholder="電子郵件" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="密碼" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm"
                  required
                />
              </div>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                {isLogin ? '立即登入' : '完成註冊'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                {isLogin ? '還沒有帳號？點此註冊' : '已有帳號？點此登入'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
