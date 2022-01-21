import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "../../components/Button/style";
import FormIndexer from "../../components/FormIndexer";
import { StyledCircularProgress } from "../../components/IndexersList/style";
import api from "../../services/api";
import {
  BottomContainer,
  CircularProgressContainer,
  MainIndexerContainer,
  NotFoundBox,
  QuestionsBox,
} from "./style";

const Indexer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [indexer, setIndexer] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const [modalDelete, setModalDelete] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const getIndexer = () => {
    api
      .get(`/${params.id}`)
      .then((res) => {
        setIndexer(res.data.data);
        setCreatedAt(
          new Date(res.data.data.dataCadastro).toLocaleDateString("pt-BR")
        );
        res.data.data.dataAlteracao !== null &&
          setUpdatedAt(
            new Date(res.data.data.dataAlteracao).toLocaleDateString("pt-BR")
          );
      })
      .catch((e) => {
        setNotFound(true);
      });
  };
  const deleteProduct = () => {
    api
      .delete(`/${params.id}`)
      .then((res) => {
        setMessage(res.data.message);
      })
      .then(() => setOpen(true));
  };

  useEffect(() => {
    getIndexer();
  }, []);
  // indexer &&
  //   setCreatedAt(new Date(indexer.dataCadastro).toLocaleDateString("pt-BR"));
  return (
    <>
      {notFound ? (
        <NotFoundBox>
          <h1>404</h1>
          <h2>Page not found</h2>
        </NotFoundBox>
      ) : indexer ? (
        <>
          <MainIndexerContainer>
            <h1>Indexador {indexer.nome}:</h1>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#12263E" }}>
                  <TableCell sx={{ color: "#ffffff", fontSize: "1rem" }}>
                    <b>Nome</b>
                  </TableCell>
                  <TableCell sx={{ color: "#ffffff", fontSize: "1rem" }}>
                    <b>Símbolo</b>
                  </TableCell>
                  <TableCell sx={{ color: "#ffffff", fontSize: "1rem" }}>
                    <b>Data de criação:</b>
                  </TableCell>
                  <TableCell sx={{ color: "#ffffff", fontSize: "1rem" }}>
                    <b>Data da última alteração:</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {indexer.nome}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {indexer.simbolo}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>{createdAt}</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {updatedAt ? updatedAt : "Sem atualização"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </MainIndexerContainer>

          <QuestionsBox>
            <FormIndexer
              edit={true}
              indexer={indexer}
              getIndexer={getIndexer}
            />
            <div className="delete">
              <h3>Gostaria de deletar esse indexador?</h3>
              <StyledButton
                sx={{ margin: "15px" }}
                variant="contained"
                onClick={() => setModalDelete(true)}
              >
                Deletar
              </StyledButton>
            </div>
          </QuestionsBox>

          <Dialog onClose={() => setModalDelete(false)} open={modalDelete}>
            <DialogTitle>Cuidado!</DialogTitle>
            <DialogContent dividers>
              Você tem certeza que deseja excluir esse indexador?
            </DialogContent>
            <DialogActions>
              <StyledButton
                variant="contained"
                disabled={disabled}
                onClick={() => {
                  setModalDelete(false);
                }}
              >
                Cancelar
              </StyledButton>
              <StyledButton
                disabled={disabled}
                variant="contained"
                onClick={() => {
                  deleteProduct();
                  setDisabled(true);
                }}
              >
                Confirmar
              </StyledButton>
            </DialogActions>
          </Dialog>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => {
              navigate("/indexers");
            }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert variant="filled">{message}</Alert>
          </Snackbar>
          <BottomContainer>
            <StyledButton
              variant="contained"
              onClick={() => navigate("/indexers")}
            >
              Voltar para lista
            </StyledButton>
            <StyledButton
              variant="contained"
              onClick={() => navigate("/register")}
            >
              Registrar novo indexador
            </StyledButton>
          </BottomContainer>
        </>
      ) : (
        <CircularProgressContainer>
          <StyledCircularProgress />
        </CircularProgressContainer>
      )}
    </>
  );
};
export default Indexer;
