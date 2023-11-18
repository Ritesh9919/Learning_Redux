// import * as redux from 'redux';
import {todoReducer} from './reducers/todoReducer';

const {configureStore}  = require('@reduxjs/toolkit');






export const store = configureStore({
    reducer:{
        todoReducer
    }
});