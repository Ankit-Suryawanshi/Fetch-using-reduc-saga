import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { LineChart, XAxis, Tooltip, CartesianGrid, Line, } from 'rechart';
import { Card } from 'antd'
import {  getDaysData,  } from '../actions/index'
import Confirmed from './Details/Confirmed'
import Recovered from './Details/Recovered'
import Deaths from './Details/Deaths'
  
const tabList = [
	{
	  key: 'tab1',
	  tab: 'CONFIRMED',
	},
	{
	  key: 'tab2',
	  tab: 'RECOVERED',
	},
	{
		key: 'tab3',
		tab: 'DETHS',
	  },
  ];
  
  const contentList = {
	tab1: <Confirmed />,
	tab2: <Recovered />,
	tab3: <Deaths />
  };



export default class Details extends Component {
	state = {
		key: 'tab1',
	  };

	componentDidMount() {
		this.props.getDaysData((JSON.parse(localStorage.getItem('data'))).Country)
	
}

	onTabChange = (key, type) => {
    	console.log(key, type);
    	this.setState({ [type]: key });
 	};

  render() {
	  const country =JSON.parse(localStorage.getItem('data')).Country
    return (
		<>
			<Card
				style={{ width: '100%'}}
				title={<h3>{country}</h3>}
				extra={<a href="#">More</a>}
				tabList={tabList}
				activeTabKey={this.state.key}
				onTabChange={key => {
					this.onTabChange(key, 'key');
				}}
				>
				{contentList[this.state.key]}
			</Card>
      </>
    );
  }
  
}

const mapDispatchToProps = {
	getDaysData: getDaysData,
  };
  
const mapStateToProps= (state) => ({
	confirmed_data : state.confirmed_data,
	recovered_data : state.recovered_data,
	deaths_data : state.deaths_data
})

Details = connect(mapStateToProps,mapDispatchToProps)(Details)
