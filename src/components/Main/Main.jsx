import React, { useEffect, useState } from 'react'
import Todo from '../Todo/Todo'
import AddTodo from '../AddTodo/AddTodo'
import './main.css'

const Main = () => {
	const [todos, setTodos] = useState([])

	const initialLocalStorage = () => {
		let todoLocalStorage = JSON.parse(localStorage.getItem('todos'))
		if (todoLocalStorage) {
			setTodos(todoLocalStorage)
		}
	}

	const updateLocal = (todos) => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	useEffect(() => {
		initialLocalStorage()
	}, [])

	const changeTodo = (id) => {
		const copyData = [...todos]
		const current = copyData.find((item) => id === item._id)
		current.isComplete = !current.isComplete
		setTodos(copyData)
		filterTodos(copyData)
	}

	const reRenderNotDeletedItems = () => {
		const allTodo = document.querySelectorAll('.todoItem')
		allTodo.forEach((item) => item.classList.add('rerender'))
		setTimeout(() => {
			allTodo.forEach((item) => item.classList.remove('rerender'))
		}, 1000)
	}

	const renderNotDeletedItems = () => {
		const allTodo = document.querySelectorAll('.todoItem')
		allTodo.forEach((item) => item.classList.add('render'))
		setTimeout(() => {
			allTodo.forEach((item) => item.classList.remove('render'))
		}, 1000)
	}

	const deleteTodo = (id) => {
		const copyTodos = [...todos]
		const current = copyTodos.filter((item) => item._id !== id)

		setTimeout(() => {
			reRenderNotDeletedItems()
		}, 0)

		setTimeout(() => {
			renderNotDeletedItems()
		}, 600)

		setTimeout(() => {
			setTodos(current)
			filterTodos(current)
		}, 500)
	}

	const filterTodos = (todos) => {
		setTimeout(() => {
			const copyTodos = [...todos]
			const notCompletedTodos = copyTodos.filter(
				(item) => item.isComplete === false
			)
			const completedTodos = copyTodos.filter(
				(item) => item.isComplete === true
			)
			const currentTodos = [...notCompletedTodos, ...completedTodos]
			setTodos(currentTodos)
			updateLocal(currentTodos)
		}, 0)
	}

	return (
		<div>
			{todos.map((todo) => (
				<Todo
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					deleteTodo={deleteTodo}
				/>
			))}
			<AddTodo todos={todos} updateLocal={updateLocal} setTodos={setTodos} />
		</div>
	)
}

export default Main
