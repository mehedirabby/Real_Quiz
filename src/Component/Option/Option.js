import React from 'react';
import './Option.css'

const Option = (props) => {
    console.log(props)
    return (
        <div>
            <p>Options: {props.option}</p>
            
            
        </div>
    );
};

export default Option;