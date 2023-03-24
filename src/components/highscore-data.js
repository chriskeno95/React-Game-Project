import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  game: string,
  score: number,
) {
  return { name, game, score};
}

const rows = [
  createData('NAME', "R.P.S", 4500),
  createData('NAME', "R.P.S", 4300),
  createData('NAME', "HANGMAN", 4100),
  createData('NAME', "R.P.S", 3900),
  createData('NAME', "R.P.S", 3900),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 520 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>PLAYER</TableCell>
            <TableCell>GAME</TableCell>
            <TableCell>POINTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.game}</TableCell>
              <TableCell>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}