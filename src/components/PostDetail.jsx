import React from 'react';
import PopularPost from './widgets/PopularPost';
import { dataBlogDetail } from '../data/BlogDetail';

const PostDetail = ({ detailBlogId }) => {
  const data = dataBlogDetail.filter((item) => item.id === detailBlogId);

  return (
    <section className="section single-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="page-wrapper">
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="blog-title-area text-center">
                    <h3>{item.postTitle}</h3>

                    <div className="blog-meta big-meta">
                      <small>{item.datePost}</small>
                      <small>{item.author}</small>
                    </div>
                  </div>

                  <div className="single-post-media">
                    <img src={item.imgUrl} alt="img-blog-detail" className="img-fluid" />
                  </div>

                  <div className="blog-content text-justify">
                    <p>{item.content}</p>
                  </div>
                </React.Fragment>
              ))}

              <hr className="invis1" />

              <div className="custombox clearfix">
                <h4 className="small-title">Leave a Reply</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <form className="form-wrapper">
                      <input type="text" className="form-control" placeholder="Your name" />
                      <input type="text" className="form-control" placeholder="Email address" />
                      <textarea className="form-control" placeholder="Your comment"></textarea>
                      <button type="submit" className="btn btn-primary">
                        Submit Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <PopularPost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
