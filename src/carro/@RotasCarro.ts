import { app } from "../server";
import { CadastraCarro } from "./cadastrar-carro";
import { DeletarCarro } from "./deletar-carro";
import { EditarCarro } from "./editar-carro";
import { ListarCarros } from "./listar-carros";

export const RotasCarro = async () => {
    app.register(ListarCarros)
    app.register(CadastraCarro);
    app.register(EditarCarro);
    app.register(DeletarCarro);
}