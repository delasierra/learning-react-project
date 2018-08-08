import React from 'react';

import classes from './Person.css';
import withClassWrapper from '../../../hoc/WithClassWrapper';

const person = ( props ) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

// export default person;
export default withClassWrapper(person, classes.Person);