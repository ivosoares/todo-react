import React from 'react';
import './App.css';
import TodoList from './components/todolist/TodoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faCheck, faPlus);

function App() {
  return (
    <div className="App container">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
