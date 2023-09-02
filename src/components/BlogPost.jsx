import React from 'react';
import { dataBlogList } from '../data/PostBlogList';
import { dataPostMasonry } from '../data/PostMasonry';
import { dataBlogBox } from '../data/PostBlogBox';
import { dataVideoBlog } from '../data/PostVideoBlog';
import { Link } from 'react-router-dom';

import 'bs5-lightbox';

const BlogPost = ({ type }) => {
  const PostList = () => {
    switch (type) {
      case 'masonry':
        return (
          <section className="section first-section">
            <div className="container">
              <div className="masonry-blog clearfix">
                {dataPostMasonry.map((item, index) => {
                  return (
                    <div className={item.layout} key={index}>
                      <div className="masonry-box post-media">
                        <img src={item.imageUrl} alt="banner-mudaba" className="img-fluid" />
                        <div className="shadoweffect">
                          <div className="shadow-desc">
                            <div className="blog-meta">
                              <span className="bg-orange">
                                <a href="tech-category-01.html" title="">
                                  {item.category}
                                </a>
                              </span>
                              <h4>
                                <Link to="/profile" title="">
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

      case 'blog-list':
        return (
          <div className="blog-list clearfix">
            {dataBlogList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="blog-box row">
                    <div className="col-md-4">
                      <div className="post-media">
                        <Link to="/blogdetail">
                          <img src={item.imgUrl} alt="" className="img-thumbnail-blog" />
                          <div className="hovereffect"></div>
                        </Link>
                      </div>
                    </div>

                    <div className="blog-meta big-meta col-md-8">
                      <h4>
                        <Link to="/blogdetail">{item.postTitle}</Link>
                      </h4>
                      <p>{item.desc}</p>
                      <small className="firstsmall">
                        <a className="bg-orange" href="tech-category-01.html" title="">
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
                        <span className="bg-orange">{item.category}</span>
                      </small>
                      <small>{item.datePost}</small>
                      <small>{item.author}</small>
                    </div>
                  </div>
                  <hr className="invis" />
                </React.Fragment>
              );
            })}
          </div>
        );

      case 'blog-box':
        return (
          <div className="blog-grid-system">
            <div className="row">
              {dataBlogBox.map((item, index) => {
                return (
                  <div className="col-md-6" key={index}>
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" title="">
                          <img src={item.imgUrl} alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span></span>
                          </div>
                        </a>
                      </div>
                      <div className="blog-meta big-meta">
                        <span className="color-orange">
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
                            <i className="fa fa-eye"></i> {item.views}
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

      case 'video-blog':
        return (
          <div className="page-wrapper">
            <div className="blog-custom-build">
              {dataVideoBlog.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" title="">
                          <img src={item.videoUrl} alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span className="videohover"></span>
                          </div>
                        </a>
                      </div>

                      <div className="blog-meta big-meta text-center">
                        <div className="post-sharing">
                          <ul className="list-inline">
                            <li>
                              <a href="/#" className="fb-button btn btn-primary">
                                <i className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="tw-button btn btn-primary">
                                <i className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="gp-button btn btn-primary">
                                <i className="fa fa-google-plus"></i>
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
                          <a href="/#" title="">
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
          </div>
        );

      case 'gallery':
        return (
          <div className="blog-grid-system">
            <div className="row">
              {dataBlogBox.map((item, index) => {
                const count = index + 1;

                return (
                  <div className="col-md-6" key={index}>
                    <div className="blog-box">
                      <div className="post-media">
                        <a href={item.imgUrl} title="" data-toggle="lightbox">
                          <img src={`assets/images/mudaba/gallery/gallery-${count}.jpg`} alt="" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
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
