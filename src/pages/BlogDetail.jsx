import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularPost from "../components/widgets/PopularPost";

const BlogDetail = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div id="wrapper">
      <Header />

      <section className="section single-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <div className="blog-title-area text-center">
                  <span className="color-orange">
                    <a href="tech-category-01.html" title="">
                      {state.category}
                    </a>
                  </span>

                  <h3>{state.postTitle}</h3>

                  <div className="blog-meta big-meta">
                    <small>
                      <a href="tech-single.html" title="">
                        {state.datePost}
                      </a>
                    </small>
                    <small>
                      <a href="tech-author.html" title="">
                        {state.author}
                      </a>
                    </small>
                    <small>
                      <a href="/" title="">
                        <i className="fa fa-eye"></i> 2344
                      </a>
                    </small>
                  </div>

                  <div className="post-sharing">
                    <ul className="list-inline">
                      <li>
                        <a href="/" className="fb-button btn btn-primary">
                          <i className="fa fa-facebook"></i>{" "}
                          <span className="down-mobile">Share on Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="tw-button btn btn-primary">
                          <i className="fa fa-twitter"></i>{" "}
                          <span className="down-mobile">Tweet on Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="gp-button btn btn-primary">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="single-post-media">
                  <img src={state.imgUrl} alt="" className="img-fluid" />
                </div>

                <div className="blog-content">
                  <div className="pp">
                    <p>{state.content}</p>
                  </div>
                </div>

                {/* <div className="blog-title-area">
                  <div className="tag-cloud-single">
                    <span>Tags</span>
                    <small>
                      <a href="/" title="">
                        lifestyle
                      </a>
                    </small>
                    <small>
                      <a href="/" title="">
                        colorful
                      </a>
                    </small>
                    <small>
                      <a href="/" title="">
                        trending
                      </a>
                    </small>
                    <small>
                      <a href="/" title="">
                        another tag
                      </a>
                    </small>
                  </div>

                  <div className="post-sharing">
                    <ul className="list-inline">
                      <li>
                        <a href="/" className="fb-button btn btn-primary">
                          <i className="fa fa-facebook"></i>{" "}
                          <span className="down-mobile">Share on Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="tw-button btn btn-primary">
                          <i className="fa fa-twitter"></i>{" "}
                          <span className="down-mobile">Tweet on Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="gp-button btn btn-primary">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <hr className="invis1" />
                {/* 
                <div className="custombox prevnextpost clearfix">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="blog-list-widget">
                        <div className="list-group">
                          <a
                            href="tech-single.html"
                            className="list-group-item list-group-item-action flex-column align-items-start"
                          >
                            <div className="w-100 justify-content-between text-right">
                              <img
                                src="assets/upload/tech_menu_19.jpg"
                                alt=""
                                className="img-fluid float-right"
                              />
                              <h5 className="mb-1">
                                5 Beautiful buildings you need to before dying
                              </h5>
                              <small>Prev Post</small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="blog-list-widget">
                        <div className="list-group">
                          <a
                            href="tech-single.html"
                            className="list-group-item list-group-item-action flex-column align-items-start"
                          >
                            <div className="w-100 justify-content-between">
                              <img
                                src="assets/upload/tech_menu_20.jpg"
                                alt=""
                                className="img-fluid float-left"
                              />
                              <h5 className="mb-1">
                                Let's make an introduction to the glorious world
                                of history
                              </h5>
                              <small>Next Post</small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="invis1" />

                <div className="custombox authorbox clearfix">
                  <h4 className="small-title">About author</h4>
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                      <img
                        src="assets/upload/author.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>

                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                      <h4>
                        <a href="/">Jessica</a>
                      </h4>
                      <p>
                        Quisque sed tristique felis. Lorem{" "}
                        <a href="/">visit my website</a> amet, consectetur
                        adipiscing elit. Phasellus quis mi auctor, tincidunt
                        nisl eget, finibus odio. Duis tempus elit quis risus
                        congue feugiat. Thanks for stop Tech Blog!
                      </p>

                      <div className="topsocial">
                        <a
                          href="/"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          href="/"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Youtube"
                        >
                          <i className="fa fa-youtube"></i>
                        </a>
                        <a
                          href="/"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Pinterest"
                        >
                          <i className="fa fa-pinterest"></i>
                        </a>
                        <a
                          href="/"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Twitter"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a
                          href="/"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Instagram"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a
                          href="/"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Website"
                        >
                          <i className="fa fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

                <hr className="invis1" />

                {/* <div className="custombox clearfix">
                  <h4 className="small-title">You may also like</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="blog-box">
                        <div className="post-media">
                          <a href="tech-single.html" title="">
                            <img
                              src="assets/upload/tech_menu_04.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="hovereffect">
                              <span className=""></span>
                            </div>
                          </a>
                        </div>
                        <div className="blog-meta">
                          <h4>
                            <a href="tech-single.html" title="">
                              We are guests of ABC Design Studio
                            </a>
                          </h4>
                          <small>
                            <a href="blog-category-01.html" title="">
                              Trends
                            </a>
                          </small>
                          <small>
                            <a href="blog-category-01.html" title="">
                              21 July, 2017
                            </a>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="blog-box">
                        <div className="post-media">
                          <a href="tech-single.html" title="">
                            <img
                              src="assets/upload/tech_menu_06.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="hovereffect">
                              <span className=""></span>
                            </div>
                          </a>
                        </div>
                        <div className="blog-meta">
                          <h4>
                            <a href="tech-single.html" title="">
                              Nostalgia at work with family
                            </a>
                          </h4>
                          <small>
                            <a href="blog-category-01.html" title="">
                              News
                            </a>
                          </small>
                          <small>
                            <a href="blog-category-01.html" title="">
                              20 July, 2017
                            </a>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="invis1" />

                <div className="custombox clearfix">
                  <h4 className="small-title">Leave a Reply</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <form className="form-wrapper">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email address"
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website"
                        />
                        <textarea
                          className="form-control"
                          placeholder="Your comment"
                        ></textarea>
                        <button type="submit" className="btn btn-primary">
                          Submit Comment
                        </button>
                      </form>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="sidebar">
                {/* <TrendVideos /> */}

                <PopularPost />

                {/* <RecentReviews /> */}

                {/* <FollowUs /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="dmtop">Scroll to Top</div>
    </div>
  );
};

export default BlogDetail;
