import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostDetail from '../components/PostDetail';
// import { dataBlogBox } from '../data/PostBlogBox';

const BlogDetail = () => {
  // const blogDetailId = dataBlogBox.find();

  return (
    <div id="wrapper">
      <Header />

      <PostDetail />

      <Footer />

      <div className="dmtop">Scroll to Top</div>
    </div>
  );
};

export default BlogDetail;
