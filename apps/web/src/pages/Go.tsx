import { Link } from "react-router-dom";

export default function Go() {
  return (
    <main className="min-h-screen w-full bg-white flex justify-center">
      <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            Avançar exige clareza, não pressa.
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Seguir adiante não é acelerar. É manter o movimento com atenção ao
            que se revela ao longo do caminho.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Este ponto não representa uma conclusão, nem uma decisão final. Ele
            marca apenas a disposição de continuar com mais lucidez.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            O Robô Global não conduz escolhas. Ele sustenta a transição com
            responsabilidade institucional.
          </p>
        </div>

        <Link
          to="/"
          className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
        >
          Retornar ao início
        </Link>
      </section>
    </main>
  );
}
