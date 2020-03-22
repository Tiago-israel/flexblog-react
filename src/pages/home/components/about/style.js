import styled from "styled-components";

export const Container = styled.section`
  border-top: 2px solid #2c70ff;
  border-bottom: 2px solid #2c70ff;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;

  .about-info {
    flex: 2 1 300px;
    margin: 0 10px;

    h1 {
      font-size: 3em;
      margin-bottom: 0.5em;
    }

    p {
      font-size: 1.25em;
      line-height: 1.4;
      margin-bottom: 1em;
      color: #7c7c7c;
    }
  }
  .about-img {
    flex: 1 1 160px;
    margin: 0 10px;
  }
`;