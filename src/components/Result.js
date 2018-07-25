import React from 'react';

export default function Result(props) {
  return (
    <div className='result'>
      <p>{props.firstName} {props.lastName}</p>
    </div>
  );
}