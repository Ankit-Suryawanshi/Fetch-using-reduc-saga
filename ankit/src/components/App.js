import React from 'react';
import Button from '../containers/Button';
import DataItem from '../containers/DataItem'
import GlobalItem from '../containers/GlobalItem'


import { Layout, Menu, Breadcrumb, Input} from 'antd';
import './index.css'
import 'antd/dist/antd.css';

const { Search } = Input;
const { Header, Content, Footer } = Layout;


const App = ()=> (
      <Layout className="layout">
            <Header>
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">Dashbord</Menu.Item>
                  <Menu.Item key="2">Blog</Menu.Item>
                  <Menu.Item key="3">About</Menu.Item>
                  </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                  {/*<Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                  <Search
                        placeholder="Enter Your country name here :"
                        onSearch={value => console.log(value)}
                        style={{ width: 500 }}
                  />
                  </Breadcrumb>
                  <div className="site-layout-content">World Data :<Button /><GlobalItem /></div>
                  <br></br><br></br>
                  <div className="site-layout-content">Country Wise Data :<Button /><DataItem /></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

)
export default App;