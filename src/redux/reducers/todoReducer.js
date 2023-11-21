import axios from 'axios';
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');


const initialState = {
  todos: [],
};


export const getInitialStateAsync = createAsyncThunk("todo/getInitialState", (args, thunkApi)=> {
  axios.get('http://localhost:8000/todos')
  .then((res)=> {
   thunkApi.dispatch(actions.setInitialState(res.data));
   
  })
})

// Creating reducer using redux toolkit

const todoSlice = createSlice({
  name:'todo',
  initialState:initialState,
  reducers:{
    // this is add action
    setInitialState:(state, action)=> {
       state.todos = [...action.payload];
    },
    add:(state, action)=> {
      state.todos.push({
        text:action.payload,
        completed:false
      })
    },
    toggle:(state, action)=> {
       state.todos.map((todo, i)=> {
        if(i == action.payload) {
          todo.completed = !todo.completed
        }
        return todo
       })
    }
  }
});


export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;


// Selector
export const todoSelector = (state) => state.todoReducer.todos;



// Reducer using Redix

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
      
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i == action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };

//     default:
//       return state;
      
//   }
// };




// export default todoReducer;
