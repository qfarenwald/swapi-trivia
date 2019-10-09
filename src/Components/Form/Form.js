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

  updateUserInfo = (event, key) => {
    this.setState({ [key]: event.target.value})
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
          onChange={event => this.updateUserInfo(event, 'name')} 
        />
        <input
          type="text"
          placeholder="Favorite Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.updateUserInfo(event, 'quote')} 
        />
        <input
          type="text"
          placeholder="Your Status"
          name="status"
          value={this.state.status}
          onChange={event => this.updateUserInfo(event, 'status')} 
        />
        <button onClick={() => {this.props.updateUserState(this.state)}}>Submit</button>
      </header>
    )
  }
}

export default Form;