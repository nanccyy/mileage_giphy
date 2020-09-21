import React from 'react';
import './Heading.scss';

const Heading = () => {
  return (
    <div className="heading">
      <h1 className="heading__title">Mileage Made Simple</h1>
      <p className="heading__text">
        Motivation And Your Personal Vision An Unbeatable Force
            </p>
      <button type="button" className="heading__button">
        <a src="#">Start Free Trial</a>
      </button>
    </div>
  );
}
export default Heading;