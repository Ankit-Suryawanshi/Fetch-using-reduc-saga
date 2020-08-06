import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd';
import './index.css'
import {  Breadcrumb, Input, Typography, Space} from 'antd';
import { getData , getFilteredData } from '../actions/index'
import {Redirect} from 'react-router-dom'

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
    title: 'New Confirmed',
    dataIndex: 'NewConfirmed',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.NewDeaths - b.NewDeaths,
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.NewRecovered - b.NewRecovered,
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
  },
];


export default class DataItem extends React.Component {
  state = {
    msg : '',
    redirect : '',
  }
  onSearchChange = (event)=> {
    if(!event)
      this.setState({msg : 'Please enter the correct country name',})
    else
      this.setState({msg : '',})
    this.props.getFilteredData(event)
  }

  onRowClick = (record)=> {
    //console.log('I am in the on row click function:');
    localStorage.setItem('data',JSON.stringify(record))
    this.setState({ redirect : record });

  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/details" />;
    }
    if(this.props.filter_data) {
      return (
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Search
                placeholder="Enter Your country name here :"
                onSearch={value => this.onSearchChange(value)}
                style={{ width: 500 }}
              />
              <br></br>
              <Space direction="vertical">
                <Text type="danger" >{ this.state.msg}</Text>
              </Space>
          </Breadcrumb>
          <br></br>
          <h4>Country Wise Status : </h4>
            <Table 
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {this.onRowClick(record)
                  }, // click row
                  onDoubleClick: event => {}, // double click row
                  onContextMenu: event => {}, // right button click row
                  onMouseEnter: event => {}, // mouse enter row
                  onMouseLeave: event => {}, // mouse leave row
                };
              }}
              columns={columns} 
              dataSource={this.props.filter_data}   
              size="middle"
            />
        </div>
      );
    }
    else {
      return (
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Search
                placeholder="Enter Your country name here :"
                onSearch={value => this.onSearchChange(value)}
                style={{ width: 500 }}
              />
              <br></br>
              <Space direction="vertical">
                <Text type="danger" >{ this.state.msg}</Text>
              </Space>
          </Breadcrumb>
          <br></br>
          <h4>Country Wise Status : </h4>
            <Table 
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {this.onRowClick(record)}, // click row
                  onDoubleClick: event => {}, // double click row
                  onContextMenu: event => {}, // right button click row
                  onMouseEnter: event => {}, // mouse enter row
                  onMouseLeave: event => {}, // mouse leave row
                };
              }}
              columns={columns} 
              dataSource={this.props.article}  
              size="middle"
            />
        </div>
      );
    }

    
  }
}

const mapStateToProps = (state) => ({
  article: state.country_data,
  filter_data: state.filter_data,
})

const mapDispatchToProps = {
  getFilteredData: getFilteredData,
  getData: getData,
};

DataItem = connect(mapStateToProps,mapDispatchToProps)(DataItem)