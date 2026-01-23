export default function Nichos() {
  return (
    <main style={{ width: "100%", backgroundColor: "#ffffff" }}>
      {/* HERO */}
      <section
        style={{
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.55)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "110px 24px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 600,
              marginBottom: "16px",
              maxWidth: "720px",
            }}
          >
            Cada pessoa vive um contexto diferente
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "640px",
            }}
          >
            O <strong>Robô Global™</strong> organiza padrões de vida, decisões
            recorrentes e situações reais enfrentadas por pessoas comuns.
          </p>
        </div>
      </section>

      {/* BLOCO EXPLICATIVO */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Nichos não são rótulos
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              maxWidth: "720px",
            }}
          >
            Neste ambiente, nichos são tratados como{" "}
            <strong>contextos humanos</strong> — situações recorrentes onde
            clareza, organização e leitura de cenário fazem diferença antes do
            próximo passo.
          </p>
        </div>
      </section>

      {/* GRID DE CONTEXTOS */}
      <section style={{ padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Pessoa reorganizando a própria vida"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Pessoas reorganizando a própria vida
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Transições, recomeços e decisões importantes que exigem mais
                clareza.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
              alt="Família lidando com responsabilidades"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Famílias lidando com múltiplas responsabilidades
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Organização do cotidiano e escolhas que impactam mais de uma
                pessoa.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Ambiente profissional"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Pessoas em ambientes profissionais
              </h3>
              <p style={{ lineHeight: 1.6 }}>
                Pressões, decisões estratégicas e necessidade de leitura de
                cenário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO DE TRANSIÇÃO */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "72px 24px",
          marginTop: "72px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Entender o contexto muda a forma de decidir
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
            O <strong>Robô Global™</strong> existe para ajudar a organizar
            informações, reduzir ruídos e apoiar decisões mais conscientes no
            cotidiano.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "32px 24px",
          textAlign: "center",
          fontSize: "14px",
          color: "#475569",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        Robô Global™ by CREMENIO
      </footer>
    </main>
  );
}
