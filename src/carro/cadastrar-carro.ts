import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"


export const carros: any[] = [
    {id: 1, modelo: "488", ano: 2016, marca: "Ferrari", cor: "Vermelho"},
    {id: 2, modelo: "Urus", ano: 2024, marca: "Lamborghini", cor: "Amarelo"},

];

let idCounter = 3;

export const CadastraCarro = (app: FastifyInstance) => {
    app.post('/carros', (req: FastifyRequest, reply: FastifyReply) => {

        const {modelo, ano, marca, cor} = req.body as {
            modelo: string,
            ano: number,
            marca: string,
            cor: string,
        }

        const novoCarro = {
            id: idCounter++,
            modelo,
            ano,
            marca,
            cor
        }

        carros.push(novoCarro);
        return reply.status(200).send({mesage: `O carro de modelo ${novoCarro.modelo} foi cadastrado com sucésso!`});
    })
}