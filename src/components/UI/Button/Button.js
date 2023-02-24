import React from 'react';

const Button = (props) => {
    return (
        <button
            onClick={props.handleOnclick}
            className={props.class}
        >
            {props.text}
        </button>
    )
}

export default Button;