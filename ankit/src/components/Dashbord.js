import React from 'react';
import DataItem from '../containers/DataItem'
import GlobalItem from '../containers/GlobalItem'
import  getData   from '../actions/index';
import { connect } from 'react-redux';


import { Layout, Breadcrumb, Input} from 'antd';
import './index.css'
import 'antd/dist/antd.css';

const { Search } = Input;
const {  Content, Footer } = Layout;

class Dashbord extends React.Component {
  	componentDidMount() {
    	this.props.getData();
	}
	render() {
		return <Layout className="layout">
			<Content style={{ padding: '0 50px' }}>
				<div className="site-layout-content">World Status :<GlobalItem /></div>
				<Footer style={{ textAlign: 'center' }}>COVID19 Data of the world.</Footer>
				<br></br>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Search
						placeholder="Enter Your country name here :"
						onSearch={value => console.log(value)}
						style={{ width: 500 }}
					/>
				</Breadcrumb>
				<br></br>
				<div className="site-layout-content"><DataItem /></div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>COVID19 Data country Wise.</Footer>
		</Layout>;
	}
}

const mapStateToProps = (state)=> ({
	article : state.coutry_data
})

const mapDispatchToProps = {
	getData: getData,
};

Dashbord = connect(mapStateToProps,mapDispatchToProps)(Dashbord);
export default Dashbord;