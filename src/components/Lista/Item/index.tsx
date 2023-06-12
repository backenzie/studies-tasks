import style from "./Item.module.scss";
import { Itarefa } from "../../../types/Itarefa";

export const Item = ({ tarefa, tempo, selecionado, completo, id }: Itarefa) => {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};
