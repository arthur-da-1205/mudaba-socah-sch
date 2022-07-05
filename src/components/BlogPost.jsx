import React from "react";
import { dataBlogList } from "../data/PostBlogList";
import { dataPostMasonry } from "../data/PostMasonry";
import { dataBlogBox } from "../data/PostBlogBox";
import { dataVideoBlog } from "../data/PostVideoBlog";
import { Link } from "react-router-dom";

const BlogPost = ({ type }) => {
  const PostList = () => {
    switch (type) {
      case "masonry":
        return (
          <section className="section first-section">
            <div className="container-fluid">
              <div className="masonry-blog clearfix">
                {dataPostMasonry.map((item, index) => {
                  return (
                    <div className={item.layout} key={index}>
                      <div className="masonry-box post-media">
                        <img src={item.imageUrl} alt="" className="img-fluid" />
                        <div className="shadoweffect">
                          <div className="shadow-desc">
                            <div className="blog-meta">
                              <span className="bg-orange">
                                <a href="tech-category-01.html" title="">
                                  {item.category}
                                </a>
                              </span>
                              <h4>
                                <Link to="/blogdetail" title="">
                                  {item.postTitle}
                                </Link>
                              </h4>
                              <small>
                                <a href="tech-single.html" title="">
                                  {item.datePost}
                                </a>
                              </small>
                              <small>
                                <a href="tech-author.html" title="">
                                  {item.author}
                                </a>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case "blog-list":
        return (
          <div className="blog-list clearfix">
            {dataBlogList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="blog-box row">
                    <div className="col-md-4">
                      <div className="post-media">
                        <a href="tech-single.html" title="">
                          <img src={item.imgUrl} alt="" className="img-fluid" />
                          <div className="hovereffect"></div>
                        </a>
                      </div>
                    </div>

                    <div className="blog-meta big-meta col-md-8">
                      <h4>
                        <Link to="/blogdetail" title="">
                          {item.postTitle}
                        </Link>
                      </h4>
                      <p>{item.desc}</p>
                      <small className="firstsmall">
                        <a
                          className="bg-orange"
                          href="tech-category-01.html"
                          title=""
                        >
                          {item.category}
                        </a>
                      </small>
                      <small>
                        <a href="tech-single.html" title="">
                          {item.datePost}
                        </a>
                      </small>
                      <small>
                        <a href="tech-author.html" title="">
                          {item.author}
                        </a>
                      </small>
                      <small>
                        <a href="tech-single.html" title="">
                          <i className="fa fa-eye"></i> {item.views}
                        </a>
                      </small>
                    </div>
                  </div>
                  <hr className="invis" />
                </React.Fragment>
              );
            })}
          </div>
        );

      case "blog-box":
        return (
          <div class="blog-grid-system">
            <div class="row">
              {dataBlogBox.map((item, index) => {
                return (
                  <div class="col-md-6" key={index}>
                    <div class="blog-box">
                      <div class="post-media">
                        <a href="tech-single.html" title="">
                          <img src={item.imgUrl} alt="" class="img-fluid" />
                          <div class="hovereffect">
                            <span></span>
                          </div>
                        </a>
                      </div>
                      <div class="blog-meta big-meta">
                        <span class="color-orange">
                          <a href="tech-category-01.html" title="">
                            {item.category}
                          </a>
                        </span>
                        <h4>
                          <Link to="/blogdetail" title="">
                            {item.postTitle}
                          </Link>
                        </h4>
                        <p>{item.desc}</p>
                        <small>
                          <a href="tech-single.html" title="">
                            {item.datePost}
                          </a>
                        </small>
                        <small>
                          <a href="tech-author.html" title="">
                            {item.author}
                          </a>
                        </small>
                        <small>
                          <a href="tech-single.html" title="">
                            <i class="fa fa-eye"></i> {item.views}
                          </a>
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "video-blog":
        return (
          <div class="page-wrapper">
            <div class="blog-custom-build">
              {dataVideoBlog.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div class="blog-box">
                      <div class="post-media">
                        <a href="tech-single.html" title="">
                          <img src={item.videoUrl} alt="" class="img-fluid" />
                          <div class="hovereffect">
                            <span class="videohover"></span>
                          </div>
                        </a>
                      </div>

                      <div class="blog-meta big-meta text-center">
                        <div class="post-sharing">
                          <ul class="list-inline">
                            <li>
                              <a href="#" class="fb-button btn btn-primary">
                                <i class="fa fa-facebook"></i>{" "}
                                <span class="down-mobile">
                                  Share on Facebook
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="tw-button btn btn-primary">
                                <i class="fa fa-twitter"></i>{" "}
                                <span class="down-mobile">
                                  Tweet on Twitter
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="gp-button btn btn-primary">
                                <i class="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h4>
                          <Link to="/blogdetail" title="">
                            {item.postTitle}
                          </Link>
                        </h4>
                        <p>{item.desc}</p>
                        <small>
                          <a href="tech-category.html" title="">
                            {item.category}
                          </a>
                        </small>
                        <small>
                          <a href="tech-single.html" title="">
                            {item.datePost}
                          </a>
                        </small>
                        <small>
                          <a href="tech-author.html" title="">
                            {item.author}
                          </a>
                        </small>
                        <small>
                          <a href="#" title="">
                            <i class="fa fa-eye"></i> {item.views}
                          </a>
                        </small>
                      </div>
                    </div>

                    <hr class="invis" />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return <div>{PostList()}</div>;
};

export default BlogPost;
