import { useParams, Link } from "react-router-dom";

export default function Dores() {
  const { context } = useParams<{ context: string }>();

  return (
    <main className="min-h-screen w-full bg-white flex justify-center">
      <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            Todo contexto carrega tensões invisíveis.
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Mesmo em cenários aparentemente estáveis, existem forças atuando em
            segundo plano — pressões, dúvidas e necessidades de ajuste.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Reconhecer essas tensões não significa fragilidade. Significa
            maturidade diante da realidade.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Este espaço não oferece respostas imediatas. Ele existe para permitir
            leitura, consciência e preparação para o próximo passo.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-widest text-gray-400">
            Contexto reconhecido
          </span>
          <span className="text-base md:text-lg font-light text-gray-900">
            {context}
          </span>
        </div>

        <Link
          to="/go"
          className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
        >
          Prosseguir
        </Link>
      </section>
    </main>
  );
}
