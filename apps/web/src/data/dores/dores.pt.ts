// Fonte externa inicial de DORES — B1
// Estado: implementação mínima segura

export type DorProductStatus =
  | "RASCUNHO"
  | "PREPARADO"
  | "ATIVO"
  | "SUSPENSO";

export interface DorData {
  id: string;
  niche: string;
  title: string;
  narrative: string;
  ctaText: string;
  productStatus: DorProductStatus;
}

export const doresPT: DorData[] = [
  {
    id: "dor-pt-001",
    niche: "emagrecimento",
    title: "Você faz tudo certo, mas o peso não baixa",
    narrative:
      "Você corta açúcar, tenta manter a rotina, começa a semana motivado… mas o resultado nunca acompanha o esforço. Isso não é falta de disciplina — é desgaste emocional acumulado.",
    ctaText: "Quero entender por que isso acontece",
    productStatus: "PREPARADO",
  },
];
