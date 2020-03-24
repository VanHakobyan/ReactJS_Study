import  React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./Components/AppHeader";
import SearchPanel from "./Components/SearchPanel";
import TodoList from "./Components/TodoList";

const App= ()=>{

    const todoData = [
        {label:"Drink Coffee", important:false},
        {label:"Do tasks", important:false},
        {label:"Call SI", important:true},
        {label:"Call SV", important:true}
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