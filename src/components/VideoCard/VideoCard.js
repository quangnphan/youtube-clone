import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

const VideoCard = ({
  image,
  title,
  channelImage,
  channel,
  views,
  timestamp,
}) => {
  return (
    <div className="videocard">
      <img src={image} alt="" className="videocard-image"></img>
      <div className="videocard-info">
        <Avatar className="videocard-avatar" alt={channel} src={channelImage} />
        <div className="videocard-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
