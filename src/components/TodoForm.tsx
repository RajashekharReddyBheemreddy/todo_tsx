import React, {Dispatch, SetStateAction, useState} from 'react';
import TodoService from '../TodoService';
import TodoTypes from '../todo';
import '../styles/TodoForm.css'
interface propTypes {
    setTodos: Dispatch<SetStateAction<TodoTypes[]>>
}
export const TodoForm: React.FC<propTypes> = ({setTodos}) => {
    const [newTodoText, setNewTodoText] = useState<string>('');
    const handleAddTodo = () => {
        if(newTodoText.trim() !== ''){
            const newTodo = TodoService.addTodos(newTodoText);
            setTodos((prevTodo) => [...prevTodo, newTodo]);
            setNewTodoText('')
        }
    }
  return (
    <div className='inputForm'>
        <input type='text' value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} autoFocus={true} placeholder='Add a task'/>
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}
