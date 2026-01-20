// =====================================================
// ROBÔ GLOBAL™ — APP (EXPO)
// CAMADA B2 — LOGIN
// Espelhamento literal do SITE
//
// Regras:
// - Nenhuma lógica de negócio
// - Nenhum mock financeiro
// - Nenhuma decisão
// - Apenas estrutura operacional
// =====================================================

import { View, Text, TextInput, Pressable } from "react-native";

export default function B2LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#0b0b0b",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginBottom: 24,
          color: "#ffffff",
        }}
      >
        Robô Global™ — B2 Login
      </Text>

      <Text style={{ color: "#cfcfcf", marginBottom: 6 }}>Email</Text>
      <TextInput
        placeholder="—"
        placeholderTextColor="#666"
        style={{
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 6,
          padding: 12,
          marginBottom: 16,
          color: "#ffffff",
        }}
      />

      <Text style={{ color: "#cfcfcf", marginBottom: 6 }}>Senha</Text>
      <TextInput
        secureTextEntry
        placeholder="—"
        placeholderTextColor="#666"
        style={{
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 6,
          padding: 12,
          marginBottom: 24,
          color: "#ffffff",
        }}
      />

      <Pressable
        style={{
          padding: 14,
          backgroundColor: "#2563eb",
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Entrar
        </Text>
      </Pressable>
    </View>
  );
}
