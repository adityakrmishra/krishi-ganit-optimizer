import { LandUnit } from '../types';

// Standard conversion rates relative to 1 Acre
// Note: These are approximate standard values used in many parts of India.
// 1 Acre = 1.6 Bigha
// 1 Acre = 32 Katha
// 1 Katha = 20 Dhur
const CONVERSION_RATES: Record<LandUnit, number> = {
  [LandUnit.ACRE]: 1.0,
  [LandUnit.BIGHA]: 0.625, // 1/1.6
  [LandUnit.KATHA]: 0.03125, // 1/32
  [LandUnit.DHUR]: 0.0015625 // 1/(32*20)
};

export const calculateDosage = (
  size: number,
  unit: LandUnit,
  stdDose: number
): number => {
  const sizeInAcres = size * CONVERSION_RATES[unit];
  return Number((sizeInAcres * stdDose).toFixed(2));
};

export const calculateSavings = (totalDose: number): number => {
  // Mock logic: Assume over-usage is common by 10-15% without calculation
  // Let's say saving is roughly ₹50 per unit of dose avoided
  return Math.ceil(totalDose * 15); 
};