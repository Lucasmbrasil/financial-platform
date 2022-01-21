import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";

const TableData = ({ indexer, index }) => {
  const navigate = useNavigate();
  return (
    <>
      {index % 2 === 0 ? (
        <TableRow
          sx={{
            cursor: "pointer",
            ":hover": { backgroundColor: "#b3b2b2" },
          }}
          onClick={() => {
            navigate(`/indexers/${indexer.id}`);
          }}
        >
          <TableCell sx={{ width: "50%", fontSize: "1.1rem" }}>
            {indexer.nome}
          </TableCell>
          <TableCell sx={{ width: "50%", fontSize: "1.1rem" }}>
            {indexer.simbolo}
          </TableCell>
        </TableRow>
      ) : (
        <TableRow
          sx={{
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            ":hover": { backgroundColor: "#b3b2b2" },
          }}
          onClick={() => {
            navigate(`/indexers/${indexer.id}`);
          }}
        >
          <TableCell sx={{ width: "50%", fontSize: "1.1rem" }}>
            {indexer.nome}
          </TableCell>
          <TableCell sx={{ width: "50%", fontSize: "1.1rem" }}>
            {indexer.simbolo}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
export default TableData;
