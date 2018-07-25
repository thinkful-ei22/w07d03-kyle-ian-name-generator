import React from 'react';

import NameInput from './NameInput';
import Result from './Result';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      generator: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const firstName = e.target.firstName.value.toLowerCase();
    const lastName = e.target.lastName.value.toLowerCase();
    const generator = e.target.generator.value;
    this.setState({firstName, lastName, generator});
  }

  render() {
    return (
      <div className='app'>
        <NameInput
          handleSubmit= {this.handleSubmit} />
        <Result
          generator={this.state.generator}
          firstName={this.state.firstName}
          lastName={this.state.lastName} />
      </div>
    );
  }
}
