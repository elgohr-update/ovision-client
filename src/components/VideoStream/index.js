import React from 'react';
import './styles.scss';

export const VideoStream = () => {
  return (
    <div className="VideoStream">
      <div className="MainStreamBlock">
        <div className="VideoStreamStatus">
          <div className="StreamConnectValue">
            <p>Good</p>
          </div>
          <div className="StreamConnectStatus">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};
