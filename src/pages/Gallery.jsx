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

      <section className="section">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <div className="page-wrapper">
                <BlogPost type="gallery" />

                <hr className="invis3" />

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

export default Gallery;
