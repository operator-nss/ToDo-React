import React, {useRef, useState} from 'react';
import {BiAddToQueue} from "react-icons/bi";
import {nanoid} from "nanoid";

const AddTodo = ({todos, setTodos}) => {
	
	const inputText = useRef();
	
	const addTask = () => {
		const copy = [...todos];
		const newTask = {
			_id: nanoid(),
			title: inputText.current,
			isComplete: false
		}
		const current = [newTask, ...copy]
		setTodos(current)
		const form = document.querySelector('#form')
		form.reset();
	}
	
	return (
		<div className='w-full bg-slate-400 mt-20 rounded-2xl flex p-3 mb-20 items-center m-3 '>
			
			<BiAddToQueue onClick={() => addTask()} size={24} className=' text-green-400 mr-5 cursor-pointer  '/>
			<form id='form' action="#">
				<input
					type="text"
					onKeyPress={e => e.key === 'Enter' && addTask()}
					onBlur={() => addTask()}
					onChange={e => {
						inputText.current = e.target.value
					}}
					className='outline-none w-full border-none bg-transparent placeholder-gray-900 text-2xl text-gray-800 '
					placeholder={'Add task'}
				/>
			</form>

		</div>
	);
};

export default AddTodo;