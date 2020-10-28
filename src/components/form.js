import React,{useRef} from 'react'
import './form.css';
function Form(props) {
    
    const textInput = useRef("");
    const settodoarrayhandler = (e) => {
        e.preventDefault();
        console.log(textInput.current.value);
        props.settodoarray([...props.todoarray,{text:textInput.current.value,completed : false, id : parseInt(Math.random()*1000)}]);
        textInput.current.value = "";
    }
    const statuschange = (e) => props.setstatus(e.target.value);
    return (
        <form>
            <input ref={textInput} type="text" className="todo-input"/>
            <button className="todo-button" onClick= {settodoarrayhandler}>
                <i className="fas fa-plus-square"></i>
            </button>        
            <div className="select">
                <select name="todotype" className="filter-todo" onChange={statuschange}> 
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;