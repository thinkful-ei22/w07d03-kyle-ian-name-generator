import React from 'react';

export default function NameInput(props) {
  return (
    <form className='nameInput' onSubmit={e => e.preventDefault()}>
      <label htmlFor='firstName'>First Name:</label>
      <input type='text' id='firstName' onChange={ e => props.handleFirstName(e.target.value)} />
      <label htmlFor='lastName'>Last Name:</label>
      <input type='text' id='lastName' onChange={ e => props.handleLastName(e.target.value)} />
      <button type='submit' onClick={() => props.handleClick()}>Generate</button>
    </form>
  );
}