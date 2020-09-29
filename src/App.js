import React, { useState, useEffect } from "react";
import "./App.css";

//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
	//States
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);
	//Get Todos from local storage when the app runs(once)
	useEffect(() => {
		getLocalTodos();
	}, []);

	//useEffect
	useEffect(() => {
		//console.log("hey");
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	//Functions
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	//Save to Local Storage
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};
	return (
		<div className="App">
			<header>
				<h1 className="text-center">React To Do App</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	);
}

export default App;