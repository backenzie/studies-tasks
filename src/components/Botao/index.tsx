import style from "./Botao.module.scss";

export const Botao = (props: any) => {
  return <button className={style.botao}>{props.children}</button>;
};
