// apps/web/_future/b2/services/b2Reader.ts

import {
  B2Snapshot,
  InterpretativeLevel,
  AssertivenessLevel,
} from '../types/b2';

/**
 * Fonte soberana de leitura da B2
 * (mock interpretativo — sem backend real)
 */
export function getB2Snapshot(): B2Snapshot {
  return {
    performance: {
      description:
        'Evolução estável da atuação ao longo dos ciclos recentes.',
      period: 'últimos 90 dias',
    },
    highDemandNichos: [
      { name: 'Educação Financeira', demand: 'high' },
      { name: 'Saúde e Performance', demand: 'medium' },
      { name: 'Desenvolvimento Profissional', demand: 'high' },
    ],
    highAssertivenessNichos: [
      { name: 'Marketing Digital', level: 'consistent' },
      { name: 'Produtividade', level: 'stable' },
      { name: 'Tecnologia Aplicada', level: 'promising' },
    ],
    generatedAt: new Date().toISOString(),
  };
}
