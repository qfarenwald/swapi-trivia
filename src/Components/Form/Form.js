import React, { Component } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      quote: '',
      status: '',
      isValid: false
    }
    this.props = props;
  }

  updateFormState = (event, key) => {
    this.setState({ [key]: event.target.value})
    this.errorHandling();
  }

  errorHandling = () => {
    if ((this.state.name !== '') && (this.state.quote !== '') && (this.state.status !== '')) {
      this.setState(() => ({ isValid: true}))
      this.props.updateUserState(this.state);
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
        <Link to={this.state.isValid ? "/movies" : "/"}><button>Submit</button></Link>
      </header>
    )
  }
}

export default Form;