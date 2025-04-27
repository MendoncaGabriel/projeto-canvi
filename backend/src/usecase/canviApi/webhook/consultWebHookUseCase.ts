import { ConsultWebhookRequest, ConsultWebhookResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class ConsultWebHookUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(body: ConsultWebhookRequest): Promise<ConsultWebhookResponse> {
    const { data } = await this.axiosClient.post("/consultar_webhook", body);
    return data;
  }
}
