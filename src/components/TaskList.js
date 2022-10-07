import React, {useState} from 'react';
import * as Icon from 'react-bootstrap-icons';
import UpdateTaskPopup from '../popup/UpdateListPopup';

const TaskList = ({colors, listIndex, taskList, setTaskList}) => {
    
    const completeTask = (id) => {
        setTaskList(taskList.map(
          task => task.id === id 
          ? ({ ...task, complete: !task.complete }) 
          : (task) 
        ))
    
      }

    const deleteTask = (id) => {
        let tempList = taskList.filter(task => task.id !== id)
        localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTaskList(tempList)
    }

    return (
        <div className="task-container">
            {taskList && taskList.map((task, taskIndex) => {
                return(
                    <React.Fragment key={task.id}>
                        <div className="taskCard" style={{"backgroundColor": colors[listIndex%5].secondaryColor}}>
                            <div className="listCard-header">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="defaultCheck1"/>
                                    <span className="listCard-title">{task.name}</span>
                                </div>
                                
                                <div className="listCard-icons">
                                    <Icon.Pencil className="icon" style={{"color" : colors[listIndex%5].primaryColor}}/>
                                    <Icon.XLg className="icon" style={{"color" : colors[listIndex%5].primaryColor}} onClick={() => deleteTask(task.id)}/>
                                </div> 
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
        // <div className="taskCard mr-5">
        //     <div className="taskCard-border" style={{"backgroundColor": colors[listIndex%5].primaryColor}}></div>

        //     <div className="taskCard-header">
        //         <div class="form-check">
        //             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        //         </div>

        //         <span className="listCard-title">{task.name}</span>
                
        //         <div className="listCard-icons">
        //             <Icon.CheckLg className="icon" style={{"color" : colors[listIndex%5].primaryColor}}/>
        //             <Icon.Pencil className="icon" style={{"color" : colors[listIndex%5].primaryColor}}/>
        //             <Icon.XLg className="icon" style={{"color" : colors[listIndex%5].primaryColor}} />
        //         </div> 
        //     </div>
        // </div>
    );
};

export default TaskList;