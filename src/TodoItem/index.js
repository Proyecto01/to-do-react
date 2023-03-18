import react from "react";
import './TodoItem.css';

function TodoItem(props){

    /* const onComplete = () => {
      alert('Ya completaste el todo ' + props.text);
    }; */

   /*  const onDelete = () => {
      alert('Borraste el todo ' + props.text);
    }; */

    return (
        <li className="todo-item">
            <span className={`icon icon__check ${props.completed && 'icon__check--active'}`}
                  onClick={props.onComplete}
            >C</span>
            <p className={`todo-item__p ${props.completed && 'todo-item__p--completed'}`}
            >{props.text}</p>
            <span className="icon icon__delete" onClick={props.onDelete}>X</span>
        </li>
    );
}

export { TodoItem };