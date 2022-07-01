import React from "react";
import { dataPopularPost } from "../../data/PopularPost";

const PopularPost = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">Popular Posts</h2>
      <div className="blog-list-widget">
        <div className="list-group">
          {dataPopularPost.map((item, index) => {
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
                  <small>{item.datePost}</small>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
