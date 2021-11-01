import './App.css';
import React, { useState, useEffect } from 'react';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
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
  }

  const markDone = (todo) => {

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


  return (
    <>
      <Router>
        <Navbar title='Todo App' searchBar={true} />

        <Switch>

          {/* Switch to HomePage */}
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          {/* Switch to AboutPage */}
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;