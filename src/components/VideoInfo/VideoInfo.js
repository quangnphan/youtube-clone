import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import SideBarRow from "../SideBarRow/SideBarRow";
import ReplyIcon from "@material-ui/icons/Reply";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import "./VideoInfo.css";
import { Avatar, Button } from "@material-ui/core";

const VideoInfo = ({
  title,
  description,
  publishedDate,
  channelTitle,
  channelImage,
  viewCount,
  likeCount,
  dislikeCount,
  subs,
}) => {
  return (
    <div className="videoinfo">
      <div className="videoinfo-headline">
        <h1>{title}</h1>
      </div>
      <div className="videoinfo-stats">
        <p>
          {viewCount} views • {publishedDate}
        </p>
        <div className="videoinfo-likes">
          <SideBarRow Icon={ThumbUpIcon} title={likeCount} />
          <SideBarRow Icon={ThumbDownIcon} title={dislikeCount} />
          <SideBarRow Icon={ReplyIcon} title="SHARE" />
          <SideBarRow Icon={PlaylistAddIcon} title="SAVE" />
          <SideBarRow Icon={MoreHorizIcon} title="" />
        </div>
      </div>
      <hr />
      <div className="videoinfo-channel">
        <div>
          <Avatar
            className="videoinfo-avatar"
            alt={channelTitle}
            src={channelImage}
          />
          <div className="videoinfo-channelinfo">
            <h3 className="videoinfo-channeltitle">{channelTitle}</h3>
            <p className="videoinfo-channelsubs">{subs} subscribers</p>
          </div>
        </div>
        <div className="videoinfo-subscribe">
          <Button color="secondary">SUBSCRIBE</Button>
        </div>
      </div>
      <div className="videoinfo-channeldesc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
