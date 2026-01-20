// apps/web/src/pages/Dores.tsx
import { useParams, Link } from "react-router-dom";

export default function Dores() {
  const { context } = useParams<{ context: string }>();

  return (
    <main className="min-h-screen w-full bg-white flex justify-center">
      <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-16">
        {/* Bloco institucional */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            Todo contexto carrega tensões invisíveis.
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Nenhuma situação humana é neutra. Mesmo quando tudo parece estável,
            existem forças internas atuando, pressionando, pedindo ajuste.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Reconhecer essas tensões não é admitir fraqueza. É apenas aceitar a
            realidade como ela se apresenta no momento.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Este espaço não busca solução imediata. Ele existe para permitir
            consciência.
          </p>
        </div>

        {/* Contexto atual */}
        <div className="flex flex-col gap-6">
          <h2 className="text-sm uppercase tracking-widest text-gray-400">
            Contexto reconhecido
          </h2>

          <p className="text-base md:text-lg font-light text-gray-900">
            {context}
          </p>
        </div>

        {/* Transição */}
        <div className="pt-8">
          <Link
            to="/go"
            className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
          >
            Prosseguir
          </Link>
        </div>
      </section>
    </main>
  );
}
