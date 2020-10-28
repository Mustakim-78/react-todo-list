import React from 'react'
import './eachtodo.css';
function  Eachtodo(props) {
    const remove = (e) =>{
        let newarray = props.todoarray.filter(a => a.text !== props.text);
        props.settodoarray(newarray);
    }
    const complete = (e) =>{
        props.settodoarray(props.todoarray.map(element =>{
            if(element.id === props.todo.id){
                return {...element,completed : !element.completed};
            }
            return element;
        })
    )}
    return (
        <div className = {`todo ${props.todo.completed ? "completed" : ""}`}>
            <li className="listitem">{props.text}</li>
            <button className="complete" onClick={complete}><i className="fas fa-check"></i></button>
            <button className="delete" onClick ={remove}><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default Eachtodo;