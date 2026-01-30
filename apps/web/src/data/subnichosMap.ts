export type NicheKey =
  | "health"
  | "food"
  | "education"
  | "relationships"
  | "technology"
  | "work"
  | "finance";

export interface SubnichoEntry {
  id: string;
  niche: NicheKey;
  dictKey: string; // chave do i18n
  slug: string;
  dor_key: string;
}

const RAW_SUBNICHOS: SubnichoEntry[] = [

  { id: "health_1", niche: "health", dictKey: "health.sub1", slug: "/dores/health/1", dor_key: "health_1" },
  { id: "health_2", niche: "health", dictKey: "health.sub2", slug: "/dores/health/2", dor_key: "health_2" },
  { id: "health_3", niche: "health", dictKey: "health.sub3", slug: "/dores/health/3", dor_key: "health_3" },

  { id: "food_1", niche: "food", dictKey: "food.sub1", slug: "/dores/food/1", dor_key: "food_1" },
  { id: "food_2", niche: "food", dictKey: "food.sub2", slug: "/dores/food/2", dor_key: "food_2" },
  { id: "food_3", niche: "food", dictKey: "food.sub3", slug: "/dores/food/3", dor_key: "food_3" },

  { id: "education_1", niche: "education", dictKey: "education.sub1", slug: "/dores/education/1", dor_key: "education_1" },
  { id: "education_2", niche: "education", dictKey: "education.sub2", slug: "/dores/education/2", dor_key: "education_2" },
  { id: "education_3", niche: "education", dictKey: "education.sub3", slug: "/dores/education/3", dor_key: "education_3" },

  { id: "relationships_1", niche: "relationships", dictKey: "relationships.sub1", slug: "/dores/relationships/1", dor_key: "relationships_1" },
  { id: "relationships_2", niche: "relationships", dictKey: "relationships.sub2", slug: "/dores/relationships/2", dor_key: "relationships_2" },
  { id: "relationships_3", niche: "relationships", dictKey: "relationships.sub3", slug: "/dores/relationships/3", dor_key: "relationships_3" },

  { id: "technology_1", niche: "technology", dictKey: "technology.sub1", slug: "/dores/technology/1", dor_key: "technology_1" },
  { id: "technology_2", niche: "technology", dictKey: "technology.sub2", slug: "/dores/technology/2", dor_key: "technology_2" },
  { id: "technology_3", niche: "technology", dictKey: "technology.sub3", slug: "/dores/technology/3", dor_key: "technology_3" },

  { id: "work_1", niche: "work", dictKey: "work.sub1", slug: "/dores/work/1", dor_key: "work_1" },
  { id: "work_2", niche: "work", dictKey: "work.sub2", slug: "/dores/work/2", dor_key: "work_2" },
  { id: "work_3", niche: "work", dictKey: "work.sub3", slug: "/dores/work/3", dor_key: "work_3" },

  { id: "finance_1", niche: "finance", dictKey: "finance.sub1", slug: "/dores/finance/1", dor_key: "finance_1" },
  { id: "finance_2", niche: "finance", dictKey: "finance.sub2", slug: "/dores/finance/2", dor_key: "finance_2" },
  { id: "finance_3", niche: "finance", dictKey: "finance.sub3", slug: "/dores/finance/3", dor_key: "finance_3" },

];

export function getSubnichosByNiche(niche: NicheKey) {
  return RAW_SUBNICHOS.filter(e => e.niche === niche);
}
