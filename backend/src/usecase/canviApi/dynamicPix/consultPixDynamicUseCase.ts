import { ConsultPixDynamicRequest, ConsultPixDynamicResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class ConsultPixDynamicUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}

  async execute(body: ConsultPixDynamicRequest): Promise<ConsultPixDynamicResponse> {
    const { data } = await this.clientAxios.post("/pix/dinamico/consulta", body);
    return data;
  }
}
