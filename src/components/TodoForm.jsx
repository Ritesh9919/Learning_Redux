import { useState } from "react";
import {useDispatch} from 'react-redux';
// import {addTodo} from '../redux/actions/todoAction';
import {actions} from '../redux/reducers/todoReducer';

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e)=> {
      e.preventDefault();
      dispatch(actions.add(todoText));
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
