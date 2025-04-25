import { DynamicPixInterface, GeneratePixRequestBody } from "@/types/canvi";
import { AxiosInstance } from "axios";
import axios from "axios";
import { env } from "@/env";

export class DynamicPix implements DynamicPixInterface {
  constructor(private client: AxiosInstance) {}

  async generatePix(body: GeneratePixRequestBody): Promise<unknown> {
    const { data } = await this.client.post("/pix", body);
    return data;
  }

  async getPixDetails(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async createPixRefund(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async listPixTransactions(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export async function CanviDynamicPix() {
  const client = axios.create({
    baseURL: env.CANVI_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await client.post("/token", {
    client_id: env.CANVI_CLIENT_ID,
    private_key: env.CANVI_PRIVATE_KEY,
  });

  client.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

  return new DynamicPix(client);
}

