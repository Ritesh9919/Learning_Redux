const {createSlice} = require('@reduxjs/toolkit');


const initialState = {
    notes:[
        {text:"Reading docs", createdOn:new Date()},
        {text:"Going to market", createdOn:new Date()}
    ]
}

const noteSlice = createSlice({
    name:'note',
    initialState:initialState,
    reducers:{
        add:(state, action)=> {
            state.notes.push({
                text:action.payload,
                createdOn:new Date()
            })
        },
        delete:(state, action)=> {
            state.notes.map((note, i)=> {
                if(i == action.payload) {
                    state.notes.splice(action.payload, 1);
                }
                return note;
            })
        }
    }
})


export const actions = noteSlice.actions;
export const noteReducer = noteSlice.reducer;


export const noteSelector = ((state)=> state.noteReducer.notes);