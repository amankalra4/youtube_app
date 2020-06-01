import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    // const videoItems = props.videos.map((video) => {
    //     return (
    //         <VideoListItem key = {video.etag} video = {video} />
    //     )
    // });

    // return (
    //     <ul>
    //         {videoItems}
    //     </ul>
    // );

    const videoItems = props.videos.map((video) => {
            return (
                <VideoListItem onUserSelected={props.onVideoSelect}
                               key={video.etag}
                               video={video} />
            );
    });
    
    return (
        <div className = 'videoList'>
            {videoItems}
        </div>
    );
}

export default VideoList;