import React from 'react';
import { connect } from 'react-redux'

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

let DataItem = ({ article }) => (
  classes = useStyles(),

 console.log('article  this: '+article),
article ?

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right"> Country </StyledTableCell>
            <StyledTableCell align="right"> Country Code </StyledTableCell>
            <StyledTableCell align="right"> Date Time </StyledTableCell>
            <StyledTableCell align="right"> New Confirmed </StyledTableCell>
            <StyledTableCell align="right"> New Deaths</StyledTableCell>
            <StyledTableCell align="right"> New Recovered</StyledTableCell>
            <StyledTableCell align="right"> Total Confirmed </StyledTableCell>
            <StyledTableCell align="right"> Total Deaths </StyledTableCell>
            <StyledTableCell align="right"> Total Recovered</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {
            article.map((data)=> (
            <StyledTableRow>
              <StyledTableCell align="right">{data.Country}</StyledTableCell>
              <StyledTableCell align="right">{data.CountryCode}</StyledTableCell>
              <StyledTableCell align="right">{data.Date}</StyledTableCell>
              <StyledTableCell align="right">{data.NewConfirmed}</StyledTableCell>
              <StyledTableCell align="right">{data.NewDeaths}</StyledTableCell>
              <StyledTableCell align="right">{data.NewRecovered}</StyledTableCell>
              <StyledTableCell align="right">{data.TotalConfirmed}</StyledTableCell>
              <StyledTableCell align="right">{data.TotalDeaths}</StyledTableCell>
              <StyledTableCell align="right">{data.TotalRecovered}</StyledTableCell>
            </StyledTableRow>))
          }
        </TableBody>
      </Table>
    </TableContainer>

: 
null
);
const mapStateToProps = (state) => ({
article: state.news,
})
//console.log('NewsItem'+NewsItem);
DataItem = connect(mapStateToProps,null)(DataItem)
export default DataItem;