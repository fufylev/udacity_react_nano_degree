import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import UsersList from "./UsersList";

class App extends Component {
    state = {
        users: [],
    };

    addUser = user => {
        this.setState(prevState => ({
            users: [...prevState.users, user],
        }));
    };

    render() {
        const {users} = this.state;

        return (
            <>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">ReactND - Coding Practice</h1>
                    </header>
                </div>
                <Form onAddUser={this.addUser} users={users}/>
                <UsersList users={users}/>
            </>
        );
    }
}

export default App;
