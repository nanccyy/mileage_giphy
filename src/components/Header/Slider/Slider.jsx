import React from 'react';
import './Slider.scss';
import classNames from 'classnames';

export const Slider = ({ changeLink, activePointIndex }) => {
  return (
    <>
      <section className="heading">
        <div className="heading__container">
          <h1 className="heading__title">Mileage Made Simple</h1>
          <p className="heading__text">Motivation And Your Personal Vision An Unbeatable Force</p>
          <button type="button" className="heading__button">
            <a src="#">Start Free Trial</a>
          </button>
        </div>
      </section>
      <div className="slider">
        <button type="button"
          className="slider__button slider__button--left"
          name="left"
          onClick={(event) => { changeLink(event) }}
        >
        </button>
        <button
          type="button"
          className="slider__button slider__button--right"
          name="right"
          onClick={(event) => { changeLink(event) }}
        >
        </button>
        <div className="slider__points">
          <div className={classNames({
            slider__point: true,
            slider__point_active: activePointIndex === 0,
          })}>
            <div className={classNames({ active: activePointIndex === 0 })}></div>
          </div>
          <div className={classNames({
            slider__point: true,
            slider__point_active: activePointIndex === 1,
          })}>
            <div className={classNames({ active: activePointIndex === 1 })}></div>
          </div>
          <div className={classNames({
            slider__point: true,
            slider__point_active: activePointIndex === 2,
          })}>
            <div className={classNames({ active: activePointIndex === 2 })}></div>
          </div>
        </div>
      </div>
    </>
  )
}