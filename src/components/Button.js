import React from 'react';
import './Button.css';

const Button =(props) => {
    return <button onClick ={props.callApi}>
        click to generate a joke.
    </button>
}

export default Button;