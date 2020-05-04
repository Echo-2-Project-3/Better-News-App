import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, highscore, lastweek, last30days, today) {
  return { name, highscore, lastweek, last30days, today };
}

const rows = [
  createData('Chelsea', 150, 6.0, 24, 4.0),
  createData('Jeff', 237, 9.0, 37, 4.3),
  createData('Destiny', 262, 16.0, 24, 6.0),
  createData('Samantha', 305, 3.7, 67, 4.3),
  createData('Justin', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">High Score</TableCell>
            <TableCell align="right">Last Week</TableCell>
            <TableCell align="right">Last 30 Days</TableCell>
            <TableCell align="right">Today</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.highscore}</TableCell>
              <TableCell align="right">{row.lastweek}</TableCell>
              <TableCell align="right">{row.last30days}</TableCell>
              <TableCell align="right">{row.today}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
