import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import fastifySwagger from '@fastify/swagger'
// import { routes } from './routes'
import fastifySwaggerUi from '@fastify/swagger-ui'

const app = fastify()

app.setValidatorCompiler(validatorCompiler).withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.register(fastifyCors, { origin: '* '} )

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Type Api Treina Dev',
            version: '1.0.0'
        }
    }
})

// app.register(routes)

app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server-running! \n link: \n localhost:3333/docs')
})