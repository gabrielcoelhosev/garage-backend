import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { carros } from "./cadastrar-carro";

export const ListarCarros = (app: FastifyInstance) => {
    app.get('/carros', (req: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send(carros);
    })
}