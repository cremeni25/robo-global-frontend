import type { DoresNavigationContext } from "../contracts/navigation";
import type { SubnichoEntry } from "../data/subnichosMap";
import type { NavigateFunction } from "react-router-dom";

// ==============================
// Builder de contexto
// ==============================

export function buildDoresContext(entry: SubnichoEntry): DoresNavigationContext {
  return {
    niche: entry.niche,
    subId: entry.id,
    dorKey: entry.dor_key,
    timestamp: Date.now(),
    source: "B1",
  };
}

// ==============================
// Navegação segura
// ==============================

export function navigateToDores(
  navigate: NavigateFunction,
  entry: SubnichoEntry
) {
  const ctx = buildDoresContext(entry);

  navigate(entry.slug, {
    state: ctx,
  });
}
