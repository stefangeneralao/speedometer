import React from 'react';

const Error = ({ value }) => (
  <div className="error">
    { !value || `Error: ${ value }` }
  </div>
);

export default Error;