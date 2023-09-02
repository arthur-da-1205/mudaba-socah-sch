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

const Videos = () => {
  return (
    <div id="wrapper">
      <Header />
      <BreadCrumb
        name="Videos"
        icon="fa-play"
        desc="Nulla felis eros, varius sit amet volutpat non."
        breadcrumbItem1="Blog"
        breadcrumbItem2="Videos"
      />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <BlogPost type="video-blog" />

              <hr className="invis" />

              <Pagination />
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="sidebar">
                <TrendVideos />

                <PopularPost />

                <RecentReviews />

                <FollowUs />
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

export default Videos;
