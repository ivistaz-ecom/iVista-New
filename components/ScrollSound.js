import React, { useEffect, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';
// import useSound from 'use-sound';
// import boopSfx from '../sound/rocket.mp3';


var sound = new Howl({
  //src: ['../sound/rocket.mp3'],
  volume: 0.8
});
// sound.play(); 

const ScrollSound = () => {
  // const [play] = useSound(boopSfx);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    sound = new Howl({
      //  src: ['../sound/rocket.mp3'],
      volume: 0.8
    });

    const handleScroll = () => {
      if (!isPlaying) {
        //sound.play();
        setIsPlaying(true);

        // Pause the sound after it finishes playing
        sound.on('end', () => {
          setIsPlaying(false);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Unload the sound when the component is unmounted
      //alert('scrolled');

      console.log('scrolled')
      sound.unload();

    };
  }, [isPlaying]);


  return <></>;
};

export default ScrollSound;
