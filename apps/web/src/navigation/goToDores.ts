import { DoresNavigationContext } from "../contracts/navigation";
import { SubnichoEntry } from "../data/subnichosMap";
import { useRouter } from "next/router";

export function buildDoresContext(entry: SubnichoEntry): DoresNavigationContext {
  return {
    niche: entry.niche,
    subId: entry.id,
    dorKey: entry.dor_key,
    timestamp: Date.now(),
    source: "B1",
  };
}

export function navigateToDores(router: ReturnType<typeof useRouter>, entry: SubnichoEntry) {
  const ctx = buildDoresContext(entry);

  router.push({
    pathname: entry.slug,
    query: { ctx: JSON.stringify(ctx) },
  });
}
