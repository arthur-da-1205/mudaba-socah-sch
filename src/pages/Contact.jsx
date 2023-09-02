import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Marker, StaticGoogleMap } from "react-static-google-map";

const Contact = () => {
  return (
    <div id="wrapper">
      <Header />

      <BreadCrumb
        name="Contact us"
        icon="fa-envelope-open-o"
        breadcrumbItem1="Contact"
      />

      <section className="section wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-wrapper">
                <div className="row">
                  <div className="col-lg-5">
                    <h4>Alamat</h4>
                    <p>
                      Jl. Panglima Sudirman No.79, Barat Ps., Socah, Kec. Socah,
                      Kabupaten Bangkalan, Jawa Timur 69161
                    </p>

                    <h4>Kontak Admin</h4>
                    <p>+62 812-3495-5517</p>

                    <h4>Email</h4>
                    <p>sdmuhammadiyah2bangkalan@gmail.com</p>

                    <StaticGoogleMap
                      size="600x600"
                      className="img-fluid"
                      apiKey="AIzaSyDu-DrvdGPW1kWrlx93XpBt7CqLpYQTLjQ"
                    >
                      <Marker
                        location="6.4488387,3.5496361"
                        color="blue"
                        label="P"
                      />
                    </StaticGoogleMap>
                  </div>
                  <div className="col-lg-7">
                    <form className="form-wrapper">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan nama anda..."
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan email anda..."
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan No.HP anda..."
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan pesan anda..."
                      />
                      <textarea
                        className="form-control"
                        placeholder="Your message"
                      ></textarea>
                      <button type="submit" className="btn btn-primary">
                        Send <i className="fa fa-envelope-open-o"></i>
                      </button>
                    </form>
                  </div>
                </div>
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

export default Contact;
