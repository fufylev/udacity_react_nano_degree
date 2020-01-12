import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            userName: '',
            gamesPlayedCount: 0
        },
        userExists: false
    };

    cleatState() {
        this.setState(() => ({
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                gamesPlayedCount: 0
            },
            userExists: false
        }))
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value,
            }
        }));
    };

    ifUserExists = userName => {
        const {users} = this.props;
        for (let user of users) {
            if (user.userName === userName) {
                return true;
            }
        }
        return false;
    };

    addUser = event => {
        event.preventDefault();
        const ifUserExists = this.ifUserExists(this.state.user.userName);
        if (!ifUserExists) {
            this.props.onAddUser(this.state.user);
            this.cleatState();
        } else {
            this.setState(() => ({userExists: true}))
        }
    };

    inputIsEmpty = () => {
        return (this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '');
    };

    render() {
        const {firstName, lastName, userName} = this.state.user;

        return (
            <form onSubmit={this.addUser}>
                <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={this.handleChange}
                    name="firstName"
                />
                <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={this.handleChange}
                    name="lastName"
                />
                <input
                    type="text"
                    placeholder="username"
                    value={userName}
                    onChange={this.handleChange}
                    name="userName"
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
                <br/>
                {this.state.userExists && <h2 className="user-exists">This User already exists</h2>}
            </form>
        );
    }
}

Form.propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};

export default Form;