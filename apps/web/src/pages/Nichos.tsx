// apps/web/src/pages/Nichos.tsx

import React from "react";

export default function Nichos() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "64px 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#0f172a",
      }}
    >
      <section style={{ marginBottom: "64px" }}>
        <h1
          style={{
            fontSize: "40px",
            lineHeight: "1.2",
            marginBottom: "16px",
          }}
        >
          Cada pessoa vive um contexto diferente
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "720px", color: "#334155" }}>
          O Robô Global observa padrões de vida, necessidades recorrentes e
          situações reais enfrentadas por pessoas comuns. Aqui, nichos não são
          rótulos — são contextos humanos.
        </p>
      </section>

      <section>
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "16px",
          }}
        >
          Contextos observados
        </h2>

        <p style={{ fontSize: "16px", maxWidth: "720px", color: "#475569" }}>
          Situações recorrentes onde clareza, organização e leitura de cenário
          fazem diferença antes do próximo passo.
        </p>

        <ul style={{ marginTop: "32px", lineHeight: "1.8" }}>
          <li>Pessoas reorganizando a própria vida</li>
          <li>Famílias lidando com múltiplas responsabilidades</li>
          <li>Pessoas em ambientes profissionais exigentes</li>
          <li>Pessoas em fases de transição pessoal</li>
        </ul>
      </section>
    </main>
  );
}
