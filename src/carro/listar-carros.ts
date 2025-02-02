import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "./cadastrar-carro";


export const ListarCarros = (app: FastifyInstance) => {
    app.get('/carros', async (req: FastifyRequest, reply: FastifyReply) => {
        
        const carros = await prisma.carro.findMany();
        return reply.status(200).send(carros);
    })
}