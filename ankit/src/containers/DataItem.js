import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd';
import './index.css'
import {  Breadcrumb, Input, Typography, Space,AutoComplete} from 'antd';
import { getData , getFilteredData } from '../actions/index'
import {Redirect} from 'react-router-dom'

const renderItem = (title, count) => ({
  value: title,
});
let options = [];

const { Text, } = Typography;
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

//var options = [];
export default class DataItem extends Component {
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
    localStorage.setItem('data',JSON.stringify(record))
    this.setState({ redirect : record });

  }

  render() {
    if(this.props.article) {
    this.props.article.map((value)=>{
        let data=value.Country
        options.push({'options':[renderItem(data,10)]})
    })
    }
    if (this.state.redirect) {
      return <Redirect push to="/details" />;
    }
    if(this.props.filter_data) {
      return (
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                options={options}
                onChange={value => this.onSearchChange(value)}
                filterOption={true}
                dropdownMatchSelectWidth={500}
                style={{
                  width: '50%',
                }}
              
              >
                <Input.Search size="large" placeholder="input here" />
              </AutoComplete>
              <br></br>
              <Space direction="vertical">
                <Text type="danger" >{ this.state.msg}</Text>
              </Space>
          </Breadcrumb>
          <br></br>
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
              <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                options={options}
                onSearch={value => this.onSearchChange(value)}
                style={{
                  width: '50%',
                }}
                
              >
                <Input.Search size="large" placeholder="input here" />
              </AutoComplete>
              <br></br>
              <Space direction="vertical">
                <Text type="danger" >{ this.state.msg}</Text>
              </Space>
          </Breadcrumb>
          <br></br>
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