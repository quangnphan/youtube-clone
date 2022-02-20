import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";

const ChannelRow = ({ image, channel, description, noOfVideos, subs }) => {
  return (
    <div className="channelrow">
      <Avatar className="channelrow-logo" alt={channel} src={image} />
      <div className="channelrow-text">
        <h4>{channel}</h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
