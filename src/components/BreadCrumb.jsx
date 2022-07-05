import React from "react";

const BreadCrumb = ({ name, icon, desc, breadcrumbItem1, breadcrumbItem2 }) => {
  return (
    <div class="page-title lb single-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h2>
              <i class={`fa ${icon} bg-orange`}></i> {name}{" "}
              <small class="hidden-xs-down hidden-sm-down">{desc} </small>
            </h2>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">{breadcrumbItem1}</a>
              </li>
              <li class="breadcrumb-item active">{breadcrumbItem2}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
