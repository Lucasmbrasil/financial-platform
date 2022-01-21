import styled from "styled-components";
import { MainListContainer } from "../../components/IndexersList/style";

export const QuestionsBox = styled.section`
  display: flex;
  width: 80vw;
  margin: 50px auto;

  .delete {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
  }
`;
export const NotFoundBox = styled.section`
  text-align: center;
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 2rem;
  }
`;
export const MainIndexerContainer = styled(MainListContainer)`
  width: 80vw;
  margin: 0 auto;
  min-height: fit-content;
  flex-direction: column;
`;
export const BottomContainer = styled.div`
  display: flex;
  width: 80vw;
  margin: 50px auto 0;
  justify-content: space-between;
  align-items: center;
`;
export const CircularProgressContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
