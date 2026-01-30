// src/data/subnichosMap.ts
// Arquivo central blindado B1 → DORES

// ==============================
// Niches oficiais do sistema
// ==============================

export type NicheKey =
  | "health"
  | "food"
  | "education"
  | "relationships"
  | "technology"
  | "work"
  | "finance";

// ==============================
// Contrato de sub-nicho
// ==============================

export interface SubnichoEntry {
  id: string;
  niche: NicheKey;
  sub: string;
  slug: string;
  dor_key: string;
}

// ==============================
// Assets obrigatórios por niche
// ==============================

export const NICHE_ASSET_MAP: Record<NicheKey, string> = {
  health: "health.jpg",
  food: "food.jpg",
  education: "education.jpg",
  relationships: "relationships.jpg",
  technology: "tech.jpg",
  work: "work.jpg",
  finance: "finance.jpg",
};

// ==============================
// Validações internas
// ==============================

function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

function validateUnique(entries: SubnichoEntry[]) {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const e of entries) {
    if (ids.has(e.id)) throw new Error(`ID duplicado: ${e.id}`);
    if (slugs.has(e.slug)) throw new Error(`Slug duplicado: ${e.slug}`);

    ids.add(e.id);
    slugs.add(e.slug);
  }
}

// ==============================
// Sub-nichos reais
// ==============================

const RAW_SUBNICHOS: SubnichoEntry[] = [

  // HEALTH
  {
    id: "health_routine",
    niche: "health",
    sub: "Daily routines affecting well-being",
    slug: "/dores/health/routine",
    dor_key: "health_routine_core",
  },
  {
    id: "health_selfcare",
    niche: "health",
    sub: "Personal care pushed aside",
    slug: "/dores/health/selfcare",
    dor_key: "health_selfcare_core",
  },

  // FOOD
  {
    id: "food_patterns",
    niche: "food",
    sub: "Disorganized eating patterns",
    slug: "/dores/food/patterns",
    dor_key: "food_patterns_core",
  },

  // EDUCATION
  {
    id: "education_skills",
    niche: "education",
    sub: "Outdated or lagging skills",
    slug: "/dores/education/skills",
    dor_key: "education_skills_core",
  },

  // RELATIONSHIPS
  {
    id: "relationships_conflict",
    niche: "relationships",
    sub: "Energy-draining relationships",
    slug: "/dores/relationships/conflict",
    dor_key: "relationships_conflict_core",
  },

  // TECHNOLOGY
  {
    id: "technology_overload",
    niche: "technology",
    sub: "Digital overload",
    slug: "/dores/technology/overload",
    dor_key: "technology_overload_core",
  },

  // WORK
  {
    id: "work_stagnation",
    niche: "work",
    sub: "Career stagnation",
    slug: "/dores/work/stagnation",
    dor_key: "work_stagnation_core",
  },

  // FINANCE
  {
    id: "finance_pressure",
    niche: "finance",
    sub: "Constant financial pressure",
    slug: "/dores/finance/pressure",
    dor_key: "finance_pressure_core",
  },

];

validateUnique(RAW_SUBNICHOS);

export const SUBNICHOS_MAP = freeze(RAW_SUBNICHOS);

// ==============================
// Helpers públicos
// ==============================

export function getSubnichoBySlug(slug: string) {
  return SUBNICHOS_MAP.find(e => e.slug === slug);
}

export function getSubnichosByNiche(niche: NicheKey) {
  return SUBNICHOS_MAP.filter(e => e.niche === niche);
}

export function listAllSubnichos() {
  return SUBNICHOS_MAP;
}

export function getNicheAsset(niche: NicheKey) {
  return NICHE_ASSET_MAP[niche];
}
