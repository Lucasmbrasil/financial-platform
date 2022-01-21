import { TextField } from "@mui/material";
import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
`;
export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #12263e;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #12263e;
    }
  }
`;
