import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };

    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">Buy</button>
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row py-4">
          <ShowProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
