import { useEffect, useState } from "react";

type Status = {
  estado?: string;
  decisao?: string;
};

type Capital = {
  total?: number;
  disponivel?: number;
};

type Produto = {
  nome: string;
  plataforma: string;
  preco: number;
  comissao: string;
  link_afiliado?: string;
  url_produto?: string;
  imagem?: string;
  nicho?: string;
  dor?: string;
  codigo?: string;
  gul?: string;
};

export default function Dashboard() {
  const [status, setStatus] = useState<Status>({});
  const [capital, setCapital] = useState<Capital>({});
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // ================================
  // B2.4 — FORM MASTER
  // ================================

  const [nome, setNome] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [preco, setPreco] = useState("");
  const [comissao, setComissao] = useState("");
  const [linkAfiliado, setLinkAfiliado] = useState("");
  const [urlProduto, setUrlProduto] = useState("");
  const [imagem, setImagem] = useState("");
  const [nicho, setNicho] = useState("");
  const [dor, setDor] = useState("");
  const [codigo, setCodigo] = useState("");

  // ================================
  // LOAD API
  // ================================

  useEffect(() => {
    async function carregar() {
      try {
        const s = await fetch("https://api.roboglobal.com.br/status");
        const sj = await s.json();
        setStatus(sj);

        const c = await fetch("https://api.roboglobal.com.br/capital");
        const cj = await c.json();
        setCapital(cj);

        const p = await fetch("https://api.roboglobal.com.br/b2/produtos");
        const pj = await p.json();
        setProdutos(pj.produtos || []);
      } catch (e) {
        console.log("API ainda não respondeu");
      }
    }
    carregar();
  }, []);

  // ================================
  // ENVIO MASTER
  // ================================

  async function cadastrar() {
    try {
      const res = await fetch(
        "https://api.roboglobal.com.br/master/produto",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome,
            plataforma,
            preco,
            comissao,
            link_afiliado: linkAfiliado,
            url_produto: urlProduto,
            imagem,
            nicho,
            dor,
            codigo,
          }),
        }
      );

      const data = await res.json();
      alert(data.mensagem || "Produto cadastrado");

      setNome("");
      setPlataforma("");
      setPreco("");
      setComissao("");
      setLinkAfiliado("");
      setUrlProduto("");
      setImagem("");
      setNicho("");
      setDor("");
      setCodigo("");
    } catch (e) {
      alert("Erro ao cadastrar");
    }
  }

  // ================================
  // UI
  // ================================

  return (
    <div style={{ padding: 30 }}>
      <h1>Painel Operacional</h1>

      <div style={{ display: "flex", gap: 20 }}>
        <div>
          <h3>Status do Robô</h3>
          <p>{status.estado || "Aguardando..."}</p>
        </div>

        <div>
          <h3>Capital Total</h3>
          <p>{capital.total ?? "-"}</p>
        </div>

        <div>
          <h3>Disponível</h3>
          <p>{capital.disponivel ?? "-"}</p>
        </div>
      </div>

      {/* ========================================
          B2.4 — CADASTRO MASTER COMPLETO
      ========================================= */}

      <h2 style={{ marginTop: 40 }}>Cadastro MASTER — Produto</h2>

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

      <input
        placeholder="Link Afiliado"
        value={linkAfiliado}
        onChange={(e) => setLinkAfiliado(e.target.value)}
      />
      <br />

      <input
        placeholder="URL Produto"
        value={urlProduto}
        onChange={(e) => setUrlProduto(e.target.value)}
      />
      <br />

      <input
        placeholder="Imagem (URL)"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
      />
      <br />

      <input
        placeholder="Nicho"
        value={nicho}
        onChange={(e) => setNicho(e.target.value)}
      />
      <br />

      <input
        placeholder="Dor"
        value={dor}
        onChange={(e) => setDor(e.target.value)}
      />
      <br />

      <input
        placeholder="Código Produto"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <br />

      <button onClick={cadastrar}>Cadastrar Produto</button>

      {/* ========================================
          LISTAGEM B2
      ========================================= */}

      <h2 style={{ marginTop: 40 }}>Produtos Operacionais (B2)</h2>

      {produtos.length === 0 && <p>Nenhum produto ainda.</p>}

      {produtos.map((p, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <strong>{p.nome}</strong>
          <p>{p.plataforma}</p>
          <p>{p.preco}</p>
          <p>{p.comissao}</p>
          <p>{p.nicho}</p>
          <p>{p.dor}</p>
          <p>{p.gul}</p>
        </div>
      ))}
    </div>
  );
}
