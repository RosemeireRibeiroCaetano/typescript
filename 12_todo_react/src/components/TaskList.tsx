import Reactfr from "react";

// Interfaces 
import { ITask } from "../interfaces/Task";

// Css
import style from './TaiskList.module.css';

interface Props{
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(): void;
}
// condiçao ? true : false
const TaskList = ({taskList, handleDelete, handleEdit } : Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={style.task}>
            <div className={style.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={style.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit()}></i>
              <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
            </div>
          </div>
        ))
      ): (
      <p>Não há tarefas cadastradas!</p>
      )} 
    </>
  )
 
}

export default TaskList;
