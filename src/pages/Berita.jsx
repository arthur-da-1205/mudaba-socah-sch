import React from "react";
import BlogPost from "../components/BlogPost";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import FollowUs from "../components/widgets/FollowUs";
import PopularPost from "../components/widgets/PopularPost";
import RecentReviews from "../components/widgets/RecentReviews";
import TrendVideos from "../components/widgets/TrendVideos";

const Berita = () => {
  return (
    <div id="wrapper">
      <Header />

      <BreadCrumb
        name="Berita"
        icon="fa-newspaper-o"
        desc="Nulla felis eros, varius sit amet volutpat non."
      />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="sidebar">
                <TrendVideos />

                <PopularPost />

                <RecentReviews />

                <FollowUs />
              </div>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <BlogPost type="blog-box" />

                <hr className="invis3" />

                <Pagination />

                <hr className="invis" />

                <BlogPost type="video-blog" />

                <hr className="invis" />

                <Pagination />
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

export default Berita;
