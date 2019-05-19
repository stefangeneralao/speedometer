import React from 'react';

const Error = ({ value }) => (
  !value || (
    <div className="error">
      Error: { value }
    </div>
  )
);

export default Error;