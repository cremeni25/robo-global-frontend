import "../styles/pages.css";

export default function Nichos() {
  return (
    <main className="page-container">
      {/* HERO */}
      <section className="hero hero-split">
        <div className="hero-text">
          <h1>Cada pessoa vive um contexto diferente</h1>
          <p>
            O Robô Global observa padrões de vida, necessidades recorrentes e
            situações reais enfrentadas por pessoas comuns. Aqui, nichos não
            são rótulos — são <strong>contextos humanos</strong>.
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Pessoas analisando informações juntas"
          />
        </div>
      </section>

      {/* SEÇÃO INTRO */}
      <section className="section">
        <h2>Contextos observados</h2>
        <p className="section-subtitle">
          Situações recorrentes onde clareza, organização e leitura de cenário
          fazem diferença antes do próximo passo.
        </p>
      </section>

      {/* BLOCO 1 */}
      <section className="content-block">
        <div className="content-image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Pessoa refletindo sobre mudanças pessoais"
          />
        </div>

        <div className="content-text">
          <h3>Pessoas reorganizando a própria vida</h3>
          <p>
            Mudanças pessoais, recomeços, transições de fase e decisões que
            exigem mais clareza antes do próximo passo.
          </p>
        </div>
      </section>

      {/* BLOCO 2 */}
      <section className="content-block reverse">
        <div className="content-image">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="Família conversando em casa"
          />
        </div>

        <div className="content-text">
          <h3>Famílias lidando com múltiplas responsabilidades</h3>
          <p>
            Organização do dia a dia, equilíbrio entre obrigações e decisões que
            impactam mais de uma pessoa ao mesmo tempo.
          </p>
        </div>
      </section>

      {/* BLOCO 3 */}
      <section className="content-block">
        <div className="content-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Pessoas trabalhando em equipe"
          />
        </div>

        <div className="content-text">
          <h3>Pessoas em ambientes profissionais</h3>
          <p>
            Pressão por desempenho, escolhas estratégicas e necessidade de
            compreender melhor o cenário antes de agir.
          </p>
        </div>
      </section>

      {/* BLOCO 4 */}
      <section className="content-block reverse">
        <div className="content-image">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            alt="Pessoa madura observando o ambiente"
          />
        </div>

        <div className="content-text">
          <h3>Pessoas em fases mais maduras da vida</h3>
          <p>
            Reflexão, cautela, necessidade de segurança e compreensão antes de
            qualquer escolha relevante.
          </p>
        </div>
      </section>

      {/* ENCERRAMENTO */}
      <section className="section section-highlight">
        <p>
          O Robô Global não oferece respostas prontas. Ele existe para{" "}
          <strong>ajudar a enxergar o contexto com mais clareza</strong>,
          reduzindo ruídos, pressões invisíveis e decisões precipitadas.
        </p>
      </section>
    </main>
  );
}
