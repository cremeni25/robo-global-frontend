import { useEffect } from "react";

export default function Go() {
  useEffect(() => {
    // DESTINO TEMPORÁRIO (TESTE)
    // Quando liberar backend, trocar por fetch(/go)
    window.location.href = "https://natflixfitness.com/?ref=L103372799I";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6">
      <p className="text-neutral-400">Redirecionando…</p>
    </div>
  );
}
