import React from 'react';
import DataItem from '../containers/DataItem'
import GlobalItem from '../containers/GlobalItem'
import  { getData }   from '../actions/index';
import { connect } from 'react-redux';

import { Layout, Breadcrumb} from 'antd';
import './index.css'
import 'antd/dist/antd.css';

const {  Content, Footer } = Layout;

class Dashbord extends React.Component {
  	componentDidMount() {
    	this.props.getData();
	}
	render() {
		return <div>
			<img src="https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1024v.png?Culture=en&sfvrsn=6e0c1bc7_6%201024w" 
					alt="STAY HOME!!!!! STAY SAFE!!!!!" 
					style={{width:'100%',height:'400px'}}
			/>
			<Layout className="layout">
				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<div textAlign='center'><h4>World Status : </h4><GlobalItem /></div>
					</Breadcrumb>
					<Footer style={{ textAlign: 'center' }}>COVID19 Data of the world.</Footer>
					<br></br>
					<br></br>
					<div className="site-layout-content"><h4>Country Wise Status : </h4><DataItem /></div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>COVID19 Data country Wise.</Footer>
			</Layout>
		</div>;
	}
}

const mapDispatchToProps = {
	getData: getData,
};

Dashbord = connect(null,mapDispatchToProps)(Dashbord);
export default Dashbord;