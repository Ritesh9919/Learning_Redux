import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
// import {addTodo} from '../redux/actions/todoAction';
import {actions} from '../redux/reducers/todoReducer';
import { notificationSelector } from "../redux/reducers/notificationReducer";
import {toast} from 'react-toastify';
import { toastConfig } from "../utils";

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const message = useSelector(notificationSelector);
    
      
      const dispatch = useDispatch();

    const handleSubmit = (e)=> {
      e.preventDefault();
      dispatch(actions.add(todoText));
      // mannual logger
      // console.log("[log]: todo add action dispatches");
      setTodoText('');
      toast.success(message, toastConfig);
      
    }

    
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter Text" value={todoText} onChange={(e)=> setTodoText(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add Todo</button>
        </div>
      </form>
      
      
      
    </>
  );
};

export default TodoForm;
