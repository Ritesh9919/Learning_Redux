
import { useSelector, useDispatch } from "react-redux";
import {toggleTodo} from '../redux/actions/todoAction';


const TodoList = ()=> {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todos);
    return (
        <>
        <div className="todoList-container">
            {todos.map((todo, index)=> {
                return (
                    <div className="todo-item" key={todo.id}>
                    <p>{todo.text}</p>
                    <p className={todo.completed ? 'todo-completed':'todo-pending'}>{todo.completed ? 'Completed':'Pending'}</p>
                    <button className="toggle-btn" onClick={()=> {dispatch(toggleTodo(index))}}>Toggle</button>
                </div>
                )
            })}
            
            
        </div>
        </>
    )
}


export default TodoList;