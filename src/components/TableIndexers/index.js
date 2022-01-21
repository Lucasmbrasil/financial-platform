import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import TableData from "../TableData";

// import { TableHead } from "@mui/material";
// import { TableRow } from "@mui/material";
// import { TableCell } from "@mui/material";
// import { TableBody } from "@mui/material";

const TableIndexers = ({ indexers }) => {
  return (
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#12263E" }}>
          <TableCell sx={{ color: "#ffffff" }}>
            <b>Nome</b>
          </TableCell>
          <TableCell sx={{ color: "#ffffff" }}>
            <b>Símbolo</b>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {indexers.map((indexer, index) => (
          <TableData indexer={indexer} index={index} key={indexer.id} />
        ))}
      </TableBody>
    </Table>
  );
};
export default TableIndexers;
