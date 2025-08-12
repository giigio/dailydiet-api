import cookie from '@fastify/cookie'
import fastify from 'fastify'
import registerRoutes from './routes'

const app = fastify()

app.register(cookie)
app.register(registerRoutes)

export default app
