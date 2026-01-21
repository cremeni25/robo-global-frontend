import { Link } from "react-router-dom";

export default function Nichos() {
  return (
    <main className="min-h-screen w-full bg-white flex justify-center">
      <section className="w-full max-w-3xl px-6 py-24 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">
            Todo caminho começa com contexto.
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Nenhuma decisão surge isolada. Toda escolha é consequência de um
            cenário específico, moldado por circunstâncias, objetivos e
            limitações próprias de cada momento.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            Aqui, não se escolhe um produto, um serviço ou uma promessa.
            Reconhece-se apenas o contexto que melhor descreve a situação atual.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            O Robô Global não interpreta intenções. Ele respeita o ponto de
            partida.
          </p>
        </div>

        <nav className="flex flex-col gap-4">
          <Link to="/dores/financeiro" className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors">
            Financeiro
          </Link>
          <Link to="/dores/produtividade" className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors">
            Produtividade
          </Link>
          <Link to="/dores/relacionamentos" className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors">
            Relacionamentos
          </Link>
          <Link to="/dores/saude" className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors">
            Saúde
          </Link>
          <Link to="/dores/proposito" className="text-base md:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors">
            Propósito
          </Link>
        </nav>
      </section>
    </main>
  );
}
