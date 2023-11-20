import {Provider} from 'react-redux';
import {store} from './redux/store';
import { NoteForm, TodoForm,TodoList } from "./components";


function App() {
  
  return (
    <div className="App">
      <h1 style={{textAlign:'center', color:'gray'}}>Todo App</h1>
      <Provider store={store}>
        <TodoForm/>
        <TodoList/>
        <NoteForm/>
       </Provider>

    </div>
  );
}

export default App;
