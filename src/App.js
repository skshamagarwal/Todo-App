import './App.css';
import React, { useState, useEffect } from 'react';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

function App() {

  let initTodo;
  if (localStorage.getItem("todos")=== null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, description) => {
    let lenTodos = todos.length
    let s_no;

    if (lenTodos > 0) {
      s_no = todos[lenTodos - 1].s_no + 1
    }
    else {
      s_no = 1
    }
    const taskInfo = {
      s_no: s_no,
      task: title,
      description: description,
      completed: false
    }
    setTodos([...todos, taskInfo]);
    console.log("Task added ->", taskInfo)

    // localStorage.setItem("todos", JSON.stringify(todos))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("Deleted", todo)

    localStorage.setItem("todos", JSON.stringify(todos))
  }

  let [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  
  // let [todos, setTodos] = useState([
  //   {
  //     s_no: 1,
  //     task: "Finish Homework",
  //     description: "ribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button ",
  //     completed: false
  //   },
  //   {
  //     s_no: 2,
  //     task: "Finish Reac App",
  //     description: "ribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button ",
  //     completed: false
  //   },
  //   {
  //     s_no: 3,
  //     task: "Finish Lab",
  //     description: "ribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button ",
  //     completed: false
  //   }
  // ])

  return (
    <>
      <Navbar title='Todo App' searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;