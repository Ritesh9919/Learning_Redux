import axios from 'axios';
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');


const initialState = {
  todos: [],
};


export const getInitialStateAsync = createAsyncThunk("todo/getInitialState", 
//async(args, thunkApi)=> {
  //  const {data} = await axios.get('/todos');
  //  thunkApi.dispatch(actions.setInitialState(data));
   () => {
    return axios.get('/todos');
   }

)

export const addTodoAsync = createAsyncThunk("todo.addTodo", async(payload)=> {
  
  // const res = await fetch('/todos', {
  //   method:'POST',
  //   headers:{
  //     'content-type':'application/json'
  //   },
  //   body:JSON.stringify({
  //     text:payload
  //   })
  // })
  // return res.json()
  const res = await axios.post('/todos', {
    text:payload
  })
  return res;

} )

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
  },
  extraReducers:(builder)=> {
    builder.addCase(getInitialStateAsync.fulfilled, (state, action)=> {
      state.todos = [...action.payload.data];
    })
    .addCase(addTodoAsync.fulfilled, (state, action)=> {
      state.todos.push(action.payload.data);
    })
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
