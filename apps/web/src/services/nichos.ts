import { httpClient } from "./httpClient";

export type Nicho = {
  id: string;
  title: string;
  slug: string;
  description: string;
};

export async function fetchNichos(): Promise<Nicho[]> {
  const response = await httpClient.get("/public2/nichos");
  return response.data;
}
