// Tipagens base da B2 (conceitual)

export type B2User = {
  id: string;
  email: string;
};

export type InterpretativeLevel =
  | 'low'
  | 'medium'
  | 'high';

export type AssertivenessLevel =
  | 'consistent'
  | 'stable'
  | 'promising';
