import React from "react";
import user1 from "../../imgs/client review/user1.jpg";
import user2 from "../../imgs/client review/user2.jpg";
import user3 from "../../imgs/client review/user3.jpg";
import stars from "../../imgs/client review/stars.png";
import "./clientReview.css";
function ClientReview(props) {
  const ClientReview = [
    {
      profileImg: user1,
      starsRate: stars,
      rate: 3,
      reviewText:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      name: "Regina Miles",
      profission: "Designer",
    },
    {
      profileImg: user2,
      starsRate: stars,
      rate: 5,
      reviewText:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      name: "Regina Miles",
      profission: "Designer",
    },
    {
      profileImg: user3,
      starsRate: stars,
      rate: 4,
      reviewText:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      name: "Regina Miles",
      profission: "Designer",
    },
  ];

  function drawStars(rating) {
    const starArray = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starArray.push(<i key={i} className="fas fa-star"></i>); // ★
      } else {
        starArray.push(<i key={i} className="far fa-star"></i>); // ☆
      }
    }

    return starArray;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="col-md-4">
            <h2 className="main-title">What Clients Say</h2>
            <h3 className="main-title-des">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </h3>
          </div>
        </div>
        {ClientReview.map((item) => (
          <div className="col-md-4 ">
            <div className="review-card text-center">
              <img
                src={item.profileImg}
                alt="Profile Img"
                className="client-profile-img"
              />
              {/* <img src={item.starsRate} alt="stars Img" className="stars-img" /> */}
              <div>
                <p className="star-rating"> {drawStars(item.rate)}</p>
              </div>

              <p className="client-review-text">{item.reviewText} </p>
              <h3 className="client-name">{item.name}</h3>
              <p className="client-profission">{item.profission}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ClientReview;

// code from chargpt to draw stars
// function StarRating() {
//   const { rating } = 3;
//   const starArray = [];

//   for (let i = 0; i < 5; i++) {
//     if (i < rating) {
//       starArray.push(<i key={i} className="fas fa-star"></i>);
//     } else {
//       starArray.push(<i key={i} className="far fa-star"></i>);
//     }
//   }

//   return <div>{starArray}</div>;
// }
