// import * as redux from 'redux';
import {todoReducer} from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducer';
import { notificationReducer } from './reducers/notificationReducer';
import { loggerMiddleware } from './middlewares/loggerMiddleware';

const {configureStore, getDefaultMiddleware}  = require('@reduxjs/toolkit');






export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:[...getDefaultMiddleware(), loggerMiddleware]
});