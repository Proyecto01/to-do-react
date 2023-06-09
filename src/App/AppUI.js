import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter  } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
    return(
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />
   
        <TodoList>
            { error && <TodosError /> }
            { loading && <TodosLoading /> }
            { (!loading && !searchedTodos.lenght) && <EmptyTodos />  }
          {searchedTodos.map(todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>
        )}
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export { AppUI };