import  React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./Components/AppHeader";
import SearchPanel from "./Components/SearchPanel";
import TodoList from "./Components/TodoList";

const App= ()=>{

    const todoData = [
        {id:1,label:"Drink Coffee", important:false},
        {id:2,label:"Do tasks", important:false},
        {id:3,label:"Call SI", important:true},
        {id:4,label:"Call SV", important:true}
    ];

    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));