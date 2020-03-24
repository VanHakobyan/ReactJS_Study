import  React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./Components/AppHeader";
import SearchPanel from "./Components/SearchPanel";
import TodoList from "./Components/TodoList";

const App= ()=>{
    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));