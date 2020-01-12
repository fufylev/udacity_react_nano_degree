import React from 'react';

const DeleteItem = props => {
    const deleteLastItem = event => {
        props.onDeleteLastItem();
    };

    return (
        <button onClick={deleteLastItem} disabled={props.disabled}>
            Delete Last Item
        </button>
    );
};

export default DeleteItem;