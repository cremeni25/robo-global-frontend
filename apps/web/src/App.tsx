import { useEffect, useState } from "react";
import { getStatus } from "./services/api";

export default function App() {
  const [status, setStatus] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getStatus()
      .then(setStatus)
      .catch((e) => setError(String(e)));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Robô Global™ — Web</h1>

      {error && <pre style={{ color: "red" }}>{error}</pre>}
      {!status && !error && <p>Carregando status do backend...</p>}

      {status && (
        <pre>{JSON.stringify(status, null, 2)}</pre>
      )}
    </div>
  );
}
