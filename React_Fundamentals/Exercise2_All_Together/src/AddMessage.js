import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {username: this.props.user.username, text: ''},
        };
    }

    inputHandler = (event) => {
        const {value} = event.target;
        this.setState((prevState) => ({
            ...prevState,
            message: {
                ...prevState.message,
                text: value
            }
        }));
    };

    isDisabled = () => {
        return this.state.message.text.length === 0;
    };

    clearState = () =>  {
        this.setState({
            message: {username: this.props.user.username, text: ''},
        });
    };

    addMessage = (event) => {
        event.preventDefault();
        this.props.onAddMessage(this.state.message);
        this.clearState();
    };

    render() {
        const {text} = this.state.message;

        return (
            <div>
                <form className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your message..."
                        value={text}
                        onChange={this.inputHandler}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn submit-button"
                            onClick={this.addMessage}
                            disabled={this.isDisabled()}
                        > SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


AddMessage.propTypes = {
    onAddMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default AddMessage;