import * as React from 'react'

// Interfaces
import { ITask } from '../interfaces/Task';

// Css
import style from './TaiskList.module.css';

interface Props {
 taskList: ITask[];
}

const TaskList = ({taskList} : Props) =>{
    return (
      <>
      {
        taskList.length > 0 
        ? 
        (
          taskList.map((t, i) => (<div key={i}>{t.title}</div>))
        )
        :
        (<p>Lista vazia</p>)
      }
      </>
      
    )
     
}

export default TaskList;