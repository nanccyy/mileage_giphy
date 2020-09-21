import React, { useEffect, useRef } from 'react';
import './Services.scss';
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export const Services = ({ }) => {

  let path = useRef(null);
  let dot = useRef(null);

  useEffect(() => {
    gsap.to(dot, {
      scrollTrigger: {
        trigger: dot,
        toggleActions: "restart pause resume pause",
        start: "top 100%",
        anticipatePin: 1,
        end: "1300px",
        pin: "start",
        scrub: 1,
      },

      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "power1.inOut"
    });
  }, []);

  return (
    <>
      <section className="services" id="services" >
        <svg className="services__pathSvg" width="664" height="1216" viewBox="0 0 664 1216" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="services__path"
            d="M22.9998 1C22.9998 1 649.558 119 663 589.542C655.833 1135 1 1215 1 1215"
            stroke="#29A0EC"
            ref={el => path = el} />
        </svg>
        <div className="services__dot" ref={el => dot = el}></div>

        <div className="services__container services__container_s">

          <div className="services__row services__row_large-padding" >
            <div className="services__imageContainer">
              <div className="services__bg">
                <img
                  alt="phone"
                  className="services__image services__image_initial"
                  src={require("../../images/services/services1.svg")}
                >
                </img>
              </div>
            </div>
            <div className="services__info">
              <h3 className="services__heading">Track every trip you make </h3>
              <p className="services__text">
                Every one of your trips is captured immediately and is never forgotten.
              </p>
              <ul className="services__list">
                <li className="services__item">
                  <span></span>
                  <p>No signal dropout</p>
                </li>
                <li className="services__item">
                  <span></span>
                  <p>No missed trips</p>
                </li>
              </ul>
              <button className="services__button button">
                <a
                  href="#"
                  className="button__link button__link_services"
                >
                  learn more
              </a>
                <span className="button__arrow"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="services__container services__container_l">
          <div className="services__row services__row_reversed">
            <div className="services__info services__info_extra-padding-top">
              <h3 className="services__heading">Classify with a single swipe </h3>
              <p className="services__text">
                Swipe right for business. Swipe left for personal. It’s as easy
                <br></br>as that.
              </p>
              <ul className="services__list">
                <li className="services__item">
                  <span></span>
                  <p>Review trips on the go</p>
                </li>
                <li className="services__item">
                  <span></span>
                  <p>Classify journeys in seconds</p>
                </li>
              </ul>
              <button className="services__button button">
                <a
                  href="#"
                  className="button__link button__link_services"
                >
                  learn more
              </a>
                <span className="button__arrow"></span>
              </button>
            </div>
            <div className="services__imageContainer">
              <div className="services__bg">
                <img
                  alt="phone"
                  className="services__image services__image_reversed"
                  src={require("../../images/services/services_img_reversed.svg")}
                >
                </img>
              </div>
            </div>
          </div>
        </div>

        <div className="services__container services__container_m">
          <div className="services__row">
            <div className="services__imageContainer">
              <div className="services__bg">
                <img
                  alt="phone"
                  className="services__image services__image_initial"
                  src={require("../../images/services/services1.svg")}
                >
                </img>
              </div>
            </div>
            <div className="services__info">
              <h3 className="services__heading">
                Claim your money back with
                <br></br>
                ease
                 </h3>
              <p className="services__text">
                Claiming mileage has never been so easy, with all calculations
                <br></br>
                done for you.
             </p>
              <ul className="services__list">
                <li className="services__item">
                  <span></span>
                  <p>100% HMRC compliance</p>
                </li>
                <li className="services__item">
                  <span></span>
                  <p>All logs in one place</p>
                </li>
              </ul>
              <button className="services__button button">
                <a
                  href="#"
                  className="button__link button__link_services"
                >
                  learn more
                </a>
                <span className="button__arrow"></span>
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
