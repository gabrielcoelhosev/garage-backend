import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient();

export const CadastraCarro = (app: FastifyInstance) => {
    app.post('/carros', async (req: FastifyRequest, reply: FastifyReply) => {

        const {modelo, ano, marca, cor} = req.body as {
            modelo: string,
            ano: number,
            marca: string,
            cor: string,
        }

        
        const novoCarro = await prisma.carro.create({
            data: {
                modelo,
                ano,
                marca,
                cor,
            }
        })

        return reply.status(201).send({message: `O carro de modelo ${novoCarro.modelo} foi cadastrado com sucésso!`})
    })
}