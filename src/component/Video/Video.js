import React, { useState } from "react";
import "./video.css";
import ReactPlayer from "react-player";
import Zoom from 'react-reveal/Zoom';

const Video = () => {
  const data = [
    {
      id: 1,
      url: "https://youtu.be/NC0PQzUQA-k",
      title: "RTX",
    },
    {
      id: 2,
      url: "https://youtu.be/6jeHvzVfMtQ",
      title: "RTX",
    },
    {
      id: 3,
      url: "https://youtube.com/shorts/occ8t5ljC4M?feature=share",
      title: "RTX",
    },
    {
      id: 4,
      url: "https://youtu.be/lDx6dgNiZRk",
    },
    {
      id: 5,
      url: "https://youtube.com/shorts/zboBnIOG1OA?feature=share",
    },
    {
      id: 6,
      url: "https://youtu.be/m9nxBOKrqa0",
    },
    {
      id: 7,
      url: "https://youtu.be/0UceQmZJEBE",
    },
    {
      id: 8,
      url: "https://youtu.be/6jeHvzVfMtQ",
    },
    {
      id: 9,
      url: "https://youtu.be/NC0PQzUQA-k",
    },
  ];

  const [showMorePost, setShowMorePost] = useState(6);

  const loadMore = () => {
    setShowMorePost((prev) => prev + 3);
  };

  return (
    <div className="container video" id="video">
      <div className="section_title">
        <h5>UnProduction</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMorePost).map((item, index) => (

            <Zoom>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className={index == 1 ? "marked-content-card" : "content-card"}
            >
              <div className="video-details" ke={index}>
                <ReactPlayer
                  url={item.url}
                  loop={true}
                  controls
                  playing={false}
                  width="auto"
                  height="250px"
                />
                <div className="video-content"></div>
              </div>
            </div>
          </div>
          </Zoom>
        ))}

        {showMorePost >= data.length ? null : (
          <span className="laod-mores-button" onClick={loadMore}>
            Load More
          </span>
        )}
      </div>
    </div>
  );
};

export default Video;
