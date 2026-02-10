// =====================================================
// ROBÔ GLOBAL™ — APP (EXPO)
// CAMADA B2 — LOGIN REAL (SUPABASE)
// =====================================================

import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";

export default function B2LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Erro", "Informe email e senha");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Falha no login", error.message);
      return;
    }

    // Login OK → entra no B2 (por enquanto)
    router.replace("/b2");
  }

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
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="email@exemplo.com"
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
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="••••••••"
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
        onPress={handleLogin}
        disabled={loading}
        style={{
          padding: 14,
          backgroundColor: loading ? "#444" : "#2563eb",
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
          {loading ? "Entrando..." : "Entrar"}
        </Text>
      </Pressable>
    </View>
  );
}
