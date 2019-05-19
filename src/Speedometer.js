import React from 'react';
import './Speedometer.scss';

const Label = ({ value }) => (
  <div className="label">
    { 
      value || value === 0 ? (
        <>
          <Tick />
          <div className="value">{ value }</div>
        </>
      ) : (
        <Tick size={ 'small' } />
      )
    }
  </div>
);

const NumberStrip = ({ value }) => (
  <div
    className="number-strip"
    style={{ left: `-${ value * 50 + 25}px` }}
  >
    {
      Array
        .from(Array(200).keys())
        .map(i => (
          i % 5 === 0 ?
            <Label key={ `label${ i }` } value={ i } /> :
            <Label key={ `label${ i }` } />
        ))
    }
  </div>
);

const Tick = ({ size }) => (
  <div className={ `tick ${ size }` } />
);

const Speedometer = ({ value }) => (
  <div className="speedometer-wrapper">
    <div className="speedometer">
      <div className="arrow" />
      <NumberStrip value={ value } />
    </div>
  </div>
);

export default Speedometer;