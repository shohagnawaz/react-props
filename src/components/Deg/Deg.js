import React, { useState } from 'react';

const Deg = (props) => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    return (
        <div>
            <h3>Designation: {props.deg}</h3>
            <h4>My Current Steps: {steps}</h4>
            <button onClick={increaseSteps}>Steps Count</button>
        </div>
    );
};

export default Deg; <p>Designation: {}</p>