import {
  ConsultStaticPixListRequest,
  ConsultStaticPixListResponse,
} from "@/types/canvi";
import { AxiosInstance } from "axios";

export class ConsultStaticPixListUseCase {
  constructor(private readonly clientAxios: AxiosInstance) {}

  async execute(
    body: ConsultStaticPixListRequest
  ): Promise<ConsultStaticPixListResponse> {
    const { data } = await this.clientAxios.post("/pix/estatico/lista", body);
    return data;
  }
}
