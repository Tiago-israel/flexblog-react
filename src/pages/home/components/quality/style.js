import styled from "styled-components";

export const Container = styled.section`
  max-width: 960px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;

  .quality-item {
    flex: 1 1 300px;
    margin: 20px 10px;

    h2 {
      font-size: 2.25em;
      color: #a4a4a4;
      margin-bottom: 20px;

      &::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 30px;
        margin-right: 10px;
      }
    }

    &:nth-of-type(3n + 1) h2::before {
      background: #ae81ff;
    }

    &:nth-of-type(3n + 2) h2::before {
      background: #f9265e;
    }

    &:nth-of-type(3n + 3) h2::before {
      background: #66d9eb;
    }

    p {
      font-size: 1.25em;
      line-height: 1.4;
      color: #7c7c7c;
    }
  }
`;
