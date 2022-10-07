import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import * as Icon from "react-bootstrap-icons";
import AddListForm from "./components/AddListForm";

function App() {
	const [listInput, setListInput] = useState("");
	const [todoList, setTodoList] = useState([]);

	const addList = () => {
		if (listInput) {
			let tempId = Math.random().toString()
			let numId = tempId.substring(5, tempId.length -4)
			let newList = {id: numId, name: listInput, task: []};
			let tempList = todoList;
			tempList.push(newList);
			localStorage.setItem("TodoList", JSON.stringify(tempList));
			setTodoList(tempList);   
			setListInput('');
		}
	};

	// Récupère les données du local storage
	useEffect(() => {
			let storage = localStorage.getItem("TodoList")
			
			if(storage) {
				let listStorage = JSON.parse(storage)
				setTodoList(listStorage)
			}
		}, [])

	return (
		<div className="App">
			<div className="header text-center">
				<h1>Mes listes</h1>

				<AddListForm listInput={listInput} setListInput={setListInput} addList={addList}/>
			</div>

			<div>
				{todoList && todoList.length ? (
					<TodoList todoList={todoList} setTodoList={setTodoList} />
					) : (
					<div className="text-center mt-5">Aucune liste</div>
				)}
			</div>
		</div>
	);
}

export default App;
