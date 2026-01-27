import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
          <h1
            style={{
              fontSize: "48px",
              lineHeight: "1.15",
              fontWeight: 700,
              color: "#0b2a4a",
              marginBottom: "24px",
            }}
          >
            Um caminho claro para resolver <br />
            o que hoje te incomoda.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#3a3a3a",
              maxWidth: "520px",
              marginBottom: "32px",
            }}
          >
            Aqui você não encontra promessas nem atalhos.  
            Encontra orientação para reconhecer sua situação
            e seguir por caminhos que façam sentido para a sua realidade.
          </p>

          {/* FRASE-ÂNCORA */}
          <p
            style={{
              fontStyle: "italic",
              fontWeight: 600,
              color: "#0b2a4a",
              marginBottom: "32px",
            }}
          >
            “Decidir bem começa por entender o problema certo.”
          </p>

          {/* PILARES */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {["Clareza", "Direção", "Confiança"].map((item) => (
              <span
                key={item}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  backgroundColor: "#eef3f8",
                  fontWeight: 600,
                  color: "#0b2a4a",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGEM */}
        <div
          style={{
            width: "100%",
            height: "420px",
            borderRadius: "24px",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1529333166437-7750a6dd5a70)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </section>

      {/* TRANSIÇÃO */}
      <section
        style={{
          backgroundColor: "#f5f7fa",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#0b2a4a",
              marginBottom: "16px",
            }}
          >
            Pessoas diferentes. Situações diferentes.
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.6",
              color: "#4a4a4a",
            }}
          >
            O primeiro passo não é comprar algo —
            é entender onde você está e qual área da sua vida
            merece atenção agora.
          </p>
        </div>
      </section>

      {/* DIRECIONAMENTO PARA NICHOS */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#0b2a4a",
            marginBottom: "24px",
          }}
        >
          Comece escolhendo a área que mais faz sentido para você
        </h3>

        <Link
          to="/nichos"
          style={{
            display: "inline-block",
            padding: "16px 36px",
            borderRadius: "999px",
            backgroundColor: "#0b2a4a",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          Explorar Nichos
        </Link>
      </section>

      {/* RODAPÉ INSTITUCIONAL */}
      <footer
        style={{
          padding: "40px 24px",
          textAlign: "center",
          fontSize: "12px",
          color: "#7a7a7a",
        }}
      >
        RoboGlobal™ by CREMENI — Este site conduz pessoas a caminhos,
        não realiza vendas diretas.
      </footer>
    </main>
  );
}
