import React from 'react';

const Label = ({ value, noValue }) => (
  <div className="label">
    <LabelTick />
    { !noValue || <div className="value">{ value }</div> }
  </div>
);

const NumberStrip = ({ value }) => (
  <div
    className="number-strip"
    style={{ left: `-${ value * 50 + 25}px` }}
  >
    {
      Array
        .from(Array(100).keys())
        .map(i => (
          i % 5 === 0 ?
            <Label
              key={ `label${ i }` }
              value={ i }
              noValue
              tick
            /> :
            <Label
              key={ `label${ i }` }
              value={ i }
              tick
            />
        ))
    }
  </div>
);

const LabelTick = () => <div className="tick" />;

const Speedometer = ({ value }) => (
  <div className="speedometer">
    <div className="arrow" />
    <NumberStrip value={ value } />
  </div>
);

export default Speedometer;