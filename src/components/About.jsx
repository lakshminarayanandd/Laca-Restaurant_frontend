import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>We take pride in our serious approach to culinary excellence.</p>
          </div>
          <p className="mid">
          Welcome to LaCa Madras, where the vibrant flavors of South India come to life in the heart of Chennai. Our culinary journey is a celebration of the rich and diverse heritage of Madras cuisine. From aromatic spices to traditional delicacies, every dish is a homage to authenticity and taste. Immerse yourself in the warm ambiance as we invite you to experience the true essence of South Indian dining. At LaCa Madras, it's not just a meal; it's a flavorful exploration.
          </p>
          <Link to={"/"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;