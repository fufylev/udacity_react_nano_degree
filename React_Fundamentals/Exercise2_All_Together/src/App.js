import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatFrame from "./ChatFrame";

const users = [{username: 'Amy'}, {username: 'John'}];

class App extends Component {
    state = {
        messages: [],
    };

    addMessage = message => {
        this.setState((prevState) => ({
            messages: [
                ...prevState.messages,
                message
            ]
        }));
    };

    render() {
        const {messages} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    {users.map(user =>
                        <ChatFrame
                            key={user.username}
                            user={user}
                            messages={messages}
                            onAddMessage={this.addMessage}
                        />)}
                </div>
            </div>
        );
    }
}

export default App;
