import React, { Component } from 'react'
import { Collapse, } from 'antd';
import {overview, prevantion, symptoms} from './Text'
const { Panel } = Collapse;


export default class About extends Component {
	
	render() {
		function callback(key) {
			console.log(key);
		  }
		return (
			<div>
				<img src="https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1024v.png?Culture=en&sfvrsn=6e0c1bc7_6%201024w" 
					alt="STAY HOME!!!!! STAY SAFE!!!!!" 
					style={{width:'100%',height:'400px'}}
				/>

				<h1>Coronavirus</h1>
				<Collapse defaultActiveKey={['1']} onChange={callback}>
					<Panel header="Overview" key="1">
						<p>
							{overview}
						</p>
					</Panel>
					<Panel header="Prevention" key="2">
						<p>
							{prevantion}
						</p>
					</Panel>
					<Panel header="Symptoms" key="3" >
					<p>
							{symptoms}
					</p>
					</Panel>
				</Collapse>
			</div>
		)
	}
}
