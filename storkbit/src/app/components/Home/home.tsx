import React from "react";
import Container from 'react-bootstrap/Container';
import "./home.css"

const Home = () => {
  return (
    <Container className="home tc">
      <div className="navy tc">
        <p className="title tc animate__animated animate__zoomInDown">
          <span>Hi, my name is <span className="name">Joshua Storkey</span></span>
        </p>
        <p className="subTitle tc animate__animated animate__zoomInDown">
          <span>I&apos;m the <span className="profession">Lead Developer</span> at Storkbit</span>
        </p>
      </div>
    </Container>
  );
}

export default Home