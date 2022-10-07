import React, {useEffect, useState} from 'react';
import * as Icon from 'react-bootstrap-icons';
import UpdateListPopup from '../popup/UpdateListPopup';
import TaskCard from './TaskList';

const ListCard = ({toggleList, list, listIndex, listStorage,updateListArray, deleteList}) => {
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const [modalList, setModalList] = useState(false);
    


    // const [task, setTask] = useState("");
    // const [tasks, setTasks] = useState([]);
    
    

    // const onChangeTaskName = (e) => {
    //     setTask(e.target.value)
    // }

    // const addTask = (task) => {
    //     // e.preventDefault();
    //     let tempTasks = tasks;
        
    //     const newTask = {id: Math.random(), name: task, completed: false};
    //     tempTasks.push(newTask);
    //     // setTasks([...tasks, newTask])
    //     localStorage.setItem("task", JSON.stringify(tempTasks));
    //     setTasks(tempTasks);
    //     setTask("");

    // }

    // useEffect(() => {
    //     let storage = localStorage.getItem("task")
        
    //     if(storage) {
    //         let taskStorage = JSON.parse(storage)
    //         setTasks(taskStorage)
    //         console.log(taskStorage)
    //     }
    // }, [])

    
   
    // const completeTask = (id) => {
    
    //     // let newTask = toDo.map( task => {
    //     //   if( task.id === id ) {
    //     //     return ({ ...task, status: !task.status })
    //     //   } 
    //     //   return task
    //     // })
    //     // setToDo(newTask)
    
    //     // refactored
    //     setToDo(toDo.map(
    //       task => task.id === id 
    //       ? ({ ...task, status: !task.status }) 
    //       : (task) 
    //     ))
    
    //   }
    

    return (
        <div className="listCard mr-5">
            {/* <div className="listCard-border" style={{"backgroundColor": colors[listIndex%5].primaryColor}}></div>

            <div className="listCard-header">
                <span className="listCard-title" style={{"backgroundColor": colors[listIndex%5].secondaryColor}}>{list.name}</span>
                
                <div className="listCard-icons">
                    <Icon.PencilSquare className="icon" style={{"color" : colors[listIndex%5].primaryColor}} onClick={() => setModalList(true)}/>
                    <Icon.Trash3 className="icon" style={{"color" : colors[listIndex%5].primaryColor}} onClick={handleDelete}/>
                </div> 
            </div>
            
            <UpdateListPopup modalList={modalList} toggle={toggleList} updateList={updateList}/> */}

            {/* <div className="addTask-container">
               <form className="input-group">
                    <input type="text" placeholder="Ajouter une tâche ..." value={task} onChange={onChangeTaskName} required className="task-input form-control" style={{"borderColor" : colors[listIndex%5].secondaryColor}}/>

                    <button onClick={() => addTask(task)} className="input-group-text" style={{"backgroundColor" : colors[listIndex%5].secondaryColor, "borderColor" : colors[listIndex%5].secondaryColor}}>
                        <Icon.PlusCircle className="icon" style={{"color" : colors[listIndex%5].primaryColor}}/>
                    </button>
               </form>
            </div> */}

            {/* <div className="task-container"> */}
                {/* {tasks && tasks.map((taskArray, taskId) => <TaskCard oneTask={taskArray} taskId={taskId}/>)} */}
                {/* {tasks && tasks.map((taskStorage, taskIndex) => 
                    <TaskCard key={taskStorage.id} taskStorage={taskStorage} taskIndex={taskIndex}/>
                )} */}

            {/* </div> */}
        </div>
    );



};

export default ListCard;