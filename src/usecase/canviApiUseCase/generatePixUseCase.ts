import { GeneratePixRequest, GeneratePixResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class GeneratePixUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}

  async execute(body: GeneratePixRequest): Promise<GeneratePixResponse> {
    const { data } = await this.clientAxios.post("/pix", body);
    return data;
  }
}
