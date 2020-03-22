import styled from "styled-components";

export const Container = styled.section`
  max-width: 960px;
  margin: 60px auto;

  h1 {
    font-size: 3em;
    margin: 0 10px 60px 10px;
  }

  .products-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    .products-item {
      position: relative;
      flex: 1 1 175px;
      margin: 10px;
      top: 0;
      transition: top ease 0.5s;

      h2 {
        font-size: 3em;
        color: #a4a4a4;
        background: #f7f7f7;
        padding: 60px 20px;
      }

      &.purple {
        border-top: 8px solid #ae81ff;
      }

      &.pink {
        border-top: 8px solid #f9265e;
      }

      &.blue {
        border-top: 8px solid #66d9eb;
      }

      &:hover {
        top: -20px;
      }
    }
  }
`;
