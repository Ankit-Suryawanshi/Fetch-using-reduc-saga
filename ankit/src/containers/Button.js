import React from 'react';
import { connect } from 'react-redux';
import  getData   from '../actions/index';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

let classes;

let Data_Button=({getData})=>(
   classes = useStyles(),
   <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={getData}>
        Click to see Data
      </Button>
   </div>
);

const mapDispatchToProps = {
   getData: getData,
};
Data_Button = connect(null,mapDispatchToProps)(Data_Button);
export default Data_Button;