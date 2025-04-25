import { env } from "@/env";
import axios, { AxiosInstance } from "axios";

export async function createAxiosClient(): Promise<AxiosInstance> {
  const url = `${env.CANVI_BASE_URL}/token`;
  const { data } = await axios.post(url, {
    client_id: env.CANVI_CLIENT_ID,
    private_key: env.CANVI_PRIVATE_KEY,
  });
  const token = data.token;

  if (!token) {
    throw new Error("Token não encontrado na resposta da API");
  }

  const client = axios.create({
    baseURL: env.CANVI_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return client;
}
