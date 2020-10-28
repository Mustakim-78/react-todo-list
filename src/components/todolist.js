import React from 'react';
import Eachtodo from './eachtodo'
import './todolist.css';
function Todolist(props) {
    
    //props.filteredtodo.forEach(i => console.log(i))
    return (
        <div className="todo-container">    
            <ul className="todo-list">  
                {props.filteredtodo.map(i => <Eachtodo key={i.id} settodoarray = {props.settodoarray} todoarray = {props.todoarray} text={i.text} todo = {i}/>)}  
            </ul>
    </div>
    )
}

export default Todolist;