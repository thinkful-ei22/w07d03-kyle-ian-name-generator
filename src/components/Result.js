import React from 'react';
import './Result.css';

const {nameGenerator} = require('./generator');

export default function Result(props) {
  if (props.generator) {
    const {newFirstName, newLastName, displayName, displayImg} = nameGenerator(props.firstName, props.lastName, props.generator);
    const generatorMessage = `Your ${displayName} name is:`;

    return (
      <div className='result'>
        <h2>{generatorMessage}</h2>
        <p>{newFirstName} {newLastName}</p>
        <img src={displayImg} />
      </div>
    );
  }
  return '';
}