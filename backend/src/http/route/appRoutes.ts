import { FastifyInstance } from "fastify";
import { Auth } from "../middleware/auth";
import { CreatePixStaticController } from "../controller/createPixStaticController";

const createPixStaticController = new CreatePixStaticController()
export function AppRoutes(app: FastifyInstance) {
  app.get("/auth", { preHandler: [Auth] }, () => ({
    mensagem: "Endpoint protegido",
  }));

  app.post("/pix/donate", createPixStaticController.handler)
}
