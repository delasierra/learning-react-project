/**
 * Created by csierra on 5/8/18.
 */
import React from 'react';
import classes from './Cockpit.css';
import withClassWrapper2 from '../../hoc/WithClassWrapper2'

const cockpit = (props) => {
    const assignedClasses = [];
    // const classes = {red: 'red', bold: 'bold', cockpit: 'Cockpit'}
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {
        // btnClass += classes.red;
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        // btnClass += classes.bold;
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle Persons
            </button>
        </div>
    );
};

export default withClassWrapper2(cockpit, classes.Cockpit);
