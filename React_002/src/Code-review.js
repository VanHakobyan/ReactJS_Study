import React from "react";
import ReactDOM from 'react-dom'
const LoginBox = ()=>{
    return <span className='login'>Login box</span>
};

const App=()=>{
    return(
        <div>
            <div>Header</div>
            <LoginBox/>
        </div>
    )
}
export default App;