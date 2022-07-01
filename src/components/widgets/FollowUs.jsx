import React from "react";
import { dataFollowUs } from "../../data/FollowUs";

const FollowUs = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">Follow Us</h2>
      <div className="row text-center">
        {dataFollowUs.map((item, index) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6" key={index}>
              <a href="#" className={item.backgroundColor}>
                <i className={item.icon}></i>
                <p>{item.followers}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowUs;
