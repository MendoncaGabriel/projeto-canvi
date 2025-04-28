import { db } from "@/lib/prisma";
import { FastifyRequest, FastifyReply } from "fastify";

interface WebhookPayload {
  event: string;
  data: any;
}

export class WebhookController {
  async handler(
    req: FastifyRequest<{ Body: WebhookPayload }>,
    res: FastifyReply
  ) {
    const payload = req.body;
    console.log("[Webhook received]: ", payload)

    const payloadJson = JSON.stringify(payload);

    await db.webhookRecord.create({
      data: {
        amount: payload.data.amount,
        status: payload.data.status,
        currency: payload.data.currency,
        orderId: payload.data.orderId,
        fullPayload: payloadJson,
      },
    });

    return res.status(200).send();
  }
}
