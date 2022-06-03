import React, {useState} from 'react';
import Todo from "../Todo/Todo";
import {nanoid} from "nanoid";
import {logDOM} from "@testing-library/react";
import AddTodo from "../AddTodo/AddTodo";

const Main = () => {
	
	const data = [
		{
			_id: nanoid(),
			title: 'Some title',
			isComplete: true
		},
		{
			_id: nanoid(),
			title: 'Read book',
			isComplete: false
		},
		{
			_id: nanoid(),
			title: 'Some title',
			isComplete: true
			
		},
	]
	
	const [todos, setTodos] = useState(data);
	
	const changeTodo = (id) => {
		const copyData = [...todos];
		const current = copyData.find(item => id === item._id)
		current.isComplete = !current.isComplete;
		setTodos(copyData);
		filterTodos(copyData);
	}
	

	
	const deleteTodo = id => {
		const copyTodos = [...todos];
		const current = copyTodos.filter(item => item._id !== id);
		setTodos(current);
		filterTodos(current);
	}
	
	const filterTodos = (todos) => {
		setTimeout(()=> {
			const copyTodos = [...todos];
			const notCompletedTodos = copyTodos.filter(item => item.isComplete === false);
			const completedTodos = copyTodos.filter(item => item.isComplete === true);
			const currentTodos = [...notCompletedTodos,...completedTodos];
			setTodos(currentTodos);
		},0)
	}
	
	
	return (
		<div>
			{todos.map(todo =>
				(<Todo key={todo._id} todo={todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/>))}
			<AddTodo todos={todos} setTodos={setTodos}/>
		</div>
	);
};

export default Main;