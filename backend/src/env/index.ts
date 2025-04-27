import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  //App
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333),
  PRIVATE_KEY: z.string(),
  HOST: z.coerce.string().default("0.0.0.0"),

  // Database
  MYSQL_ROOT_PASSWORD: z.string(),
  MYSQL_DATABASE: z.string(),
  MYSQL_USER: z.string(),
  MYSQL_PASSWORD: z.string(),
  MYSQL_PORT: z.coerce.number().default(3306),
  DATABASE_URL: z.string(),

  // Canvi
  CANVI_BASE_URL: z.string().url(),
  CANVI_CLIENT_ID: z.string(),
  CANVI_PRIVATE_KEY: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
