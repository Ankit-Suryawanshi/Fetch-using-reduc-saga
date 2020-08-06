import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd';
import {  Breadcrumb, Input, Typography, Space, Row, Col} from 'antd';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const { Text, } = Typography;
const { Search } = Input;


const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
  },
  {
    title: 'Country Code',
    dataIndex: 'CountryCode',
  },
  {
    title: 'Cases',
    dataIndex: 'Cases',
    defaultSortOrder: '',
    sorter: (a, b) => a.Cases - b.Cases,
  },
  {
    title: 'Dates',
    dataIndex: 'Date',
  },
    
];


export default class Confirmed extends React.Component {
    render() {
        return (
            <div>
              <Row>
                <Col span={12}>
                  <h4 align='center'>Date-Day Wise Status of Confirmed cases: </h4>
                  <Table 
                  columns={columns} 
                  dataSource={this.props.article}   
                  size="small"
                  />
                </Col>
                <Col span={12} align='center'> 
                  <h4>Chart Shows the growth of COVID19 Cases</h4><br></br>
                  <LineChart width={630} height={350} data={this.props.article}
                    margin={{ top: 55, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Cases" stroke="#FFFF00" />
                  </LineChart>
                </Col>
              </Row>
            </div>
        );    
    }
}

const mapStateToProps = (state) => ({
  article: state.confirmed_data,
})


Confirmed= connect(mapStateToProps,null)(Confirmed)