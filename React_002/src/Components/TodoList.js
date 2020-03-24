import React from "react";

const TodoList = () =>{
    const items= ['Learn react','Do task:1020535']
    return(
        <ul>
            {items.map(x=>(<li>{x}</li>))}
        </ul>
    );
};
export default TodoList;