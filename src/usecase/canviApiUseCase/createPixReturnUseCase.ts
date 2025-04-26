import { CreatePixReturnRequest, CreatePixReturnResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class CreatePixReturnUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}
  async execute(
    body: CreatePixReturnRequest
  ): Promise<CreatePixReturnResponse> {
    const { data } = await this.clientAxios.post(
      "/pix/dinamico/devolucao",
      body
    );
    return data;
  }
}
