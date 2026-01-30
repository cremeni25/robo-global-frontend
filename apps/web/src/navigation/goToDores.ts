import type { NavigateFunction } from "react-router-dom";

export interface DoresClickContext {
  niche: string;
  index: number;
  timestamp: number;
  source: "B1";
}

export function navigateToDores(
  navigate: NavigateFunction,
  payload: { niche: string; index: number }
) {
  const ctx: DoresClickContext = {
    niche: payload.niche,
    index: payload.index,
    timestamp: Date.now(),
    source: "B1",
  };

  navigate(`/dores/${payload.niche}/${payload.index}`, {
    state: ctx,
  });
}
