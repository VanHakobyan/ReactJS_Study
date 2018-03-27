var contact = [
    {
        id: 1,
        name: 'Van',
        phoneNumber: '245634563213',
        image: ''
    },
    {
        id: 2,
        name: 'Aram',
        phoneNumber: '24564346345',
        image: ''
    },
    {
        id: 3,
        name: 'Tsovinar',
        phoneNumber: '244534563213',
        image: ''
    },
    {
        id: 4,
        name: 'Narek',
        phoneNumber: '453645789354',
        image: ''
    },
    {
        id: 5,
        name: 'Gayane',
        phoneNumber: '243453564533',
        image: ''
    }
];

var Contact = React.createClass({
    render: function () {
        return(
        <li>
            <img src={this.props.image} width='60px' height='60px'/>
            <div>{this.props.name}</div>

        </li>);
    }
});
var ContactList = React.createClass({
    render: function () {
        return (
            <div>
                <ul>
                    {
                        contact.map(function (el) {
                            return <Contact key={el.id}
                                            name={el.name}
                                            phoneNuber={el.phoneNumber}
                                            image={el.image}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <ContactList/>,
    document.getElementById('content')
);