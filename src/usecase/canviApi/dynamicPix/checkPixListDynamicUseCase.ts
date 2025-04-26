import { CheckPixListDynamicRequest, CheckPixListDynamicResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class CheckPixListDynamicUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(body: CheckPixListDynamicRequest): Promise<CheckPixListDynamicResponse> {
    const { data } = await this.axiosClient.post("/pix/list", body);
    return data;
  }
}
