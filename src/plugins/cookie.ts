import { randomUUID } from 'node:crypto'
import type { FastifyReply, FastifyRequest } from 'fastify'

export default function authCookie(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  let sessionId = request.cookies.session_id

  if (!sessionId) {
    sessionId = randomUUID()

    reply.cookie('session_id', sessionId, {
      path: '/',
      maxAge: 60 * 60 * 24, //24 hours
    })
  }

  return sessionId
}
