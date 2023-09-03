import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PopularPost from '../components/widgets/PopularPost';

const BlogDetail = () => {
  return (
    <div id="wrapper">
      <Header />

      <section className="section single-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <div className="blog-title-area text-center">
                  <h3>Top 10 phone applications and 2017 mobile design awards</h3>

                  <div className="blog-meta big-meta">
                    <small>21 July, 2017</small>
                    <small>by Jessica</small>
                  </div>
                </div>

                <div className="single-post-media">
                  <img src="assets/upload/tech_menu_08.jpg" alt="" className="img-fluid" />
                </div>

                <div className="blog-content text-justify">
                  <p>
                    In lobortis pharetra mattis. Morbi nec nibh iaculis, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus nec
                    nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec accumsan.
                    Pellentesque enim velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum.{' '}
                  </p>

                  <h3>
                    <strong>
                      Maecenas non convallis quam, eu sodales justo. Pellentesque quis lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </strong>
                  </h3>

                  <p>
                    Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis
                    viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque
                    enim, malesuada non lobortis nec, facilisis et lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et
                    nisl vel odio posuere.
                  </p>

                  <p>
                    Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus
                    elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa
                    vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero
                    quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa
                    nunc.
                  </p>
                </div>

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

      <Footer />

      <div className="dmtop">Scroll to Top</div>
    </div>
  );
};

export default BlogDetail;
