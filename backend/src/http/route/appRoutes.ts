import { FastifyInstance } from "fastify";
import { Auth } from "../middleware/auth";
import { CreatePixStaticController } from "../controller/createPixStaticController";
import { CreatePixDynamicController } from "../controller/createPixDynamicController";
import { WebhookController } from "../controller/webhookController";

const createPixStaticController = new CreatePixStaticController();
const createPixDynamicController = new CreatePixDynamicController();
const webhookController = new WebhookController()

export function AppRoutes(app: FastifyInstance) {
  app.get("/auth", { preHandler: [Auth] }, () => ({
    mensagem: "Endpoint protegido",
  }));

  app.post("/pix/donate", createPixStaticController.handler);
  app.post("/pix/buy", createPixDynamicController.handler);
  app.post("/webhook", webhookController.handler);
}
