import { CircularProgress } from "@mui/material";
import styled from "styled-components";

export const TopListContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 10px 0;
  span {
    font-size: 1.2rem;
  }
`;

export const BottomListContainer = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 0;
  span {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 5px;
  }
  span:hover {
    cursor: pointer;
  }
  svg:hover {
    cursor: pointer;
  }
`;

export const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  b {
    font-size: 1rem;
  }
`;
export const ListContainer = styled.section`
  width: 80%;
  margin: 50px auto;
  h1 {
    text-align: center;
  }
`;
export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #12263e;
  }
`;
