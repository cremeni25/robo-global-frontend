// apps/web/_future/b2/types/b2.ts

export type InterpretativeLevel = 'low' | 'medium' | 'high';

export type AssertivenessLevel = 'consistent' | 'stable' | 'promising';

export type PerformanceSnapshot = {
  description: string;
  period: string;
};

export type HighDemandNicho = {
  name: string;
  demand: InterpretativeLevel;
};

export type HighAssertivenessNicho = {
  name: string;
  level: AssertivenessLevel;
};

export type B2Snapshot = {
  performance: PerformanceSnapshot;
  highDemandNichos: HighDemandNicho[];
  highAssertivenessNichos: HighAssertivenessNicho[];
  generatedAt: string;
};
