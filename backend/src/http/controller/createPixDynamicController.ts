import { createAxiosClient } from "@/lib/axiosClient";
import { GeneratePixDynamicUseCase } from "@/usecase/canviApi/dynamicPix/generatePixDynamicUseCase";
import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export class CreatePixDynamicController {
  async handler(req: FastifyRequest, res: FastifyReply) {
    const clientAxios = await createAxiosClient();
    const createStaticPix = new GeneratePixDynamicUseCase(clientAxios);

    const requestBody = z.object({
      value: z.number().positive(),
      description: z.string().min(1),
      cliente: z
        .object({
          nome: z.string().min(1),
          tipo_documento: z.enum(["cpf", "cnpj"]),
          numero_documento: z.string().min(11),
          "e-mail": z.string().email(),
        })
        .optional(),
    });

    const { value, description, cliente } = requestBody.parse(req.body);

    const identificadorExterno = randomUUID();
    const identificadorMovimento = randomUUID();

    const result = await createStaticPix.execute({
      valor: value,
      vencimento: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      descricao: description,
      tipo_transacao: "pixCashin",
      texto_instrucao: "Instruções",
      identificador_externo: identificadorExterno,
      identificador_movimento: identificadorMovimento,
      tag: ["tag1", "tag2"],
      cliente,
    });

    return res.status(201).send(result);
  }
}
