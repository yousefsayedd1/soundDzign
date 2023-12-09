import React from "react";
import "./blog.css";
import { blog1, blog2, blog3 } from "../../assets/index";
function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2>Latest Posts</h2>
        <div className="blogs-conatiner">
          <div className="blog">
            <img src={blog1} alt="" />
            <h3>How To Use Drum Machine in Logic Pro X</h3>
            <span className="tag">DAW</span>
          </div>
          <div className="blog">
            <img src={blog2} alt="" />
            <h3>How To Mix Guitars Effectively</h3>
            <span className="tag">Mixing</span>
          </div>
          <div className="blog">
            <img src={blog3} alt="" />
            <h3>The Real Power of Harmonies in Music Production</h3>
            <span className="tag">Vox</span>
          </div>
        </div>
        <a href="#">All Posts</a>
      </div>
    </section>
  );
}

export default Blog;
