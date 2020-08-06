import React, {Component} from 'react'
//import { LineChart, XAxis, Tooltip, CartesianGrid, Line, BarChart, YAxis, Legend, Bar } from 'rechart';
const TABLE_LIST = [
	{ name: "Page A", pv: 2400, amt: 2400 },
	{ name: "Page B", pv: 1398, amt: 2210 },
	{ name: "Page C", pv: 9800, amt: 2290 },
	{ name: "Page D", pv: 3908, amt: 2000 },
	{ name: "Page E", pv: 4800, amt: 2181 },
	{ name: "Page F", pv: 3800, amt: 2500 },
	{ name: "Page G", pv: 4300, amt: 2100 }
  ];

export default class Details extends Component {
    state = {
        list: [...TABLE_LIST]
      };
    render() {
	    //const { list } = this.state;
			return (
				<h1>IN ABOUT COMPONENT</h1>
			);
	}
}
