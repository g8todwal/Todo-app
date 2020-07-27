import React from 'react';
import TodoItem from './TodoItem';

const Todo = (props) => {
		return props.todos.map((todo) => (
			<TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />
		));	
}

export default Todo;