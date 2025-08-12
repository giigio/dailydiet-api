import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function usersController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    name: z.string(),
    email: z.email(),
  })

  const { name, email } = bodySchema.parse(request.body)

  return reply.status(201).send({ name, email })
}
