export enum LandUnit {
  ACRE = 'Acre',
  BIGHA = 'Bigha',
  KATHA = 'Katha',
  DHUR = 'Dhur'
}

export enum FertilizerType {
  SOLID = 'Solid (kg)',
  LIQUID = 'Liquid (ml)'
}

export interface CalculatorState {
  unit: LandUnit;
  fertilizerType: FertilizerType;
  landSize: string;
  dosePerAcre: string;
}

export interface CalculationResult {
  totalDose: number;
  savings: number;
}