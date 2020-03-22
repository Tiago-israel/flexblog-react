import React from "react";
import { Container } from "./style";
import AboutImg1 from "../../../../assets/img/sobre1.jpg";
import AboutImg2 from "../../../../assets/img/sobre2.jpg";

export const About = props => (
  <Container id="about">
    <div className="about-info">
      <h1>Sobre</h1>
      <p>
        O que temos que ter sempre em mente é que a determinação clara de
        objetivos afeta positivamente a correta previsão das condições
        inegavelmente apropriadas objetivos.
      </p>
      <p>
        O que temos que ter sempre em mente é que a determinação clara de
        objetivos afeta positivamente a correta previsão das condições
        inegavelmente apropriadas objetivos.
      </p>
    </div>
    <div className="about-img">
      <img src={AboutImg1} alt="about img 1" />
    </div>
    <div className="about-img">
      <img src={AboutImg2} alt="about img 2" />
    </div>
  </Container>
);
