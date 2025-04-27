import Fastify from "fastify";
import { AppRoutes } from "./http/route/appRoutes";
import jwt from "@fastify/jwt";
import { env } from "./env";
import { errorHandler } from "./util/error.handle";
import fastifyView from "@fastify/view";
import ejs from "ejs";

export const app = Fastify();
app.setErrorHandler(errorHandler);

app.register(fastifyView, {
  engine: {
    ejs: ejs,
  },
  root: "./src/view",
});

app.register(jwt, {
  secret: env.PRIVATE_KEY,
});

app.register(AppRoutes);
