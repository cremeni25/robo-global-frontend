import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const MASTER_KEY = import.meta.env.VITE_MASTER_KEY;

export default function CMS() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  async function criarNicho() {
    try {
      const res = await fetch(`${API_URL}/cms/nichos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-master-key": MASTER_KEY,
        },
        body: JSON.stringify({
          title,
          slug,
          description,
        }),
      });

      if (!res.ok) {
        throw new Error("Erro ao criar via API");
      }

      alert("Nicho criado via API soberana!");

      setTitle("");
      setSlug("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Falha ao criar nicho");
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CMS — MASTER REAL</h1>

      <input
        style={styles.input}
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />

      <textarea
        style={styles.textarea}
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button style={styles.button} onClick={criarNicho}>
        Criar Nicho
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 600,
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
  },
  input: {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
  },
  textarea: {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    minHeight: 120,
  },
  button: {
    padding: 12,
    backgroundColor: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },
};
