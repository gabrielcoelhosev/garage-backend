import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "./cadastrar-carro";


export const EditarCarro = (app: FastifyInstance) => {
    app.put('/carros/:id', async (req: FastifyRequest, reply: FastifyReply) => {

        const {id} = req.params as {id: string};

        const {modelo, ano, marca, cor} = req.body as {
            modelo: string,
            ano: number,
            marca: string,
            cor: string,
        }


        const carroAtualizado = await prisma.carro.update({
            where: {id: Number(id)},
            data: {modelo, ano, marca, cor},
        })

        return reply.status(200).send({
            message: `Carro atualizado com sucesso para o modelo ${carroAtualizado.modelo}`,
            carro: carroAtualizado
        });

    })
}