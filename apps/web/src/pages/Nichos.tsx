// apps/web/src/pages/Nichos.tsx
import { Link } from "react-router-dom";

export default function Nichos() {
  return (
    <main className="min-h-screen w-full bg-white flex justify-center">
      <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-16">
        {/* Bloco de texto institucional */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            Todo contexto humano começa em um ponto.
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Nenhuma decisão nasce do nada. Toda escolha é consequência de um
            cenário, de uma vivência, de um momento específico.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Aqui, você não escolhe um produto, um serviço ou uma promessa. Você
            apenas reconhece o contexto em que está agora.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            O Robô Global não interpreta você. Ele acompanha o ponto em que você
            se encontra.
          </p>
        </div>

        {/* Seleção de contextos */}
        <div className="flex flex-col gap-6">
          <h2 className="text-sm uppercase tracking-widest text-gray-400">
            Selecione um contexto
          </h2>

          <nav className="flex flex-col gap-4">
            <Link
              to="/dores/financeiro"
              className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
            >
              Financeiro
            </Link>

            <Link
              to="/dores/produtividade"
              className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
            >
              Produtividade
            </Link>

            <Link
              to="/dores/relacionamentos"
              className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
            >
              Relacionamentos
            </Link>

            <Link
              to="/dores/saude"
              className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
            >
              Saúde
            </Link>

            <Link
              to="/dores/proposito"
              className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
            >
              Propósito
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
