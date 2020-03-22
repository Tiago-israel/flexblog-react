import styled from "styled-components";

export const Container = styled.section`
  background: #f7f7f7f7;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  min-width: 260px;

  .item-price {
    flex: 1;
    border: 4px solid #fff;
    padding: 20px;
    margin: 10px;

    h2 {
      font-size: 3em;
      color: #a4a4a4;
      text-align: center;
      margin-top: 20px;
    }

    span {
      max-width: 300px;
      margin: 20px auto;
      display: block;
      font-size: 3em;
      text-align: center;
      font-weight: bold;
      padding: 10px 0 5px 0;
      border-top: 4px solid #fff;
      border-bottom: 4px solid #fff;

      sup {
        font-size: 1.5rem;
      }
    }

    ul {
      max-width: 300px;
      margin: 20px auto;
      font-size: 1.25em;
      font-style: italic;
      color: #7c7c7c;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        &::after {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          background: #2c70ff;
          border-radius: 50%;
        }
      }
    }
  }

  a {
    max-width: 300px;
    display: block;
    color: #222;
    margin: 20px auto;
    border: 4px solid;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.25em;
    padding: 15px 0;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    padding-left: 10px;
    padding-right: 10px;

    .item-price {
      &:nth-child(3) {
        order: -2;
      }
      &:nth-child(2) {
        order: -1;
      }
    }
  }
`;
