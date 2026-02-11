// apps/web/src/pages/CMS.tsx

import { useState } from "react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function CMS() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  async function criarNicho() {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/robo_global.nichos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            title,
            slug,
            description,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao inserir no Supabase");
      }

      alert("Nicho criado com sucesso!");
      setTitle("");
      setSlug("");
      setDescription("");
    } catch (error) {
      console.error("Erro ao criar nicho:", error);
      alert("Erro ao criar nicho.");
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CMS Nichos</h1>

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
    fontSize: 14,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
  },
  textarea: {
    padding: 10,
    fontSize: 14,
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
