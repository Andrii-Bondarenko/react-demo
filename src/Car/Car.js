import React from 'react';


export default (props) => (
    <div>
        <h2>Car name: {props.name}</h2>
        {props.children}
        <button>Click</button>
    </div>
)