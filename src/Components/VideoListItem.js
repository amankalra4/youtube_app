import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    //console.log(video);
    const imageURL = video.snippet.thumbnails.default.url;

    // return (
    //     <li>
    //         <div>
    //             <div>
    //                 <img src = {imageURL} alt = 'There is no pic' />
    //             </div>
    //             <div>
    //                 <div>{video.snippet.title}</div>
    //             </div>
    //         </div>
    //     </li>
    // );

    return (
        <div onClick={() => props.onUserSelected(video)} className = 'list-group-item'>
            <div className = "video-list">
                <div className = 'media-left'>
                    <img className = 'media-object' src = {imageURL} alt = 'There is no pic' />
                </div>
                <div className = 'media-body'>
                    <div className = 'media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </div>
    );

}

export default VideoListItem;