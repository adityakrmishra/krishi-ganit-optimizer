import React from 'react';
import { X, CheckCircle2, TrendingUp, Share2 } from 'lucide-react';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: number | null;
  savings: number | null;
  unit: string;
}

export const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, result, savings, unit }) => {
  if (!isOpen || result === null) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Card */}
      <div className="relative bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl transform transition-all duration-500 animate-[slideUp_0.4s_ease-out]">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-3 backdrop-blur-md shadow-lg border border-white/30">
            <CheckCircle2 className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Hisab Taiyaar Hai!
          </h2>
        </div>

        {/* Body */}
        <div className="p-8 text-center space-y-6">
          <div>
            <p className="text-emerald-600/70 text-sm font-semibold uppercase tracking-wider mb-1">
              Total Dawai Ki Zaroorat
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-6xl font-extrabold text-emerald-900 tracking-tight drop-shadow-sm">
                {result}
              </span>
              <span className="text-2xl font-bold text-emerald-600">{unit}</span>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 flex items-start gap-3 text-left shadow-sm">
            <TrendingUp className="text-harvest-600 w-6 h-6 shrink-0 mt-1" />
            <div>
              <p className="text-amber-900 font-bold text-lg">Munafa Tip 💡</p>
              <p className="text-amber-800/80 text-sm leading-relaxed">
                Sahi matra use karke aapne fasal ko bachaya aur lagbhag <span className="font-bold text-amber-700">₹{savings}</span> ka nuksan roka!
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-emerald-800 text-white font-bold py-4 rounded-2xl hover:bg-emerald-900 active:scale-95 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-2"
          >
             Theek Hai <span className="text-xl">👍</span>
          </button>
        </div>
      </div>
    </div>
  );
};