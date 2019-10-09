import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      quote: '',
      status: ''
    }
    this.props = props;
  }

  updateFormState = (event, key) => {
    this.setState({ [key]: event.target.value})
  }

  buttonErrorHandling = () => {
    const stateValues = Object.values(this.state);
    let checkValues = true;
    stateValues.forEach(value => {
      if (value === '') {
        checkValues = false;
      }
    })
    if (checkValues === true) {
      this.props.updateUserState(this.state)
    }
  }

  render() {
    return (
      <header>
        <h1>Enter Your Information!</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.updateFormState(event, 'name')} 
        />
        <input
          type="text"
          placeholder="Favorite Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.updateFormState(event, 'quote')} 
        />
        <input
          type="text"
          placeholder="Your Status"
          name="status"
          value={this.state.status}
          onChange={event => this.updateFormState(event, 'status')} 
        />
        <button onClick={this.buttonErrorHandling}>Submit</button>
      </header>
    )
  }
}

export default Form;