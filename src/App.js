import React from 'react';
import './App.css'
import Persons from './components/Persons/Persons'

import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black
  }
`;

class App extends React.Component {
  state = {
    persons: [
      { id: 123114, name: 'Bikram', age: 30 },
      { id: 545366, name: 'Sneha', age: 27 },
      { id: 743453, name: 'Sulekha', age: 54 }
    ],
    showPersons: false
  };

  // switchNameHandler = () => {
  //   this.setState({
  //     persons: [
  //       { name: 'Bikram Keshari', age: 30 },
  //       { name: 'Snehasmita', age: 27 },
  //       { name: 'Sulekha', age: 55 }
  //     ]
  //   })
  // }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (

        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />

      );
    }
    return (
     
        <div className="App">
          <h1>This is app!</h1>
          <StyledButton
            onClick={this.togglePersonsHandler}
            alt={this.state.showPersons}>Change
          </StyledButton>

          {persons}


        </div>
    
    );
  }


}

export default App;