import React from "react";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecentNews from "../components/RecentNews";
import PopularPost from "../components/widgets/PopularPost";

const Home = () => {
  return (
    <div id="wrapper">
      <Header />

      <BlogPost type="masonry" />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <RecentNews />
                <BlogPost type="blog-list" />
              </div>

              <hr className="invis" />

              {/* <Pagination /> */}
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

export default Home;
