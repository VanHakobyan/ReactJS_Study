import React from 'react';

var helloWorld=React.createClass({
    render: function () {
        return <h1>Hello React</h1>;
    }
});
ReactDOM.render(
<helloWorld/>,
    document.getElementById("app")
)