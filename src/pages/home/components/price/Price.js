import React from "react";
import { Container } from "./style";

export const Price = props => (
  <Container id="price">
    <div className="item-price">
      <h2>Cobre</h2>
      <span>
        <sup>R$</sup>
        19
      </span>
      <ul>
        <li>Planos Ilimitados</li>
        <li>Acesso Restrito</li>
        <li>Conteúdo Secreto</li>
        <li>Suporte 24h</li>
      </ul>
      <a href="##">Comprar</a>
    </div>
    <div className="item-price">
      <h2>Prata</h2>
      <span>
        <sup>R$</sup>
        39
      </span>
      <ul>
        <li>Planos Ilimitados</li>
        <li>Acesso Restrito</li>
        <li>Conteúdo Secreto</li>
        <li>Suporte 24h</li>
        <li>Compra Exclusiva</li>
      </ul>
      <a href="##">Comprar</a>
    </div>
    <div className="item-price">
      <h2>Ouro</h2>
      <span>
        <sup>R$</sup>
        79
      </span>
      <ul>
        <li>Planos Ilimitados</li>
        <li>Acesso Restrito</li>
        <li>Conteúdo Secreto</li>
        <li>Suporte 24h</li>
        <li>Compra Exclusiva</li>
        <li>Download dos Itens</li>
      </ul>
      <a href="##">Comprar</a>
    </div>
  </Container>
);
