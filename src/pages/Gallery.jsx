import React from "react";
import BlogPost from "../components/BlogPost";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

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
