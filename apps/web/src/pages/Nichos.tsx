import { useState } from "react"

export default function Nichos() {
  const [selectedNicho, setSelectedNicho] = useState<string | null>(null)

  return (
    <div className="min-h-screen w-full bg-neutral-100 text-neutral-900">
      {/* Barra superior institucional */}
      <div className="w-full border-b border-neutral-300 bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-8">
          <span className="text-sm font-semibold tracking-wide text-neutral-800">
            ROBÔ GLOBAL
          </span>
          <span className="ml-3 text-xs text-neutral-500">B1 · Nichos</span>

          <div className="ml-auto text-xs font-medium text-neutral-500">
            Barra de Comandos
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="mx-auto max-w-7xl px-8 py-16">
        {/* Cabeçalho */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
            Nichos de Mercado
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Visualização institucional dos nichos disponíveis para análise.
            Esta etapa apresenta exclusivamente organização e leitura
            estruturada, sem qualquer inferência automatizada.
          </p>
        </header>

        {/* Grid de Nichos */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {NICHOS_BASE.map((nicho) => {
            const ativo = selectedNicho === nicho.id

            return (
              <div
                key={nicho.id}
                onClick={() => setSelectedNicho(nicho.id)}
                className={`rounded-2xl border bg-white p-8 transition
                  ${
                    ativo
                      ? "border-neutral-900 shadow-xl"
                      : "border-neutral-300 hover:shadow-md"
                  }`}
              >
                <div className="mb-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {nicho.categoria}
                </div>

                <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                  {nicho.nome}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {nicho.descricao}
                </p>
              </div>
            )
          })}
        </section>

        {/* Rodapé */}
        <footer className="mt-24 max-w-4xl border-t border-neutral-300 pt-6 text-xs text-neutral-500">
          Bloco B1 — Nichos. Interface institucional sem lógica decisória,
          ranking, sugestão ou leitura de performance.
        </footer>
      </main>
    </div>
  )
}

/* =========================
   Dados base — B1 somente
   ========================= */

const NICHOS_BASE = [
  {
    id: "saude-bem-estar",
    nome: "Saúde e Bem-Estar",
    descricao:
      "Produtos e soluções voltadas à qualidade de vida, hábitos saudáveis e bem-estar físico e mental.",
    categoria: "Lifestyle",
  },
  {
    id: "financas-pessoais",
    nome: "Finanças Pessoais",
    descricao:
      "Educação financeira, organização patrimonial, investimentos e renda.",
    categoria: "Financeiro",
  },
  {
    id: "marketing-digital",
    nome: "Marketing Digital",
    descricao:
      "Aquisição, conversão e retenção de audiência em ambientes digitais.",
    categoria: "Negócios",
  },
  {
    id: "desenvolvimento-pessoal",
    nome: "Desenvolvimento Pessoal",
    descricao:
      "Alta performance, produtividade, mentalidade e crescimento individual.",
    categoria: "Comportamental",
  },
  {
    id: "educacao-online",
    nome: "Educação Online",
    descricao:
      "Cursos, treinamentos e métodos de ensino em ambientes digitais.",
    categoria: "Educação",
  },
  {
    id: "tecnologia-aplicada",
    nome: "Tecnologia Aplicada",
    descricao:
      "Uso prático de tecnologia para automação, eficiência e escala.",
    categoria: "Tecnologia",
  },
]
