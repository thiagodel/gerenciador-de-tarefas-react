import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProvedorDeTarefas } from "./context/TarefasContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProvedorDeTarefas>
            <App />
        </ProvedorDeTarefas>
    </StrictMode>
);