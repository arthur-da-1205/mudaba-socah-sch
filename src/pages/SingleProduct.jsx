import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>

        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={40} width={300} />
          <Skeleton height={90} />
          <Skeleton height={25} width={150} />
          <Skeleton height={85} width={400} />
          <Skeleton height={75} />
          <div className="d-flex flex-row">
            <Skeleton height={50} width={135} />
            <Skeleton height={50} width={120} style={{ marginLeft: 6 }} />
          </div>
        </div>
      </>
    );
  };

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
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
