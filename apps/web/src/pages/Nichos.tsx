// src/pages/Nichos.tsx

import { Link } from "react-router-dom";

export default function Nichos() {
  return (
    <div style={{ width: "100%", backgroundColor: "#fff" }}>
      {/* HEADER / NAV */}
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <strong>Robô Global™</strong>

        <nav style={{ display: "flex", gap: "24px" }}>
          <Link to="/">Início</Link>
          <Link to="/nichos">Nichos</Link>
          <Link to="/contextos">Contextos</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>

        <div style={{ display: "flex", gap: "8px", fontSize: "14px" }}>
          <span>PT</span> | <span>EN</span> | <span>ES</span>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          width: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 16px",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
            Cada pessoa vive um contexto diferente
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "18px" }}>
            O <strong>Robô Global™</strong> organiza padrões de vida, decisões
            recorrentes e situações reais enfrentadas por pessoas comuns.
            Nichos não são rótulos — são <strong>contextos humanos</strong>.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 16px",
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>Nichos não são rótulos</h2>
        <p style={{ maxWidth: "700px", marginBottom: "48px" }}>
          Neste ambiente, nichos representam situações recorrentes onde
          clareza, organização e leitura de cenário fazem diferença antes do
          próximo passo.
        </p>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {/* CARD 1 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Pessoa reorganizando a vida"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "16px" }}>
              Pessoas reorganizando a própria vida
            </h3>
            <p>
              Transições pessoais, recomeços e decisões importantes que exigem
              mais clareza antes do próximo movimento.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
              alt="Famílias lidando com responsabilidades"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "16px" }}>
              Famílias lidando com múltiplas responsabilidades
            </h3>
            <p>
              Organização do cotidiano e escolhas que impactam mais de uma
              pessoa ao mesmo tempo.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Ambiente profissional"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "16px" }}>
              Pessoas em ambientes profissionais
            </h3>
            <p>
              Pressões, decisões estratégicas e necessidade de leitura de
              cenário antes de agir.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #eee",
          padding: "32px 16px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        Robô Global™ by <strong>CREMENI</strong>
      </footer>
    </div>
  );
}
