// =====================================================
// ROBÔ GLOBAL™ — SITE
// CAMADA B2 — LOGIN
// Execução literal do HANDOFF FINAL — ABERTURA DO NOVO CHAT
// Regra: código real, sem lógica de negócio, sem mock
// =====================================================

import { useState } from 'react';

export default function B2Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100">
      <section className="w-full max-w-md p-8 rounded-xl bg-gray-900 border border-gray-800">
        <h1 className="text-lg font-semibold mb-6">
          Robô Global™ — B2 Login
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 transition"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
