// Nichos.tsx — B1 (Final)
// Arquitetura baseada em Home.tsx
// Escopo: apenas visual + estrutura B1 (Nichos)

import { useState } from "react"
import { CommandBar } from "@/components/CommandBar"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Nichos() {
  const [selectedNicho, setSelectedNicho] = useState<string | null>(null)

  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900">
      {/* Barra de comandos — obrigatória */}
      <CommandBar />

      {/* Container central — mesma lógica estrutural do Home */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Cabeçalho */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Nichos de Mercado
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            Visualização institucional dos nichos atualmente disponíveis para
            análise. Esta etapa apresenta apenas organização e leitura
            estruturada.
          </p>
        </header>

        <Separator className="mb-8" />

        {/* Grid principal */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NICHOS_BASE.map((nicho) => (
            <Card
              key={nicho.id}
              onClick={() => setSelectedNicho(nicho.id)}
              className={`cursor-pointer rounded-xl border p-6 transition
                ${
                  selectedNicho === nicho.id
                    ? "border-neutral-900 bg-white shadow-sm"
                    : "border-neutral-200 bg-white hover:border-neutral-400"
                }`}
            >
              <h2 className="text-lg font-medium tracking-tight">
                {nicho.nome}
              </h2>

              <p className="mt-2 text-sm text-neutral-600">
                {nicho.descricao}
              </p>

              <div className="mt-4 text-xs font-medium text-neutral-500">
                Categoria: {nicho.categoria}
              </div>
            </Card>
          ))}
        </section>

        {/* Rodapé institucional */}
        <footer className="mt-14 max-w-3xl text-xs text-neutral-500">
          Esta visualização faz parte do Bloco B1. Nenhuma inferência,
          recomendação ou decisão automatizada ocorre nesta etapa.
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
    nome: "Saúde & Bem-Estar",
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
