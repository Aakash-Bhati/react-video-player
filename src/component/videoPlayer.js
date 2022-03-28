import './videoPlayer.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css";
import { Component, useState } from "react";


const VideoCarousel =() =>{
  const [myvideo, setMyvideo] = useState("");

  // New state to save index of currently playing video
  const [myvideoIndex, setMyvideoIndex] = useState(0);

  const videoProperties = [
    {
      id: "1",
      url: "https://www.youtube.com/watch?v=https://youtube.com/playlist?list=PLZVqz15Q_sr-Y7cnizZQES3aU_kXa5Z3N",
    },
    // {
    //   id: "2",
    //   url: "https://www.youtube.com/watch?v=Mf5rJH7UdYo",
    // },
];

  // Callback function that plays next video (or goes back to first video)
  const playNext = () => {
    const nextIndex = myvideoIndex + 1
    if (nextIndex >= videoProperties.length) {
      setMyvideo(videoProperties[0])
      setMyvideoIndex(0)
    } else {
      setMyvideo(videoProperties[nextIndex])
      setMyvideoIndex(nextIndex)
    }
  }

  // When click, set the video and the current index
//   const handleClick = (item, index) => {
//     setMyvideo(item.url)
//     setMyvideoIndex(index)
//   }

  return (
    <div>
           {videoProperties.map((item) => {
            
                return (
    <div className='Reactplayer'>
                      <ReactPlayer
                      url={item.url}
                      pip={true}
                      width={500}
                      height={300}
                      controls={true}
                      playing={false}

                      />
                   </div>   
                  );
                })
            }
              
      </div> 
     
  );
    }


export default VideoCarousel;
