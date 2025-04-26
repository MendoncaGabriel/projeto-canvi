import { ConsultPixRequest, ConsultPixResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class ConsultPixUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}

  async execute(body: ConsultPixRequest): Promise<ConsultPixResponse> {
    const { data } = await this.clientAxios.post("/pix/dinamico/consulta", body);
    return data;
  }
}
