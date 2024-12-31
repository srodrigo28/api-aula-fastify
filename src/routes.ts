import fastifySwaggerUi from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance){
    
    // CRIANDO AS ROTAS DA APLICAÇÃO
    app.get('/users', () => {
        return []
    }),

    app.register(fastifySwaggerUi, {
        routePrefix: '/docs'
    })
}