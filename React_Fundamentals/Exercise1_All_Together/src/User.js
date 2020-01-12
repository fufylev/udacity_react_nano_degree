import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    const {user, toShowGames} = props;

    return (
        <li >
            <strong>Full name: {`${user.firstName} ${user.lastName}`}</strong>
            <p>Username: {user.userName}</p>
            <p>Number of Games Played: {toShowGames ? user.gamesPlayedCount : '*'}</p>
        </li>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    toShowGames: PropTypes.bool.isRequired,
};

export default User;