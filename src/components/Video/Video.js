import React from "react";
import Youtube from "react-youtube";
import "./Video.css"

const Video = ({videoId}) => {
    
    return(
        <div>
            <Youtube className="video-player" videoId={videoId} />
        </div>
    )
}

export default Video