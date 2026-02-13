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

      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        }}
      >
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

      {/* ========================= */}
      {/* B2 — FORMULÁRIO MASTER */}
      {/* ========================= */}

      <MasterCadastroProduto />
    </div>
  );
}

const card: React.CSSProperties = {
  background: "#0f172a",
  border: "1px solid #1b2742",
  borderRadius: 12,
  padding: 16,
};

function MasterCadastroProduto() {
  const [nome, setNome] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [preco, setPreco] = useState("");
  const [comissao, setComissao] = useState("");

  async function enviar() {
    try {
      await fetch("https://api.roboglobal.com.br/master/produto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          plataforma,
          preco,
          comissao,
        }),
      });

      alert("Produto cadastrado com sucesso");
      setNome("");
      setPlataforma("");
      setPreco("");
      setComissao("");
    } catch {
      alert("Erro ao enviar produto");
    }
  }

  return (
    <div style={{ marginTop: 40 }}>
      <h2>Cadastro MASTER — Produto</h2>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />

      <input
        placeholder="Plataforma"
        value={plataforma}
        onChange={(e) => setPlataforma(e.target.value)}
      />
      <br />

      <input
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <br />

      <input
        placeholder="Comissão"
        value={comissao}
        onChange={(e) => setComissao(e.target.value)}
      />
      <br />

      <button onClick={enviar}>Cadastrar Produto</button>
    </div>
  );
}

// ======================================================
// B2.3 — LISTAGEM OPERACIONAL DE PRODUTOS
// ADIÇÃO SEGURA — NÃO ALTERA NADA EXISTENTE
// ======================================================

function ListaProdutosB2() {

  const [produtos, setProdutos] = useState<any[]>([]);

  useEffect(() => {
    fetch("/b2/produtos")
      .then(r => r.json())
      .then(data => setProdutos(data))
      .catch(() => {});
  }, []);

  return (
    <div style={{ marginTop: 40 }}>
      <h2>Produtos Operacionais (B2)</h2>

      {produtos.length === 0 && (
        <p>Nenhum produto ainda.</p>
      )}

      {produtos.map((p, i) => (
        <div key={i} style={{
          border: "1px solid #222",
          padding: 12,
          marginBottom: 12,
          borderRadius: 8
        }}>
          <strong>{p.nome}</strong><br/>
          Plataforma: {p.plataforma}<br/>
          Nicho: {p.nicho || "-"}<br/>
          Dor: {p.dor || "-"}<br/>
          Comissão: {p.comissao}%<br/>
          GUL: {p.gul}
        </div>
      ))}
    </div>
  );
}

export function RenderProdutosB2() {
  return <ListaProdutosB2 />;
}
