// Contrato canônico do B2 (Frontend)
// NÃO depende de endpoint
// NÃO contém regra de negócio

export interface B2Financeiro {
  comissaoAcumulada: number | null;
  recebiveis: number | null;
  ciclosAtivos: number | null;
}

export interface B2Sistema {
  estado: string;
  ambiente: string;
  instancia: string;
  horario: string;
}

export interface B2DashboardData {
  financeiro: B2Financeiro;
  sistema: B2Sistema;
}
