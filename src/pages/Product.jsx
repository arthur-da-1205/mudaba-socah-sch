import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Product() {
  const [data, setData] = useState([]);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height={"250px"}
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 16)}...
                    </h5>
                    <p class="card-text fw-bold lead">${product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      class="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <Header />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Products</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
