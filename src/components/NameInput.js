import React from 'react';

export default function NameInput(props) {
  return (
    <form className='nameInput' onSubmit={e => props.handleSubmit(e)}>
      <label htmlFor='firstName'>First Name:</label>
      <input type='text' id='firstName' name='firstName' />
      <label htmlFor='lastName'>Last Name:</label>
      <input type='text' id='lastName' name='lastName' />
      <select name='generator'>
        <option value='metalBand'>Metal Band</option>
        <option value='leprechaun'>Leprechaun</option>
      </select>
      <button type='submit'>Generate</button>
    </form>
  );
}