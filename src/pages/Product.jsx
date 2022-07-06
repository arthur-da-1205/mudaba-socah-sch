import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height={"250px"}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 16)}...
                    </h5>
                    <p className="card-text fw-bold lead">${product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <Header />

      <BreadCrumb
        name="Product"
        icon="fa-shopping-bag"
        desc="Nulla felis eros, varius sit amet volutpat non."
      />
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
