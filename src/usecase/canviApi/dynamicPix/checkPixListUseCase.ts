import { CheckPixListRequest, CheckPixListResponse } from "@/types/canvi";
import { AxiosInstance } from "axios";

export class CheckPixListUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(body: CheckPixListRequest): Promise<CheckPixListResponse> {
    const { data } = await this.axiosClient.post("/pix/list", body);
    return data;
  }
}
