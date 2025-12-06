import React from 'react';

interface InputCardProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: 'text' | 'number' | 'select';
  options?: string[];
  placeholder?: string;
  icon?: React.ReactNode;
  suffix?: string;
}

export const InputCard: React.FC<InputCardProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  options = [],
  placeholder = '',
  icon,
  suffix
}) => {
  return (
    <div className="bg-white rounded-[20px] p-5 shadow-lg border-b-4 border-emerald-100 transform transition-transform duration-200 focus-within:-translate-y-1">
      <label className="block text-sm font-semibold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-2">
        {icon && <span className="text-harvest-600">{icon}</span>}
        {label}
      </label>
      
      <div className="relative">
        {type === 'select' ? (
          <div className="relative">
            <select
              value={value}
              onChange={onChange}
              className="w-full bg-emerald-50 text-emerald-900 font-bold text-lg p-4 rounded-xl appearance-none border-2 border-transparent focus:border-harvest-500 focus:outline-none transition-colors"
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-emerald-600">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
              </svg>
            </div>
          </div>
        ) : (
          <div className="relative flex items-center">
            <input
              type="number"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full bg-emerald-50 text-emerald-900 font-bold text-2xl p-4 rounded-xl border-2 border-transparent focus:border-harvest-500 focus:outline-none placeholder-emerald-900/20"
            />
            {suffix && (
              <span className="absolute right-4 text-emerald-400 font-medium pointer-events-none">
                {suffix}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};