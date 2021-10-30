import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("Deleted", todo)
  }

  let [todos, setTodos] = useState([
    {
      s_no: 1,
      task: "Finish Homework",
      description: "ribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button ",
      completed: false
    },
    {
      s_no: 5,
      task: "Finish Homework",
      description: "ribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button ",
      completed: false
    },
    {
      s_no: 2,
      task: "Finish Reac App",
      description: "ribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button ",
      completed: false
    },
    {
      s_no: 3,
      task: "Finish Lab",
      description: "ribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button ",
      completed: false
    }
  ])
  return (
    <>
      <Navbar title='Todo App' searchBar={true} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;