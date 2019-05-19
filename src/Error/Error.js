import React from 'react';
import './Error.scss';

const Error = ({ value }) => (
  <div className="error">
    { !value || `Error: ${ value }` }
  </div>
);

export default Error;