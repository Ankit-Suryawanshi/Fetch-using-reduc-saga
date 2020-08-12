import React from 'react';
import { connect } from 'react-redux'
import './index.css'
import {Row, Col, Card} from 'antd'


let GlobalItem = ({ article,global }) => (
  
	article ?
  <div className="site-card-wrapper">
    <div align='center'>
				<div className='fif'>Last Updated at : </div>
				<div className='fif'>{ article[0].Date }</div>
        <br></br><br></br>
		</div>
    <Row gutter={16}>
      <Col span={4}>
        <Card title="New Confirmed" bordered={false}>
          {global.NewConfirmed}
        </Card>
      </Col>
      <Col span={4}>
        <Card title="New Deaths" bordered={false}>
          {global.NewConfirmed}
        </Card>
      </Col>
      <Col span={4}>
        <Card title="New Recovered" bordered={false}>
        {global.NewConfirmed}
        </Card>
      </Col>
      <Col span={4}>
        <Card title="Total Confirmed" bordered={false}>
          {global.NewConfirmed}
        </Card>
      </Col>
      <Col span={4}>
        <Card title="Total Deaths" bordered={false}>
          {global.NewConfirmed}
        </Card>
      </Col>
      <Col span={4}>
        <Card title="Total Recovered" bordered={false}>
          {global.NewConfirmed}
        </Card>
      </Col>
    </Row>
  </div>
	:
	null

);
const mapStateToProps = (state) => ({
	article: state.country_data,
	global: state.global_data,
})

GlobalItem = connect(mapStateToProps,null)(GlobalItem)
export default GlobalItem;


