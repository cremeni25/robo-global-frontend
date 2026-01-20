// =====================================================
// ROBÔ GLOBAL™ — APP (EXPO)
// CAMADA B2 — DASHBOARD
// Espelhamento literal do SITE
//
// Regras:
// - Backend leitura-only
// - Nenhuma lógica financeira
// - Nenhuma decisão
// - Campos sem dados exibem "—"
// =====================================================

import { View, Text } from "react-native";

export default function B2DashboardScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: "#0b0b0b",
      }}
    >
      {/* CABEÇALHO */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginBottom: 24,
          color: "#ffffff",
        }}
      >
        Robô Global™ — B2 Dashboard
      </Text>

      {/* INDICADORES */}
      <View style={{ marginBottom: 16 }}>
        <Text style={{ color: "#9ca3af", marginBottom: 4 }}>
          Estado do Sistema
        </Text>
        <Text style={{ color: "#ffffff", fontSize: 16 }}>—</Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ color: "#9ca3af", marginBottom: 4 }}>
          Capital
        </Text>
        <Text style={{ color: "#ffffff", fontSize: 16 }}>—</Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ color: "#9ca3af", marginBottom: 4 }}>
          Produtos
        </Text>
        <Text style={{ color: "#ffffff", fontSize: 16 }}>—</Text>
      </View>

      {/* RODAPÉ */}
      <View style={{ marginTop: 32 }}>
        <Text style={{ color: "#6b7280", fontSize: 12 }}>
          Status: ativo (sem dados operacionais)
        </Text>
      </View>
    </View>
  );
}
