import React, {useState,useEffect} from 'react';
import Form from './components/form';
import Todolist from './components/todolist';
import './App.css';

function App() {
  const [todoarray, settodoarray] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredtodo, setfilteredtodo] = useState([]);
  
  useEffect(() => {
    getfromlocal();
  },[]);  

  useEffect(() => {
    statushandler();
    savetolocal();
    },[todoarray,status]);

  function statushandler(){
      switch(status)
      {
        case "completed":
          setfilteredtodo(todoarray.filter(t => t.completed === true))
          break;
        case "uncompleted":
          setfilteredtodo(todoarray.filter(t => t.completed === false))
          break;
        default:
          setfilteredtodo(todoarray);
          break;
      }
  }
  function savetolocal(){
      localStorage.setItem("todos",JSON.stringify(todoarray));
  }
  function getfromlocal(){
    if(localStorage.getItem("todos") === null)
      localStorage.setItem("todos",JSON.stringify([]));
    else
    settodoarray(JSON.parse(localStorage.getItem("todos")));
  }
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
    </header>
    <Form todoarray = {todoarray} settodoarray = {settodoarray} setstatus={setstatus}/>
    <Todolist todoarray = {todoarray} settodoarray = {settodoarray} filteredtodo = {filteredtodo} setfilteredtodo= {setfilteredtodo}/>
    </div>
  );
}
export default App;