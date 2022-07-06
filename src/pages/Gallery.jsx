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

const Gallery = () => {
  return (
    <div id="wrapper">
      <Header />

      <BreadCrumb
        name="Gallery"
        icon="fa-image"
        desc="Nulla felis eros, varius sit amet volutpat non."
      />

      <section class="section">
        <div class="container py-4">
          <div class="row">
            {/* <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div class="sidebar">
                <TrendVideos />

                <PopularPost />

                <RecentReviews />

                <FollowUs />
              </div>
            </div> */}

            <div class="col-12">
              <div class="page-wrapper">
                <BlogPost type="gallery" />

                <hr class="invis3" />

                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div class="dmtop">Scroll to Top</div>
    </div>
  );
};

export default Gallery;
