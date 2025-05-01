import React, { useState, useEffect } from 'react';

const YoutubeLiveEnhanced = ({
  videoId,
  width = '100%',
  height = '500px',
}: {
  videoId: string;
  width?: string;
  height?: string;
}) => {
  const [isLive, setIsLive] = useState(true);
  const [loading, setLoading] = useState(true);

  // In a real app, you might want to check if the stream is actually live
  useEffect(() => {
    // Here you could add an API call to check if the stream is live
    const timer = setTimeout(() => {
      setLoading(false);
      setIsLive(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [videoId]);

  if (loading) {
    return <div className="youtube-loading">Loading stream...</div>;
  }

  if (!isLive) {
    return (
      <div className="youtube-offline">
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="WiDS Dhahran Recorded Stream"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="youtube-live-container">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="WiDS Dhahran Live Stream"
      ></iframe>
    </div>
  );
};

export default YoutubeLiveEnhanced;
