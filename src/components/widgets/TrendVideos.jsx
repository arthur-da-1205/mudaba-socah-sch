import React from "react";
import { dataTrendVideos } from "../../data/TrendVideos";

const TrendVideos = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">Trend Videos</h2>
      <div className="trend-videos">
        {dataTrendVideos.map((item, index) => {
          return (
            <>
              <div className="blog-box" key={index}>
                <div className="post-media">
                  <a href="tech-single.html" title="">
                    <img src={item.imgUrl} alt="" className="img-fluid" />
                    <div className="hovereffect">
                      <span className="videohover"></span>
                    </div>
                  </a>
                </div>
                <div className="blog-meta">
                  <h4>
                    <a href="tech-single.html" title="">
                      {item.postTitle}
                    </a>
                  </h4>
                </div>
              </div>

              <hr className="invis" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TrendVideos;
