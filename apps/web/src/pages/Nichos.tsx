import React from "react";

export default function Nichos() {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      {/* CONTAINER CENTRAL (PADRÃO FIDELITY) */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "64px 24px",
          boxSizing: "border-box",
        }}
      >
        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
              Cada pessoa vive um contexto diferente
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
              O Robô Global observa padrões de vida, necessidades recorrentes e
              situações reais enfrentadas por pessoas comuns. Aqui, nichos não
              são rótulos — são <strong>contextos humanos</strong>.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Pessoas conversando"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </section>

        {/* TÍTULO */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
            Contextos observados
          </h2>
          <p style={{ fontSize: "16px", color: "#444" }}>
            Situações recorrentes onde clareza, organização e leitura de cenário
            fazem diferença antes do próximo passo.
          </p>
        </section>

        {/* GRID DE NICHOS — ESTILO FIDELITY */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Pessoa refletindo"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />
            <h3>Pessoas reorganizando a própria vida</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.5 }}>
              Mudanças pessoais, recomeços e decisões que exigem mais clareza
              antes do próximo passo.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Família junta"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "12px",
