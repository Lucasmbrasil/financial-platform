import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #234a78;

  a {
    text-decoration: none;
    color: #ffffff;
    margin: 0 40px;
    font-size: 1rem;
    transition: 0.05s;
    font-weight: 500;
  }
  a:hover {
    transform: scale(1.05);
  }
`;
