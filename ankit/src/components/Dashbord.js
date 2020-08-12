import React from 'react';
import DataItem from '../containers/DataItem'
import GlobalItem from '../containers/GlobalItem'
import  { getData }   from '../actions/index';
import { connect } from 'react-redux';

import { Layout, Breadcrumb, Row, Col} from 'antd';
import './index.css'
import 'antd/dist/antd.css';

const {  Content, Footer } = Layout;

class Dashbord extends React.Component {
  	componentDidMount() {
    	this.props.getData();
	}
	render() {
		return <div>
			<Row>
				<Col span={12}>
					<img src="https://images.financialexpress.com/2020/06/660_4-2.jpg" 
						alt="STAY HOME!!!!! STAY SAFE!!!!!" 
						style={{width:'100%',height:'400px'}}
					/>
				</Col>
				<Col span={12}>
				</Col>
			</Row>
			
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

