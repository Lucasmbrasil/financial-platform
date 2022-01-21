import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  color: #12263e;
  h2 {
    width: 50vw;
    text-align: center;
    margin: 50px auto;
  }
  h3 {
    transition: 0.05s;
    text-align: center;
    cursor: pointer;
    font-size: 2rem;
  }
  h3:hover {
    transform: scale(1.05);
  }
  .options {
    display: flex;
    justify-content: space-evenly;
  }
`;
