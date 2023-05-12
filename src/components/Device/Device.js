import React from 'react';
import Deg from '../Deg/Deg';

const Device = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <Deg deg="IT Support"></Deg>
        </div>
    );
};

export default Device;