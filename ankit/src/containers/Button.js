import React from 'react';
import { connect } from 'react-redux';
import  getData   from '../actions/index';

class Data_Button extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = {
   getData: getData,
};
Data_Button = connect(null,mapDispatchToProps)(Data_Button);
export default Data_Button;