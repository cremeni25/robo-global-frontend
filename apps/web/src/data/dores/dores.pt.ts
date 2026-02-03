// src/data/dores/dores.pt.ts
// CENÁRIO REAL — TESTE CONTROLADO (1 dor / 1 produto / ATIVO)

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
  productSlug: string;
}

export const doresPT: DorData[] = [
  {
    id: "dor-real-001",
    niche: "emagrecimento",
    title: "Você está fazendo esforço demais para resultados de menos",
    narrative:
      "Quando disciplina não vira resultado, o problema não é força de vontade. É método, contexto e direção. Este é o ponto de virada.",
    ctaText: "Prosseguir",
    productStatus: "ATIVO",
    productSlug: "info-produto-real-001",
  },
];
