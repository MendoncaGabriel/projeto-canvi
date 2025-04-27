import { FastifyReply, FastifyRequest } from "fastify";
import { UnauthorizedError } from "../error/httpError";

export async function Auth(req: FastifyRequest, _res: FastifyReply) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("Token não fornecido ou mal formatado");
  }

  try {
    await req.jwtVerify();
  } catch (err) {
    throw new UnauthorizedError("Token inválido ou expirado");
  }
}
