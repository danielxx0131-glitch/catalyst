
import React from 'react';

interface MembershipPlansProps {
  onSubscribe: (level: string) => void;
  onClose: () => void;
}

const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSubscribe, onClose }) => {
  const plans = [
    {
      name: '天使投資者',
      price: '2,900',
      period: '每月',
      features: ['查看所有創業項目', '下載基礎企劃書', '每月 5 次媒合預約', '加入專屬投資社群'],
      recommended: false
    },
    {
      name: '專業機構法人',
      price: '9,900',
      period: '每月',
      features: ['優先查看優質項目', '無限次媒合預約', '專屬投資顧問服務', '項目深度盡職調查報告'],
      recommended: true
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-slate-50 rounded-[3rem] shadow-2xl w-full max-w-4xl overflow-hidden animate-in zoom-in-95 duration-500">
        <div className="p-10 md:p-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">升級為 Catalyst 會員</h2>
            <p className="text-slate-500">獲得專屬投資權限，與頂尖創辦人直接對話</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`p-8 rounded-[2.5rem] flex flex-col ${
                  plan.recommended 
                    ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200 ring-8 ring-indigo-50' 
                    : 'bg-white border border-slate-200 text-slate-900'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">NT$ {plan.price}</span>
                    <span className={`text-sm font-medium ${plan.recommended ? 'text-indigo-200' : 'text-slate-400'}`}> / {plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <svg className={`w-5 h-5 ${plan.recommended ? 'text-indigo-300' : 'text-indigo-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onSubscribe(plan.name)}
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    plan.recommended 
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
                  }`}
                >
                  立即訂閱
                </button>
              </div>
            ))}
          </div>

          <button onClick={onClose} className="mt-8 w-full text-slate-400 text-sm font-medium hover:text-slate-600">
            暫時不用，我想先隨便看看
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;
