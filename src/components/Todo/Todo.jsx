import React from 'react';
import {BsCheck} from "react-icons/bs";
import {TiDeleteOutline} from "react-icons/ti";
import cn from 'classnames';

const Todo = ({todo, changeTodo, deleteTodo}) => {
	return (
		
		<div className='w-full bg-slate-700 justify-between rounded-2xl mb-5 flex p-3 items-center m-3 '>
			
			<button
				className={'flex items-center '}
				onClick={() => changeTodo(todo._id)}
			>
				<BsCheck
					size={24}
					style={todo.isComplete ? {color: '#15FF00'} : {color: '#FFFFFF4A'}}
					className='block mr-3 bg-pink-700 rounded-lg duration-500 '/>
				
				<span className={
					cn('text-2xl', {'line-through': todo.isComplete,})}>
						{todo.title}
					</span>
			
			</button>
			
			<TiDeleteOutline
				size={34}
				className='hover:text-pink-700 duration-500 cursor-pointer '
				onClick={() => deleteTodo(todo._id)}
			/>
		</div>);
};

export default Todo;