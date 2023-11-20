import {actions} from './todoReducer'; 
const {createSlice} = require('@reduxjs/toolkit');




const initialState = {
    message:''
}


const notificationSlice = createSlice({
    name:'notification',
    initialState:initialState,
    reducers:{

    },

    // way to create extra reducer

    //1 extraReducers:{
    //     "todo/add":(state, action)=> {
    //         state.message = 'Todo is created';
    //     },
    //     "note/add":(state, action)=> {
    //         state.message = 'Note is created';
    //     }
    // }
    //2 extraReducers:(builder)=> {
    //     builder.addCase(actions.add, (state, action)=> {
    //         state.message = "Todo is created";
    //     })
        
    // }
    extraReducers:{
        [actions.add]:(state, action)=> {
            state.message = 'Todo is created';
        }
    }
})



export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = ((state)=> state.notificationReducer.message);