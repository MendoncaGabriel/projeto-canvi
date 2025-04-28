import { app } from "./app";
import { env } from "./env";
import cors from "@fastify/cors";

async function start() {
  await app.register(cors, {
    origin: '*',
  });

  app.listen({
    port: env.PORT,
    host: env.HOST,
  }).then(() => {
    console.log("🚀 Http Server Running");
  });
}

start();
