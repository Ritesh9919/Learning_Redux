// import * as redux from 'redux';
import {todoReducer} from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducer';

const {configureStore}  = require('@reduxjs/toolkit');






export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer
    }
});