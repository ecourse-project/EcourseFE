import React from 'react';

import VideoJS from './videos';

// This imports the functional component from the previous sample.

const App = () => {
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: '/path/to/video.mp4',
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <>
      <div>Rest of app here</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </>
  );
};
