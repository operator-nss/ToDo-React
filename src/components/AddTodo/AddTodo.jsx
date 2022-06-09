import React, {useRef, useState} from 'react';
import {BiAddToQueue} from "react-icons/bi";
import {nanoid} from "nanoid";

const AddTodo = ({todos, setTodos, updateLocal}) => {
	
	const [inputError, setInputError] = useState('');
	const inputText = useRef();
	
	function dateActually() {
		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let hour = date.getHours();
		let minutes = date.getMinutes();
		let time = `${setDays(day)}.${setMonth(month)}.${year} ${hour}:${setMinutes(minutes)}`
		return time;
	}
	
	function setMonth(month) {
		return month < 10 ? '0' + month : month;
	}
	
	function setMinutes(minutes) {
		return minutes < 10 ? '0' + minutes : minutes;
	}
	
	function setDays(day) {
		return day < 10 ? '0' + day : day;
	}
	

	
	const addTask = () => {
		const copy = [...todos];
		const newTask = {
			_id: nanoid(),
			title: inputText.current,
			date: dateActually(),
			isComplete: false
		}
		if (inputText && inputText?.current.length < 4) {
			setInputError('Need more symbols!');
			return
		} else {
			setInputError('');
		}
		
		const current = [newTask, ...copy]
		setTodos(current);
		updateLocal(current);
		inputText.current = '';
		const form = document.querySelector('#form')
		form.reset();
		setInputError('');
	}
	
	return (
		<div className='todoItem w-full bg-slate-400 mt-20 rounded-2xl flex p-3 mb-20 items-center m-3 '>
			
			<BiAddToQueue onClick={() => addTask()} size={24} className=' text-green-400 mr-5 cursor-pointer  '/>
			<form id='form' className={'flex-auto '} action="#">
				<div className={'flex w-full '}>
					<input
						type="text"
						onKeyPress={e => e.key === 'Enter' && addTask()}
						onChange={e => {
							inputText.current = e.target.value
						}}
						className={`outline-none block w-full bg-transparent placeholder-gray-900 text-2xl text-gray-800`}
						placeholder={'Add task'}
					/>
					<span className={'whitespace-nowrap text-xl text-red-600 underline '}>{inputError}</span>
				</div>
			
			</form>
		
		</div>
	);
};

export default AddTodo;