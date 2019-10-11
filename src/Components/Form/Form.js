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
      this.setState(() => ({ isValid: true}));
      this.props.updateUserState(this.state);
    } else {
      this.setState(() => ({ isValid: false}));
    }
  }

  render() {
    return (
      <main className="form">
        <p style={{visibility: this.state.isValid ? 'hidden' : 'visible'}}>Please enter values for each input!</p>
        <input
          className="input-fill"
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.updateFormState(event, 'name')}
        />
        <input
          className="input-fill"
          type="text"
          placeholder="Favorite Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.updateFormState(event, 'quote')}
        />
        <div className="input-container">
          <label className="input-radio">
            <input type="radio" name="status" value="PADAWAN" onChange={event => this.updateFormState(event, 'status')}/> PADAWAN
            <span class="checkmark"></span>
          </label>
          <label className="input-radio">
            <input type="radio" name="status" value="JEDI" onChange={event => this.updateFormState(event, 'status')}/> JEDI
            <span class="checkmark"></span>
          </label>
          <label className="input-radio">
            <input type="radio" name="status" value="YODA" onChange={event => this.updateFormState(event, 'status')}/> YODA
            <span class="checkmark"></span>
          </label>
        </div>
        <Link to={this.state.isValid ? "/movies" : "/"}><button>Submit</button></Link>
      </main>
    )
  }
}

export default Form;
