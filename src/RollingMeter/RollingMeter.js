import React from 'react';
import './RollingMeter.scss';

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
  <div className={ `tick ${ size || '' }` } />
);

const RollingMeter = ({ value }) => (
  <div className="rolling-meter-wrapper">
    <div className="rolling-meter">
      <div className="arrow" />
      <NumberStrip value={ value } />
    </div>
  </div>
);

export default RollingMeter;