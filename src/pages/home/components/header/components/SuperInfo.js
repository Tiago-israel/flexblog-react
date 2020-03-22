import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #122ab2;
  color: #fff;

  .superinfo {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 10px;

    a {
      color: #fff;
    }

    a,
    p {
      margin: 0 10px 10px 10px;
    }
  }
`;

export const SuperInfo = props => (
  <Container>
    <div className="superinfo">
      <p>Seg / Sex - 08:00 às 18:00</p>
      <a href="tel:+552199999999">+55 21 9999-9999</a>
      <p>Av. Ali Perto, 330, Botafogo - RJ</p>
    </div>
  </Container>
);
