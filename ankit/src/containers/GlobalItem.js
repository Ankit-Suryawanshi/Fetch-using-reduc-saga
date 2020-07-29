import React from 'react';
import { connect } from 'react-redux'
import './index.css'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

let classes=null;

let GlobalItem = ({ article,global }) => (
  classes = useStyles(),
article ?
  <TableContainer component={Paper}>
			<div align='center'>
				<div class='fif'>Last Updated at : </div>
				<div class='fif'>{ article[0].Date }</div><br></br>
			</div>
			<br></br><br></br>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right"> New Confirmed </StyledTableCell>
            <StyledTableCell align="right"> New Deaths</StyledTableCell>
            <StyledTableCell align="right"> New Recovered</StyledTableCell>
            <StyledTableCell align="right"> Total Confirmed </StyledTableCell>
            <StyledTableCell align="right"> Total Deaths </StyledTableCell>
            <StyledTableCell align="right"> Total Recovered</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
            <StyledTableRow>
              <StyledTableCell align="right">{global.NewConfirmed}</StyledTableCell>
              <StyledTableCell align="right">{global.NewDeaths}</StyledTableCell>
              <StyledTableCell align="right">{global.NewRecovered}</StyledTableCell>
              <StyledTableCell align="right">{global.TotalConfirmed}</StyledTableCell>
              <StyledTableCell align="right">{global.TotalDeaths}</StyledTableCell>
              <StyledTableCell align="right">{global.TotalRecovered}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
  </TableContainer>
:
null

);
const mapStateToProps = (state) => ({
article: state.country_data,
global: state.global_data,
})

GlobalItem = connect(mapStateToProps,null)(GlobalItem)
export default GlobalItem;