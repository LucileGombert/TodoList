import React, { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const TodoList = ({todoList, setTodoList}) => {
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

    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [updateData, setUpdateData] = useState('')

    const addTask = (id) => {
		if (taskInput) {
            let listId = id;

            let tempId = Math.random().toString()
			let numId = tempId.substring(5, tempId.length -4)
			let newTask = {listId: listId, id: numId, name: taskInput, completed: false};
			let tempList = taskList;
			tempList.push(newTask);
			setTaskList(tempList);  

            let newTaskList = [[...taskList].filter(task => task.listId === listId)]
            let oldList = [...todoList].filter(list => list.id === listId)
            let newList = {id: oldList[0].id, name: oldList[0].name, task: newTaskList}

            let oldTodoList = [...todoList].filter(list => list.id !== listId)
            let newTodoList = oldTodoList
            newTodoList.push(newList)
            localStorage.setItem("TodoList", JSON.stringify(newTodoList));
            // setTodoList([...newTodoList, newList])
            setTodoList(newTodoList);
			setTaskInput('');
		}
	};

    useEffect(() => {
        let storage = localStorage.getItem("TodoList")
        
        if(storage) {
            let listStorage = JSON.parse(storage)
            setTodoList(listStorage)
        }
    }, [])

    // const updateList = (list, listIndex) => {
    //     let tempList = todoList
    //     console.log(tempList)
    //     tempList[listIndex] = list
    //     console.log(list)
    //     localStorage.setItem("TodoList", JSON.stringify(tempList))
    //     setTodoList(tempList)
    //     window.location.reload()
        
    // }


    // const updateListArray = (listStorage, listIndex) => {
    //     let tempList = todoList
    //     console.log(tempList)
    //     tempList[listIndex] = listStorage
    //     console.log(listStorage)
    //     localStorage.setItem("TodoList", JSON.stringify(tempList))
    //     setTodoList(tempList)
    //     window.location.reload()
        
    // }

    const deleteList = (id) => {
        let tempList = todoList.filter(list => list.id !== id)
        localStorage.setItem("TodoList", JSON.stringify(tempList))
        setTodoList(tempList)
    }

    return (
        <div className="list-container">
            {todoList && todoList.map((list, listIndex) => {
                return(
                    <React.Fragment key={list.id}>
                        <div className="listCard mr-5">
                            <div className="listCard-border" style={{"backgroundColor": colors[listIndex%5].primaryColor}}></div>

                            <div className="listCard-header">
                                <span className="listCard-title" style={{"backgroundColor": colors[listIndex%5].secondaryColor}}>{list.name}</span>
                                
                                <div className="listCard-icons">
                                    <Icon.PencilSquare className="icon" style={{"color" : colors[listIndex%5].primaryColor}} onClick={() => setUpdateData(list)}/>
                                    <Icon.Trash3 className="icon" style={{"color" : colors[listIndex%5].primaryColor}} onClick={() => deleteList(list.id)}/>
                                </div> 
                            </div>

                            <AddTaskForm colors={colors} list={list} listIndex={listIndex} taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask}/>
                           
                            <div>
                                {taskList && taskList.listId === list.id ? (
                                    <TaskList colors={colors} listIndex={listIndex} taskList={taskList} setTaskList={setTaskList} />
                                    ) : (
                                    <div className="text-center mt-5">Aucune tâche</div>
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    );
};

export default TodoList;