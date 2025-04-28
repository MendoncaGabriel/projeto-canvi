import { FastifyInstance } from "fastify";
import { Auth } from "../middleware/auth";
import ejs from "ejs";
import fs from "fs";
import path from "path";

export function AppRoutes(app: FastifyInstance) {
  app.get("/auth", { preHandler: [Auth] }, () => ({
    mensagem: "Endpoint protegido",
  }));
}
