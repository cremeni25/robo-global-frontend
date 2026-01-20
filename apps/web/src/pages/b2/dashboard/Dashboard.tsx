import IndicatorCard from "../../../components/IndicatorCard";
import { useB2Dashboard } from "../../../hooks/useB2Dashboard";

export default function DashboardB2() {
  const { data, prev, error, meta } = useB2Dashboard();

  const SEM_DADOS_OPERACIONAIS = true;

  return (
    <div className="space-y-8">
      {/* CABEÇALHO */}
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">Painel B2 — Parceiro</h1>
        <p className="text-sm text-neutral-text-secondary">
          Sistema ativo. Dados operacionais ainda não conectados.
        </p>
      </header>

      {/* AVISO GLOBAL */}
      {SEM_DADOS_OPERACIONAIS && (
        <section className="p-4 border border-neutral-border rounded-md bg-neutral-surface text-sm">
          ⚠️ <strong>Modo estrutural ativo:</strong>  
          Este painel está validando arquitetura, fluxo e observabilidade.  
          Não há motor financeiro conectado nem dados reais disponíveis.
        </section>
      )}

      {/* INDICADORES FINANCEIROS */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
          Indicadores Financeiros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <IndicatorCard
            title="Comissão Acumulada"
            value="—"
            status="neutral"
            variation="Dados não disponíveis"
          />

          <IndicatorCard
            title="Recebíveis"
            value="—"
            status="neutral"
            variation="Dados não disponíveis"
          />

          <IndicatorCard
            title="Ciclos Ativos"
            value="—"
            status="neutral"
            variation="Dados não disponíveis"
          />
        </div>
      </section>

      {/* ESTADO DO SISTEMA */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
          Estado do Sistema
        </h2>

        <div className="p-5 bg-neutral-surface rounded-md shadow-sm space-y-3 text-sm">
          {error && (
            <pre className="text-system-critical text-sm">{error}</pre>
          )}

          {data && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="text-neutral-text-secondary">Estado</span>
                <div className="font-medium">{data.sistema.estado}</div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Ambiente</span>
                <div className="font-medium">{data.sistema.ambiente}</div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Instância</span>
                <div className="font-mono text-xs break-all">
                  {data.sistema.instancia}
                </div>
              </div>

              <div>
                <span className="text-neutral-text-secondary">Horário</span>
                <div className="font-medium">{data.sistema.horario}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* STATUS OPERACIONAL */}
      <section className="text-xs text-neutral-text-secondary border-t pt-4 space-y-1">
        <div>
          <strong>Status:</strong> ativo (sem dados operacionais)
        </div>
        <div>
          <strong>Origem:</strong> {meta.source}
        </div>
        <div>
          <strong>Última atualização:</strong>{" "}
          {meta.lastUpdate ?? "—"}
        </div>
      </section>
    </div>
  );
}
