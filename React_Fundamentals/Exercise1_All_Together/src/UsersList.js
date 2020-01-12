import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';


class UsersList extends Component {
    state = {
        isShowGames: true,
    };

    toggleShowGamesButton = () => {
        this.setState(prevState => ({
            isShowGames: !prevState.isShowGames
        }));
    };

    render() {
        const {users} = this.props;
        const {isShowGames} = this.state;

        return (
            <div>
                {users.length > 0 &&
                <button onClick={this.toggleShowGamesButton}>{`${isShowGames ? 'Hide': 'Show'} the Number of Games Played`}</button>}
                <br/>
                {users.length > 0 && <p className="items">Users</p>}
                <ul className="item-list">
                    {users.map((user) => <User key={user.userName} user={user} toShowGames={isShowGames}/>)}
                </ul>
            </div>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UsersList;