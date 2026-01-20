import { httpClient } from "./httpClient";

export async function getB2Dashboard() {
  const response = await httpClient.get("/status");
  return response.data;
}



