import React from 'react';
import Data_Button from '../containers/Button';
import DataItem from '../containers/DataItem'
import GlobalItem from '../containers/GlobalItem'


import { Layout, Breadcrumb, Input} from 'antd';
import './index.css'
import 'antd/dist/antd.css';

const { Search } = Input;
const {  Content, Footer } = Layout;


const Dashbord = ()=> (
      <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                  <div className="site-layout-content">World Status :<Data_Button /><GlobalItem /></div>
                  <br></br>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                        <Search
                              placeholder="Enter Your country name here :"
                              onSearch={value => console.log(value)}
                              style={{ width: 500 }}
                        />
                  </Breadcrumb>
                  <br></br>
                  <div className="site-layout-content"><Data_Button /><DataItem /></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

)
export default Dashbord;