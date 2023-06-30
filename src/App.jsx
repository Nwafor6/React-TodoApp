import React, {Component} from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/landing"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import TodoTags from "./components/todo-tags"
import TodoDetail from "./components/TodoDetail";
import './App.css'

class App extends Component {
  state={
    todos:[
      {id:1, content:"Buy  a new book"},
      {id:2, content:"Read one chapter today"},
    ]
}
  render(){
    return(
      <BrowserRouter>
       {/* <TodoTags/> */}
       <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/todotags" element={<TodoTags/>}/>  
        <Route exact path="/tododetails" element={<TodoDetail/>}/>
        </Routes>
       {/* <TodoDetail/> */}

    </BrowserRouter>

    );
  }
}
export default App;