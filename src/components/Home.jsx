import React from "react";
import "../styles/home.css";
import profile from "../assets/sam.jpeg";

const Home = () => {
  return (
    <div className="home">


      <div className="hero">

        <div className="hero-text">
          <p className="intro">Hi There,</p>

          <h1>
            I am <span>Samantha</span>
          </h1>

          <h2>UI/UX Designer & Web Developer</h2>

          <p className="sub">
            I design clean digital experiences and build responsive web
            applications that users love.
          </p>

          <button className="cta">Ask Me How</button>
        </div>


        <div className="hero-image">
          <img src={profile} alt="Samantha Akinyi" />
        </div>

      </div>


      <div className="contact-info">

        <div>
          <h4>Email</h4>
          <p>akinyisamantha33@gmail.com</p>
        </div>

        <div>
          <h4>Phone</h4>
          <p>0112796204</p>
        </div>

        <div>
          <h4>Name</h4>
          <p>Samantha Akinyi Otieno</p>
        </div>

      </div>

    </div>
  );
};

export default Home;