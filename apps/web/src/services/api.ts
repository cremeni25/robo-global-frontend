import { httpClient } from "./httpClient";

export async function getStatus() {
  const response = await httpClient.get("/status");
  return response.data;
}

export async function go(payload: any) {
  const response = await httpClient.post("/go", payload);
  return response.data;
}
