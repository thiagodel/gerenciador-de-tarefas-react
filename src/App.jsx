import { useContext, useState } from "react";
import { TarefasContext } from "./context/Contexto";
import ListaDeTarefas from "./components/ListaDeTarefas";
import "./App.css";

function App() {
    const [nomeTarefa, setNomeTarefa] = useState("");
    const [filtro, setFiltro] = useState("TODAS");

    const { estado, enviarAcao } = useContext(TarefasContext);

    function adicionarTarefa() {
        if (nomeTarefa.trim() === "") {
            return;
        }

        const novaTarefa = {
            id: Date.now(),
            nome: nomeTarefa,
            concluida: false
        };

        enviarAcao({
            type: "ADICIONAR_TAREFA",
            dados: novaTarefa
        });

        setNomeTarefa("");
    }

    function tarefasFiltradas() {
        if (filtro === "CONCLUIDAS") {
            return estado?.tarefas.filter(tarefa => tarefa.concluida);
        }

        if (filtro === "PENDENTES") {
            return estado.tarefas.filter(tarefa => !tarefa.concluida);
        }

        return estado.tarefas;
    }

    return (
        <div className="pagina">
            <div className="caixa">
                <h1>Gerenciador de Tarefas</h1>

                <div className="adicionar">
                    <input
                        type="text"
                        placeholder="Digite uma tarefa"
                        value={nomeTarefa}
                        onChange={(evento) =>
                            setNomeTarefa(evento.target.value)
                        }
                    />

                    <button onClick={adicionarTarefa}>
                        Adicionar
                    </button>
                </div>

                <div className="filtros">
                    <button onClick={() => setFiltro("TODAS")}>
                        Todas
                    </button>

                    <button onClick={() => setFiltro("CONCLUIDAS")}>
                        Concluídas
                    </button>

                    <button onClick={() => setFiltro("PENDENTES")}>
                        Pendentes
                    </button>
                </div>

                <ListaDeTarefas tarefas={tarefasFiltradas()} />
            </div>
        </div>
    );
}

export default App;