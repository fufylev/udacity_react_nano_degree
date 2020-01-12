import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";
import AddMessage from "./AddMessage";

const ChatFrame = props => {
    const {user, messages, onAddMessage} = props;
    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <ul className="message-list">
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        message={message}
                        user={user}
                    />
                ))}
            </ul>
            <AddMessage onAddMessage={onAddMessage} user={user}/>
        </div>
    );
};

ChatFrame.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    onAddMessage: PropTypes.func.isRequired,
};
export default ChatFrame;