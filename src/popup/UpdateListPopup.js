import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UpdateListPopup = ({modalList, toggleList, listInput, setListInput, todoList, listStorage, updateList}) => {
    // const onChangeListInput = (e) => {
    //     setListInput(e.target.value)
    // }

    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     setListInput(e.target.value)
    //     let tempList = todoList;
    //     updateList(tempList);
    // }
   

    // return (
    //     <div>
    //         <Modal isOpen={modalList} toggle={toggleList}>
    //             <ModalHeader toggle={toggleList}>Modifier la liste</ModalHeader>

    //             <ModalBody>
    //                 <form>
    //                     <div className="form-group">
    //                         <label>Titre de la liste</label>
    //                         <input type="text" name="listName" className="form-control" value={listInput} onChange={onChangeListInput}/>
    //                     </div>
    //                 </form>
    //             </ModalBody>

    //             <ModalFooter>
    //                 <Button color="secondary" onClick={toggleList}>Annuler</Button>
    //                 {/* <Button color="primary" onClick={() => updateList(listInput)}>Modifier</Button>{' '} */}
    //                 <Button color="primary" onClick={handleUpdate}>Modifier</Button>{' '}
    //             </ModalFooter>
    //         </Modal>
    //     </div>
    // );
};

export default UpdateListPopup;