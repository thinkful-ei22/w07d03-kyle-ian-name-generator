import React from 'react';

import NameInput from './NameInput';
import Result from './Result';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  handleFirstName(name) {
    this.setState({tempFirstName: name});
  }

  handleLastName(name) {
    this.setState({tempLastName: name});
  }

  handleClick() {
    console.log('button clicked');
    this.setState({
      firstName: this.state.tempFirstName,
      lastName: this.state.tempLastName
    });
  }
  

  render() {
    return (
      <div className='app'>
        <NameInput
          handleFirstName={name => this.handleFirstName(name)}
          handleLastName={name => this.handleLastName(name)}
          handleClick={() => this.handleClick()} />
        <Result
          firstName={this.state.firstName}
          lastName={this.state.lastName} />
      </div>
    );
  }
}