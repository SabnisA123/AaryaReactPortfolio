import React from "react";
import "./BannerSection.css";
const BannerSection = () => {
  return (
    <>
      <div className="Banner-section">
        <div className="Banner-content">
          <div className="banner-content-left">
            <img src="./aarya.jpg" alt="" />
          </div>
          <div className="Banner-text">
            <h1>
              Hi, I'm<span> </span> Aarya!
            </h1>
            I am a <span className="typed-text"></span>
            <div className="sub-text">
              I'm a passionate and detail-oriented React.js Developer with over
              a year of hands-on experience building modern, responsive, and
              high-performance web applications. I specialize in creating
              seamless user interfaces using React.js, Node.js, and Express.js,
              and enjoy turning complex problems into elegant, scalable
              solutions. With a strong foundation in both front-end and back-end
              development, I thrive in collaborative environments and am always
              eager to learn new technologies, contribute to impactful projects,
              and grow as a full-stack developer.
            </div>
            <div>
              {" "}
              <a
                href="./AaryaSabnisResume3.pdf"
                className="banner-btn"
                target="/"
              >
                Download RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerSection;
