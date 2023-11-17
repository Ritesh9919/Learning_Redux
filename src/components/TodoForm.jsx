import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/todoAction';

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e)=> {
      e.preventDefault();
      dispatch(addTodo(todoText));
      setTodoText('');
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
