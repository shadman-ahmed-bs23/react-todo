import React from "react";
import App from "../App";

const Todo = ({ text, todo, setTodos, todos }) => {
	const deleteHander = () => {
		setTodos(todos.filter((elem) => elem.id !== todo.id));
	};
	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{text}
			</li>
			<button onClick={completeHandler} className="complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHander} className="trash-btn">
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default Todo;
