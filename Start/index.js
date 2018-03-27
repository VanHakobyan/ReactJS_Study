var HelloWorld = React.createClass({
    render: function () {
        return <h1>Hello React {this.props.name}</h1>;
    }
});
ReactDOM.render(
   <div>
       <HelloWorld name="Van"/>
       <HelloWorld name="Aram"/>
       <HelloWorld name="Gayane"/>
       <HelloWorld name="Tsovinar"/>
   </div>,
    document.getElementById("app")
)