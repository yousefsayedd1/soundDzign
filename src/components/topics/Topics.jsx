import React, { useState } from "react";
import "./topics.css";
import {
  frequencies,
  vocalsProcessing,
  mixing,
  mixingConsole,
  bgElement1,
  blog1,
  mastering,
} from "../../assets/index";
const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);
  function setImage(e) {
    const text = e.target.innerHTML;
    switch (text) {
      case "What are frequencies?":
        setCurrentImage(frequencies);
        break;
      case "Using DAW":
        setCurrentImage(blog1);
        break;
      case "Vocals Processing":
        setCurrentImage(vocalsProcessing);
        break;
      case "Mixing":
        setCurrentImage(mixing);
        break;
      case "Mixing Console":
        setCurrentImage(mixingConsole);
        break;
      case "Mastering":
        setCurrentImage(mastering);
        break;

      default:
        setCurrentImage(blog1);

        break;
    }
  }
  return (
    <section id="topics" className="black">
      <div className="container">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul>
            <li onMouseEnter={setImage}>What are frequencies?</li>
            <li onMouseEnter={setImage}>Using DAW</li>
            <li onMouseEnter={setImage}>Vocals Processing</li>
            <li onMouseEnter={setImage}>Mixing</li>
            <li onMouseEnter={setImage}>Mixing Console</li>
            <li onMouseEnter={setImage}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="" />
            <img src={bgElement1} className="bg-elemnt-1" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
