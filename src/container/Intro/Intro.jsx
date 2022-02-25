import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.scss';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handelClick = () => {
    setPlayVideo(!playVideo);

    if (!playVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div className="video">
      <video ref={videoRef} src={meal} autoPlay={false} muted/>
      <div className="video__overlay">
        <div className="video__controls" onClick={() => handelClick()}>
          {playVideo 
            ? <BsPauseFill />
            : <BsFillPlayFill />}
        </div>
      </div>
    </div>
  )
};

export default Intro;
