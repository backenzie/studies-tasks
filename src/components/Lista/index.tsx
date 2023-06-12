import style from "./Lista.module.scss";
import { Itarefa } from "../../types/Itarefa";
import { Item } from "./Item";

export const Lista = ({ tarefas }: { tarefas: Itarefa[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarea, i) => (
          <Item key={i} {...tarea} />
        ))}
      </ul>
    </aside>
  );
};
