import { GeneratePixDynamicRequest, GeneratePixDynamicResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class GeneratePixDynamicUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}

  async execute(body: GeneratePixDynamicRequest): Promise<GeneratePixDynamicResponse> {
    const { data } = await this.clientAxios.post("/pix", body);
    return data;
  }
}
