import { RotasCarro } from "./carro/@RotasCarro";
import { app } from "./server";

export const routes = async () => {
    app.register(RotasCarro);
}