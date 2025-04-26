import {
  SimulateWriteOffRequest,
  SimulateWriteOffResponse,
} from "@/types/canvi";
import { AxiosInstance } from "axios";

export class SimulateWriteOffUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(
    body: SimulateWriteOffRequest
  ): Promise<SimulateWriteOffResponse> {
    const response = await this.axiosClient.post(
      "/desenvolvedor/simular_baixa",
      body
    );
    return response.data;
  }
}
