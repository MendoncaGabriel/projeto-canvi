import { FastifyInstance } from "fastify";
import { Auth } from "../middleware/auth";
import ejs from "ejs";
import fs from "fs";
import path from "path";

export function AppRoutes(app: FastifyInstance) {
  app.get("/auth", { preHandler: [Auth] }, () => ({
    mensagem: "Endpoint protegido",
  }));

  app.get("/", async (request, reply) => {
    const home = path.resolve("src", "view","pages","home.ejs");
    
    return reply.view("layout.ejs", {
      tituloPagina: "Início",
      body: `
      ${ejs.render(fs.readFileSync(home, "utf-8"))}
    `,
    });
  });
}
