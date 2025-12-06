import React, { useState } from 'react';
import { HeroHeader } from './components/HeroHeader';
import { InputCard } from './components/InputCard';
import { ResultModal } from './components/ResultModal';
import { LandUnit, FertilizerType, CalculatorState, CalculationResult } from './types';
import { calculateDosage, calculateSavings } from './utils/conversions';
import { Ruler, Droplets, MapPin, ArrowRight, Beaker } from 'lucide-react';

const App: React.FC = () => {
  const [form, setForm] = useState<CalculatorState>({
    unit: LandUnit.KATHA,
    fertilizerType: FertilizerType.SOLID,
    landSize: '',
    dosePerAcre: '',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (field: keyof CalculatorState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCalculate = () => {
    const size = parseFloat(form.landSize);
    const dose = parseFloat(form.dosePerAcre);

    if (isNaN(size) || isNaN(dose) || size <= 0 || dose <= 0) {
        // Simple alert for better UX in this context vs a toast library
        alert("Kripya sahi number bharein (Please enter valid numbers)");
        return;
    }

    const totalDose = calculateDosage(size, form.unit, dose);
    const savings = calculateSavings(totalDose);
    
    setResult({ totalDose, savings });
    setIsModalOpen(true);
  };

  // Determine the display unit based on fertilizer type
  const currentUnit = form.fertilizerType === FertilizerType.SOLID ? 'kg' : 'ml';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-850 via-emerald-900 to-earth-800 flex flex-col items-center font-sans antialiased selection:bg-harvest-500 selection:text-white pb-10">
      
      <div className="w-full max-w-md flex-1 flex flex-col">
        <HeroHeader />

        <main className="flex-1 px-5 space-y-5 w-full">
          
          {/* Card 1: Unit Selection */}
          <InputCard
            label="Khet Ki Unit"
            type="select"
            value={form.unit}
            onChange={handleInputChange('unit')}
            options={Object.values(LandUnit)}
            icon={<MapPin size={18} />}
          />

          {/* Card 2: Fertilizer Type Selection */}
          <InputCard
            label="Dawai ka Prakar (Type)"
            type="select"
            value={form.fertilizerType}
            onChange={handleInputChange('fertilizerType')}
            options={Object.values(FertilizerType)}
            icon={<Beaker size={18} />}
          />

          {/* Card 3: Land Size */}
          <InputCard
            label="Khet Ka Size"
            type="number"
            value={form.landSize}
            onChange={handleInputChange('landSize')}
            placeholder="Ex: 5, 10..."
            icon={<Ruler size={18} />}
            suffix={form.unit}
          />

          {/* Card 4: Standard Dose */}
          <InputCard
            label="Standard Dose (Per Acre)"
            type="number"
            value={form.dosePerAcre}
            onChange={handleInputChange('dosePerAcre')}
            placeholder="Ex: 50, 100..."
            icon={<Droplets size={18} />}
            suffix={currentUnit}
          />

          {/* Spacer */}
          <div className="h-4"></div>

          {/* CTA Button */}
          <button
            onClick={handleCalculate}
            className="group relative w-full bg-harvest-500 text-white font-bold text-xl py-5 rounded-full shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)] hover:bg-harvest-600 hover:shadow-[0_12px_24px_-4px_rgba(245,158,11,0.6)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 overflow-hidden"
          >
             <span className="relative z-10">Hisab Lagayein</span>
             <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:translate-x-1 transition-transform">
               <ArrowRight size={24} />
             </div>
             {/* Shine effect */}
             <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />
          </button>

          <p className="text-center text-white/40 text-xs mt-4">
             Note: Results are based on standard conversions (1 Acre ≈ 32 Katha). 
          </p>

        </main>
      </div>

      <ResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        result={result?.totalDose ?? null}
        savings={result?.savings ?? null}
        unit={currentUnit}
      />

    </div>
  );
};

export default App;