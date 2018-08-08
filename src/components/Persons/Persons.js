/**
 * Created by csierra on 5/8/18.
 */
import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('[Persons] componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Presons] shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked;
    }

    componentWillUpdate(nextPros, nextstate) {
        console.log('[UPDATE Persons] componentWillUpdate');
    }

    componentDidUpdate(nextPros, nextstate) {
        console.log('[UPDATE Persons] componentDidUpdate');
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        })
    }
}

export default Persons;