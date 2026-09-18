import { useReducer } from "react";
import { TarefasContext } from "./Contexto";

const estadoInicial = {
    tarefas: []
};

function redutorDeTarefas(estado, acao) {
    switch (acao.type) {
        case "ADICIONAR_TAREFA":
            return {
                tarefas: [...estado.tarefas, acao.dados]
            };

        case "ALTERNAR_TAREFA":
            return {
                tarefas: estado.tarefas.map(tarefa =>
                    tarefa.id === acao.dados
                        ? {
                            ...tarefa,
                            concluida: !tarefa.concluida
                        }
                        : tarefa
                )
            };

        default:
            return estado;
    }
}

export function ProvedorDeTarefas({ children }) {
    const [estado, enviarAcao] = useReducer(
        redutorDeTarefas,
        estadoInicial
    );

    return (
        <TarefasContext.Provider value={{ estado, enviarAcao }}>
            {children}
        </TarefasContext.Provider>
    );
}