import React from "react";
import { Container } from "./style";

export const NewsLetter = props => (
  <Container id="newsletter">
    <div className="newsletter-info">
      <h1>Newsletter</h1>
      <p>assine e fique por dentro das novidades</p>
    </div>
    <form>
      <input type="text" placeholder="Seu e-mail" />
      <button type="submit">Assinar</button>
    </form>
  </Container>
);
