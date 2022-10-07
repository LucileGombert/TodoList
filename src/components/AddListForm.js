import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const AddListForm = ({listInput, setListInput, addList}) => {
    return (
        <div className=" addList-container container input-group mt-4">
            <input 
                className="task-input form-control" 
                type="text" 
                value={listInput} 
                onChange={(e) => setListInput(e.target.value)} 
                placeholder="Ajouter une liste ..."
            />

            <button onClick={addList} className="input-group-text">
                <Icon.ClipboardPlus className="icon"/>
            </button>
        </div>
    );
};

export default AddListForm;