import {
  CreatePixReturnStaticRequest,
  CreatePixReturnStaticResponse,
} from "@/types/canvi";
import { AxiosInstance } from "axios";

export class CreatePixReturnStaticUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(
    body: CreatePixReturnStaticRequest
  ): Promise<CreatePixReturnStaticResponse> {
    const { data } = await this.axiosClient.post(
      "/pix/estatico/devolucao",
      body
    );
    return data;
  }
}
