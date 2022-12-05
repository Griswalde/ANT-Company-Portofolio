import React, { useState } from "react";
import "./video.css";
import ReactPlayer from "react-player";
import Zoom from "react-reveal/Zoom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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

  const images = [
    "https://drive.google.com/uc?export=view&id=1O3sBMbcpvcNjegiFARjvEyxJEG8GPIID",
    "https://drive.google.com/uc?export=view&id=1E6J7TYM9W6TuxZjQ0ffe4T8A9KjPYGpl",
    "https://drive.google.com/uc?export=view&id=1f_Huffq_Inr-cAYYePASH1kSRFS4A7Fg",
    "https://drive.google.com/uc?export=view&id=1pvS4ab8jSKwdL3qmiB_AdvOCC-4jfU4s",
    "https://drive.google.com/uc?export=view&id=1nO_kLMT1WIK2hDlG24_dPLGApA6cvfUS",
    "https://drive.google.com/uc?export=view&id=1suRDK68WqYY1gMa3rdC4KbQ2folEMuS-",
    "https://drive.google.com/uc?export=view&id=14oXkeup7zskB2OWk7sMDj_LWDZ73Ap87",
    "https://drive.google.com/uc?export=view&id=1rrJ1jWcJIU3c_5ZiSTczKbuVs_06QkUN",
    "https://drive.google.com/uc?export=view&id=1flBBJN5nwNNJ65F7OYCAmpBnPzvjtW9U",
    "https://drive.google.com/uc?export=view&id=16gMqDKMx82HLWdJATYTfQGfhviwjuDxO",
    "https://drive.google.com/uc?export=view&id=1JnJWZPIltmD7MF1pagjHSN7qoOpzDGKD",
    "https://drive.google.com/uc?export=view&id=1AO0oNxa3GazOeywrwjv9son9mrfByh0b",
    "https://drive.google.com/uc?export=view&id=1o8dI0vafb7OpOp2PtSoAXc1sY8pz7i1C",
    "https://drive.google.com/uc?export=view&id=1qY4wNwFHD241-c4Pkrl4IDgk7_s5SLu2",
    "https://drive.google.com/uc?export=view&id=1xubyqIGyXuJz2UcxS6btdQXo9KM5egdL",
    "https://drive.google.com/uc?export=view&id=1b5JIc5IB_5psnmOEfv_sF4QpTvgQ6y9I",
    "https://drive.google.com/uc?export=view&id=1sLg2ax8jLdgtxJXVlC8NUm_PYBp1tWQi",
  ];

  const [showMorePost, setShowMorePost] = useState(6);

  const loadMore = () => {
    setShowMorePost((prev) => prev + 3);
  };

  return (
    <div className="container video" id="video">
      <div className="section_title">
        <h5>
          <a href="https://www.instagram.com/ant__production/">
            Ant production
          </a>
        </h5>
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
      
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>

    // gallery //
  );
};

export default Video;








