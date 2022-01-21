import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert, Snackbar } from "@mui/material";
import api from "../../services/api";
import { useState } from "react";
import { FormStyled, StyledTextField } from "./style";
import { StyledButton } from "../Button/style";
import { useNavigate } from "react-router-dom";
const FormIndexer = ({ indexer, edit, getIndexer }) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    simbolo: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleEdit = (data) => {
    api
      .patch(`/${indexer.id}`, data)
      .then((res) => setMessage(res.data.message))
      .then(() => {
        setOpen(true);
        getIndexer();
      });
  };
  const handleCreate = (data) => {
    setDisabled(true);
    api
      .post(`/`, data)
      .then((res) => setMessage(res.data.message))
      .then(() => {
        setOpen(true);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <FormStyled
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
      >
        {edit ? (
          <h3>Gostaria de editar esse indexador?</h3>
        ) : (
          <h2>Registrar novo indexador:</h2>
        )}
        <StyledTextField
          sx={{ margin: "15px" }}
          variant="outlined"
          defaultValue={edit ? indexer.nome : ""}
          label="Nome"
          {...register("nome")}
          error={!!errors.nome}
          helperText={errors.nome?.message}
        />
        <StyledTextField
          variant="outlined"
          defaultValue={edit ? indexer.simbolo : ""}
          label="Simbolo"
          {...register("simbolo")}
          error={!!errors.simbolo}
          helperText={errors.simbolo?.message}
        />
        <StyledButton
          disabled={disabled}
          sx={{ margin: "15px" }}
          variant="contained"
          type="submit"
        >
          Enviar
        </StyledButton>
      </FormStyled>
      {edit ? (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            handleClose();
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert variant="filled">{message}</Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            handleClose();
            navigate("/indexers");
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert variant="filled">{message}</Alert>
        </Snackbar>
      )}
    </>
  );
};
export default FormIndexer;
