import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useIntersection } from 'react-use';
import './Banner.scss';
import YouTube from 'react-youtube';
import { Slider } from '../Slider/Slider';

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Banner = ({ setIsBanner, isBanner }) => {
  const [linkName, setLinkName] = useState('W0LHTWG-UmQ');
  const [videoisLoaded, setIsVideoLoaded] = useState(false);
  const [activePointIndex, setActivePointIndex] = useState(0);
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
    const list = ['W0LHTWG-UmQ', 'RQApcf6IAKY', 'sBWPCvdv8Bk'];
    const index = list.indexOf(linkName);

    const buttonName = event.target.name;
    if (buttonName === 'left') {
      if (index > 0) {
        setLinkName(list[index - 1]);
        setActivePointIndex(index - 1);
      } else {
        setLinkName(list[list.length - 1]);
        setActivePointIndex(list.length - 1);
      }
    }

    if (buttonName === 'right') {
      if (index < list.length - 1) {
        setLinkName(list[index + 1]);
        setActivePointIndex(index + 1);
      } else {
        setLinkName(list[0]);
        setActivePointIndex(0);
      }
    }
    setIsVideoLoaded(false)
  }

  const opts = {
    playerVars: {
      rel: 0,
      controls: 0,
      version: 3,
      mute: 1,
      autoplay: 1,
      loop: 1,
      playlist: linkName,
    }
  };

  function onVideoIsReady(event) {
    if (event.data === 1) {
      setIsVideoLoaded(true)
    }
  };

  return (
    <>
      <div className="banner" id="home" ref={sectionRef}>
        <div className="banner__innerWrapper" >

          <div className={classNames({
            banner: true,
            banner__critical: true,
            banner__critical_disappear: videoisLoaded,
          })}
          ></div>
          {linkName === 'W0LHTWG-UmQ' && isBanner &&
            <YouTube
              videoId={linkName}
              opts={opts}
              onStateChange={onVideoIsReady}
            ></YouTube>
          }
          {linkName === 'RQApcf6IAKY' && isBanner &&
            <YouTube
              videoId={linkName}
              opts={opts}
              onStateChange={onVideoIsReady}
            ></YouTube>
          }
          {linkName === 'sBWPCvdv8Bk' && isBanner &&
            <YouTube
              videoId={linkName}
              opts={opts}
              onStateChange={onVideoIsReady}
            ></YouTube>
          }
        </div>
      </div>
      <Slider changeLink={changeLink} activePointIndex={activePointIndex} />
    </>
  );
};

export default Banner;
