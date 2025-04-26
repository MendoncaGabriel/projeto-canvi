import { ConsultDynamicPixListRequest, ConsultDynamicPixListResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class ConsultDynamicPixListUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(body: ConsultDynamicPixListRequest): Promise<ConsultDynamicPixListResponse> {
    const { data } = await this.axiosClient.post("/pix/list", body);
    return data;
  }
}
