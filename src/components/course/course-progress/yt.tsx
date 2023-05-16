import React, { useEffect, useRef } from 'react';
import { YT } from 'youtube';
const VideoPlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = YT.Player('player', {
        videoId: videoId,
        playerVars: {
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    return () => {
      script.parentNode.removeChild(script);
    };
  }, [videoId]);

  const onPlayerReady = (event) => {
    const player = event.target;

    // Disable context menu
    player.getIframe().oncontextmenu = function (e) {
      e.preventDefault();
    };
  };

  return <div id="player"></div>;
};

export default VideoPlayer;
