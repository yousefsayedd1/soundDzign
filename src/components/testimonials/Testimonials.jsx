import React from "react";
import "./testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets/index";
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>What our students say?</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src={testimonial1} alt="" />
            <div className="content">
              <h3>Peter Adams</h3>
              <p>This is a great course. I got to learn a lot.</p>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial2} alt="" />
            <div className="content">
              <h3>Robert Fox</h3>
              <p>
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </p>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial3} alt="" />
            <div className="content">
              <h3>Emily Smith</h3>
              <p>Awesome! Great job!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
