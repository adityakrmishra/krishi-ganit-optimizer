import React from 'react';
import { Sprout } from 'lucide-react';

export const HeroHeader: React.FC = () => {
  return (
    <div className="text-center pt-8 pb-6 text-white px-4">
      <div className="flex justify-center items-center gap-3 mb-2">
        <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/20 shadow-inner">
          <Sprout className="w-8 h-8 text-harvest-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
          Krishi-Ganit
        </h1>
      </div>
      <p className="text-emerald-100/80 text-lg font-medium">
        Khet Ka Hisab, Ek Click Mein
      </p>
    </div>
  );
};