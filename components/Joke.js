/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText !== 'Punchline' ? joke.punchline : ''}</p>
    </>
  );
}

Joke.protoTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
