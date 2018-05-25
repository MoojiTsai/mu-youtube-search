import React from 'react'; 

const VideoListItem = ({video})=>{

    return <li className = "list-group-item" >
            <div className = "video-list mdeia">
                <div className ="media-left"> 
                    <img className="media-object"/>
                </div>
                <div className="mdeia-body">
                    <img classNam="media-heading"/>
                </div>
            </div>
        </li>;
}

export default VideoListItem; 