import type { B2DashboardData } from "../types/b2";

/**
 * Adapter responsável por converter qualquer resposta
 * do backend para o contrato canônico do B2
 *
 * - Nunca quebra o frontend
 * - Nunca inventa dado
 * - Aceita evolução progressiva do backend
 */
export function mapBackendToB2Dashboard(payload: any): B2DashboardData {
  return {
    financeiro: {
      comissaoAcumulada:
        typeof payload?.financeiro?.comissaoAcumulada === "number"
          ? payload.financeiro.comissaoAcumulada
          : null,

      recebiveis:
        typeof payload?.financeiro?.recebiveis === "number"
          ? payload.financeiro.recebiveis
          : null,

      ciclosAtivos:
        typeof payload?.financeiro?.ciclosAtivos === "number"
          ? payload.financeiro.ciclosAtivos
          : null,
    },

    sistema: {
      estado: payload?.estado ?? "DESCONHECIDO",
      ambiente: payload?.ambiente ?? "desconhecido",
      instancia: payload?.instancia ?? "",
      horario: payload?.horario ?? "",
    },
  };
}
