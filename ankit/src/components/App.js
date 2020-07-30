import React from 'react';
import Dashbord from './Dashbord'
import About from './About'
import Blog from './Blog'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 


import { Layout, Menu, } from 'antd';
import './index.css'
import 'antd/dist/antd.css';

const { Header,  } = Layout;


const App = ()=> (
  <Router> 
    <Layout className="layout">
      <Header>
				<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Link to="/">Dashbord</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to="/blog">Blog</Link>
						</Menu.Item>
						<Menu.Item key="3">
							<Link to="/about">About</Link>
						</Menu.Item>
					</Menu>
			</Header>
		</Layout>
		<Switch> 
			<Route exact path='/' component={Dashbord}></Route> 
			<Route exact path='/Blog' component={Blog}></Route> 
			<Route exact path='/About' component={About}></Route> 
		</Switch>  
	</Router> 
)
export default App;