import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #2c70ff;

  .menu {
    max-width: 960px;
    margin: 0 auto;
    padding: 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    a {
      color: #fff;
    }

    .menu-logo {
      a {
        font-size: 2.25em;
        font-weight: bold;
        margin: 0 10px;
      }
    }

    nav {
      ul {
        display: flex;
        flex-wrap: wrap;

        a {
          font-size: 1.25em;
          display: block;
          padding: 10px;

          &:hover {
            background: #122ab2;
          }
        }
      }
    }
  }
`;

export const Menu = props => (
  <Container>
    <div className="menu">
      <div className="menu-logo">
        <a href="##">FlexBlog</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#products">Produtos</a>
          </li>
          <li>
            <a href="#price">Preço</a>
          </li>
          <li>
            <a href="#quality">Qualidade</a>
          </li>
        </ul>
      </nav>
    </div>
  </Container>
);
