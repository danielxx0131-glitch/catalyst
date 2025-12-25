
import React from 'react';
import { InvestorType } from '../types';

interface ComplianceModalProps {
  onVerify: (type: InvestorType) => void;
  onClose: () => void;
}

const ComplianceModal: React.FC<ComplianceModalProps> = ({ onVerify, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">投資者身份確認</h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8">
            <p>根據台灣《證券交易法》及相關群眾募資規範，在查看具體投資條款前，請先確認您的投資者身份。</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="font-semibold text-slate-800 mb-1">風險告知書摘要：</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>新創投資具備高度風險，可能損失全部本金。</li>
                <li>股權流動性有限，請評估自身資產配置。</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={() => onVerify(InvestorType.PROFESSIONAL)}
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
            >
              我是專業投資者 (具備資產證明)
            </button>
            <button 
              onClick={() => onVerify(InvestorType.GENERAL)}
              className="w-full py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              我是一般投資者 (限額投資)
            </button>
            <button 
              onClick={onClose}
              className="w-full py-2 text-slate-400 text-sm hover:text-slate-600 transition-colors"
            >
              暫時返回
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceModal;
