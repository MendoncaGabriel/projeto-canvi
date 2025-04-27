import { CreatePixReturnDynamicRequest, CreatePixReturnDynamicResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class CreatePixReturnDynamicUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}
  async execute(
    body: CreatePixReturnDynamicRequest
  ): Promise<CreatePixReturnDynamicResponse> {
    const { data } = await this.clientAxios.post(
      "/pix/dinamico/devolucao",
      body
    );
    return data;
  }
}
