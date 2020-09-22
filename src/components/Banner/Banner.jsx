import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useIntersection } from 'react-use';
import './Banner.scss';
import { Slider } from '../Slider/Slider';
import { gsap, ScrollTrigger } from "gsap/all";
import PropTypes from 'prop-types';
const videoList = [{
  id: 1,
  address: "https://giphy.com/embed/NPP4Z7wMIf0SA",
},
{
  id: 2,
  address: "https://giphy.com/embed/99nxwvd22RZkY",
},
{
  id: 3,
  address: "https://giphy.com/embed/xqklsTVVXhPa",
}]

gsap.registerPlugin(ScrollTrigger);

const Banner = ({ setIsBanner }) => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "100px",
    threshold: 0.15,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting === true) {
      setIsBanner(true);
    } else {
      setIsBanner(false)
    }
  }, [intersection])

  const changeLink = (event) => {
    const buttonName = event.target.name;
    if (buttonName === 'left') {
      if (currentVideo > 1) {
        setCurrentVideo(currentVideo - 1);
      } else {
        setCurrentVideo(videoList.length);
      }
    }

    if (buttonName === 'right') {
      if (currentVideo < videoList.length) {
        setCurrentVideo(currentVideo + 1);
      } else {
        setCurrentVideo(1);
      }
    }
  }
  
  return (
    <>
      <div className="banner" id="home" ref={sectionRef}>
        <div className="banner__innerWrapper" >
          {
            videoList.map(video => {
              const { address, id } = video;
              return <iframe
                src={address}
                key={id}
                frameBorder="0"
                className={classNames({
                  banner__video: true,
                  banner__video_active: currentVideo === video.id,
                })}
                allowFullScreen
              >
              </iframe>
            })
          }
        </div>
      </div>
      <Slider 
      changeLink={changeLink} 
      activePointIndex={currentVideo}
      setActivePointIndex={setCurrentVideo}
       />
    </>
  );
}

export default Banner;

Banner.propTypes = {
  setIsBanner: PropTypes.func.isRequired
}
