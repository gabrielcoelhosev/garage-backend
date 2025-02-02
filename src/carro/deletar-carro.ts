import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "./cadastrar-carro";


export const DeletarCarro = (app: FastifyInstance) => {
    app.delete('/carros/:id', async (req: FastifyRequest, reply: FastifyReply) => {

        const {id} = req.params as {id: string};
                                        
        const carroDeletado = await prisma.carro.delete({
            where: {id: Number(id)}
        })


        return reply.status(200).send({message: `Carro com o modelo ${carroDeletado} deletado com sucésso!`})
    })
}