import fastify from "fastify";
import cors from "@fastify/cors"
import { routes } from "./routes";


export const app = fastify();

app.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
})

app.register(routes);

app.listen({port: 3939}, (err, address) => {
    if(err){
        console.log(err);
    }

    console.log(`Servidor rodando na porta ${address}`);
})