import { httpClient } from "./httpClient";

export async function getB3ControlRoom() {
  const response = await httpClient.get("/status");
  return response.data;
}
