
import { useSelector, useDispatch } from "react-redux";
// import {toggleTodo} from '../redux/actions/todoAction';
import {actions, todoSelector, getInitialStateAsync} from '../redux/reducers/todoReducer';

import { useEffect } from "react";



const TodoList = ()=> {
    const dispatch = useDispatch();
    const todos = useSelector(todoSelector);

     useEffect(()=> {
        dispatch(getInitialStateAsync())
        // Api call Using fetch

        // fetch("http://localhost:8000/todos")
        // .then((res)=> {
        //     return res.json();
        // })
        // .then((data)=> {
        //     console.log("data", data);
        // })

    
        // API call using axios
    //        axios.get('http://localhost:8000/todos')
    //        .then((res)=> {
    //         console.log(res.data);
    //         dispatch(actions.setInitialState(res.data));
    //        })

     },[]);

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