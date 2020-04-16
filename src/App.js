import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    };

    //Bind give context to the method
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    /**
     * Samen as:
     * const users = this.state.users;
     * const searchFiled = this.steate.searchField;
     */
    const { users, searchField} = this.state;
    const filterUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1> Users </h1>
        <SearchBox 
        placeholder='Search user'
        handleChange={this.handleChange}
        />
        <CardList users={filterUsers} />
      </div>
    );
  }
}

export default App;
