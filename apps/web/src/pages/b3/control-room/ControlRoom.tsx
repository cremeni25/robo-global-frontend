// =====================================================
// ROBÔ GLOBAL™ — SITE
// CAMADA B3 — TERMINAL DE GOVERNANÇA
// Execução literal do HANDOFF FINAL — ABERTURA DO NOVO CHAT
//
// Função:
// - Camada de auditoria, governança e observabilidade sistêmica
// - Nenhuma lógica financeira
// - Nenhuma decisão automatizada
// - Backend leitura-only
// - Campos sem dados devem exibir "—"
// =====================================================

import { useB2Dashboard } from "../../hooks/useB2Dashboard";

export default function B3GovernanceTerminal() {
  const { data, error, meta } = useB2Dashboard();

  return (
    <div className="space-y-8">
      {/* CABEÇALHO */}
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">Painel B3 — Governança</h1>
        <p className="text-sm text-neutral-text-secondary">
          Camada de auditoria e observabilidade sistêmica.
        </p>
      </header>

      {/* AVISO ESTRUTURAL */}
      <section className="p-4 border border-neutral-border rounded-md bg-neutral-surface text-sm">
        ⚠️ <strong>Modo governança ativo:</strong><br />
        Este painel não executa decisões nem cálculos.<br />
        Atua exclusivamente como terminal de leitura, auditoria e estado.
      </section>

      {/* ESTADO GLOBAL DO SISTEMA */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
          Estado Global do Sistema
        </h2>

        <div className="p-5 bg-neutral-surface rounded-md shadow-sm space-y-3 text-sm">
          {error && (
            <pre className="text-system-critical text-sm">
              {error}
            </pre>
          )}

          {data ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-neutral-text-secondary">Sistema</span>
                <div className="font-medium">{data.sistema.nome ?? "—"}</div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Versão</span>
                <div className="font-medium">{data.sistema.versao ?? "—"}</div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Estado</span>
                <div className="font-medium">{data.sistema.estado ?? "—"}</div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Ambiente</span>
                <div className="font-medium">{data.sistema.ambiente ?? "—"}</div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Instância</span>
                <div className="font-mono text-xs break-all">
                  {data.sistema.instancia ?? "—"}
                </div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Horário</span>
                <div className="font-medium">{data.sistema.horario ?? "—"}</div>
              </div>
            </div>
          ) : (
            <div className="text-sm text-neutral-text-secondary">
              Dados sistêmicos indisponíveis no momento.
            </div>
          )}
        </div>
      </section>

      {/* BLOCO DE GOVERNANÇA */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
          Governança Operacional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-neutral-surface border border-neutral-border">
            <div className="text-xs text-neutral-text-secondary">
              Motor Financeiro
            </div>
            <div className="text-base mt-1">—</div>
          </div>

          <div className="p-4 rounded bg-neutral-surface border border-neutral-border">
            <div className="text-xs text-neutral-text-secondary">
              Motor Decisório
            </div>
            <div className="text-base mt-1">—</div>
          </div>

          <div className="p-4 rounded bg-neutral-surface border border-neutral-border">
            <div className="text-xs text-neutral-text-secondary">
              Modo Operacional
            </div>
            <div className="text-base mt-1">—</div>
          </div>
        </div>
      </section>

      {/* RODAPÉ TÉCNICO */}
      <section className="text-xs text-neutral-text-secondary border-t pt-4 space-y-1">
        <div>
          <strong>Status:</strong> governança ativa (leitura-only)
        </div>
        <div>
          <strong>Origem:</strong> {meta.source}
        </div>
        <div>
          <strong>Última atualização:</strong> {meta.lastUpdate ?? "—"}
        </div>
      </section>
    </div>
  );
}
