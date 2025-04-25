import { FastifyInstance } from "fastify";

export function AppRoutes(app: FastifyInstance) {
  app.get("/", async (req, res) => {
    return { message: "hello world" };
  });
}
