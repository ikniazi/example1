import React from 'react';

function Dinner(props)
{
    return(
        <h1>Hi we are in{props.courtName}</h1>
        <h2>Hi we are in{props.secondName}</h2>
    );
}
export default Dinner;