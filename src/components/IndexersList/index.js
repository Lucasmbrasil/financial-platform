import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import TableIndexers from "../TableIndexers";
import {
  BottomListContainer,
  ListContainer,
  MainListContainer,
  StyledCircularProgress,
  TopListContainer,
} from "./style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { StyledButton } from "../Button/style";

const IndexersList = () => {
  const [indexers, setIndexers] = useState();
  const [perPage, setPerPage] = useState(10);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [headers, setHeaders] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(
    Math.ceil(Number(headers) / 10)
  );
  const [order, setOrder] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getIndexers = () => {
    api
      .get(`?orderByDescending=${order}&size=${perPage}&page=${currentPage}`)
      .then((res) => {
        setIndexers(res.data.data);
        setHeaders(res.headers["x-total-count"]);
        setLoading(false);
      });
  };
  const indexersPerPage = () => {
    api.get(`?orderByDescending=${order}&size=${perPage}`).then((res) => {
      setIndexers(res.data.data);
      setCurrentPage(1);
      setLoading(false);
    });
  };
  const goToPage = (page, perPage) => {
    api
      .get(`?orderByDescending=${order}&page=${page}&size=${perPage}`)
      .then((res) => {
        setIndexers(res.data.data);
        setLoading(false);
      });
  };
  const howMuchPages = () => {
    return setNumberOfPages(Math.ceil(Number(headers) / Number(perPage)));
  };
  useEffect(() => {
    getIndexers();
  }, [order]);
  useEffect(() => {
    setPages([...Array(numberOfPages).keys()]);
  }, [perPage, numberOfPages]);
  useEffect(() => {
    if (perPage) {
      indexersPerPage();
      howMuchPages();
    }
  }, [perPage]);

  return (
    <ListContainer>
      <h1>Lista de indexadores</h1>
      <TopListContainer>
        <div>
          {!loading ? (
            <span>
              Total de <b>{headers}</b> indexadores
            </span>
          ) : (
            ""
          )}
        </div>

        <div>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel
              sx={{
                "&.Mui-focused": {
                  color: "#12263E",
                },
              }}
            >
              Itens por página:
            </InputLabel>
            <Select
              sx={{ ":after": { borderColor: "#12263E" } }}
              variant="standard"
              value={perPage}
              onChange={(e) => {
                setPerPage(e.target.value);
                setLoading(true);
              }}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120, marginLeft: "20px" }}>
            <InputLabel
              sx={{
                "&.Mui-focused": {
                  color: "#12263E",
                },
              }}
            >
              Ordenar:
            </InputLabel>

            <Select
              variant="standard"
              sx={{ ":after": { borderColor: "#12263E" } }}
              value={order}
              onChange={(e) => {
                setLoading(true);
                setOrder(e.target.value);
              }}
            >
              <MenuItem value={false}>Nome (a-z)</MenuItem>
              <MenuItem value={true}>Nome (z-a)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </TopListContainer>
      <MainListContainer>
        {!loading ? (
          <TableIndexers
            indexers={indexers}
            numberOfPages={numberOfPages}
            currentPage={currentPage}
          />
        ) : (
          <StyledCircularProgress />
        )}
      </MainListContainer>
      <BottomListContainer>
        {!loading && pages && pages.length > 1 && currentPage > 1 && (
          <KeyboardArrowLeftIcon
            onClick={() => {
              setLoading(true);
              setCurrentPage(currentPage - 1);
              goToPage(currentPage - 1, perPage);
            }}
          />
        )}
        {!loading &&
          pages &&
          pages.map((item) => (
            <span
              key={item}
              onClick={() => {
                setLoading(true);
                setCurrentPage(item + 1);
                goToPage(item + 1, perPage);
              }}
            >
              {item + 1 === currentPage ? <b>{item + 1}</b> : item + 1}
            </span>
          ))}
        {!loading && pages && pages.length > 1 && currentPage !== pages.length && (
          <KeyboardArrowRightIcon
            onClick={() => {
              setLoading(true);
              setCurrentPage(currentPage + 1);
              goToPage(currentPage + 1, perPage);
            }}
          />
        )}
      </BottomListContainer>
    </ListContainer>
  );
};
export default IndexersList;
