// apps/web/src/pages/Nichos.tsx

import React from "react";

export default function Nichos() {
  return (
    <main
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      {/* HERO */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#f5f7fa",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "42px",
                lineHeight: "1.2",
                color: "#0b1f33",
                marginBottom: "20px",
              }}
            >
              Cada pessoa vive um contexto diferente
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5d73",
                lineHeight: "1.6",
                maxWidth: "520px",
              }}
            >
              O Robô Global observa padrões de vida, necessidades recorrentes e
              situações reais enfrentadas por pessoas comuns. Aqui, nichos não
              são rótulos — são <strong>contextos humanos</strong>.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Pessoas conversando e tomando decisões juntas"
              style={{
                width: "100%",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          padding: "72px 24px",
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
              fontSize: "32px",
              color: "#0b1f33",
              marginBottom: "16px",
            }}
          >
            Contextos observados
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#4a5d73",
              lineHeight: "1.6",
            }}
          >
            O Robô Global não oferece respostas prontas. Ele existe para ajudar a
            enxergar o contexto com mais clareza, reduzindo ruídos, pressões
            invisíveis e decisões precipitadas.
          </p>
        </div>
      </section>

      {/* NICHOS */}
      <section
        style={{
          padding: "40px 24px 96px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gap: "64px",
          }}
        >
          {/* BLOCO 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Pessoa refletindo sobre mudanças de vida"
              style={{
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />

            <div>
              <h3
                style={{
                  fontSize: "26px",
                  color: "#0b1f33",
                  marginBottom: "12px",
                }}
              >
                Pessoas reorganizando a própria vida
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5d73",
                  lineHeight: "1.6",
                }}
              >
                Mudanças pessoais, recomeços, transições de fase e decisões que
                exigem mais clareza antes do próximo passo.
              </p>
            </div>
          </div>

          {/* BLOCO 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "26px",
                  color: "#0b1f33",
                  marginBottom: "12px",
                }}
              >
                Famílias lidando com múltiplas decisões
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5d73",
                  lineHeight: "1.6",
                }}
              >
                Organização da rotina, responsabilidades cruzadas, escolhas que
                impactam mais de uma pessoa ao mesmo tempo.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Família conversando em casa"
              style={{
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* BLOCO 3 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
              alt="Pessoas em ambiente profissional colaborando"
              style={{
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />

            <div>
              <h3
                style={{
                  fontSize: "26px",
                  color: "#0b1f33",
                  marginBottom: "12px",
                }}
              >
                Pessoas em ambientes profissionais
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5d73",
                  lineHeight: "1.6",
                }}
              >
                Pressões de decisão, responsabilidades, escolhas estratégicas e
                necessidade de leitura mais ampla do cenário.
              </p>
            </div>
          </div>

          {/* BLOCO 4 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "26px",
                  color: "#0b1f33",
                  marginBottom: "12px",
                }}
              >
                Pessoas em fases mais maduras da vida
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5d73",
                  lineHeight: "1.6",
                }}
              >
                Reflexão, cautela, necessidade de segurança e compreensão antes
                de qualquer escolha relevante.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Pessoa madura observando o horizonte"
              style={{
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
