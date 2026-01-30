// src/data/subnichosMap.ts
// Arquivo central de verdade dos sub-nichos
// B1 → DORES arquitetura de navegação

// ==============================
// Tipos base
// ==============================

export type NicheKey =
  | "saude"
  | "alimentacao"
  | "relacoes"
  | "financeiro"
  | "carreira"
  | "mental"
  | "rotina"
  | "corpo";

export interface SubnichoEntry {
  id: string;         // identificador interno único
  niche: NicheKey;    // nicho pai
  sub: string;        // texto exibido ao usuário
  slug: string;       // rota pública
  dor_key: string;    // referência lógica da dor
}

// ==============================
// Funções internas de segurança
// ==============================

function validateUniqueIds(entries: SubnichoEntry[]) {
  const seen = new Set<string>();

  for (const e of entries) {
    if (seen.has(e.id)) {
      throw new Error(`ID duplicado detectado em subnichosMap: ${e.id}`);
    }
    seen.add(e.id);
  }
}

function validateSlugs(entries: SubnichoEntry[]) {
  const seen = new Set<string>();

  for (const e of entries) {
    if (seen.has(e.slug)) {
      throw new Error(`Slug duplicado detectado em subnichosMap: ${e.slug}`);
    }
    seen.add(e.slug);
  }
}

function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

// ==============================
// Base de dados principal
// ==============================

const RAW_SUBNICHOS: SubnichoEntry[] = [

  // ==========================
  // SAÚDE
  // ==========================

  {
    id: "health_anxiety",
    niche: "saude",
    sub: "Ansiedade",
    slug: "/dores/saude/ansiedade",
    dor_key: "anxiety_core",
  },
  {
    id: "health_insomnia",
    niche: "saude",
    sub: "Insônia",
    slug: "/dores/saude/insonia",
    dor_key: "sleep_disorder_core",
  },
  {
    id: "health_fatigue",
    niche: "saude",
    sub: "Cansaço constante",
    slug: "/dores/saude/cansaco",
    dor_key: "fatigue_core",
  },

  // ==========================
  // ALIMENTAÇÃO
  // ==========================

  {
    id: "food_excess",
    niche: "alimentacao",
    sub: "Excesso alimentar",
    slug: "/dores/alimentacao/excesso",
    dor_key: "food_excess_core",
  },
  {
    id: "food_compulsion",
    niche: "alimentacao",
    sub: "Compulsão",
    slug: "/dores/alimentacao/compulsao",
    dor_key: "food_compulsion_core",
  },

  // ==========================
  // RELAÇÕES
  // ==========================

  {
    id: "rel_conflict",
    niche: "relacoes",
    sub: "Conflitos",
    slug: "/dores/relacoes/conflitos",
    dor_key: "relationship_conflict_core",
  },
  {
    id: "rel_loneliness",
    niche: "relacoes",
    sub: "Solidão",
    slug: "/dores/relacoes/solidao",
    dor_key: "loneliness_core",
  },

  // ==========================
  // FINANCEIRO
  // ==========================

  {
    id: "fin_debt",
    niche: "financeiro",
    sub: "Dívidas",
    slug: "/dores/financeiro/dividas",
    dor_key: "debt_core",
  },
  {
    id: "fin_instability",
    niche: "financeiro",
    sub: "Instabilidade",
    slug: "/dores/financeiro/instabilidade",
    dor_key: "financial_instability_core",
  },

  // ==========================
  // CARREIRA
  // ==========================

  {
    id: "career_stagnation",
    niche: "carreira",
    sub: "Estagnação",
    slug: "/dores/carreira/estagnacao",
    dor_key: "career_stagnation_core",
  },
  {
    id: "career_burnout",
    niche: "carreira",
    sub: "Burnout",
    slug: "/dores/carreira/burnout",
    dor_key: "burnout_core",
  },

  // ==========================
  // MENTAL
  // ==========================

  {
    id: "mental_overthinking",
    niche: "mental",
    sub: "Pensamento excessivo",
    slug: "/dores/mental/overthinking",
    dor_key: "overthinking_core",
  },
  {
    id: "mental_insecurity",
    niche: "mental",
    sub: "Insegurança",
    slug: "/dores/mental/inseguranca",
    dor_key: "insecurity_core",
  },

  // ==========================
  // ROTINA
  // ==========================

  {
    id: "routine_disorganization",
    niche: "rotina",
    sub: "Desorganização",
    slug: "/dores/rotina/desorganizacao",
    dor_key: "routine_chaos_core",
  },

  // ==========================
  // CORPO
  // ==========================

  {
    id: "body_selfimage",
    niche: "corpo",
    sub: "Autoimagem",
    slug: "/dores/corpo/autoimagem",
    dor_key: "self_image_core",
  },

];

// ==============================
// Validação estrutural
// ==============================

validateUniqueIds(RAW_SUBNICHOS);
validateSlugs(RAW_SUBNICHOS);

// ==============================
// Export congelado
// ==============================

export const SUBNICHOS_MAP = freeze(RAW_SUBNICHOS);

// ==============================
// Helpers públicos
// ==============================

export function getSubnichoBySlug(slug: string): SubnichoEntry | undefined {
  return SUBNICHOS_MAP.find(e => e.slug === slug);
}

export function getSubnichosByNiche(niche: NicheKey): SubnichoEntry[] {
  return SUBNICHOS_MAP.filter(e => e.niche === niche);
}

export function listAllSubnichos(): readonly SubnichoEntry[] {
  return SUBNICHOS_MAP;
}
