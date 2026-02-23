import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

type Nicho = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image_url?: string;
};

export default function NichosPublic() {
  const [nichos, setNichos] = useState<Nicho[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch(`${API_URL}/public2/nichos`);

        if (!res.ok) throw new Error("Erro na API");

        const data = await res.json();

        // 🔥 ADAPTAÇÃO DOS CAMPOS DO BACKEND
        const adaptados = (data || []).map((n: any) => ({
          id: n.id,
          title: n.title || n.título,
          slug: n.slug || n.lesma,
          description: n.description,
          image_url: n.image_url,
        }));

        setNichos(adaptados);
      } catch (e) {
        console.error(e);
        setError("Não foi possível carregar os nichos");
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  if (loading) return <div style={{ padding: 40 }}>Carregando...</div>;
  if (error) return <div style={{ padding: 40 }}>{error}</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Escolha a área que mais faz sentido para você:</h1>

      <div style={styles.grid}>
        {nichos.map((nicho) => (
          <a key={nicho.id} href={`/nicho/${nicho.slug}`} style={styles.card}>
            {nicho.image_url && (
              <img src={nicho.image_url} alt={nicho.title} style={styles.image} />
            )}

            <h2 style={styles.cardTitle}>{nicho.title}</h2>

            {nicho.description && (
              <p style={styles.cardDesc}>{nicho.description}</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 1100,
    margin: "40px auto",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
    gap: 20,
  },
  card: {
    background: "#111827",
    borderRadius: 12,
    padding: 16,
    textDecoration: "none",
    color: "#fff",
    border: "1px solid #1f2937",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
  },
  cardDesc: {
    opacity: 0.8,
    marginTop: 6,
  },
  image: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
};
