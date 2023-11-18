const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  todos: [{text:"Reading at 2pm", completed:true}, {text:'Running at 4am', completed:false}],
};


// Creating reducer using redux toolkit

const todoSlice = createSlice({
  name:'todo',
  initialState:initialState,
  reducers:{
    // this is add action
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
