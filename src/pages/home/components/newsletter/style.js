import styled from "styled-components";

export const Container = styled.section`
  background: #f7f7f7;
  padding: 60px calc((100% - 960px) / 2);
  display: flex;
  flex-wrap: wrap;

  .newsletter-info {
    flex: 1 1 240px;
    margin: 0 10px;

    h1 {
      font-size: 3em;
      color: #a4a4a4;
    }

    p {
      color: #7c7c7c;
      font-size: 1.25em;
      font-style: italic;
      max-width: 230px;
      margin-bottom: 10px;
    }
  }

  form {
    flex: 2 1 260px;
    margin: 0 10px;
    align-self: center;
    display: flex;
    flex-wrap: wrap;

    input {
      flex: 3 1 200px;
      font-size: 1.25em;
      color: #7c7c7c;
      font-style: italic;
      font-family: "Nunito", Arial, Helvetica, sans-serif;
      border: 4px solid #2c70ff;
      background: transparent;
      padding: 15px 10px;
      margin: 0px;
      border-radius: 0px;
    }

    button {
      flex: 1 1 200px;
      font-family: "Nunito", Arial, Helvetica, sans-serif;
      font-size: 2.25em;
      font-weight: bold;
      text-transform: uppercase;
      background: #2c70ff;
      color: #fff;
      margin: 0px;
      cursor: pointer;
      border: none;
      padding: 15px 10px;

      @media (max-width: 600px) {
        font-size: 1.5em;
      }
    }
  }
`;