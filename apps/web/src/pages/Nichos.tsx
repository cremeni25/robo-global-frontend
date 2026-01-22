import "../styles/pages.css";

export default function Nichos() {
  return (
    <div className="page-root">
      {/* HEADER FIXO (arquitetura tipo Fidelity) */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">Robô Global</div>

          <nav className="nav">
            <a href="/">Início</a>
            <a href="/#/nichos" className="active">Nichos</a>
            <a href="/#/contextos">Contextos</a>
            <a href="/#/sobre">Sobre</a>
          </nav>

          <div className="actions">
            <select aria-label="Idioma">
              <option>PT</option>
              <option>EN</option>
              <option>ES</option>
            </select>
          </div>
        </div>
      </header>

      {/* CONTEÚDO CENTRAL */}
      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <h1>Cada pessoa vive um contexto diferente</h1>
            <p>
              O Robô Global observa padrões de vida, necessidades recorrentes e
              situações reais enfrentadas por pessoas comuns.
              <br />
              Aqui, nichos não são rótulos — são <strong>contextos humanos</strong>.
            </p>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Pessoas em conversa e tomada de decisão"
            />
          </div>
        </section>

        {/* INTRO */}
        <section className="section-intro">
          <h2>Contextos observados</h2>
          <p>
            Situações recorrentes onde clareza, organização e leitura de cenário
            fazem diferença antes do próximo passo.
          </p>
        </section>

        {/* GRID DE CONTEXTOS (CARDS – PADRÃO FIDELITY) */}
        <section className="cards-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Pessoa refletindo sobre mudanças pessoais"
            />
            <h3>Pessoas reorganizando a própria vida</h3>
            <p>
              Mudanças pessoais, recomeços e decisões que exigem mais clareza
              antes do próximo passo.
            </p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Família lidando com responsabilidades"
            />
            <h3>Famílias lidando com múltiplas responsabilidades</h3>
            <p>
              Organização do dia a dia e equilíbrio entre decisões que impactam
              mais de uma pessoa ao mesmo tempo.
            </p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Pessoas trabalhando em ambiente profissional"
            />
            <h3>Pessoas em ambientes profissionais</h3>
            <p>
              Pressão por desempenho, escolhas estratégicas e necessidade de
              compreender melhor o cenário antes de agir.
            </p>
          </div>
        </section>

        {/* FECHAMENTO */}
        <section className="closing">
          <p>
            O Robô Global não entrega respostas prontas.
            <br />
            Ele existe para <strong>reduzir ruído</strong>, organizar informações
            e apoiar decisões mais conscientes — respeitando o tempo,
            o contexto e a realidade de cada pessoa.
          </p>
        </section>
      </main>
    </div>
  );
}
