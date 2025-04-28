import { FastifyInstance } from 'fastify';
import { handleWebhook } from './webhookController';

export async function webhookRoutes(app: FastifyInstance) {
  app.post('/webhook', handleWebhook);
}
