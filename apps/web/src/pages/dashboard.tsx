import { useEffect, useState } from "react";

type Status = {
  estado?: string;
  decisao?: string;
};

type Capital = {
  total?: number;
  em_risco?: number;
  disponivel?: number;
  roi?: number;
};

type Escala = {
  permitida?: boolean;
  risco?: string;
};

export default function Dashboard() {
  const [status, setStatus] = useState<Status>({});
  const [capital, setCapital] = useState<Capital>({});
  const [escala, setEscala] = useState<Escala>({});
  const [erro, setErro] = useState(false);

  async function safeFetch(path: string) {
    try {
      const res = await fetch(`https://api.roboglobal.com.br${path}`);
      if (!res.ok) throw new Error("Erro API");
      return await res.json();
    } catch {
      setErro(true);
      return null;
    }
  }

  useEffect(() => {
    async function load() {
      const s = await safeFetch("/status");
      const c = await safeFetch("/capital");
      const e = await safeFetch("/escala");

      if (s) setStatus(s);
      if (c) setCapital(c);
      if (e) setEscala(e);
    }

    load();
    const i = setInterval(load, 15000);
    return () => clearInterval(i);
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>Dashboard Operacional</h1>

      {erro && (
        <div style={{ marginBottom: 20, color: "#f59f00" }}>
          API ainda não respondeu — exibindo modo operacional básico.
        </div>
      )}

      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        <div style={card}>
          <h2>Status do Robô</h2>
          <strong>{status.estado || "Aguardando…"}</strong>
          <p>{status.decisao || "-"}</p>
        </div>

        <div style={card}>
          <h2>Escala</h2>
          <strong>
            {escala.permitida === undefined
              ? "Aguardando…"
              : escala.permitida
              ? "PERMITIDA"
              : "BLOQUEADA"}
          </strong>
          <p>Risco: {escala.risco || "-"}</p>
        </div>

        <div style={card}>
          <h2>Capital Total</h2>
          <strong>{capital.total ?? "—"}</strong>
        </div>

        <div style={card}>
          <h2>Disponível</h2>
          <strong>{capital.disponivel ?? "—"}</strong>
        </div>
      </div>
    </div>
  );
}

const card: React.CSSProperties = {
  background: "#0f172a",
  border: "1px solid #1b2742",
  borderRadius: 12,
  padding: 16,
};
