import { StyledButton } from "../../components/Button/style";
import IndexersList from "../../components/IndexersList";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "./style";
const List = () => {
  const navigate = useNavigate();
  return (
    <>
      <IndexersList />{" "}
      <ButtonContainer>
        <StyledButton variant="contained" onClick={() => navigate("/register")}>
          Registrar novo indexador
        </StyledButton>
      </ButtonContainer>
    </>
  );
};
export default List;
