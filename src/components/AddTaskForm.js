import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const AddTaskForm = ({colors, list, listIndex, taskInput, setTaskInput, addTask}) => {
    return (
        <div className=" addList-container container input-group mt-4">
            <input 
                className="task-input form-control" 
                type="text" 
                value={taskInput} 
                onChange={(e) => setTaskInput(e.target.value)} 
                placeholder="Ajouter une liste ..."
            />

            <button onClick={() => addTask(list.id)} className="input-group-text" style={{"backgroundColor" : colors[listIndex%5].secondaryColor, "borderColor" : colors[listIndex%5].secondaryColor}}>
                <Icon.PlusCircle className="icon" style={{"color" : colors[listIndex%5].primaryColor}}/>
            </button>
        </div>
    );
};

export default AddTaskForm;