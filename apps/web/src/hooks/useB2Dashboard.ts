import { useEffect, useRef, useState } from "react";
import { getB2Dashboard } from "../services/b2";
import { mapBackendToB2Dashboard } from "../adapters/b2Adapter";
import type { B2DashboardData } from "../types/b2";

const STORAGE_KEY = "b2_dashboard_history";
const POLL_INTERVAL_MS = 60_000;

type Snapshot = {
  at: string;
  data: B2DashboardData;
};

function readHistory(): Snapshot[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Snapshot[]) : [];
  } catch {
    return [];
  }
}

function writeHistory(history: Snapshot[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-2)));
  } catch {}
}

export function useB2Dashboard() {
  const [data, setData] = useState<B2DashboardData | null>(null);
  const [prev, setPrev] = useState<B2DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  const timerRef = useRef<number | null>(null);
  const hasLoadedOnceRef = useRef<boolean>(false);

  async function fetchAndUpdate() {
    try {
      const payload = await getB2Dashboard();
      const mapped = mapBackendToB2Dashboard(payload);

      const history = readHistory();
      const last = history[history.length - 1]?.data ?? null;

      setPrev(last);
      setData(mapped);

      writeHistory([
        ...history,
        { at: new Date().toISOString(), data: mapped },
      ]);

      setLastUpdate(new Date().toISOString());
      setError(null);

      // CONSOLIDA loading na primeira resposta válida
      if (!hasLoadedOnceRef.current) {
        setLoading(false);
        hasLoadedOnceRef.current = true;
      }
    } catch (e) {
      setError(String(e));
      // se ainda não carregou nada, mantém loading
      if (!hasLoadedOnceRef.current) setLoading(true);
    }
  }

  useEffect(() => {
    // primeira carga
    fetchAndUpdate();

    // polling
    timerRef.current = window.setInterval(fetchAndUpdate, POLL_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return {
    data,
    prev,
    error,
    loading,
    meta: {
      lastUpdate,
      source: "/status",
      intervalMs: POLL_INTERVAL_MS,
    },
  };
}
