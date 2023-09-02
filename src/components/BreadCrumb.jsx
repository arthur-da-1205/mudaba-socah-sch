import React from "react";

const BreadCrumb = ({ name, icon, desc }) => {
  return (
    <div className="page-title lb single-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h2>
              <i className={`fa ${icon} bg-orange`}></i> {name}{" "}
              <small className="hidden-xs-down hidden-sm-down">{desc} </small>
            </h2>
          </div>
          {/* <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">{breadcrumbItem1}</a>
              </li>
              <li className="breadcrumb-item active">{breadcrumbItem2}</li>
            </ol>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
