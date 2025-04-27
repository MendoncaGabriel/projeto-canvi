import {
  ConsultPixStaticDocumentRequest,
  ConsultPixStaticDocumentResponse,
} from "@/types/canvi";
import { AxiosInstance } from "axios";

export class ConsultPixStaticDocumentUseCase {
  constructor(private readonly axiosClient: AxiosInstance) {}

  async execute(
    body: ConsultPixStaticDocumentRequest
  ): Promise<ConsultPixStaticDocumentResponse> {
    const { data } = await this.axiosClient.post("/pix/estatico/documento", body);
    return data;
  }
}
