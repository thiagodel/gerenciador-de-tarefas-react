import { useContext } from "react";
import { TarefasContext } from "../context/Contexto";

function Tarefa({ tarefa }) {
    const { enviarAcao } = useContext(TarefasContext);

    function marcarTarefa() {
        enviarAcao({
            type: "ALTERNAR_TAREFA",
            dados: tarefa.id
        });
    }

    return (
        <div className="tarefa">
            <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={marcarTarefa}
            />

            <span className={tarefa.concluida ? "concluida" : ""}>
                {tarefa.nome}
            </span>
        </div>
    );
}

export default Tarefa;