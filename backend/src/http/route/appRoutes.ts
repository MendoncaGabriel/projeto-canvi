import { FastifyInstance } from "fastify";
import { Auth } from "../middleware/auth";

export function AppRoutes(app: FastifyInstance) {
  app.get("/auth", { preHandler: [Auth] }, () => ({
    mensagem: "Endpoint protegido",
  }));
}
