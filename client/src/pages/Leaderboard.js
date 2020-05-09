import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../pages/Leaderboard.css";
import Avatar from "../components/Avatar.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, highscore, lastweek, last30days, today) {
  return { name, highscore, lastweek, last30days, today };
}

const rows = [
  // createData("Chelsea", 150, 6.0, 24, 4.0),
  // createData("Jeff", 237, 9.0, 37, 4.3),
  // createData("Destiny", 262, 16.0, 24, 6.0),
  // createData("Samantha", 305, 3.7, 67, 4.3),
  // createData("Justin", 356, 16.0, 49, 3.9),
];

export default function Leaderboard (props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className="" aria-label="simple table">
        <TableHead className="leadheader ">
          <TableRow className="">
            <TableCell>User Name</TableCell>
            <TableCell align="right">Percent Completed</TableCell>
            <TableCell align="right">Total Points</TableCell>
            <TableCell align="right">Updated At?</TableCell>
            <TableCell align="right">Trophies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name} className="">
              <TableCell className="users img" component="th" scope="row">
                <Avatar doppel_me={row.doppel_me}/>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.SubscribedTo.percent_completed}</TableCell>
              <TableCell align="right">{row.SubscribedTo.point}</TableCell>
              <TableCell align="right">{row.SubscribedTo.updatedAt}</TableCell>
              <TableCell align="right">{row.SubscribedTo.trophy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
