import React from 'react';
import '../index.css';

const VideoDetails = (props) => {
    const video = props.video;

    if(!video) {
        return (
            <div style = {{margin: '20px'}}>
                Loading.....
            </div>
        );
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div style = {{margin: '20px'}}>
            <div>
                <iframe src = {url} title = {video.etag} />
            </div>
            <a href = {url} target = '_blank'>Here</a>
            <div>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetails;