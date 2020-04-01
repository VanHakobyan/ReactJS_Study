import React from "react";
import TodoListItem from "./TodoListItem";
import  "./TodoList.css"

const TodoList = ({todos}) =>{

    const elements = todos.map((item)=>{
        const {id, ...itemProps} = item;
       return (
           <li key={id} className="list-group-item"><TodoListItem {...itemProps}/></li>
       )
    });

    return(
        <ul className="list-group todo-list todo-list">
            {elements}
        </ul>
    );
};
export default TodoList;