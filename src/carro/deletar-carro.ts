import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { carros } from "./cadastrar-carro";

export const DeletarCarro = (app: FastifyInstance) => {
    app.delete('/carros/:id', (req: FastifyRequest, reply: FastifyReply) => {

        const {id} = req.params as {id: string};

        const index = carros.findIndex((c) => c.id === parseInt(id));


                                        
        const carroDeletado = carros.splice(index, 1)[0];

        return reply.status(200).send({message: `O carro  ${carroDeletado.marca} ${carroDeletado.modelo} foi removído com sucésso!`});

    })
}