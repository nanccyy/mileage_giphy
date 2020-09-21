import React, { useEffect, useRef } from 'react';
import './Slider.scss';
import classNames from 'classnames';
import { gsap, MotionPathPlugin, TimelineLite, Power3 } from "gsap/all";
import { TweenMax } from 'gsap/all';
gsap.registerPlugin(MotionPathPlugin);

export const Slider = ({ changeLink, activePointIndex }) => {
  let app = useRef(null);
  let heading = useRef(null);
  let points = useRef(null);
  const tl = new TimelineLite()

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
    tl.from(heading, 1.2, { y: -100, ease: Power3.easeOut },)
      .from(heading, 2, { scale: 0.6, ease: Power3.easeOut }, 0.5)
      .from(points, 1.2, { y: -100, ease: Power3.easeOut }, 0.5)
      .from(points, 2, { scale: 0.6, ease: Power3.easeOut }, 0.5);
  }, [])

  return (
    <>
      <div ref={el => app = el}>
        <section className="heading">
          <div className="heading__container" ref={el => heading = el}>
            <h1 className="heading__title">Mileage Made Simple</h1>
            <p className="heading__text">
              Motivation And Your Personal Vision An Unbeatable Force
            </p>
            <button type="button" className="heading__button">
              <a src="#">Start Free Trial</a>
            </button>
          </div>
        </section>
        <div className="slider">
          <button
            type="button"
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
          <div className="slider__points" ref={el => points = el}>
            <div
              className={classNames({
                slider__point: true,
                slider__point_active: activePointIndex === 0
              })}>
              <div
                className={classNames({
                  active: activePointIndex === 0
                })}
              >
              </div>
            </div>
            <div
              className={classNames({
                slider__point: true,
                slider__point_active: activePointIndex === 1
              })}
            >
              <div
                className={classNames({
                  active: activePointIndex === 1
                })}
              >
              </div>
            </div>
            <div
              className={classNames({
                slider__point: true,
                slider__point_active: activePointIndex === 2
              })}
            >
              <div
                className={classNames({
                  active: activePointIndex === 2
                })}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}