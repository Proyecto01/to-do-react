import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSbumit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSbumit}>
            <label>Escribe tu nevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla para el almuerzo' />
            <div class='TodoForm-buttonContainer'>
                <button
                    type='button'
                    class='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancel</button>
                <button 
                    class='TodoForm-button TodoForm-butto--add'
                    type='submit'>Add</button>
            </div>
        </form>
    );
}
export {TodoForm};