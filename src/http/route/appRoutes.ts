import { FastifyInstance } from "fastify";
import { Auth } from "../middleware/auth";

export function AppRoutes(app: FastifyInstance) {
  app.get("/auth", { preHandler: [Auth] }, () => ({
    mensagem: "Endpoint protegido",
  }));
  
  app.get("/", async (request, reply) => {
    return reply.view("index.ejs", { 
      message: "Welcome to Projeto Canvi!"
    });
  });
}
