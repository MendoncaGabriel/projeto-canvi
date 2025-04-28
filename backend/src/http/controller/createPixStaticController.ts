import { createAxiosClient } from "@/lib/axiosClient";
import { GeneratePixStaticUseCase } from "@/usecase/canviApi/staticPix/generatePixStaticUseCase";
import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class CreatePixStaticController {
  async handler(req: FastifyRequest, res: FastifyReply) {
    const clientAxios = await createAxiosClient();
    const createStaticPix = new GeneratePixStaticUseCase(clientAxios);

    const requestBody = z.object({
      value: z.number(),
      description: z.string(),
    });

    const { value, description } = requestBody.parse(req.body);

    const result = await createStaticPix.execute({
      valor: value,
      descricao: description,
      tipo_transacao: "pixStaticCashin",
      texto_instrucao: "Teste de Criacao de Pix estatico",
      identificador_externo: randomUUID(),
      identificador_movimento: randomUUID(),
      enviar_qr_code: true,
      tag: ["doação"],
    });

    return res.status(201).send(result);
  }
}
