import React from "react";
import "./video.css";
import ReactPlayer from 'react-player'

const Video = () => {

    const data = [

        {
            id:1,
            url: "https://www.youtube.com/watch?v=Oxcc-KNygHA",
            title: "RTX",
            content : "it is not every dayy that you come across a passionate and trustworthly financial advisor",
        },
        {
            id:2,
            url: "https://www.youtube.com/watch?v=0cPMl5OsKSY",
            title: "RTX",
            content : "it is not every dayy that you come across a passionate and trustworthly financial advisor",
        },
        {
            id:3,
            url: "https://www.youtube.com/watch?v=6mh2ajPbyMI",
            title: "RTX",
            content : "it is not every dayy that you come across a passionate and trustworthly financial advisor",
        },
        {
            id:4,
            url: "https://www.youtube.com/watch?v=soS4MFoaQWI",
            title: "RTX",
            content : "it is not every dayy that you come across a passionate and trustworthly financial advisor",
        },
        {
            id:5,
            url: "https://www.youtube.com/watch?v=aZStleRH5nY",
            title: "RTX",
            content : "it is not every dayy that you come across a passionate and trustworthly financial advisor",
        },
        {
            id:6,
            url: "https://www.youtube.com/watch?v=ltfyXyPwqfQ",
            title: "RTX",
            content : "it is not every dayy that you come across a passionate and trustworthly financial advisor",
        },
    ]

  return (
    <div className="container video" id="video">
      <div className="section_title">
        <h5>Video</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item,index)=>(
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">

                <div className="video-details" ke={index}>
                <ReactPlayer url={item.url}
                 loop={true} controls playing={false} width="auto" height="250px"/>
                <div className="video-content">
                <h6>{item.title}</h6>
                <p>{item.content}</p>
                </div>
                </div>

            </div>


        ))}
      </div>
    </div>
  );
};

export default Video;
