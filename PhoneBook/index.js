var contact = [
    {
        id: 1,
        name: 'Vanik Hakobyan',
        phoneNumber: '245634563213',
        image: 'https://i.gyazo.com/54496b90f8d10ee7dc847b78af342fe1.png'
    },
    {
        id: 2,
        name: 'Aram Zhamkochyan',
        phoneNumber: '24564346345',
        image: 'https://i.gyazo.com/694419a364a586992d93762daa4cb9b7.png'
    },
    {
        id: 3,
        name: 'Tsovinar Ghazaryan',
        phoneNumber: '244534563213',
        image: 'https://i.gyazo.com/0319342e6dcfb16b28f07d2f7279ac69.png'
    },
    {
        id: 4,
        name: 'Narek Anatolyan',
        phoneNumber: '453645789354',
        image: 'https://i.gyazo.com/35a8dff3c0163594dd2d2204ed66009d.png'
    },
    {
        id: 5,
        name: 'Gayane Khachatryan',
        phoneNumber: '243453564533',
        image: 'https://i.gyazo.com/f8855c9c5cfa141a0d392d053dc039a9.png'
    },
    {
        id: 6,
        name: 'Mery Sahakyan',
        phoneNumber: '34553564533',
        image: 'https://i.gyazo.com/4d0a88bb35daa74b87db61a6c17cee56.png'
    }
];

var Contact = React.createClass({
    render: function () {
        return (
            <li className="contact">
                <img className="contact-image" src={this.props.image} width='60px' height='60px'/>
                <div className="contact-Info">
                    <div className="contact-name">{this.props.name}</div>
                    <div className="contact-phoneNumber">{this.props.phoneNumber}</div>
                </div>
            </li>);
    }
});
var ContactList = React.createClass({
    getInitialState: function () {
        return {
            displayedContacts: contact
        };
    },
    handleSearch: function (event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = contact.filter(function (el) {
            var searchElement = el.name.toLowerCase();
            return searchElement.indexOf(searchQuery) !== -1;
        })
       this.setState({
           displayedContacts:displayedContacts
       })
    },
    render: function () {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch}/>
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function (el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
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