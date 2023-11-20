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
    // extraReducers:{
    //     "todo/add":(state, action)=> {
    //         state.message = 'Todo is created';
    //     },
    //     "note/add":(state, action)=> {
    //         state.message = 'Note is created';
    //     }
    // }
    extraReducers:(builder)=> {
        builder.addCase(actions.add, (state, action)=> {
            state.message = "Todo is created";
        })
        
    }
})



export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = ((state)=> state.notificationReducer.message);