import {
  ConfigureWebHookRequest,
  ConfigureWebHookResponse,
} from "@/types/canvi";
import { AxiosInstance } from "axios";

export class ConfigureWebHookUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(
    body: ConfigureWebHookRequest
  ): Promise<ConfigureWebHookResponse> {
    const { data } = await this.axiosClient.post("/configurar_webhook", body);
    return data;
  }
}
