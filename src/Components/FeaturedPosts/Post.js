import React from "react";
import post1 from "../../imgs/PostImgs/post1.png";
import post2 from "../../imgs/PostImgs/post2.png";
import post3 from "../../imgs/PostImgs/post3.png";
import clock from "../../imgs/PostImgs/clock.png";
import next from "../../imgs/PostImgs/next.png";
import chart from "../../imgs/PostImgs/chart.png";

import "./post.css";
function Post() {
  const Post = [
    {
      postPhoto: post1,
      postTitle: "Loudest à la Madison #1 (L'integral)",
      postDescription:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      postPhoto: post2,
      postTitle: "Loudest à la Madison #1 (L'integral)",
      postDescription:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      postPhoto: post3,
      postTitle: "Loudest à la Madison #1 (L'integral)",
      postDescription:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row">
        <h2 className="title-page-post">Featured Post</h2>
        {Post.map((item) => (
          <div className="col-md-4">
            <img src={item.postPhoto} alt="Medical Img" />
            <div className="post-content">
              <div className="text-buttons">
                <p className="text-btn">Google</p>
                <p className="text-btn-">Trending</p>
                <p className="text-btn-">New</p>
              </div>
              <h2 className="post-title">{item.postTitle}</h2>
              <p className="post-description">{item.postDescription}</p>
              <div className="clock-comments-part">
                <div className="clock-part">
                  <img src={clock} alt="clock" />
                  <p>{item.date}</p>
                </div>
                <div className="comments-part">
                  <img src={chart} alt="chart" />
                  <p>{item.comments} comments</p>
                </div>
              </div>

              <div className="row footer-post-part">
                <h3 className="learn-more-footer">Learn More</h3>

                {/* <img src={next} alt="next arrow" className="next-arrow" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Post;
