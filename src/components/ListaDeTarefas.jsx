import Tarefa from "./Tarefa";

function ListaDeTarefas({ tarefas }) {
    return (
        <div>
            {tarefas.map(tarefa => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                />
            ))}
        </div>
    );
}

export default ListaDeTarefas;