// apps/web/src/pages/Nichos.tsx

export default function Nichos() {
  return (
    <main className="w-full">

      {/* HERO — mesmo padrão do Home */}
      <section className="relative w-full bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Cada pessoa vive um contexto diferente
            </h1>

            <p className="mt-6 text-lg text-neutral-200 max-w-xl">
              O <strong>Robô Global™</strong> observa padrões de vida, decisões recorrentes
              e situações reais enfrentadas por pessoas comuns.
              Aqui, nichos não são rótulos — são <strong>contextos humanos</strong>.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Pessoas em reunião analisando contextos"
              className="rounded-xl object-cover w-full h-[360px]"
            />
          </div>

        </div>
      </section>

      {/* CONTEXTOS OBSERVADOS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-neutral-900">
          Contextos observados
        </h2>

        <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
          Situações recorrentes onde clareza, organização e leitura de cenário
          fazem diferença antes do próximo passo.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Pessoa reorganizando a própria vida"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Pessoas reorganizando a própria vida
              </h3>
              <p className="mt-3 text-neutral-600">
                Mudanças pessoais, recomeços, transições de fase e decisões
                que exigem mais clareza antes do próximo movimento.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
              alt="Família lidando com responsabilidades"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Famílias lidando com múltiplas responsabilidades
              </h3>
              <p className="mt-3 text-neutral-600">
                Organização do dia a dia, equilíbrio entre obrigações
                e decisões que impactam mais de uma pessoa ao mesmo tempo.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Pessoas em ambiente profissional"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Pessoas em ambientes profissionais
              </h3>
              <p className="mt-3 text-neutral-600">
                Pressão por desempenho, escolhas estratégicas e necessidade
                de entender melhor o cenário antes de agir.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            O <strong>Robô Global™</strong> não oferece respostas prontas.
            Ele existe para ajudar a enxergar o contexto com mais clareza,
            reduzindo ruídos, pressões invisíveis e decisões precipitadas.
          </p>
        </div>
      </section>

      {/* FOOTER SIMPLES */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-neutral-500">
          Robô Global™ by CREMENIO
        </div>
      </footer>

    </main>
  );
}
