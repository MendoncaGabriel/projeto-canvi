import { AxiosInstance } from "axios";

export class ConfigureWebhookUseCase {
  constructor(
    private readonly axiosClient: AxiosInstance
  ){}

  async execute(body){}
}