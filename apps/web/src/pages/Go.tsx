// apps/web/src/pages/Go.tsx
import { Link } from "react-router-dom";

export default function Go() {
  return (
    <main className="min-h-screen w-full bg-white flex justify-center">
      <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-16">
        {/* Bloco institucional */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            Nem toda continuidade exige pressa.
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Avançar não significa acelerar. Significa apenas manter-se em
            movimento consciente, respeitando o tempo interno de cada processo.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Este ponto não representa uma conclusão. Ele marca apenas a
            disposição de seguir atento ao que se revela a partir daqui.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            O Robô Global não conduz. Ele acompanha.
          </p>
        </div>

        {/* Retorno */}
        <div className="pt-8">
          <Link
            to="/"
            className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
          >
            Retornar ao início
          </Link>
        </div>
      </section>
    </main>
  );
}
