import { ADD_TODO, TOGGLE_TODO } from "../actions/todoAction";

const initialState = {
  todos: [{text:"Reading at 2pm", completed:true}, {text:'Running at 4am', completed:false}],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
      
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i == action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
      
  }
};

export default todoReducer;