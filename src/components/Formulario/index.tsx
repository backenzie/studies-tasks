import React from "react";
import { Botao } from "../Botao";
import style from "./Formulario.module.scss";
import { Itarefa } from "../../types/Itarefa";
import { v4 as uuid } from "uuid";

export class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  saveTask(e: React.FormEvent) {
    e.preventDefault();
    this.props.setTarefas((task) => [
      ...task,
      {
        ...this.state,
        selecionado: false,
        completo: false,
        id: uuid(),
      },
    ]);
    this.setState({
      tarefa: "",
      tempo: "00:00",
    });
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.saveTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(e) =>
              this.setState({ ...this.state, tarefa: e.target.value })
            }
            required
            placeholder="O que vc gostaria de estudar?"
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            step="1"
            id="tempo"
            value={this.state.tempo}
            onChange={(e) =>
              this.setState({ ...this.state, tempo: e.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}
