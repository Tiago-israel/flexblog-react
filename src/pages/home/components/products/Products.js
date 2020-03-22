import React from "react";
import { Container } from "./style";
import Product1 from "../../../../assets/img/produtos1.jpg";
import Product2 from "../../../../assets/img/produtos2.jpg";
import Product3 from "../../../../assets/img/produtos3.jpg";

export const Products = props => (
  <Container id="products">
    <h1>Produtos</h1>
    <div className="products-container">
      <div className="products-item purple">
        <h2>Purple</h2>
        <img src={Product1} alt="product 1" />
      </div>
      <div className="products-item pink">
        <h2>Pink</h2>
        <img src={Product2} alt="product 2" />
      </div>
      <div className="products-item blue">
        <h2>Blue</h2>
        <img src={Product3} alt="product 3" />
      </div>
    </div>
  </Container>
);
