var Timer = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        };
    },
    componentDidMount:function () {
      this.timer =  setInterval(this.tick,1000);
    },
    tick:function () {
        this.setState({seconds:this.state.seconds+1});
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    render: function () {
        return (
            <h4>{this.state.seconds} Second</h4>
        );
    }
});

ReactDOM.render(
    <Timer/>,
    document.getElementById('mount-point')
);