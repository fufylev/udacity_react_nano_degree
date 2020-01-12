import React from 'react';
import PropTypes from 'prop-types';

const Message = props => {
    const {message, user} = props;
    return (
        <li
            className={
                message.username === user.username ? 'message sender' : 'message recipient'
            }
        >
            <p>{`${message.username}: ${message.text}`}</p>
        </li>
    );
};

Message.propTypes = {
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
};

export default Message;