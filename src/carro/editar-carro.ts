import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { carros } from "./cadastrar-carro";

export const EditarCarro = (app: FastifyInstance) => {
    app.put('/carros/:id', (req: FastifyRequest, reply: FastifyReply) => {

        const {id} = req.params as {id: string};

        const {modelo, ano, marca, cor} = req.body as {
            modelo: string,
            ano: number,
            marca: string,
            cor: string,
        }

        const carro = carros.find((c) => c.id === parseInt(id));

        if(modelo) carro.modelo = modelo;
        if(ano) carro.ano = ano;
        if(marca) carro.marca = marca;
        if(cor) carro.cor = cor;
        
        return reply.status(200).send({message: `Carro atualizado!`});

    })
}