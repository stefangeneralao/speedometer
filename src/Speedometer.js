import React from 'react';

const Label = ({ value }) => (
  <div className="label">
    <LabelTick />
    { value || <div className="value">{ value }</div> }
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
            <Label key={ `label${ i }` } value={ i } /> :
            <Label key={ `label${ i }` } />
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