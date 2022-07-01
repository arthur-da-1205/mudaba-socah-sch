import React from "react";
import { dataRecentReviews } from "../../data/RecentReviews";

const RecentReviews = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">Recent Reviews</h2>
      <div className="blog-list-widget">
        <div className="list-group">
          {dataRecentReviews.map((item, index) => {
            return (
              <a
                href="tech-single.html"
                className="list-group-item list-group-item-action flex-column align-items-start"
                key={index}
              >
                <div className="w-100 justify-content-between">
                  <img
                    src={item.imgUrl}
                    alt=""
                    className="img-fluid float-left"
                  />
                  <h5 className="mb-1">{item.postTitle}</h5>
                  <span className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentReviews;
