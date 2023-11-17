import {Provider} from 'react-redux';
import {store} from './redux/store';
import { useState } from "react";
import { TodoForm,TodoList } from "./components";

function App() {
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Provider store={store}>
       <TodoForm/>
       <TodoList/>
       </Provider>

    </div>
  );
}

export default App;
