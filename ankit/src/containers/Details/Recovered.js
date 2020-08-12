import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd';
import { Row, Col} from 'antd';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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


export default class Recovered extends React.Component {
    render() {
        return (
            <div>
              <Row>
                <Col span={12}>
                  <h4 align='center'>Date-Day Wise Status of Recovered Cases : </h4>
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
                    <Line type="monotone" dataKey="Cases" stroke="#008000" />
                  </LineChart>
                </Col>
              </Row>
            </div>
        );   
    }
}

const mapStateToProps = (state) => ({
  article: state.recovered_data,
})


Recovered= connect(mapStateToProps,null)(Recovered)