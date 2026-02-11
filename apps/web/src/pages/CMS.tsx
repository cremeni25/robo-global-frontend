import { useState } from "react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function CMS() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  async function criarNicho() {
    try {
      await fetch(`${SUPABASE_URL}/robo_global.nichos`, {
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
      });

      alert("Nicho criado!");
      setTitle("");
      setSlug("");
      setDescription("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h1>CMS Nichos</h1>

      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />

      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={criarNicho}>Criar Nicho</button>
    </div>
  );
}
