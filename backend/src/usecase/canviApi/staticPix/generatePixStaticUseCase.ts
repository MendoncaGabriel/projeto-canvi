import { GeneratePixStaticRequest, GeneratePixStaticResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class GeneratePixStaticUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}

  async execute(body: GeneratePixStaticRequest): Promise<GeneratePixStaticResponse> {
    const { data } = await this.clientAxios.post("/pix", body);
    return data;
  }
}
