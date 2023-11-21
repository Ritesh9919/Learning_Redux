
import { useSelector, useDispatch } from "react-redux";
// import {toggleTodo} from '../redux/actions/todoAction';
import {actions, todoSelector} from '../redux/reducers/todoReducer';


const TodoList = ()=> {
    const dispatch = useDispatch();
    const todos = useSelector(todoSelector);
    return (
        <>
        <div className="todoList-container">
            {todos.map((todo, index)=> {
                return (
                    <div className="todo-item" key={todo.id}>
                    <p>{todo.text}</p>
                    <p className={todo.completed ? 'todo-completed':'todo-pending'}>{todo.completed ? 'Completed':'Pending'}</p>
                    <button className="toggle-btn" onClick={()=> 
                        dispatch(actions.toggle(index))}>Toggle</button>
                </div>
                )
            })}
            
            
        </div>
        <hr/>
        </>
    )
}


export default TodoList;