// src/pages/Dores.tsx
// DORES — Engine mínima preparada para fluxo B1 → B2 → B3
// Arquitetura congelada | Governança ativa | Conteúdo evolutivo

import { useParams, useNavigate } from "react-router-dom";

type DoresParams = {
  niche?: string;
  index?: string;
};

type ProdutoStatus = "RASCUNHO" | "PREPARADO" | "ATIVO" | "SUSPENSO";

export default function Dores() {
  const { niche, index } = useParams<DoresParams>();
  const navigate = useNavigate();

  // ===============================
  // Validação mínima de rota
  // ===============================
  if (!niche || index === undefined || isNaN(Number(index))) {
    return (
      <main className="min-h-screen w-full bg-white flex justify-center">
        <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-12">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            Caminho não reconhecido
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Não foi possível identificar com clareza o contexto que você procura.
          </p>

          <button
            onClick={() => navigate("/nichos")}
            className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
          >
            Voltar para os nichos
          </button>
        </section>
      </main>
    );
  }

  // ===============================
  // ENGINE MÍNIMA — PLACEHOLDER CONTROLADO
  // (conteúdo será externo no futuro)
  // ===============================
  const doresEngine = {
    title: "Todo contexto carrega tensões invisíveis.",
    narrative: [
      "Mesmo em cenários aparentemente estáveis, existem forças atuando em segundo plano — pressões, dúvidas e necessidades de ajuste.",
      "Reconhecer essas tensões não significa fragilidade. Significa maturidade diante da realidade.",
      "Este espaço não oferece respostas imediatas. Ele existe para permitir leitura, consciência e preparação para o próximo passo."
    ],
    produto: {
      status: "PREPARADO" as ProdutoStatus,
      slug: "produto-exemplo" // real no futuro, inativo agora
    }
  };

  const podeProsseguir = doresEngine.produto.status === "ATIVO";

  // ===============================
  // RENDER
  // ===============================
  return (
    <main className="min-h-screen w-full bg-white flex justify-center">
      <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            {doresEngine.title}
          </h1>

          {doresEngine.narrative.map((text, idx) => (
            <p
              key={idx}
              className="text-base md:text-lg font-light leading-relaxed text-gray-700"
            >
              {text}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-widest text-gray-400">
            Contexto reconhecido
          </span>
          <span className="text-base md:text-lg font-light text-gray-900">
            {niche} / {index}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <button
            disabled={!podeProsseguir}
            onClick={() => {
              if (podeProsseguir) {
                navigate(`/go/${doresEngine.produto.slug}`);
              }
            }}
            className={`text-base md:text-lg font-light transition-colors ${
              podeProsseguir
                ? "text-gray-900 hover:text-gray-600"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            Prosseguir
          </button>

          {!podeProsseguir && (
            <span className="text-sm text-gray-400">
              Conteúdo em preparação.
            </span>
          )}
        </div>
      </section>
    </main>
  );
}
