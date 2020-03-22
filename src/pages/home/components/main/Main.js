import React from "react";
import styled from "styled-components";

const Container = styled.main`
  h1 {
    font-size: 3em;
    line-height: 1;
    max-width: 960px;
    margin: 0 auto;
    padding: 60px 10px;
  }
`;

export const Main = () => (
  <Container>
    <h1>
      Novos valores e <br /> Propriedades de css
    </h1>
  </Container>
);
