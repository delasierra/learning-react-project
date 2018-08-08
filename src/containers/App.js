import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'

class App extends PureComponent {

    //Create lifehooks
    constructor(props) {
        super(props);
        console.log("[App] Constructor");
    }

    // componentWillMount() { //no recomended to use
    //     console.log("[App] componentWillMount") ;
    // }

    componentDidMount() {
        console.log("[App] componentDidMount");
    }

    //Update lifehooks
    // componentWillUpdate(nextPros, nextstate) { //no recomended to use
    //     console.log('[UPDATE App] componentWillUpdate', nextPros, nextstate);
    // }

    componentDidUpdate(nextPros, nextstate) {
        console.log('[UPDATE App] componentDidUpdate', nextPros, nextstate);
    }

    //New lifehooks
    static getDerivedStateFromProps (nextProps, prevState){
        console.log('[NEW LIFEHOOKS App] getDerivedStateFromProps', nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate (){
        console.log('[NEW LIFEHOOKS App] getSnapshotBeforeUpdate', 'Good for bring user to last Scroll');
        return null;
    }


    state = {
        persons: [
            {id: 'asfa1', name: 'Max', age: 28},
            {id: 'vasdf1', name: 'Manu', age: 29},
            {id: 'asdf11', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false,
        toggleClickCounter: 0
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        console.log('----- togglePersonsHandler');
        const doesShow = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClickCounter: prevState.toggleClickCounter + 1
            }
        });
    };

    render() {
        console.log('[App] Render');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <WithClass classes={classes.App}>
                <button onClick={() => {
                    this.setState({showPersons: true})
                }}>Send
                </button>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </WithClass>
        );
    }
}

export default App;
